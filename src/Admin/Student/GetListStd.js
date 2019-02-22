import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Card } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class GetListStd extends Component {
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
        if (type == 'Student') {
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
      <ScrollView style={styles.view.scrollView}>
        <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <View style={styles.view.container}>
          {
            list.map((user, i) => {
              return (
                <Card key={i} containerStyle={styles.view.cards}>
                  <View style={styles.view.headerContainer}>
                    <Text style={styles.label.header}>ประเภท : {user.type}</Text>
                    <Text style={styles.label.sub}>{user.fname}  {user.lname}</Text>
                    <Text style={styles.label.sub}>{user.email}</Text>
                    {/* <Text style={{ color: 'gray', marginBottom: 20 }}>{user.uid}</Text> */}
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('AdminTypeEdit', {
                          uid: user.uid,
                          fname: user.fname,
                          lname: user.lname
                        })}
                      style={styles.button.sub}>
                      <Text style={styles.button.subLabel}>แก้ไขประเภทผู้ใช้</Text>
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

export default GetListStd;