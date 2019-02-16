import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  Avatar,
  Card,
} from 'react-native-elements';
import { NavigationEvents } from 'react-navigation'
import firebase from 'react-native-firebase'
import styles from '../styles'

class DetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      telNum: '',
      uuid: '',
    }
  }

  componentDidMount() {
    this.getDetail()
  }

  getDetail() {
    var data
    var uid = firebase.auth().currentUser.uid
    var users = firebase.database().ref('users/' + uid)
    users.once('value').then(snapshot => {
      data = snapshot.val()
      this.setState({
        uuid: uid,
        sid: data.sid,
        fname: data.fname,
        lname: data.lname,
        group: data.group,
        subject: data.subject,
        telNum: data.telNum,
        email: data.email,
        date: data.date,
        sidStat: data.sidStat
      })
      console.log(data)
    })
  }

  editDetail() {
    const { sid, fname, lname, group, subject, telNum, email, date, sidStat, uuid } = this.state
    this.props.navigation.navigate('StudentEditDetail', {
      sid: sid,
      fname: fname,
      lname: lname,
      email: email,
      group: group,
      subject: subject,
      telNum: telNum,
      date: date,
      sidStat: sidStat,
      uuid: uuid
    })
  }

  render() {
    const { sid, fname, lname, group, subject, telNum, email, date, sidStat, uuid } = this.state
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.home.scrollView}>
          <NavigationEvents onDidFocus={() => this.componentDidMount()} />
          <View style={styles.view.container}>
            <Card containerStyle={styles.view.card}>
              <View style={styles.timeTable.container}>
                <Text style={styles.detail.name}>{fname + '  ' + lname}</Text>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.detail.icon}
                    name='id-card'
                    size={22} />
                  <Text style={styles.detail.label}>{sid}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.detail.icon}
                    name='shapes'
                    size={22} />
                  <Text style={styles.detail.label}>{group}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.detail.icon}
                    name='graduation-cap'
                    size={22} />
                  <Text style={styles.detail.label}>{subject}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.detail.icon}
                    name='phone'
                    size={22} />
                  <Text style={styles.detail.label}>{telNum}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.detail.icon}
                    name='envelope'
                    size={22} />
                  <Text style={styles.detail.label}>{email}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.detail.icon}
                    name='clock'
                    size={22} />
                  <Text style={styles.detail.label}>{date}</Text>
                </View>

              </View>
            </Card >
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button.main}
          onPress={this.editDetail.bind(this)}>
          <Text style={styles.button.label}>แก้ไขข้อมูล</Text>
        </TouchableOpacity>
        {/* <Text style={{ alignSelf: 'center' }}>{uuid}</Text> */}
      </View>
    )
  }
}

export default DetailScreen;