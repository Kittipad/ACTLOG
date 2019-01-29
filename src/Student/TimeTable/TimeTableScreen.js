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
      list: [],
      key: '',
      currentDate: '',
      timeCome: '',
      timeBack: '',
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var uid, usersRef, table, child, key, currentDate, items = []
    uid = firebase.auth().currentUser.uid
    usersRef = firebase.database().ref('users/' + uid)
    table = usersRef.child('timeTable')
    table.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        key = childSnapshot.key
        child = childSnapshot.val()
        currentDate = child.date
        items.push({
          date: child.date,
          timeCome: child.timeCome,
          timeBack: child.timeBack,
        })
        this.setState({
          key: key,
          currentDate: currentDate,
          timeCome: child.timeCome,
          timeBack: child.timeBack
        })
      })
      this.setState({
        list: items,
      })
      console.log(snapshot.val())
      console.log(this.state.list)
    })
  }

  addNewList() {
    var uid, timeTable, date, year, month, day
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('users/' + uid + '/timeTable')

    date = new Date()
    year = date.getFullYear()
    month = date.getMonth() + 1
    day = date.getDate()
    date = year + '-' + month + '-' + day

    if (this.state.currentDate != date) {
      timeTable.push({
        date: date,
        timeCome: 'ลงเวลาเช้า',
        timeBack: 'ลงเวลาบ่าย',
        morning: 'ช่วงเช้า',
        afternoon: 'ช่วงบ่าย',
      }).then(() => {
        Alert.alert('เพิ่มตารางเวลาแล้ว')
        this.componentDidMount()
      })
    } else {
      Alert.alert('วันที่ซ้ำ')
    }
  }

  timeStampCome() {
    const { key, timeCome } = this.state
    var uid, time, hour, minute, timeStamp
    uid = firebase.auth().currentUser.uid
    time = firebase.database().ref('users/' + uid + '/timeTable/' + key)

    hour = new Date().getHours()
    minute = new Date().getMinutes()
    timeStamp = hour + ':' + minute

    if (timeCome == 'ลงเวลาเช้า') {
      time.update({
        timeCome: timeStamp
      }).then(() => {
        this.componentDidMount()
      })
    } else {
      Alert.alert('ลงเวลาช่วงเช้าแล้ว')
    }
  }

  timeStampBack() {
    const { key, timeBack } = this.state
    var uid, time, hour, minute, timeStamp
    uid = firebase.auth().currentUser.uid
    time = firebase.database().ref('users/' + uid + '/timeTable/' + key)

    hour = new Date().getHours()
    minute = new Date().getMinutes()
    timeStamp = hour + ':' + minute

    if (timeBack == 'ลงเวลาบ่าย') {
      time.update({
        timeBack: timeStamp
      }).then(() => {
        this.componentDidMount()
      })
    } else {
      Alert.alert('ลงเวลาช่วงบ่ายแล้ว')
    }
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
            list.slice(0).reverse().map((d, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card} >
                  <View style={styles.timeTable.container}>
                    <Text style={styles.timeTable.label}>{d.date}</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                      <TouchableOpacity onPress={this.timeStampCome.bind(this)}>
                        <Text style={styles.timeTable.label}>{d.timeCome}</Text>
                      </TouchableOpacity>
                      <Text style={styles.timeTable.label}> | </Text>
                      <TouchableOpacity onPress={this.timeStampBack.bind(this)}>
                        <Text style={styles.timeTable.label}>{d.timeBack}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('StudentActivity', {
                          date: d.date,
                          key: d.key
                        })
                      }
                      style={styles.common.button}>
                      <Text style={styles.timeTable.label}>ดูเพิ่ม</Text>
                    </TouchableOpacity>
                  </View>
                </Card >
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}

export default TimeTableScreen;