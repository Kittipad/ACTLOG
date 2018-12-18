import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import styles from '../../styles'

class AddActivity extends Component {
  render() {
    return (
      <ScrollView style={styles.common.scrollView}>
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='black'
          placeholder='ใส่ข้อมูลช่วงเช้า'
          multiline={true}
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true} />
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='black'
          placeholder='ใส่ข้อมูลช่วงบ่าย'
          multiline={true}
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={() => Alert.alert('Saved')}>
          <Text style={styles.common.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default AddActivity;