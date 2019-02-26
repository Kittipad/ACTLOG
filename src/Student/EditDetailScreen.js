import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../styles'

class EditDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: 'แก้ไขข้อมูลส่วนตัว',
      headerRight: (
        <TouchableOpacity
          onPress={() => params.save()}
          style={{ marginRight: 15 }}>
          <Icon name='save' size={20} color='white' />
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      email: '',
      telNum: '',
      uid: ''
    }
  }

  componentDidMount() {
    this.getDetail()
    this.props.navigation.setParams({ save: this.saveDetail.bind(this) })
  }

  getDetail() {
    var sid = this.props.navigation.getParam('sid')
    var fname = this.props.navigation.getParam('fname')
    var lname = this.props.navigation.getParam('lname')
    var group = this.props.navigation.getParam('group')
    var subject = this.props.navigation.getParam('subject')
    var email = this.props.navigation.getParam('email')
    var telNum = this.props.navigation.getParam('telNum')
    var date = this.props.navigation.getParam('date')
    var sidStat = this.props.navigation.getParam('sidStat')
    var uuid = this.props.navigation.getParam('uuid')
    this.setState({
      sid: sid,
      fname: fname,
      lname: lname,
      group: group,
      subject: subject,
      email: email,
      telNum: telNum,
      date: date,
      sidStat: sidStat,
      uid: uuid
    })
  }

  saveDetail() {
    const { sid, fname, lname, group, subject, telNum, email, date, uid } = this.state
    detail = firebase.database().ref('users/' + uid)
    detail.update({
      sid: sid,
      fname: fname,
      lname: lname,
      group: group,
      subject: subject,
      email: email,
      telNum: telNum,
      date: date,
      sidStat: false,
    }).then(() => {
      Alert.alert('แก้ไขแล้ว')
      this.props.navigation.goBack()
    })
  }

  sidLoader(sidStat, sid) {
    if (sidStat) {
      return (
        <TextInput
          editable={true}
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={sid}
          placeholder='รหัสนักศึกษา'
          keyboardType='number-pad'
          onFocus={() => Alert.alert('รหัสนักศึกษาแก้ไขได้ครั้งเดียวเท่านั้น')}
          onChangeText={(text) => this.setState({ sid: text })}
          autoCapitalize='none'
          autoCorrect={false} />
      )
    } else {
      return (
        <TextInput
          editable={false}
          style={styles.input.borderWithFont}
          defaultValue={sid}
          placeholder='รหัสนักศึกษา' />
      )
    }
  }

  render() {
    const { sid, fname, lname, group, subject, telNum, email, date, sidStat } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        {this.sidLoader(sidStat, sid)}
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
          defaultValue={group}
          placeholder='กลุ่ม'
          onChangeText={(text) => this.setState({ group: text })}
          autoCorrect={false} />
        <TextInput
          editable={false}
          style={styles.input.borderWithFont}
          defaultValue={subject} />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={telNum}
          placeholder='เบอร์โทร'
          onChangeText={(text) => this.setState({ telNum: text })}
          keyboardType='phone-pad'
          autoCorrect={false} />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={date}
          placeholder='ระยะเวลาฝึกงาน'
          onChangeText={(text) => this.setState({ date: text })}
          autoCorrect={false} />
        <TextInput
          editable={false}
          style={styles.input.borderWithFont}
          defaultValue={email} />
      </ScrollView>
    )
  }
}

export default EditDetailScreen