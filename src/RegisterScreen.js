import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Input } from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from './styles'

class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: '',
      rePassword: '',
      loading: false,
      error: ''
    })
  }

  onRegisterPressed() {
    var uid
    const { email, password, rePassword } = this.state
    firebaseAuth = firebase.auth()
    if (email != '' && password != '') {
      if (password == rePassword) {
        this.setState({ loading: true })
        firebaseAuth.createUserWithEmailAndPassword(email, password)
          .then(() => {
            uid = firebaseAuth.currentUser.uid
            firebase.database().ref('users/' + uid).set({
              uid: uid,
              email: email,
              fname: 'ชื่อจริง',
              lname: 'นามสกุล',
              telNum: 'เบอร์โทร',
              type: 'none',
              avatar: ''
            }).then(() => {
              this.setState({ loading: false })
              Alert.alert(
                'แจ้งเตือน',
                'สมัครสมาชิกสำเร็จ.\nติดต่อแอดมินเพื่อยืนยันการเข้าใช้งาน',
                [
                  { text: 'ตกลง', onPress: () => this.props.navigation.goBack() },
                ],
                { cancelable: false },
              )
            })
          }).catch((error) => {
            this.setState({ loading: false })
            Alert.alert(error.message)
          })
      } else {
        this.setState({ error: 'รหัสผ่านไม่ตรงกัน' })
      }
    } else {
      Alert.alert(
        'แจ้งเตือน',
        'กรุณากรอกข้อมูลให้ครบ!',
        [
          { text: 'ตกลง' },
        ],
        { cancelable: false },
      )
    }
  }

  buttonLoader() {
    const { loading } = this.state
    if (loading) {
      return (
        <TouchableOpacity
          disabled={true}
          style={styles.button.sub}>
          <ActivityIndicator size='large' color='white' />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.button.sub}
        onPress={this.onRegisterPressed.bind(this)}>
        <Text style={styles.button.subLabel}>สมัครสมาชิก</Text>
      </TouchableOpacity>
    )
  }

  render() {
    var icoSize = 30
    return (
      <ScrollView style={styles.view.scrollView}>
        <Input
          containerStyle={styles.input.container}
          inputContainerStyle={styles.input.inputContainer}
          inputStyle={styles.input.label}
          placeholderTextColor='#34495E'
          onChangeText={(text) => this.setState({ email: text })}
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType={'email-address'}
          leftIcon={
            <Icon
              name='user-alt'
              size={icoSize}
              style={styles.icon.color}
            />
          }
          placeholder='อีเมลล์' />
        <Input
          containerStyle={styles.input.container}
          inputContainerStyle={styles.input.inputContainer}
          inputStyle={styles.input.label}
          placeholderTextColor='#34495E'
          onChangeText={(text) => this.setState({ password: text })}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          clearTextOnFocus={true}
          leftIcon={
            <Icon
              name='key'
              size={icoSize}
              style={styles.icon.color}
            />
          }
          placeholder='รหัสผ่าน' />
        <Input
          containerStyle={styles.input.container}
          inputContainerStyle={styles.input.inputContainer}
          inputStyle={styles.input.label}
          placeholderTextColor='#34495E'
          onChangeText={(text) => this.setState({ rePassword: text })}
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry={true}
          clearTextOnFocus={true}
          leftIcon={
            <Icon
              name='key'
              size={icoSize}
              style={styles.icon.color}
            />
          }
          placeholder='รหัสผ่านอีกครั้ง' />
        <Text style={styles.error.password}>{this.state.error}</Text>
        {this.buttonLoader()}
      </ScrollView>
    )
  }
}

export default RegisterScreen;