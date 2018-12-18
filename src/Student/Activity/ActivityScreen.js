import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles'

class ActivityScreen extends Component {
  render() {
    const act = [
      {
        date: '2018/12/18',
        morning: "Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",
        afternoon: "let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",
        img: 'https://facebook.github.io/react/logo-og.png',
        status: 'รอตรวจ',
      },
      {
        date: '2018/12/17',
        morning: "Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",
        afternoon: "let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",
        img: 'https://facebook.github.io/react/logo-og.png',
        status: 'ตรวจแล้ว',
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddActivity')}
            style={styles.common.button}>
            <Text style={styles.common.buttonText}>เพิ่ม</Text>
          </TouchableOpacity>
          {
            act.map((a, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.activity.date}>{a.date}</Text>
                    <Text style={styles.activity.detail}>{a.morning}</Text>
                    <Text style={styles.activity.detail}>{a.afternoon}</Text>
                    <Text style={styles.activity.date}>{a.status}</Text>
                    <Image
                      style={{ width: 300, height: 300, margin: 10 }}
                      source={{ uri: a.img }} />
                  </View>
                </Card>
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}

export default ActivityScreen;