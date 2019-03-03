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
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class TimeTableScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerTitle: 'ตารางลงเวลา',
      headerRight: (
        <TouchableOpacity
          onPress={() => Alert.alert(
            'แจ้งเตือน',
            'แน่ใจที่จะเพิ่มตางราง ?',
            [
              {
                text: 'ยกเลิก',
                style: 'cancel',
              },
              { text: 'ตกลง', onPress: () => params.add() },
            ],
            { cancelable: false },
          )}
          style={styles.button.headerRight}>
          {<Icon name='plus' size={30} color='white' />}
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      currentDate: '',
      timeCome: '',
      timeBack: '',
      loading: false
    }
  }

  componentDidMount() {
    this.getList()
    this.props.navigation.setParams({ add: this.addNewList.bind(this) })
  }

  getList() {
    var uid, table, child, key, currentDate, items = []
    uid = firebase.auth().currentUser.uid
    table = firebase.database().ref('timeTable/' + uid)
    table.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        key = childSnapshot.key
        console.log(key)
        child = childSnapshot.val()
        currentDate = child.date
        items.push({
          key: key,
          date: child.date,
          timeCome: child.timeCome,
          timeBack: child.timeBack,
        })
        this.setState({
          currentDate: currentDate,
          timeCome: child.timeCome,
          timeBack: child.timeBack
        })
      })
      this.setState({
        list: items,
      })
      // console.log(this.state.list)
    })
  }

  addNewList() {
    var uid, timeTable, date, year, month, day, vStat, tnum, visitStat
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('timeTable/' + uid)
    vStat = firebase.database().ref('users/' + uid)
    vStat.once('value').then((snapshot) => {
      visitStat = snapshot.val().vStat
      console.log('Firebase: ' + visitStat)
      if (visitStat == true) {
        tnum = firebase.database().ref('users')
        tnum = tnum.orderByChild('type').equalTo('Teacher')
        tnum.once('value').then((snapshot) => {
          snapshot.forEach((child) => {
            console.log(child.key)
            visit = firebase.database().ref('visit')
            visit.push({
              tuid: child.key,
              suid: uid,
              comment: '',
              stat: true
            })
          })
        }).then(() => {
          firebase.database().ref('users/' + uid)
            .update({
              vStat: false
            })
        })
      }
    })

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
      Alert.alert(
        'แจ้งเตือน',
        'วันนี้ลงตารางเวลาแล้ว !',
        [
          { text: 'ตกลง' },
        ],
        { cancelable: false },
      )
    }
  }

  timeStampCome = (timeCome, key) => {
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

  timeStampBack = (timeBack, key) => {
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
    console.log(list)
    return (
      <View style={{ flex: 1, marginBottom: 20 }}>
        <ScrollView style={styles.view.scrollView}>
          {
            list.slice(0).reverse().map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards} >
                  <View style={styles.view.timeTableContainer}>
                    <Text style={styles.label.headerTimeTable}>{user.date}</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                      <TouchableOpacity
                        style={styles.button.timeButtonLeft}
                        onPress={() => this.timeStampCome(user.timeCome, user.key)}>
                        <Text style={styles.label._sub}>{user.timeCome}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button.timeButtonRight}
                        onPress={() => this.timeStampBack(user.timeBack, user.key)}>
                        <Text style={styles.label._sub}>{user.timeBack}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('StudentActivity', {
                          date: user.date,
                          key: user.key
                        })
                      }
                      style={styles.button.sub}>
                      <Icon
                        name='edit'
                        size={30}
                        color='white' />
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