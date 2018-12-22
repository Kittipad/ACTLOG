import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  StackActions,
  NavigationActions
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Avatar } from 'react-native-elements';
import axios from 'axios'
import styles from './styles'

class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      userType: ''
    }
  }

  async onRegisterPressed() {
    try {
      const { username, password, userType } = this.state
      const data = {
        username: username,
        password: password,
        userType: userType
      }

      axios.post('http://192.168.1.101:8082/api/v1/register', data)
        .then((response) => {
          const result = response.data.result
          if (result == 'success') {
            Alert.alert('Register Successful', '',
              [
                { text: 'OK', onPress: () => this.props.navigation.goBack() }
              ])
          } else {
            Alert.alert('Register Failed')
          }
        })
        .catch(function (error) {
          console.log(error)
          Alert.alert(JSON.stringify(error))
        })
    } catch (error) {
    }
  }

  render() {
    let icoSize = 30
    return (
      <ScrollView
        style={styles.common.scrollView}>
        <Avatar
          containerStyle={styles.detail.avatar}
          rounded
          size='xlarge'
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }} />
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({ username: text })}
          autoCorrect={false}
          autoCapitalize={false}
          keyboardType={'email-address'}
          leftIcon={
            <Icon
              name='user-alt'
              size={icoSize}
              color='white'
            />
          }
          placeholder='ชื่อผู้ใช้' />
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({ password: text })}
          autoCorrect={false}
          autoCapitalize={false}
          secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size={icoSize}
              color='white'
            />
          }
          placeholder='รหัสผ่าน' />
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.onRegisterPressed.bind(this)}>
          <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default RegisterScreen;