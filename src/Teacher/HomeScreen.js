import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles'

class HomeScreen extends Component {

  Visit() {
    this.props.navigation.navigate('Visit')
  }

  Actvity() {
    this.props.navigation.navigate('Activity')
  }

  Detail() {
    this.props.navigation.navigate('Detail')
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
          onPress={() => Alert.alert('Logout Pressed')}>
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