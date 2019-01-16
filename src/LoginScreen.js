import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  StackActions,
  NavigationActions,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import firebase from 'react-native-firebase'
import styles from './styles'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  goHomeScreen() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: 'Student'
      })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  onLoginPress = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.goHomeScreen()
      })
      .catch((msgError) => { alert(msgError.message); });
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
          onChangeText={(text) => this.setState({ email: text })} />
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
          onPress={this.onLoginPress.bind(this)}>
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