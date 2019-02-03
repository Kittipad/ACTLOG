import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import firebase from 'react-native-firebase'

class DBRelateTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  createDB() {
    var users = firebase.database().ref('test/users')
    var events = firebase.database().ref('test/events')
    var eventAttendees = firebase.database().ref('test/eventAttendees')
    users.set({
      1: {
        fname: 'krittanupong'
      },
      2: {
        fname: 'sasiwimon'
      }
    })
    events.set({
      fm: {
        name: 'Firebase Meetup',
        time: 187394737
      }
    })
    eventAttendees.set({
      fm: {
        1: 'krittanupong',
        2: 'sasiwimon'
      }
    })
  }

  selectDB() {
    var users = firebase.database().ref('test/users')
    var events = firebase.database().ref('test/events')
    var eventAttendees = firebase.database().ref('test/eventAttendees')
    var list = []

    users.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        list.push({
          text: child.val().fname
        })
      })
      this.setState({
        list: list
      })
      console.log(this.state.list)
    })

    // events.once('value').then((snapshot) => {
    //   snapshot.forEach((child) => {
    //     list.push({
    //       text: child.val().name
    //     })
    //   })
    //   this.setState({
    //     list: list
    //   })
    //   console.log(this.state.list)
    // })

    // eventAttendees.once('value').then((snapshot) => {
    //   snapshot.forEach((child) => {
    //     list.push({
    //       text: child.key
    //     })
    //   })
    //   this.setState({
    //     list: list
    //   })
    //   console.log(this.state.list)
    // })
  }

  insertDB() {
    var userTest = firebase.database().ref('userTest')
    userTest.child('_users').push().set({
      fname: 'test',
      lname: 'test'
    }).then(Alert.alert('inserted.'))
  }

  render() {
    const { list } = this.state
    return (
      <View>
        <Button
          title='createDB'
          onPress={this.createDB.bind(this)}
        />
        <Button
          title='selectDB'
          onPress={this.selectDB.bind(this)}
        />
        <Button
          title='insertDB'
          onPress={this.insertDB.bind(this)}
        />
        {
          list.map((l, i) => {
            return (
              <Text key={i}>{l.text}</Text>
            )
          })
        }
      </View >
    );
  }
}

export default DBRelateTest;