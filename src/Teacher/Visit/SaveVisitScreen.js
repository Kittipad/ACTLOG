import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  View
} from 'react-native';
import { Card, Rating, Input } from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles';

class SaveVisitScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('suid')
    }
  }

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
    var suid = this.props.navigation.getParam('suid')
    var tuid = this.props.navigation.getParam('tuid')
    var items = [], users
    users = firebase.database().ref('visit').orderByChild('suid').equalTo(suid)
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        // console.log(child.val())
        items.push({
          suid: suid,
          tuid: tuid,
          comment: val.comment,
        })
        this.setState({ list: items })
      })
    })
    // console.log(tuid)
  }

  render() {
    const { list } = this.state
    console.log(list)
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.timeTable.container}>
                    <Text>{user.suid}</Text>
                    <Text>{user.tuid}</Text>
                    <Text>{user.comment}</Text>
                  </View>
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default SaveVisitScreen;