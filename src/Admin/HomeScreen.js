import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../styles'

class HomeScreen extends Component {
  UserType() {
    this.props.navigation.navigate('AdminUserType')
  }

  StudentList() {
    this.props.navigation.navigate('AdminListStd')
  }

  TeacherList() {
    this.props.navigation.navigate('AdminListTeacher')
  }

  render() {
    let icoSize = 100
    return (
      <View style={styles.view.home}>
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.UserType(this)}>
          <Icon
            name='user-plus'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>เพิ่มประเภทผู้ใช้</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.StudentList(this)}>
          <Icon
            name='user-graduate'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>รายชื่อนักศึกษา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.TeacherList(this)}>
          <Icon
            name='chalkboard-teacher'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>รายชื่ออาจารย์</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreen;