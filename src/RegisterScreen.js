import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  View,
} from 'react-native';
import {
  StackActions,
  NavigationActions
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Avatar } from 'react-native-elements';
import axios from 'axios'
import firebase from 'react-native-firebase'
// import firebase from 'firebase'
import styles from './styles'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBHwakqkRXJ94foc8_unxo-IiI0_eo_zsQ",
  authDomain: "actlog-912c1.firebaseapp.com",
  databaseURL: "https://actlog-912c1.firebaseio.com",
  projectId: "actlog-912c1",
  storageBucket: "actlog-912c1.appspot.com",
  messagingSenderId: "550723713394"
}
firebase.initializeApp(config)

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
          keyboardType={'email-address'}
          leftIcon={
            <Icon
              name='user-alt'
              size={icoSize}
              color='white'
            />
          }
          placeholder={this.state.email} />
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
          placeholder={this.state.password} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.register.bind(this)}>
          <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
        </TouchableOpacity>
        <Text>{this.state.email + this.state.password}</Text>
      </ScrollView>
    )
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     username: '',
  //     password: '',
  //     userType: ''
  //   }
  // }

  // async onRegisterPressed() {
  //   try {
  //     const { username, password, userType } = this.state
  //     const data = {
  //       username: username,
  //       password: password,
  //       userType: userType
  //     }

  //     axios.post('http://localhost:8082/api/v1/register', data)
  //       // axios.post('http://192.168.1.101:8082/api/v1/register', data)
  //       .then((response) => {
  //         const result = response.data.result
  //         if (result == 'success') {
  //           Alert.alert('Register Successful', '',
  //             [
  //               { text: 'OK', onPress: () => this.props.navigation.goBack() }
  //             ])
  //         } else {
  //           Alert.alert('Register Failed')
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //         Alert.alert(JSON.stringify(error))
  //       })
  //   } catch (error) {
  //   }
  // }
  //
  // render() {
  //   let icoSize = 30
  //   return (
  //     <ScrollView
  //       style={styles.common.scrollView}>
  //       <Avatar
  //         containerStyle={styles.detail.avatar}
  //         rounded
  //         size='xlarge'
  //         source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }} />
  //       <Input
  //         inputStyle={styles.common.inputText}
  //         containerStyle={styles.common.input}
  //         inputContainerStyle={styles.common.input_}
  //         placeholderTextColor='white'
  //         onChangeText={(text) => this.setState({ username: text })}
  //         autoCorrect={false}
  //         autoCapitalize={false}
  //         keyboardType={'email-address'}
  //         leftIcon={
  //           <Icon
  //             name='user-alt'
  //             size={icoSize}
  //             color='white'
  //           />
  //         }
  //         placeholder='ชื่อผู้ใช้' />
  //       <Input
  //         inputStyle={styles.common.inputText}
  //         containerStyle={styles.common.input}
  //         inputContainerStyle={styles.common.input_}
  //         placeholderTextColor='white'
  //         onChangeText={(text) => this.setState({ password: text })}
  //         autoCorrect={false}
  //         autoCapitalize={false}
  //         secureTextEntry={true}
  //         leftIcon={
  //           <Icon
  //             name='lock'
  //             size={icoSize}
  //             color='white'
  //           />
  //         }
  //         placeholder='รหัสผ่าน' />
  //       <TouchableOpacity
  //         style={styles.common.button}
  //       // onPress={this.onRegisterPressed.bind(this)}
  //       >
  //         <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
  //       </TouchableOpacity>
  //     </ScrollView>
  //   );
  // }
}

export default RegisterScreen;