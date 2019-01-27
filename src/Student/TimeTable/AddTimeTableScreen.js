import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import firebase from 'react-native-firebase'
import styles from '../../styles'

class AddTimeTableScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      date: '',
    }
  }

  saveTime() {
    var uid, timeTable, date, year, month, day, date, hour, minute
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('users/' + uid + '/timeTable')

    date = new Date()
    year = date.getFullYear()
    month = date.getMonth() + 1
    day = date.getDate()
    date = year + '-' + month + '-' + day

    hour = new Date().getHours()
    minute = new Date().getMinutes()
    timeCome = hour + ':' + minute
    this.setState({
      date: date,
    })
    timeTable.child(date).set({
      date: date,
      timeCome: timeCome,
      timeBack: 'แก้ไข',
      stat: 'รอตรวจ',
    })
  }

  render() {
    let icoSize = 30
    return (
      <View style={styles.common.container}>
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='clock'
              size={icoSize}
              color='white'
            />
          }
          placeholder='เวลามา'
          autoCapitalize='none'
          autoCorrect={false}
          clearTextOnFocus={true} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.saveTime.bind(this)}>
          <Text style={styles.common.buttonText}>ถัดไป</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTimeTableScreen;