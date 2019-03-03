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
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class EditScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    var fname = navigation.getParam('fname')
    var lname = navigation.getParam('lname')
    return {
      title: fname + ' ' + lname,
      headerRight: (
        <TouchableOpacity
          onPress={() => Alert.alert(
            'แจ้งเตือน',
            'แน่ใจที่จะบันทึกข้อมูล ?',
            [
              {
                text: 'ยกเลิก',
                style: 'cancel',
              },
              { text: 'ตกลง', onPress: () => params.save() },
            ],
            { cancelable: false },
          )}
          style={styles.button.headerRight}>
          <Icon name='save' size={30} color='white' />
        </TouchableOpacity>
      )
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
    this.props.navigation.setParams({ save: this.saveDetail.bind(this) })
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
          sidStat: true,
          vStat: true
        })
      }
      Alert.alert('แจ้งเตือ', 'แก้ไขข้อมูลแล้ว.', [
        { text: 'OK', onPress: () => this.props.navigation.goBack() }
      ])
    })
  }

  render() {
    return (
      <ScrollView style={styles.view.scrollView}>
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