import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles';

class TimeTableScreen extends Component {

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
    var uid, usersRef, table, child, items = []
    uid = firebase.auth().currentUser.uid
    usersRef = firebase.database().ref('users/' + uid)
    table = usersRef.child('timeTable')
    table.once('value').then(snapshot => {
      snapshot.forEach((childSnapshot) => {
        child = childSnapshot.val(),
          items.push({
            date: child.date,
            timeCome: child.timeCome,
            timeBack: child.timeBack,
            stat: child.stat,
          })
      })
      this.setState({
        list: items
      })
      console.log(snapshot.val())
    })
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('StudentAddTimeTable')}
            style={styles.common.button}>
            <Text style={styles.common.buttonText}>เพิ่ม</Text>
          </TouchableOpacity>
          {
            list.map((d, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.timeTable.container}>
                    <Text style={styles.timeTable.label}>{d.date}</Text>
                    <Text style={styles.timeTable.label}>{d.timeCome} | {d.timeBack}</Text>
                    <Text style={styles.timeTable.label}>{d.stat}</Text>
                  </View>
                </Card >
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}

export default TimeTableScreen;