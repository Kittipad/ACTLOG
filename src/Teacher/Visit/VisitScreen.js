import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
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
      // console.log(snapshot.val())
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
      <ScrollView style={styles.view.scrollView}>
        <View style={styles.view.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards}>
                  <View style={styles.view.headerContainer}>
                    <Text style={styles.label.header}>{user.fname}  {user.lname}</Text>
                    <Text style={styles.label.sub}>{user.email}</Text>
                    <TouchableOpacity
                      style={styles.button.main}
                      onPress={() =>
                        this.props.navigation.navigate('TeachSaveVisit', {
                          suid: user.suid,
                          tuid: user.tuid,
                          fname: user.fname,
                          lname: user.lname
                        })}>
                      <Text style={styles.button.mainLabel}>บันทึกนิเทศ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button.main}
                      onPress={() =>
                        this.props.navigation.navigate('TeachActivity', {
                          suid: user.suid,
                        })}>
                      <Text style={styles.button.mainLabel}>ดูบันทึกกิจกรรม</Text>
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