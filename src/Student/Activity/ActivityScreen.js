import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from 'react-native'
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { NavigationEvents } from 'react-navigation'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class ActivityScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      headerTitle: 'บันทึกกิจกรรม',
      headerRight: (
        <TouchableOpacity
          onPress={() => params.edit()}
          style={{ marginRight: 15 }}>
          {<Icon name='edit' size={20} color='white' />}
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      key: '',
      date: '',
      morning: '',
      afternoon: '',
    }
  }

  componentDidMount() {
    const { date, morning, afternoon, key } = this.state
    this.getList()
    this.props.navigation.setParams({
      edit: () => this.props.navigation.navigate('StudentAddActivity', {
        key: key,
        date: date,
        morning: morning,
        afternoon: afternoon
      })
    })
  }

  getList() {
    var uid, table
    var date = this.props.navigation.getParam('date')
    var key = this.props.navigation.getParam('key')
    console.log(date)
    console.log(key)
    uid = firebase.auth().currentUser.uid
    table = firebase.database().ref('timeTable/' + uid + '/' + key)
    table.once('value').then(snapshot => {
      child = snapshot.val()
      this.setState({
        key: key,
        date: date,
        morning: child.morning,
        afternoon: child.afternoon
      })
    })
  }

  render() {
    const { date, morning, afternoon, key } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <View style={styles.view.container}>
          <Card containerStyle={styles.view.cards}>
            <View style={styles.view.headerContainer}>
              <Text style={styles.label.headerTimeTable}>{date}</Text>
              <Text style={styles.label.actLabel}>ช่วงเช้า</Text>
              <Text style={styles.label.subAct}>{morning}</Text>
              <Text style={styles.label.actLabel}>ช่วงบ่าย</Text>
              <Text style={styles.label.subAct}>{afternoon}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

export default ActivityScreen;