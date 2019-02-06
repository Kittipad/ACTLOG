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
      list: []
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var items = [], users, items, tuid
    tuid = firebase.auth().currentUser.uid
    users = firebase.database().ref('users/' + tuid + '/std')
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        // console.log(child.key)
        // console.log(child.val())
        items.push({
          suid: child.key,
          tuid: tuid,
          fname: val.fname,
          lname: val.lname,
        })
      })
      this.setState({
        list: items
      })
    })
  }

  SaveVisit() {
    this.props.navigation.navigate('TeachSaveVisit')
  }

  render() {
    const { list } = this.state
    console.log(list)
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((user, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('TeachSaveVisit', {
                      suid: user.suid,
                      tuid: user.tuid
                    })}
                  style={styles.common.card}>
                  <Card key={i} containerStyle={styles.common.card}>
                    <View style={styles.visit.container}>
                      <Text style={styles.visit.label}>{user.fname}  {user.lname}</Text>
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

export default VisitScreen;