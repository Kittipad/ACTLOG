import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Alert
} from 'react-native';
import firebase from 'react-native-firebase'

class DBRelateTest extends Component {
  createDB() {
    var userTest = firebase.database().ref('userTest')
    userTest.set({
      _users: {
        '1': {
          fname: 'krittanupong'
        },
        '2': {
          fname: 'nattanicha'
        }
      },
      _events: {
        'fm': {
          name: 'Firebase Meetup',
          time: '09:00'
        }
      },
      _eventAttendees: {
        'fm': {
          "1": "Jirawat",
          "2": "Firebaser"
        }
      }
    }).then(Alert.alert('created.'))
  }

  selectDB() {
    var userTest = firebase.database().ref('userTest')
    var eventRef = userTest.child('_events')
    console.log(
      eventRef.orderByChild('name').equalTo('FB Meetup').limitToFirst(1)
    )
  }

  insertDB() {
    var userTest = firebase.database().ref('userTest')
    userTest.child('_users').push().set({
      fname: 'test',
      lname: 'test'
    }).then(Alert.alert('inserted.'))
  }

  render() {
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
      </View>
    );
  }
}

export default DBRelateTest;