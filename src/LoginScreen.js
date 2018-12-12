import React, { Component } from 'react';
import {
  View,
  Text,
  Button
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

  goHomeScreen() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.common.container}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

export default LoginScreen