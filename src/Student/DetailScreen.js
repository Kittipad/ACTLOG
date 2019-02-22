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
        <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <ScrollView style={styles.view.scrollView}>
          <View style={styles.view.detailContainer}>
            <Card containerStyle={styles.view.card}>
              <View style={styles.view.headerContainer}>
                <Text style={styles.label.header}>{fname + '  ' + lname}</Text>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.icon.detail}
                    name='id-card'
                    size={22} />
                  <Text style={styles.label.detail}>{sid}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.icon.detail}
                    name='shapes'
                    size={22} />
                  <Text style={styles.label.detail}>{group}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.icon.detail}
                    name='graduation-cap'
                    size={22} />
                  <Text style={styles.label.detail}>{subject}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.icon.detail}
                    name='phone'
                    size={22} />
                  <Text style={styles.label.detail}>{telNum}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.icon.detail}
                    name='envelope'
                    size={22} />
                  <Text style={styles.label.detail}>{email}</Text>
                </View>

                <View style={styles.view.containerWithBorder}>
                  <Icon
                    style={styles.icon.detail}
                    name='clock'
                    size={22} />
                  <Text style={styles.label.detail}>{date}</Text>
                </View>

              </View>
            </Card >
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button.sub}
          onPress={this.editDetail.bind(this)}>
          <Text style={styles.button.subLabel}>แก้ไขข้อมูล</Text>
        </TouchableOpacity>
        {/* <Text style={{ alignSelf: 'center' }}>{uuid}</Text> */}
      </View>
    )
  }
}

export default DetailScreen;