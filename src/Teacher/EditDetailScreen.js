import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../styles'

const options = {
  title: 'เลือกรูปภาพ',
  takePhotoButtonTitle: 'ถ่ายจากกล้อง...',
  chooseFromLibraryButtonTitle: 'เลือกจากคลัง...'
}

class EditDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      title: 'แก้ไขข้อมูลส่วนตัว',
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
      fname: '',
      lname: '',
      email: '',
      telNum: '',
      avatar: ''
    }
  }

  componentDidMount() {
    this.getDetail()
    this.props.navigation.setParams({ save: this.saveDetail.bind(this) })
  }

  getDetail() {
    var fname = this.props.navigation.getParam('fname')
    var lname = this.props.navigation.getParam('lname')
    var email = this.props.navigation.getParam('email')
    var telNum = this.props.navigation.getParam('telNum')
    var avatar = this.props.navigation.getParam('avatar')
    this.setState({
      fname: fname,
      lname: lname,
      email: email,
      telNum: telNum,
      avatar: avatar
    })
  }

  saveDetail() {
    const { fname, lname, telNum } = this.state
    var uid = firebase.auth().currentUser.uid
    detail = firebase.database().ref('users/' + uid)
    detail.update({
      fname: fname,
      lname: lname,
      telNum: telNum
    }).then(() => {
      Alert.alert(
        'แจ้งเตือน',
        'บันทึกข้อมูลแล้ว.',
        [
          { text: 'ตกลง' },
        ],
        { cancelable: false },
      )
      this.props.navigation.goBack()
    })
  }

  _pickImage() {
    ImagePicker.showImagePicker(options, (res) => {
      this.uploadImage(res.uri)
    })
  }

  uploadImage(uri, mime = 'application/octet-stream') {
    return new Promise((resolve, reject) => {
      const imagePath = uri
      const uid = firebase.auth().currentUser.uid
      const imageRef = firebase
        .storage()
        .ref(uid)
        .child('avatar.jpg');
      let mime = 'image/jpg'

      imageRef
        .put(imagePath, { contentType: mime })
        .then(async () => {
          return imageRef.getDownloadURL()
            .then((url) => {
              console.log(url)
              this.setState({ avatar: url })
              this.saveUrl(url)
            })
        })
        .then(resolve)
        .catch(reject)
    })
  }

  saveUrl(url) {
    var uid = firebase.auth().currentUser.uid
    firebase.database().ref(`users/${uid}`)
      .update({ avatar: url })
      .then(() => {
        Alert.alert('อัพโหลดรูปโปรไฟล์เสร็จแล้ว!')
      })
  }

  render() {
    const { fname, lname, telNum, email } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        <Avatar
          source={{ uri: this.state.avatar }}
          size='xlarge'
          onEditPress={() => this._pickImage()}
          showEditButton
          rounded
          containerStyle={{ alignSelf: 'center', margin: 20 }}
        />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={fname}
          placeholder='ชื่อจริง'
          onChangeText={(text) => this.setState({ fname: text })}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={lname}
          placeholder='นามสกุล'
          onChangeText={(text) => this.setState({ lname: text })}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.input.borderWithFont}
          placeholderTextColor='gray'
          defaultValue={telNum}
          placeholder='เบอร์โทร'
          onChangeText={(text) => this.setState({ telNum: text })}
          keyboardType='phone-pad'
          autoCorrect={false} />
        <TextInput
          editable={false}
          style={styles.input.borderWithFont}
          defaultValue={email} />
      </ScrollView>
    )
  }
}

export default EditDetailScreen