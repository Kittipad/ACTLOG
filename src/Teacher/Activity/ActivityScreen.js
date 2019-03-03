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
      list: [],
      photo: []
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
    var suid, table, items = [], photo = []
    suid = this.props.navigation.getParam('suid')
    table = firebase.database().ref('timeTable/' + suid)
    table.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        key = child.key
        console.log(key)
        items.push({
          date: val.date,
          timeCome: val.timeCome,
          timeBack: val.timeBack,
          morning: val.morning,
          afternoon: val.afternoon,
          key: key,
          suid: suid
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
      <ScrollView style={styles.view.scrollView}>
        <View style={styles.view.container}>
          {
            list.slice(0).reverse().map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards}>
                  <View style={styles.view.headerContainer}>
                    <Text style={styles.label.header}>{user.date}</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity style={styles.button.timeButtonLeft}>
                        <Text style={styles.label._sub}>{user.timeCome}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.button.timeButtonRight}>
                        <Text style={styles.label._sub}>{user.timeBack}</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('TeachViewActivity', {
                        ACT: user.morning,
                        date: user.date,
                        key: user.key,
                        suid: user.suid
                      })}
                      style={styles.button.sub}>
                      <Text style={styles.button.subLabel}>ดูกิจกรรมเช้า</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('TeachViewActivity', {
                        ACT: user.afternoon,
                        date: user.date,
                        key: user.key,
                        suid: user.suid
                      })}
                      style={styles.button.sub}>
                      <Text style={styles.button.subLabel}>ดูกิจกรรมบ่าย</Text>
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