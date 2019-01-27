import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
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
      date: '',
      morning: '',
      afternoon: '',
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var uid, usersRef, table, data
    var date = this.props.navigation.getParam('date')
    uid = firebase.auth().currentUser.uid
    usersRef = firebase.database().ref('users/' + uid)
    table = usersRef.child('timeTable').child(date)
    table.once('value').then(snapshot => {
      data = snapshot.val()
      this.setState({
        date: date,
        morning: data.morning,
        afternoon: data.afternoon
      })
    })
  }

  render() {
    const { date, morning, afternoon } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <Card containerStyle={styles.common.card}>
            <View style={styles.activity.container}>
              <Text style={styles.activity.date}>{date}</Text>
              <Text style={styles.activity.detail}>ช่วงเช้า : {morning}</Text>
              <Text style={styles.activity.detail}>ช่วงบ่าย : {afternoon}</Text>
            </View>
          </Card>
        </View>
        <TouchableOpacity
          style={styles.common.button}
          onPress={() =>
            this.props.navigation.navigate('StudentAddActivity', {
              date: date,
              morning: morning,
              afternoon: afternoon
            })}>
          <Text style={styles.common.buttonText}>แก้ไข</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default ActivityScreen;