import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
  ListItem,
  Button,
  Icon
} from 'react-native-elements'
import styles from '../../styles'

class TimeTableScreen extends Component {

  ViewTimeTable() {
    this.props.navigation.navigate('ViewTimeTable')
  }

  render() {
    const users = [
      {
        name: 'กฤตนุพงค์ สุกใส',
      },
      {
        name: 'ศศิวิมล ครุฑคาบแก้ว',
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            users.map((u, i) => {
              return (
                <TouchableOpacity
                  style={styles.common.card}
                  onPress={() => this.ViewTimeTable(this)}>
                  <Card key={i} containerStyle={styles.common.card}>
                    <View style={styles.timeTable.container}>
                      <Text style={styles.timeTable.label}>{u.name}</Text>
                    </View>
                  </Card>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default TimeTableScreen;