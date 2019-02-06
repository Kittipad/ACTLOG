import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
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
      loading: false,
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var uid, table, child, key, currentDate, items = []
    uid = firebase.auth().currentUser.uid
    table = firebase.database().ref('timeTable/' + uid)
    table.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        key = childSnapshot.key
        child = childSnapshot.val()
        currentDate = child.date
        items.push({
          key: key,
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
      console.log(this.state.list)
    })
  }

  addNewList() {
    var uid, timeTable, date, year, month, day
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('timeTable/' + uid)

    date = new Date()
    year = date.getFullYear()
    month = date.getMonth() + 1
    day = date.getDate()
    date = year + '-' + month + '-' + day

    if (this.state.currentDate != date) {
      this.setState({ loading: true })
      timeTable.push({
        date: date,
        timeCome: 'ลงเวลามา',
        timeBack: 'ลงเวลากลับ',
        morning: 'ช่วงเช้า',
        afternoon: 'ช่วงบ่าย',
      }).then(() => {
        this.setState({ loading: false })
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
    time = firebase.database().ref('timeTable/' + uid + '/' + key)

    hour = new Date().getHours()
    minute = new Date().getMinutes()
    timeStamp = hour + ':' + minute

    if (timeCome == 'ลงเวลามา') {
      time.update({
        timeCome: timeStamp
      }).then(() => {
        this.componentDidMount()
      })
    } else {
      Alert.alert('ลงเวลามาแล้ว')
    }
  }

  timeStampBack() {
    const { key, timeBack } = this.state
    var uid, time, hour, minute, timeStamp
    uid = firebase.auth().currentUser.uid
    time = firebase.database().ref('timeTable/' + uid + '/' + key)

    hour = new Date().getHours()
    minute = new Date().getMinutes()
    timeStamp = hour + ':' + minute

    if (timeBack == 'ลงเวลากลับ') {
      time.update({
        timeBack: timeStamp
      }).then(() => {
        this.componentDidMount()
      })
    } else {
      Alert.alert('ลงเวลากลับแล้ว')
    }
  }

  Loader() {
    if (this.state.loading) {
      return (
        <TouchableOpacity
          style={styles.common.button}>
          <ActivityIndicator size='large' color='#5499C7' />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        onPress={this.addNewList.bind(this)}
        style={styles.common.button}>
        <Text style={styles.common.buttonText}>เพิ่ม</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { list, key } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {this.Loader()}
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