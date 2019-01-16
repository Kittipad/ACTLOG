import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Avatar } from 'react-native-elements';
import firebase from 'react-native-firebase'
import styles from './styles'

class RegisterScreen extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      email: '',
      password: '',
    })
  }

  register = () => {
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => { alert("Successful , " + email + " " + password); })
      .catch((msgError) => { alert(msgError.message) })
  }

  render() {
    let icoSize = 30
    return (
      <ScrollView style={styles.common.scrollView}>
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({ email: text })}
          autoCorrect={false}
          autoCapitalize={false}
          clearTextOnFocus={true}
          keyboardType={'email-address'}
          leftIcon={
            <Icon
              name='user-alt'
              size={icoSize}
              color='white'
            />
          }
          placeholder={'อีเมลล์'} />
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          onChangeText={(text) => this.setState({ password: text })}
          autoCorrect={false}
          autoCapitalize={false}
          secureTextEntry={true}
          clearTextOnFocus={true}
          leftIcon={
            <Icon
              name='lock'
              size={icoSize}
              color='white'
            />
          }
          placeholder={'รหัสผ่าน'} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.register.bind(this)}>
          <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
        <Text>{this.state.email + this.state.password}</Text>
      </ScrollView>
    )
  }
}

export default RegisterScreen;