import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles';

class CommentScreen extends Component {
  render() {
    const comment = [
      {
        staff: 'ผู้ให้การฝึก',
        staffComment: "If you would like to set such things as the HTTP-Verb, Headers or a Body along with the image request, you may do this by defining these properties on the source object:",
        boss: 'หัวหน้าหรือผู้จัดการ',
        bossComment: "If you would like to set such things as the HTTP-Verb, Headers or a Body along with the image request, you may do this by defining these properties on the source object:",
        subject: 'สาขา',
        subComment: "If you would like to set such things as the HTTP-Verb, Headers or a Body along with the image request, you may do this by defining these properties on the source object:",
      },
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        {
          comment.map((cm, i) => {
            return (
              <View key={i} style={styles.comment.container}>
                <Card containerStyle={styles.common.card}>
                  <Text style={styles.comment.label}>{cm.staff}</Text>
                  <Text style={styles.comment.labelSub}>{cm.staffComment}</Text>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <Text style={styles.comment.label}>{cm.boss}</Text>
                  <Text style={styles.comment.labelSub}>{cm.bossComment}</Text>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <Text style={styles.comment.label}>{cm.subject}</Text>
                  <Text style={styles.comment.labelSub}>{cm.subComment}</Text>
                </Card>
              </View >
            );
          })
        }
      </ScrollView>
    );
  }
}

export default CommentScreen;