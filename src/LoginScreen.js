import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
} from 'react-native';
import {
  StackActions,
  NavigationActions,
} from 'react-navigation';
import styles from './styles'

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
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
      Alert.alert('invalid\n username or password')
    }
  }

  Register() {
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.common.container}>
        <TextInput
          style={styles.common.input}
          placeholder='Username'
          clearTextOnFocus={true}
          autoCapitalize={false}
          autoCorrect={false}
          onChangeText={(text) => this.setState({ user: text })} />
        <TextInput
          style={styles.common.input}
          placeholder='Password'
          clearTextOnFocus={true}
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={true} />
        <Button
          title='Login'
          onPress={() => this.Login(this)} />
        <Button
          title='Register'
          onPress={() => this.Register(this)} />
      </View>
    );
  }
}

export default LoginScreen