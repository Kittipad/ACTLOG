import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import styles from '../../styles';

class SaveCommentScreen extends Component {
  render() {
    const comment = [
      {
        staff: 'ผู้ให้การฝึก',
        boss: 'หัวหน้าหรือผู้จัดการ',
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='black'
          placeholder='ผู้ให้การฝึก'
          multiline={true}
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true} />
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='black'
          placeholder='หัวหน้าหรือผู้จัดการ'
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

export default SaveCommentScreen;