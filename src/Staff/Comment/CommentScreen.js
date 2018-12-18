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

class CommentScreen extends Component {

  SaveComment() {
    this.props.navigation.navigate('SaveComment')
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
                  onPress={() => this.SaveComment(this)}
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

export default CommentScreen;