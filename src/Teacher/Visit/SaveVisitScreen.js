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
          onPress={() => params.save()}
          style={{ marginRight: 15 }}>
          <Icon name='save' size={20} color='white' />
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
    // console.log(suid)
    var users
    users = firebase.database().ref('visit')
    users = users.orderByChild('tuid').equalTo(tuid)
    users.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        val = child.val()
        var key = child.key
        console.log(key)
        if (suid == val.suid) {
          this.setState({
            comment: val.comment,
            vid: key
          })
        }
      })
    })
    // console.log(tuid)
  }

  saveVisit() {
    const { comment, vid } = this.state
    var visit = firebase.database().ref('visit/' + vid)
    visit.update({
      comment: comment
    }).then(() => {
      Alert.alert('บันทึกสำเร็จ')
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