import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal
} from 'react-native';
import { Card } from 'react-native-elements'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class UserTypeScreen extends Component {
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
    var items = [], users, items
    users = firebase.database().ref('users')
    users.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      snapshot.forEach((child) => {
        val = child.val()
        type = child.val().type
        // console.log(child.val().type)
        if (type == 'none') {
          items.push({
            fname: val.fname,
            lname: val.lname,
            uid: val.uid,
            type: val.type,
            email: val.email,
          })
        }
        this.setState({ list: items })
      })
      console.log(this.state.list)
    })
  }

  render() {
    const { list } = this.state
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.timeTable.container}>
                    <Text style={styles.timeTable.label}>ประเภท : {user.type}</Text>
                    <Text style={styles.timeTable.label}>{user.fname}  {user.lname}</Text>
                    <Text style={{ color: 'gray', marginBottom: 20, alignSelf: 'center' }}>{user.email}</Text>
                    {/* <Text style={{ color: 'gray', marginBottom: 20 }}>{user.uid}</Text> */}
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('AdminTypeEdit', {
                          uid: user.uid
                        })}
                      style={styles.common._button}>
                      <Text style={styles.common.label}>แก้ไขประเภทผู้ใช้</Text>
                    </TouchableOpacity>
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

export default UserTypeScreen;