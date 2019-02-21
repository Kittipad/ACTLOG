import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
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

  componentDidMount() {
    this.getDetail()
  }

  getDetail() {
    var fname = this.props.navigation.getParam('fname')
    var lname = this.props.navigation.getParam('lname')
    var email = this.props.navigation.getParam('email')
    var telNum = this.props.navigation.getParam('telNum')
    this.setState({
      fname: fname,
      lname: lname,
      email: email,
      telNum: telNum
    })
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
    const { fname, lname, telNum, email } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={fname}
          placeholder='ชื่อจริง'
          onChangeText={(text) => this.setState({ fname: text })}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={lname}
          placeholder='นามสกุล'
          onChangeText={(text) => this.setState({ lname: text })}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={telNum}
          placeholder='เบอร์โทร'
          onChangeText={(text) => this.setState({ telNum: text })}
          keyboardType='phone-pad'
          autoCorrect={false} />
        <TextInput
          editable={false}
          style={styles.input.borderWithFont}
          defaultValue={email} />
        <TouchableOpacity
          style={styles.button.sub}
          onPress={this.saveDetail.bind(this)}>
          <Text style={styles.button.subLabel}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default EditDetailScreen