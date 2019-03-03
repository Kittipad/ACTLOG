import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  View,
  Image
} from 'react-native'
import { Card } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../../styles';

class SaveVisitScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    var fname = navigation.getParam('fname')
    var lname = navigation.getParam('lname')
    return {
      title: fname + '  ' + lname,
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
      comment: '',
      vid: '',
      list: []
    }
  }

  componentDidMount() {
    this.getList()
    this.props.navigation.setParams({ save: this.saveVisit.bind(this) })
  }

  getList() {
    var items = []
    var suid = this.props.navigation.getParam('suid')
    var tuid = this.props.navigation.getParam('tuid')
    var key = this.props.navigation.getParam('key')
    var visit = firebase.database().ref('visit')
    console.log(`${suid} ${tuid} ${key}`)

    visit.orderByChild('tuid').equalTo(tuid)
      .once('value').then((snapshot) => {
        snapshot.forEach((child) => {
          if (suid == child.val().suid) {
            firebase.database().ref(`visit/${child.key}`)
              .once('value').then((snapshot) => {
                this.setState({
                  comment: snapshot.val().comment,
                  vid: child.key
                })
              })
          }
        })
      })
    firebase.database().ref(`visit/${key}/photos`)
      .once('value').then((snapshot) => {
        snapshot.forEach((child) => {
          console.log(child.val().photo)
          items.push({ photo: child.val().photo })
        })
        this.setState({ list: items })
      })
  }

  saveVisit() {
    const { comment, vid } = this.state
    var visit = firebase.database().ref(`visit/${vid}`)
    visit.update({
      comment: comment
    }).then(() => {
      Alert.alert(
        'แจ้งเตือน',
        'บันทึกข้อมูลสำเร็จ.',
        [
          { text: 'ตกลง' },
        ],
        { cancelable: false },
      )
      this.props.navigation.goBack()
    })
  }

  _pickImage() {
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
      const imageRef = firebase
        .storage()
        .ref(`visit/${key}`)
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
    firebase.database().ref(`visit/${key}/photos`)
      .push({ photo: url })
      .then(() => {
        Alert.alert('อัพโหลดเสร็จแล้ว.')
      })
  }

  render() {
    const { comment, vid, list } = this.state
    // console.log(list)
    return (
      <ScrollView style={styles.view.scrollView}>
        {/* <Text>{vid}</Text> */}
        <TextInput
          style={styles.input.actField}
          multiline={true}
          placeholderTextColor='gray'
          defaultValue={comment}
          placeholder='แสดงความคิดเห็น'
          onChangeText={(text) => this.setState({ comment: text })}
          autoCapitalize='none'
          autoCorrect={false}>
        </TextInput>
        <TouchableOpacity
          onPress={() => this._pickImage()}
          style={styles.button.sub}>
          <Text style={styles.button.subLabel}>อัพโหลดรูป</Text>
        </TouchableOpacity>
        {
          list.map((user, i) => {
            return (
              <Card key={i}>
                <Image
                  style={{ width: '100%', height: 300 }}
                  source={{ uri: user.photo }} />
              </Card>
            )
          })
        }
      </ScrollView>
    )
  }
}

export default SaveVisitScreen;