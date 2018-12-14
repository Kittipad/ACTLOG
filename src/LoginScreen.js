import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  StackActions,
  NavigationActions,
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import styles from './styles'

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'เข้าสู่ระบบ',
  }

  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  Login() {
    var username = this.state.user
    if (username == 'Student' || username == 'Teacher' || username == 'Staff') {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
          routeName: this.state.user,
          params: { user: this.state.user }
        })]
      })
      this.props.navigation.dispatch(resetAction)
    } else {
      Alert.alert('ชื่อผู้ใช้หรือรหัสผ่านผิด')
    }
  }

  Register() {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <ImageBackground
        style={styles.common.container}
        source={require('./img/bg.png')}>
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='user-alt'
              size={30}
              color='white'
            />
          }
          placeholder='ชื่อผู้ใช้'
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true}
          keyboardType='email-address'
          onChangeText={(text) => this.setState({ user: text })} />
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='lock'
              size={30}
              color='white'
            />
          }
          placeholder='รหัสผ่าน'
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true}
          secureTextEntry={true} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={() => this.Login(this)}>
          <Text style={styles.common.buttonText}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.common.button}
          onPress={() => this.Register(this)}>
          <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default LoginScreen