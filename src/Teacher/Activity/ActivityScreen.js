import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class ActivityScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  CheckActivity() {
    this.props.navigation.navigate('TeachViewActivity')
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var uid, students, student, std, items = []
    uid = firebase.auth().currentUser.uid
    students = firebase.database().ref('users/' + uid)
    students.child('students').once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        stdUid = child.key
        val = child.val()
        student = firebase.database().ref('users/' + stdUid)
        student.once('value').then((stdSnap) => {
          std = stdSnap.val()
          items.push({
            uid: std.uuid,
            fname: std.fname,
            lname: std.lname,
            telNum: std.telNum
          })
          this.setState({
            list: items,
          })
        })
      })
    })
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((u, i) => {
              return (
                <TouchableOpacity
                  onPress={() => this.CheckActivity(this)}
                  style={styles.common.card}>
                  <Card key={i} containerStyle={styles.common.card}>
                    <View style={styles.activity.container}>
                      <Text style={styles.activity.label}>{u.fname}  {u.lname}</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default ActivityScreen;