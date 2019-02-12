import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  View
} from 'react-native'
import { Card, Rating, Input } from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles';

class SaveVisitScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    var fname = navigation.getParam('fname')
    var lname = navigation.getParam('lname')
    return {
      title: fname + '  ' + lname
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      vid: ''
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var suid = this.props.navigation.getParam('suid')
    var tuid = this.props.navigation.getParam('tuid')
    // console.log(suid)
    var users
    users = firebase.database().ref('visit')
    users = users.orderByChild('tuid').equalTo(tuid)
    users.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        val = child.val()
        var key = child.key
        console.log(key)
        if (suid == val.suid) {
          this.setState({
            comment: val.comment,
            vid: key
          })
        }
      })
    })
    // console.log(tuid)
  }

  saveVisit() {
    const { comment, vid } = this.state
    var visit = firebase.database().ref('visit/' + vid)
    visit.update({
      comment: comment
    })
  }

  render() {
    const { comment, vid } = this.state
    // console.log(list)
    return (
      <ScrollView style={styles.common.scrollView}>
        <Text>{vid}</Text>
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='gray'
          defaultValue={comment}
          placeholder='แสดงความคิดดเห็น'
          onChangeText={(text) => this.setState({ comment: text })}
          autoCapitalize='none'
          autoCorrect={false}>
        </TextInput>
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.saveVisit.bind(this)}>
          <Text style={styles.common.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default SaveVisitScreen;