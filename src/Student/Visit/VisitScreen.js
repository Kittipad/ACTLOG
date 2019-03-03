import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native'
import {
  Card,
  Rating
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
    var suid = firebase.auth().currentUser.uid
    var std = firebase.database().ref('users')
    var visit = firebase.database().ref('visit')

    visit.orderByChild('suid').equalTo(suid)
      .once('value').then((snapshot) => {
        snapshot.forEach((child) => {
          var suid = child.val().suid
          var tuid = child.val().tuid
          var stat = child.val().stat
          var key = child.key
          console.log(`${suid} ${tuid} ${stat}`)
          if (stat == false) {
            std.child(tuid).once('value').then((snapshot) => {
              var val = snapshot.val()
              items.push({
                fname: val.fname,
                lname: val.lname,
                email: val.email,
                sid: val.sid,
                uid: val.uid,
                comment: child.val().comment,
                key: key
              })
              this.setState({ list: items })
            })
          }
        })
      })
  }

  render() {
    const { list } = this.state
    // console.log(list)
    return (
      <ScrollView style={styles.view.scrollView}>
        {
          list.map((user, i) => {
            return (
              <View style={styles.view.container}>
                <Card key={i} containerStyle={styles.view.cards}>
                  <View style={styles.view.headerContainer}>
                    <Text style={styles.label.header}>{user.fname}  {user.lname}</Text>
                    <Text style={styles.label.sub}>{user.email}</Text>
                    <Text style={styles.label.visitComment}>{user.comment}</Text>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('StudentViewVisit', {
                        key: user.key
                      })}
                      style={styles.button.sub}>
                      <Text style={styles.button.subLabel}>ดูเพิ่มเติม</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

export default VisitScreen;