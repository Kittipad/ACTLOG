import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from 'react-native-firebase'
import styles from '../../styles'

class EditScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      type: ''
    }
  }

  componentDidMount() {
    this.getDetail()
  }

  getDetail() {
    var uid = this.props.navigation.getParam('uid')
    this.setState({
      uid: uid,
      type: ''
    })
  }

  saveDetail() {
    const { uid, type } = this.state
    var firebaseDB, newType
    firebaseDB = firebase.database()
    newType = firebaseDB.ref('users/' + uid)
    newType.update({
      type: type
    }).then(() => {
      Alert.alert('แก้ไขประเภทเรียบร้อย')
      this.props.navigation.navigate('Admin')
    })
  }

  render() {
    return (
      <ScrollView style={styles.common.scrollView}>
        <TouchableOpacity
          style={styles.common.button}
          onPress={this.saveDetail.bind(this)}>
          <Text style={styles.common.buttonText}>บันทึก</Text>
        </TouchableOpacity>
        <View style={styles.common.container}>
          <Picker
            selectedValue={this.state.type}
            style={{
              height: 50, width: '90%', alignSelf: 'center',
            }}
            onValueChange={(value, index) =>
              this.setState({ type: value })
            }>
            <Picker.Item label="เลือกประเภท" />
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Teacher" value="Teacher" />
            <Picker.Item label="None" value="none" />
          </Picker>
        </View>
      </ScrollView>
    );
  }
}

export default EditScreen;