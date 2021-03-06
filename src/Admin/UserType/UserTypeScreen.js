import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class UserTypeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      loading: false
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var items = [], users, items
    users = firebase.database().ref('users')
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        type = child.val().type
        // console.log(child.val().type)
        if (type == 'none' || type == '') {
          items.push({
            fname: val.fname,
            lname: val.lname,
            uid: val.uid,
            type: val.type,
            email: val.email,
          })
        }
        this.setState({ list: items })
      })
      // console.log(this.state.list)
    })
  }

  saveDetail(uid, type) {
    var firebaseDB, newType
    firebaseDB = firebase.database()
    newType = firebaseDB.ref('users/' + uid)
    newType.update({
      type: type,
    }).then(() => {
      var student
      if (type == 'Student') {
        student = firebase.database().ref('users/' + uid)
        student.update({
          sid: 'รหัสนักศึกษา',
          group: 'กลุ่ม',
          subject: 'เทคโนโลยีสารสนเทศ',
          date: 'ระยะเวลาฝึกงาน',
          sidStat: true,
          vStat: true
        })
      }
      this.componentDidMount()
    })
  }

  buttonLoader(user, type, label) {
    if (this.state.loading) {
      return (
        <TouchableOpacity
          disabled={true}
          style={styles.button.main}>
          <ActivityIndicator size='large' color='white' />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(
          'แจ้งเตือน',
          'แน่ใจที่จะเปลี่ยนแปลงข้อมูล ?',
          [
            {
              text: 'ยกเลิก',
              style: 'cancel',
            },
            { text: 'ตกลง', onPress: () => this.saveDetail(user, type) },
          ],
          { cancelable: false },
        )}
        style={styles.button.main}>
        <Text style={styles.button.mainLabel}>{label}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        <View style={styles.view.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards}>
                  <Text style={styles.view.labelHeader}>ประเภท : {user.type}</Text>
                  <Text style={styles.view.labelSub}>{user.fname}  {user.lname}</Text>
                  <Text style={styles.view.labelSub}>{user.email}</Text>
                  {/* <Text style={{ color: 'gray', marginBottom: 20 }}>{user.uid}</Text> */}
                  {this.buttonLoader(user.uid, 'Student', 'นักศึกษา')}
                  {this.buttonLoader(user.uid, 'Teacher', 'อาจารย​์')}
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default UserTypeScreen;