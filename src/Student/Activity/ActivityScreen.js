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
      key: '',
      date: '',
      morning: '',
      afternoon: '',
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var uid, usersRef, table
    var date = this.props.navigation.getParam('date')
    var key = this.props.navigation.getParam('key')
    uid = firebase.auth().currentUser.uid
    table = firebase.database().ref('timeTable/' + uid + '/' + key)
    table.once('value').then(snapshot => {
      child = snapshot.val()
      this.setState({
        key: key,
        date: date,
        morning: child.morning,
        afternoon: child.afternoon
      })
    })
  }

  render() {
    const { date, morning, afternoon, key } = this.state
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
              key: key,
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