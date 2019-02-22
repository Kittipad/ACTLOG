import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import {
  StackActions,
  NavigationActions
} from 'react-navigation'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../styles'

class HomeScreen extends Component {

  Visit() {
    this.props.navigation.navigate('TeachVisit')
  }

  Detail() {
    this.props.navigation.navigate('TeachDetail')
  }

  AddStudent() {
    this.props.navigation.navigate('TeachAddStudent')
  }

  Logout() {
    firebase.auth().signOut().then(() => {
      console.log('Logout...')
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Login' })],
      })
      this.props.navigation.dispatch(resetAction);
    })
  }

  render() {
    var icoSize = 100
    return (
      <View style={styles.view.home}>
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.Visit(this)}>
          <Icon
            name='book'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>บันทึกนิเทศ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.AddStudent(this)}>
          <Icon
            name='user-plus'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>เพิ่มนักศึกษา</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;