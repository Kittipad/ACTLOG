import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Card } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class AddStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var items = [], visit
    var tuid = firebase.auth().currentUser.uid
    var std = firebase.database().ref('users')
    var visit = firebase.database().ref('visit')

    visit.orderByChild('tuid').equalTo(tuid)
      .once('value').then((snapshot) => {
        snapshot.forEach((child) => {
          var suid = child.val().suid
          var tuid = child.val().tuid
          var stat = child.val().stat
          console.log(`${suid} ${tuid} ${stat}`)
          if (stat == true) {
            std.child(suid).once('value').then((snapshot) => {
              var val = snapshot.val()
              items.push({
                fname: val.fname,
                lname: val.lname,
                email: val.email,
                sid: val.sid,
                uid: val.uid
              })
              this.setState({ list: items })
            })
          }
        })
      })
  }

  addStudent(suid) {
    var visit, tuid
    tuid = firebase.auth().currentUser.uid
    visit = firebase.database().ref('visit')

    visit.orderByChild('suid').equalTo(suid)
      .once('value').then((snapshot) => {
        snapshot.forEach((child) => {
          if (tuid == child.val().tuid) {
            var key = child.key
            firebase.database().ref(`visit/${key}`)
              .update({
                stat: false
              })
          }
        })
      }).then(() => {
        Alert.alert(
          'แจ้งเตือน',
          'เพิ่มนักศึกษาแล้ว !',
          [
            { text: 'ตกลง' },
          ],
          { cancelable: false },
        )
      })
  }

  render() {
    const { list } = this.state
    // console.log(list)
    return (
      <ScrollView style={styles.view.scrollView}>
        <View style={styles.view.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards}>
                  <View style={styles.view.headerContainer}>
                    <Text style={styles.label.header}>{user.fname}  {user.lname}</Text>
                    <Text style={styles.label.sub}>{user.email}</Text>
                    <Text style={styles.label.sub}>{user.sid}</Text>
                    <Text style={styles.label.sub}>{user.uid}</Text>
                    {/* <Text style={{ color: 'gray', marginBottom: 20 }}>{user.uid}</Text> */}
                    <TouchableOpacity
                      onPress={() => this.addStudent(user.uid)}
                      style={styles.button.sub}>
                      <Text style={styles.button.subLabel}>เพิ่ม</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}

export default AddStudent;