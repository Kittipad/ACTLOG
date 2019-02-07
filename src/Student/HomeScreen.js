import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  StackActions,
  NavigationActions
} from 'react-navigation'

import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles'

class HomeScreen extends Component {

  TimeTable() {
    this.props.navigation.navigate('StudentTimeTable')
  }

  Visit() {
    this.props.navigation.navigate('StudentVisit')
  }

  Detail() {
    this.props.navigation.navigate('StudentDetail')
  }

  Logout() {
    firebase.auth().signOut()
      .then(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
      })
  }

  render() {
    let icoSize = 100
    return (
      <View style={styles.home.container}>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.TimeTable()}>
          <Icon
            name='table'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>ตารางลงเวลา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.Visit(this)}>
          <Icon
            name='suitcase-rolling'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>ดูผลการนิเทศ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.Detail(this)}>
          <Icon
            name='info-circle'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>ข้อมูลส่วนตัว</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.Logout()}>
          <Icon
            name='sign-out-alt'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>ออกจากระบบ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen