import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import firebase from 'react-native-firebase'
import styles from '../../styles'

class AddActivity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      morning: '',
      afternoon: ''
    }
  }

  componentDidMount() {
    this.getActivity()
  }

  saveActivity() {
    const { morning, afternoon } = this.state
    var { navigation } = this.props;
    var uid, timeTable
    var date = navigation.getParam('date');
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('users/' + uid + '/timeTable')
    timeTable.child(date).update({
      morning: morning,
      afternoon: afternoon,
    }).then(() => {
      Alert.alert('แก้ไขแล้ว')
      this.props.navigation.goBack()
    })
  }

  getActivity() {
    var { navigation } = this.props;
    var morning = navigation.getParam('morning');
    var afternoon = navigation.getParam('afternoon');
    this.setState({
      morning: morning,
      afternoon: afternoon
    })
  }

  render() {
    const { morning, afternoon } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='black'
          defaultValue={morning}
          onChangeText={(text) => this.setState({ morning: text })}
          multiline={true}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.activity.input}
          placeholderTextColor='black'
          defaultValue={afternoon}
          onChangeText={(text) => this.setState({ afternoon: text })}
          multiline={true}
          autoCapitalize='none'
          autoCorrect={false} />
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.saveActivity.bind(this)}>
          <Text style={styles.common.buttonText}>บันทึก</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default AddActivity;