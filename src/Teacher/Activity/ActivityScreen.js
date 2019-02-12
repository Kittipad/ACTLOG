import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {
  Card,
} from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class ActivityScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var suid, table, items = []
    suid = this.props.navigation.getParam('suid')
    table = firebase.database().ref('timeTable/' + suid)
    table.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        // console.log(child.key)
        val = child.val()
        key = child.key
        items.push({
          date: val.date,
          timeCome: val.timeCome,
          timeBack: val.timeBack,
          morning: val.morning,
          afternoon: val.afternoon,
          key: key
        })
        this.setState({
          list: items
        })
      })
    })
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.slice(0).reverse().map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.activity.label}>{user.date}</Text>
                    <Text style={styles.activity.label}>{user.timeCome} : {user.timeBack}</Text>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('TeachViewActivity', {
                        ACT: user.morning,
                        date: user.date
                      })}
                      style={styles.common.card}>
                      <Text>ดูกิจกรรมเช้า</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('TeachViewActivity', {
                        ACT: user.afternoon,
                        date: user.date
                      })}
                      style={styles.common.card}>
                      <Text>ดูกิจกรรมบ่าย</Text>
                    </TouchableOpacity>
                  </View>
                </Card>
              );
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default ActivityScreen;