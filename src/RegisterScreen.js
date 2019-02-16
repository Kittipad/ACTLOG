import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator
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
      loading: false
    })
  }

  onRegisterPressed() {
    var uid
    const { email, password } = this.state;
    this.setState({ loading: true })
    firebaseAuth = firebase.auth()
    firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        uid = firebaseAuth.currentUser.uid
        firebase.database().ref('users/' + uid).set({
          uid: uid,
          email: email,
          fname: 'ชื่อจริง',
          lname: 'นามสกุล',
          telNum: 'เบอร์โทร',
          type: 'none'
        }).then(() => {
          this.setState({ loading: false })
          Alert.alert('สมัครสมาชิกสำเร็จ', '', [
            { text: 'OK', onPress: () => this.props.navigation.goBack() }
          ])
        })
      })
      .catch((msgError) => {
        this.setState({ loading: false })
        Alert.alert(msgError.message)
      })
  }

  buttonLoader() {
    const { loading } = this.state
    if (loading) {
      return (
        <TouchableOpacity
          style={styles.button.main}>
          <ActivityIndicator size='large' color='white' />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.button.main}
        onPress={this.onRegisterPressed.bind(this)}>
        <Text style={styles.button.label}>สมัครสมาชิก</Text>
      </TouchableOpacity>
    )
  }

  render() {
    var icoSize = 30
    return (
      <ScrollView style={styles.view.scrollView}>
        <Input
          containerStyle={styles.input.container}
          inputContainerStyle={styles.input.border}
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
              style={styles.icon.input}
            />
          }
          placeholder={'อีเมลล์'} />
        <Input
          containerStyle={styles.input.container}
          inputContainerStyle={styles.input.border}
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
              style={styles.icon.input}
            />
          }
          placeholder={'รหัสผ่าน'} />
        {this.buttonLoader()}
      </ScrollView>
    )
  }
}

export default RegisterScreen;