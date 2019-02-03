import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  StackActions,
  NavigationActions
} from 'react-navigation'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles'

class HomeScreen extends Component {

  Visit() {
    this.props.navigation.navigate('TeachVisit')
  }

  Actvity() {
    this.props.navigation.navigate('TeachActivity')
  }

  Detail() {
    this.props.navigation.navigate('TeachDetail')
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
          onPress={() => this.Visit(this)}>
          <Icon
            name='book'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>บันทึกนิเทศ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.Actvity(this)}>
          <Icon
            name='list-ul'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>ตรวจกิจกรรม</Text>
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
            name='power-off'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>ออกจากระบบ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;