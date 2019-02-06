import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import {
  StackActions,
  NavigationActions
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from 'react-native-firebase'
import styles from '../styles'

class HomeScreen extends Component {

  UserType() {
    this.props.navigation.navigate('AdminUserType')
  }

  StudentList() {
    this.props.navigation.navigate('AdminListStd')
  }

  TeacherType() {
    this.props.navigation.navigate('AdminListTeacher')
  }

  Logout() {
    firebase.auth().signOut().then(() => {
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
          onPress={() => this.UserType(this)}>
          <Icon
            name='list-ul'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>เพิ่มประเภทผู้ใช้</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.StudentList(this)}>
          <Icon
            name='list-ul'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>รายชื่อนักศึกษา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.home.menu}
          onPress={() => this.TeacherType(this)}>
          <Icon
            name='list-ul'
            size={icoSize}
            color='white'
          />
          <Text style={styles.common.label}>รายชื่ออาจารย์</Text>
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