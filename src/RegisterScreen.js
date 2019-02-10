import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
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
          style={styles.common.button}>
          <ActivityIndicator size='large' color='#5499C7' />
        </TouchableOpacity>
      )
    }
    return (
      <TouchableOpacity
        style={styles.common.button}
        onPress={this.onRegisterPressed.bind(this)}>
        <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
      </TouchableOpacity>
    )
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
          autoCapitalize='none'
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
          autoCapitalize='none'
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
        {this.buttonLoader()}
      </ScrollView>
    )
  }
}

export default RegisterScreen;