import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert,
} from 'react-native'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class EditScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    var fname = navigation.getParam('fname')
    var lname = navigation.getParam('lname')
    return {
      title: fname + ' ' + lname
    }
  }

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
      var student
      if (type == 'Student') {
        student = firebase.database().ref('users/' + uid)
        student.update({
          sid: 'รหัสนักศึกษา',
          group: 'กลุ่ม',
          subject: 'เทคโนโลยีสารสนเทศ',
          date: 'ระยะเวลาฝึกงาน',
          sidStat: true
        })
      }
      Alert.alert('แก้ไขประเภทเรียบร้อย', '', [
        { text: 'OK', onPress: () => this.props.navigation.goBack() }
      ])
    })
  }

  render() {
    return (
      <ScrollView style={styles.view.scrollView}>
        <TouchableOpacity
          style={styles.button.sub}
          onPress={this.saveDetail.bind(this)}>
          <Text style={styles.button.subLabel}>บันทึก</Text>
        </TouchableOpacity>
        <View style={styles.view.container}>
          <Picker
            selectedValue={this.state.type}
            mode='dropdown'
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