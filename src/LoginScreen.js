import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  StackActions,
  NavigationActions,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import firebase from 'react-native-firebase'
import styles from './styles'

const androidConfig = {
  clientId: '550723713394-og6kc15vet3p0jjn8kt2fv3krj0iqbcs.apps.googleusercontent.com',
  appId: '1:550723713394:android:811fdcc2903439b6',
  apiKey: 'AIzaSyDZFDuxHaTCDsmsva_pnKTsK7j1G3-KIOI',
  databaseURL: 'https://actlog-912c1.firebaseio.com',
  storageBucket: 'actlog-912c1.appspot.com',
  messagingSenderId: '550723713394',
  projectId: 'actlog-912c1',
  persistence: true,
}

const iosConfig = {
  clientId: '550723713394-71e24irj8p8vcp3p4vc084mt1t6tllhe.apps.googleusercontent.com',
  appId: '1:550723713394:ios:9c0d881c6cd71f82',
  apiKey: 'AIzaSyASvSBKqGonAQIA8Fd6FNgtCyOBjr3eCZs',
  databaseURL: 'https://actlog-912c1.firebaseio.com',
  storageBucket: 'actlog-912c1.appspot.com',
  messagingSenderId: '550723713394',
  projectId: 'actlog-912c1',
  persistence: true,
}
firebase.initializeApp(Platform.OS === 'ios' ? iosConfig : androidConfig)

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
        alert("Successful , " + email + " " + password),
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