import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import {
  StackActions,
  NavigationActions,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import axios from 'axios'
import styles from './styles'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      userType: ''
    }
    //this.validAuthen()
  }

  async validAuthen() {
    const storedToken = await AsyncStorage.getItem('token')
    if (storedToken != null) {
      this.goHomeScreen()
    }
  }

  goHomeScreen() {
    const { username } = this.state
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: username
      })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  async onLoginPressed() {
    const { username, password, userType } = this.state
    const data = {
      username: username,
      password: password,
      userType: userType
    }

    axios.post('http://localhost:8082/api/v1/login', data)
      // axios.post('http://192.168.1.101:8082/api/v1/login', data)
      .then(async response => {
        const result = response.data
        if (result.result == 'success') {

          //save token
          await AsyncStorage.setItem('token', result.data)

          //show successful alert
          Alert.alert('เข้าสู่ระบบสำเร็จ', '',
            [
              { text: 'OK', onPress: () => this.goHomeScreen() }
            ])
        } else {
          Alert.alert('เข้าสู่ระบบผิดพลาดกรุณาลองใหม่')
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  onRegisterPressed() {
    this.props.navigation.navigate('Register')
  }

  render() {
    let icoSize = 30
    return (
      <View style={styles.common.container}>
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='user-alt'
              size={icoSize}
              color='white'
            />
          }
          placeholder='ชื่อผู้ใช้'
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true}
          keyboardType='email-address'
          onChangeText={(text) => this.setState({ username: text })} />
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='lock'
              size={icoSize}
              color='white'
            />
          }
          placeholder='รหัสผ่าน'
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.onLoginPressed.bind(this)}>
          <Text style={styles.common.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.onRegisterPressed.bind(this)}>
          <Text
            style={styles.common.buttonText}>
            สมัครสมาชิก
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen