import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image
} from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class AddActivity extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: navigation.getParam('date'),
      headerRight: (
        <TouchableOpacity
          onPress={() => Alert.alert(
            'แจ้งเตือน',
            'แน่ใจที่จะแก้ไขกิจกรรม ?',
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
          {<Icon name='save' size={30} color='white' />}
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      morning: '',
      afternoon: ''
    }
  }

  componentDidMount() {
    this.getActivity()
    this.props.navigation.setParams({ save: this.saveActivity.bind(this) })
  }

  saveActivity() {
    const { morning, afternoon } = this.state
    var { navigation } = this.props
    var uid, timeTable
    var key = navigation.getParam('key')
    console.log(key)
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('timeTable/' + uid + '/' + key)
    console.log(key)
    timeTable.update({
      morning: morning,
      afternoon: afternoon,
    }).then(() => {
      Alert.alert(
        'แจ้งเตือน',
        'แก้ไขกิจกรรมแล้ว.',
        [
          { text: 'ตกลง' },
        ],
        { cancelable: false },
      )
      this.props.navigation.goBack()
    })
  }

  getActivity() {
    var { navigation } = this.props
    var date = navigation.getParam('date')
    var morning = navigation.getParam('morning')
    var afternoon = navigation.getParam('afternoon')

    this.setState({
      date: date,
      morning: morning,
      afternoon: afternoon,
    })
  }

  _pickImage() {
    var list = []
    ImagePicker.openPicker({
      width: 1280,
      height: 720,
      multiple: true,
      mediaType: 'photo'
    }).then((img) => {
      console.log(img)
      img.forEach((e) => {
        console.log(e.path)
        this.uploadImage(e.path, new Date().getTime())
      })
    })
  }

  uploadImage(uri, time, mime = 'application/octet-stream') {
    return new Promise((resolve, reject) => {
      var { navigation } = this.props
      var key = navigation.getParam('key')
      const imagePath = uri
      const uid = firebase.auth().currentUser.uid
      const imageRef = firebase
        .storage()
        .ref(`users/${uid}/${key}`)
        .child(time)
      let mime = 'image/jpg'

      imageRef
        .put(imagePath, { contentType: mime })
        .then(async () => {
          return imageRef.getDownloadURL()
            .then((url) => {
              console.log(url)
              this.saveUrl(url, key)
            })
        })
        .then(resolve)
        .catch(reject)
    })
  }

  saveUrl(url, key) {
    var uid = firebase.auth().currentUser.uid
    firebase.database().ref(`timeTable/${uid}/${key}/photos`)
      .push({ photo: url })
      .then(() => {
        Alert.alert('อัพโหลดเสร็จแล้ว.')
      })
  }

  render() {
    const { morning, afternoon } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        <TextInput
          style={styles.input.actField}
          placeholderTextColor='black'
          defaultValue={morning}
          onChangeText={(text) => this.setState({ morning: text })}
          multiline={true}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.input.actField}
          placeholderTextColor='black'
          defaultValue={afternoon}
          onChangeText={(text) => this.setState({ afternoon: text })}
          multiline={true}
          autoCapitalize='none'
          autoCorrect={false} />
        <TouchableOpacity
          onPress={() => this._pickImage()}
          style={styles.button.main}>
          <Text style={styles.button.mainLabel}>อัพโหลดรูป</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default AddActivity;