import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Card } from 'react-native-elements'
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
    var items = [], users
    tuid = firebase.auth().currentUser.uid
    users = firebase.database().ref('users')
    users = users.orderByChild('type').equalTo('Student')
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        stat = val.visitStat
        // console.log(stat)
        // if (stat == false) {
        items.push({
          fname: val.fname,
          lname: val.lname,
          uid: val.uid,
          email: val.email,
        })
        this.setState({ list: items })
        // }
      })
      // console.log(this.state.list)
    })
  }

  addStudent(suid, email) {
    var users, tuid, firebaseAuth, firebaseDB
    firebaseAuth = firebase.auth()
    firebaseDB = firebase.database()
    tuid = firebaseAuth.currentUser.uid
    users = firebaseDB.ref('users/' + tuid + '/std/' + suid)
    users.update({
      email: email
    }).then(() => {
      this.addVisit(tuid, suid)
      this.updateStat(suid)
    })
    // Alert.alert(tuid)
    // Alert.alert(suid)
  }

  addVisit(tuid, suid) {
    var users, firebaseDB
    firebaseDB = firebase.database()
    users = firebaseDB.ref('visit/')
    users.push({
      tuid: tuid,
      suid: suid,
      comment: 'comment'
    })
    // console.log(tuid)
    // console.log(suid)
  }

  updateStat(suid) {
    var users
    users = firebase.database().ref('users/' + suid)
    users.update({
      visitStat: true
    })
    this.getList()
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.timeTable.container}>
                    <Text style={styles.timeTable.label}>{user.fname}  {user.lname}</Text>
                    <Text style={{ color: 'gray', marginBottom: 20, alignSelf: 'center' }}>{user.email}</Text>
                    {/* <Text style={{ color: 'gray', marginBottom: 20 }}>{user.uid}</Text> */}
                    <TouchableOpacity
                      onPress={() => this.addStudent(user.uid, user.email)}
                      style={styles.common._button}>
                      <Text style={styles.common.label}>เพิ่ม</Text>
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