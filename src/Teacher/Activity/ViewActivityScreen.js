import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles'

class CheckActivityScreen extends Component {
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

export default CheckActivityScreen;