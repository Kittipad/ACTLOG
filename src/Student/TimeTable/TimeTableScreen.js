import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native'
import {
  Card,
} from 'react-native-elements'
import Icon from 'react-native-vector-icons'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class TimeTableScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: 'ตารางลงเวลา',
      headerRight: (
        <TouchableOpacity
          onPress={() => params.add()}
          style={{ marginRight: 15 }}>
          <Text style={{ fontSize: 20 }}>เพิ่ม</Text>
        </TouchableOpacity>
      )
    }
  }

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
    this.props.navigation.setParams({ add: this.addNewList.bind(this) });
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

  render() {
    const { list } = this.state
    return (
      <View style={{ flex: 1, marginBottom: 20 }}>
        <ScrollView style={styles.home.scrollView}>
          {
            list.slice(0).reverse().map((d, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards} >
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
                      style={styles.button.main}>
                      <Text style={styles.button.label}>ดูเพิ่ม</Text>
                    </TouchableOpacity>
                  </View>
                </Card >
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default TimeTableScreen;