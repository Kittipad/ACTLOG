import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import styles from '../../styles'

class AddTimeTableScreen extends Component {
  render() {
    let icoSize = 30
    return (
      <View style={styles.common.container}>
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='clock'
              size={icoSize}
              color='white'
            />
          }
          placeholder='เวลามา'
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true} />
        <Input
          inputStyle={styles.common.inputText}
          containerStyle={styles.common.input}
          inputContainerStyle={styles.common.input_}
          placeholderTextColor='white'
          leftIcon={
            <Icon
              name='clock'
              size={icoSize}
              color='white'
            />
          }
          placeholder='เวลากลับ'
          autoCapitalize={false}
          autoCorrect={false}
          clearTextOnFocus={true} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={() => this.navigation.goBack()}>
          <Text style={styles.common.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddTimeTableScreen;