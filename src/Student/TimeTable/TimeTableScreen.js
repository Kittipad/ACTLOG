import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles';

class TimeTableScreen extends Component {
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
    var uid, usersRef, table, child, items = []
    uid = firebase.auth().currentUser.uid
    usersRef = firebase.database().ref('users/' + uid)
    table = usersRef.child('timeTable')
    table.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        child = childSnapshot.val(),
          items.push({
            date: child.date,
            timeCome: child.timeCome,
            timeBack: child.timeBack,
          })
      })
      this.setState({
        list: items
      })
      console.log(snapshot.val())
      console.log(this.state.list)
    })
  }

  addNewList() {
    var uid, timeTable, date, year, month, day, hour, minute
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

    timeTable.child(date).set({
      date: date,
      timeCome: timeCome,
      timeBack: 'แก้ไข',
      morning: 'ช่วงเช้า',
      afternoon: 'ช่วงบ่าย',
    }).then(() => {
      Alert.alert('เพิ่มตารางเวลาแล้ว')
      this.componentDidMount()
    })
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <TouchableOpacity
            onPress={this.addNewList.bind(this)}
            style={styles.common.button}>
            <Text style={styles.common.buttonText}>เพิ่ม</Text>
          </TouchableOpacity>
          {
            list.map((d, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card} >
                  <View style={styles.timeTable.container}>
                    <Text style={styles.timeTable.label}>{d.date}</Text>
                    <Text style={styles.timeTable.label}>{d.timeCome} | {d.timeBack}</Text>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('StudentActivity', {
                          date: d.date
                        })
                      }
                      style={styles.common.button}>
                      <Text style={styles.timeTable.label}>ดูเพิ่ม</Text>
                    </TouchableOpacity>
                  </View>
                </Card >
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}

export default TimeTableScreen;