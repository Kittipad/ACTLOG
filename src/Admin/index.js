import React, { Component } from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  StackActions,
  NavigationActions,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'

import AdminHome from './HomeScreen'

class Logout extends Component {
  Logout() {
    firebase.auth().signOut().then(() => {
      console.log('Logout...')
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      })
      this.props.navigation.dispatch(resetAction)
    })
  }
  render() {
    return [
      this.Logout()
    ]
  }
}

var iconSize = 40
const TabStack = createBottomTabNavigator({
  AdminHome: {
    screen: AdminHome,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          size={iconSize}
          color={tintColor} />
      )
    }
  },
  AdminLogout: {
    screen: Logout,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="sign-out-alt"
          size={iconSize}
          color={tintColor} />
      )
    }
  }
}, {
    initialRouteName: 'AdminHome',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#34495E'
    }
  })

export default createAppContainer(TabStack)