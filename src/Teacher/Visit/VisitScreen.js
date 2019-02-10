import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class VisitScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var users, tuid, items = [], sname
    tuid = firebase.auth().currentUser.uid
    users = firebase.database().ref('users/' + tuid + '/std')
    users.once('value').then((snapshot) => {
      console.log(snapshot.val())
      snapshot.forEach((child) => {
        var suid
        val = child.val()
        suid = child.key
        // console.log(suid)
        sname = firebase.database().ref('users/' + suid)
        sname.once('value').then((snapshot) => {
          sval = snapshot.val()
          // console.log(sval)
          console.log(suid)
          items.push({
            suid: suid,
            tuid: tuid,
            fname: sval.fname,
            lname: sval.lname,
            email: sval.email
          })
          this.setState({ list: items, })
        })
      })
    })
  }

  SaveVisit() {
    this.props.navigation.navigate('TeachSaveVisit')
  }

  render() {
    const { list } = this.state
    // console.log(list)
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.visit.container}>
                    <Text style={styles.visit.label}>{user.fname}  {user.lname}</Text>
                    <Text style={styles.visit.label}>{user.email}</Text>
                    <TouchableOpacity
                      style={styles.common._button}
                      onPress={() =>
                        this.props.navigation.navigate('TeachSaveVisit', {
                          suid: user.suid,
                          tuid: user.tuid,
                          fname: user.fname,
                          lname: user.lname
                        })}>
                      <Text style={styles.common._buttonText}>บันทึกนิเทศ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.common._button}
                      onPress={() =>
                        this.props.navigation.navigate('TeachActivity', {
                          suid: user.suid,
                        })}>
                      <Text style={styles.common._buttonText}>ดูบันทึกกิจกรรม</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default VisitScreen;