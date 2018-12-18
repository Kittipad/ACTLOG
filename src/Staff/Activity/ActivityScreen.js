import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles'

class ActivityScreen extends Component {

  ViewActvity() {
    this.props.navigation.navigate('ViewActivity')
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
                  onPress={() => this.ViewActvity(this)}
                  style={styles.common.card}>
                  <Card key={i} containerStyle={styles.common.card}>
                    <View style={styles.activity.container}>
                      <Text style={styles.activity.label}>{u.name}</Text>
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

export default ActivityScreen;