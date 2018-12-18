import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Input,
  Avatar,
  ListItem,
  Card
} from 'react-native-elements';
import styles from '../styles'

class DetailScreen extends Component {
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity
        style={styles.common.headerRight}
        onPress={() => Alert.alert('Edit')}>
        <Text style={styles.common._label}>แก้ไข</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const detail = [
      {
        f_name: 'กลิ่นสุคนท์',
        l_name: 'นิ่มกาญจนา',
        mail: 'เมลล์',
        tel_number: 'เบอร์',
      }
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
                        name='envelope'
                        size={22} />
                      <Text style={styles.detail.label}>{d.mail}</Text>
                    </View>
                    <View style={styles.detail.detailContainer}>
                      <Icon
                        style={styles.detail.icon}
                        name='phone'
                        size={22} />
                      <Text style={styles.detail.label}>{d.tel_number}</Text>
                    </View>
                  </View>
                </Card >
              );
            })
          }
        </View>
      </ScrollView>
    )
  }
}

export default DetailScreen;