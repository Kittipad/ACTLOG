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
        <Input
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
          placeholder='Username'
          autoCapitalize={false}
          autoCorrect={false}
          keyboardType='email-address'
          onChangeText={(text) => this.setState({ user: text })} />
        <Input
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
          placeholder='Password'
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={true} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={() => this.Login(this)}>
          <Text style={styles.common.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.common.button}
          onPress={() => this.Register(this)}>
          <Text style={styles.common.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen