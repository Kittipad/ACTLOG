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
    var items = [], teacher, uid, tname, tuid
    uid = firebase.auth().currentUser.uid
    teacher = firebase.database().ref('visit')
    teacher = teacher.orderByChild('suid').equalTo(uid)
    teacher.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        var val
        val = child.val()
        tuid = val.tuid
        var key = child.key
        tname = firebase.database().ref('users/' + tuid)
        tname.once('value').then((snapshot) => {
          // console.log(snapshot.val())
          tval = snapshot.val()
          items.push({
            fname: tval.fname,
            lname: tval.lname,
            email: tval.email,
            comment: val.comment,
            key: key
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
    // console.log(list)
    return (
      <ScrollView style={styles.view.scrollView}>
        {
          list.map((user, i) => {
            return (
              <View style={styles.view.container}>
                <Card containerStyle={styles.view.cards}>
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