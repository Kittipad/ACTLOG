import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  View
} from 'react-native'
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
      vid: ''
    }
  }

  componentDidMount() {
    this.getList()
    this.props.navigation.setParams({ save: this.saveVisit.bind(this) })
  }

  getList() {
    var suid = this.props.navigation.getParam('suid')
    var tuid = this.props.navigation.getParam('tuid')
    // console.log(`${suid} ${tuid}`)
    var visit = firebase.database().ref('visit')

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

  render() {
    const { comment, vid } = this.state
    // console.log(list)
    return (
      <ScrollView style={styles.view.scrollView}>
        {/* <Text>{vid}</Text> */}
        <TextInput
          style={styles.input.actField}
          multiline={true}
          placeholderTextColor='gray'
          defaultValue={comment}
          placeholder='แสดงความคิดดเห็น'
          onChangeText={(text) => this.setState({ comment: text })}
          autoCapitalize='none'
          autoCorrect={false}>
        </TextInput>
      </ScrollView>
    )
  }
}

export default SaveVisitScreen;