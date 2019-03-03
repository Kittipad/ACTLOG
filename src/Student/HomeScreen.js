import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../styles'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
  }

  TimeTable() {
    this.props.navigation.navigate('StudentTimeTable')
  }

  Visit() {
    this.props.navigation.navigate('StudentVisit')
  }

  upload() {
    var storage = firebase.storage()
    var pathReference = storage.ref('uploads/logo.png')
    pathReference.getDownloadURL().then((url) => {
      Alert.alert(url)
      ref.push().set({
        imgurl: url
      })
      this.setState({ img: imgurl })
    })
  }

  render() {
    var icoSize = 100
    return (
      <View style={styles.view.home} >
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.TimeTable()}>
          <Icon
            name='table'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>ตารางลงเวลา</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon.homeMenuContainer}
          onPress={() => this.Visit(this)}>
          <Icon
            name='suitcase-rolling'
            size={icoSize}
            style={styles.icon.color}
          />
          <Text style={styles.label.homeMenu}>ดูผลการนิเทศ</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => this.upload()}
          style={styles.icon.homeMenuContainer}>
          <Text style={styles.label.homeMenu}>Upload Pic</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
}

export default HomeScreen