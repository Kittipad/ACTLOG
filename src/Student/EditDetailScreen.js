import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import firebase from 'react-native-firebase'
import styles from '../styles'

class EditDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      telNum: ''
    }
  }

  saveDetail() {
    const { fname, lname, telNum } = this.state
    var uid = firebase.auth().currentUser.uid
    detail = firebase.database().ref('users/' + uid)
    detail.update({
      fname: fname,
      lname: lname,
      telNum: telNum
    }).then(() => {
      Alert.alert('แก้ไขแล้ว')
      this.props.navigation.goBack()
    })
  }

  render() {
    var fname = this.props.navigation.getParam('fname')
    var lname = this.props.navigation.getParam('lname')
    var email = this.props.navigation.getParam('email')
    var telNum = this.props.navigation.getParam('telNum')
    return (
      <ScrollView style={styles.common.scrollView}>
        <TextInput
          style={styles.detail.input}
          placeholderTextColor='black'
          defaultValue={fname}
          onChangeText={(text) => this.setState({ fname: text })}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.detail.input}
          placeholderTextColor='black'
          defaultValue={lname}
          onChangeText={(text) => this.setState({ lname: text })}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.detail.input}
          placeholderTextColor='black'
          defaultValue={telNum}
          onChangeText={(text) => this.setState({ telNum: text })}
          keyboardType='phone-pad'
          autoCorrect={false} />
        <Text style={styles.detail.input}>{email}</Text>
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.saveDetail.bind(this)}>
          <Text style={styles.common.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default EditDetailScreen