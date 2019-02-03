import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
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
      type: '',
      loading: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.getUserType()
      }
    })
  }

  onLoginPress() {
    this.setState({ loading: true })
    const { email, password } = this.state;
    console.log(email + ' ' + password)
    if (!email && !password) {
      this.setState({ loading: false })
      Alert.alert('กรุณาป้อนข้อมูล')
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          this.getUserType()
        })
        .catch((msgError) => {
          this.setState({ loading: false })
          alert(msgError.message)
        })
    }
  }

  getUserType() {
    var data
    var uid = firebase.auth().currentUser.uid
    var users = firebase.database().ref('users/' + uid + '/type')
    users.once('value').then(snapshot => {
      data = snapshot.val()
      this.setState({ type: data })
      console.log(data)
      if (this.state.type == data) {
        this.goHomeScreen()
      }
    })
  }

  goHomeScreen() {
    const { type } = this.state
    if (type) {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({
          routeName: type
        })]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  onRegisterPressed() {
    this.props.navigation.navigate('Register')
  }

  DBrelation() {
    this.props.navigation.navigate('DBRelateTest')
  }

  Loader() {
    if (this.state.loading) {
      return (
        <TouchableOpacity
          style={styles.common.button}>
          <ActivityIndicator size='large' color='#5499C7' />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.common.button}
        onPress={this.onLoginPress.bind(this)}>
        <Text style={styles.common.buttonText}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>
    )
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
          placeholder='อีเมลล์'
          autoCapitalize='none'
          autoCorrect={false}
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
          autoCapitalize='none'
          autoCorrect={false}
          clearTextOnFocus={true}
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })} />
        {this.Loader()}
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.onRegisterPressed.bind(this)}>
          <Text
            style={styles.common.buttonText}>
            สมัครสมาชิก
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.common.button}
          onPress={this.DBrelation.bind(this)}>
          <Text
            style={styles.common.buttonText}>
            DB relation
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default LoginScreen