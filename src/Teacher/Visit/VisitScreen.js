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
          if (stat == false) {
            std.child(suid).once('value').then((snapshot) => {
              var val = snapshot.val()
              items.push({
                fname: val.fname,
                lname: val.lname,
                email: val.email,
                sid: val.sid,
                suid: val.uid,
                tuid: tuid
              })
              this.setState({ list: items })
            })
          }
        })
      })
  }

  render() {
    const { list } = this.state
    console.log(list)
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
                      style={styles.button.sub}
                      onPress={() =>
                        this.props.navigation.navigate('TeachSaveVisit', {
                          suid: user.suid,
                          tuid: user.tuid,
                          fname: user.fname,
                          lname: user.lname
                        })}>
                      <Text style={styles.button.subLabel}>บันทึกนิเทศ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button.sub}
                      onPress={() =>
                        this.props.navigation.navigate('TeachActivity', {
                          suid: user.suid,
                        })}>
                      <Text style={styles.button.subLabel}>ดูบันทึกกิจกรรม</Text>
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