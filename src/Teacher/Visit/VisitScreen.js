import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles'

class VisitScreen extends Component {
  SaveVisit() {
    this.props.navigation.navigate('SaveVisit')
  }

  render() {
    const users = [
      {
        name: 'ศศิวิมล ครุฑคาบแก้ว',
        company_name: 'ศูนย์คอมพิวเตอร์มหาวิทยาลัยสงขลานครินทร์',
      },
      {
        name: 'กฤตนุพงค์ สุกใส',
        company_name: 'บริษัท codemobiles',
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          {
            users.map((u, i) => {
              return (
                <TouchableOpacity
                  onPress={() => this.SaveVisit(this)}
                  style={styles.common.card}>
                  <Card key={i} containerStyle={styles.common.card}>
                    <View style={styles.visit.container}>
                      <Text style={styles.visit.label}>{u.name}</Text>
                      <Text style={styles.visit.labelSub}>{u.company_name}</Text>
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

export default VisitScreen;