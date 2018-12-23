import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles';

class TimeTableScreen extends Component {
  render() {
    const day = [
      {
        date: '2018/12/18',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'รอตรวจ'
      },
      {
        date: '2018/12/17',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'รอตรวจ'
      },
      {
        date: '2018/12/16',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'ตรวจแล้ว'
      },
      {
        date: '2018/12/15',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'ตรวจแล้ว'
      },
      {
        date: '2018/12/14',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'ตรวจแล้ว'
      },
      {
        date: '2018/12/13',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'ตรวจแล้ว'
      },
      {
        date: '2018/12/12',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'ตรวจแล้ว'
      },
      {
        date: '2018/12/11',
        timeCome: '08.30 AM',
        timeBack: '16.30 PM',
        status: 'ตรวจแล้ว'
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('StudentAddTimeTable')}
            style={styles.common.button}>
            <Text style={styles.common.buttonText}>เพิ่ม</Text>
          </TouchableOpacity>
          {
            day.map((d, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.timeTable.container}>
                    <Text style={styles.timeTable.label}>{d.date}</Text>
                    <Text style={styles.timeTable.label}>{d.timeCome} | {d.timeBack}</Text>
                    <Text style={styles.timeTable.label}>{d.status}</Text>
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