import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Avatar,
  Card,
} from 'react-native-elements';
import styles from '../styles'

class DetailScreen extends Component {

  editDetail() {
    this.props.navigation.navigate('StudentEditDetail')
  }

  render() {
    const detail = [
      {
        f_name: 'กฤตนุพงค์',
        l_name: 'สุกใส',
        group: 'IT441',
        subject: 'วิทยาศาสตร์คอมพิวเตอร์',
        tel_number: '088-3844946',
        mail: 'Mr.Fermz@hotmail.com',
        my_ability: 'ภาษา C, Python, Java, React-Native',
        type_position: 'ผู้ช่วยโปรแกรมเมอร์',
        date: '2018/12/18 - 2018/02/18',
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            detail.map((d, i) => {
              return (
                <Card key={i} containerStyle={styles.common.card}>
                  <View style={styles.timeTable.container}>
                    <Avatar
                      containerStyle={styles.detail._avatar}
                      rounded
                      size='xlarge'
                      source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                    />
                    <Text style={styles.detail.labelCenter}>{d.f_name + '  ' + d.l_name}</Text>
                    <View style={styles.detail.detailContainer}>
                      <Icon
                        style={styles.detail.icon}
                        name='user-graduate'
                        size={22} />
                      <Text style={styles.detail.label}>{d.group}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Icon
                        style={styles.detail.icon}
                        name='briefcase'
                        size={22} />
                      <Text style={styles.detail.label}>{d.subject}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Icon
                        style={styles.detail.icon}
                        name='phone'
                        size={22} />
                      <Text style={styles.detail.label}>{d.tel_number}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Icon
                        style={styles.detail.icon}
                        name='envelope'
                        size={22} />
                      <Text style={styles.detail.label}>{d.mail}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Text style={styles.detail.label}>ถนัด : {d.my_ability}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Text style={styles.detail.label}>ตำแหน่ง : {d.type_position}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Icon
                        style={styles.detail.icon}
                        name='clock'
                        size={22} />
                      <Text style={styles.detail.label}>{d.date}</Text>
                    </View>
                  </View>
                </Card >
              );
            })
          }
          <TouchableOpacity
            style={styles.common.button}
            onPress={this.editDetail.bind(this)}>
            <Text style={styles.common.buttonText}>แก้ไขข้อมูล</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

export default DetailScreen;