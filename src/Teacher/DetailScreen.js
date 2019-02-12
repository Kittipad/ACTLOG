import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Avatar,
  Card
} from 'react-native-elements'
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
    this.getList()
  }

  getList() {
    var data
    var uid = firebase.auth().currentUser.uid
    var users = firebase.database().ref('users/' + uid)
    users.once('value').then(snapshot => {
      data = snapshot.val()
      this.setState({
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        telNum: data.telNum,
        uuid: uid,
      })
      console.log(data)
    })
  }

  editDetail() {
    const { fname, lname, email, telNum } = this.state
    this.props.navigation.navigate('TeachEditDetail', {
      fname: fname,
      lname: lname,
      email: email,
      telNum: telNum,
    })
  }

  render() {
    const { fname, lname, email, telNum, uuid } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <Card containerStyle={styles.common.card}>
            <View style={styles.timeTable.container}>
              <Text style={styles.detail.labelCenter}>{fname + '  ' + lname}</Text>
              <View style={styles.detail.detailContainer}>
                <Icon
                  style={styles.detail.icon}
                  name='phone'
                  size={22} />
                <Text style={styles.detail.label}>{telNum}</Text>
              </View>
              <View style={styles.detail.detailContainer}>
                <Icon
                  style={styles.detail.icon}
                  name='envelope'
                  size={22} />
                <Text style={styles.detail.label}>{email}</Text>
              </View>
            </View>
          </Card >
          <View style={styles.detail.detailContainer}>
            <Text style={{ fontSize: 15, marginTop: 15, color: 'white' }}>{uuid}</Text>
          </View>
          <TouchableOpacity
            style={styles.common.button}
            onPress={this.editDetail.bind(this)}>
            <Text style={styles.common.buttonText}>แก้ไขข้อมูล</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default DetailScreen;