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
    var items = [], users, teacher, visit
    var tuid = firebase.auth().currentUser.uid
    users = firebase.database().ref('users')
    users = users.orderByChild('type').equalTo('Student')
    users.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        val = child.val()
        // console.log(visit)
        // if (visit != tuid) {
        items.push({
          fname: val.fname,
          lname: val.lname,
          uid: val.uid,
          email: val.email,
        })
        this.setState({ list: items })
        // }
      })
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
      this.updateStat(tuid, suid)
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

  updateStat(tuid, suid) {
    var users, email, tuid
    // console.log(tuid)
    email = firebase.auth().currentUser.email
    users = firebase.database().ref('users/' + suid + '/visit/' + tuid)
    // console.log(email)
    users.set({
      email: email
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
                    {/* <Text style={{ color: 'gray', marginBottom: 20 }}>{user.uid}</Text> */}
                    <TouchableOpacity
                      onPress={() => this.addStudent(user.uid, user.email)}
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