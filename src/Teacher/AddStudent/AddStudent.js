import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
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
    users = firebase.database().ref('users')
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        type = child.val().type
        // console.log(child.val().type)
        if (type == 'Student') {
          items.push({
            fname: val.fname,
            lname: val.lname,
            uid: val.uid,
            email: val.email,
          })
        }
        this.setState({ list: items })
      })
      console.log(this.state.list)
    })
  }

  addStudent(suid, fname, lname) {
    var users, tuid, firebaseAuth, firebaseDB
    firebaseAuth = firebase.auth()
    firebaseDB = firebase.database()
    tuid = firebaseAuth.currentUser.uid
    users = firebaseDB.ref('users/' + tuid + '/std/' + suid)
    users.update({
      fname: fname,
      lname: lname
    }).then(() => {
      this.addVisit(tuid, suid)
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
                      onPress={() => this.addStudent(user.uid, user.fname, user.lname)}
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