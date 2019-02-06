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

class UserListScreen extends Component {
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
    var items = [], users, items
    users = firebase.database().ref('users')
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        type = child.val().type
        // console.log(child.val().type)
        if (type == 'none') {
          items.push({
            fname: val.fname,
            lname: val.lname,
            uid: val.uid
          })
        } if (type == 'Student') {
          items.push({
            fname: val.fname,
            lname: val.lname,
            uid: val.uid
          })
        }
        this.setState({ list: items })
      })
      console.log(this.state.list)
    })
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((user, i) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('AdminEdit', {
                      uid: user.uid
                    })}
                  style={styles.common.card}>
                  <Card key={i} containerStyle={styles.common.card}>
                    <View style={styles.timeTable.container}>
                      <Text style={styles.timeTable.label}>{user.fname}  {user.lname}</Text>
                      <Text style={{ color: 'gray' }}>{user.uid}</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default UserListScreen;