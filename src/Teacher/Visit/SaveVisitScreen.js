import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, Rating, Input } from 'react-native-elements'
import styles from '../../styles';

class SaveVisitScreen extends Component {
  render() {
    let icoSize = 30
    const visit = [
      {
        detail1: 'ความรับผิดชอบต่องานที่ได้รับมอบหมาย',
        detail2: 'มีความรอบคอบในการทำงาน',
        detail3: 'มีมนุษย์สัมพันธ์',
        detail4: 'ตรงต่อเวลา',
        detail5: 'ปฏิบัติตนถูกต้องตามระเบียบข้อบังคับของสถานที่ฝึกงาน',
        score1: '5',
        score2: '4',
        score3: '3',
        score4: '4',
        score5: '4',
      }
    ]
    return (
      <ScrollView style={styles.common.scrollView}>
        {
          visit.map((v, i) => {
            return (
              <View style={styles.visit.container}>
                <Card containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.visit.label}>{v.detail1}</Text>
                    <Rating
                      type="star"
                      fractions={0}
                      startingValue={2.5}
                      imageSize={40}
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                  </View>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.visit.label}>{v.detail2}</Text>
                    <Rating
                      type="star"
                      fractions={0}
                      startingValue={2.5}
                      imageSize={40}
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                  </View>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.visit.label}>{v.detail3}</Text>
                    <Rating
                      type="star"
                      fractions={0}
                      startingValue={2.5}
                      imageSize={40}
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                  </View>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.visit.label}>{v.detail4}</Text>
                    <Rating
                      type="star"
                      fractions={0}
                      startingValue={2.5}
                      imageSize={40}
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                  </View>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <View style={styles.activity.container}>
                    <Text style={styles.visit.label}>{v.detail5}</Text>
                    <Rating
                      type="star"
                      fractions={0}
                      startingValue={2.5}
                      imageSize={40}
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                  </View>
                </Card>
                <TextInput
                  style={styles.activity.input}
                  placeholderTextColor='black'
                  placeholder='ข้อเสนอแนะ'
                  multiline={true}
                  autoCapitalize={false}
                  autoCorrect={false}
                  clearTextOnFocus={true} />
                <TouchableOpacity
                  style={styles.common.button}
                  onPress={() => Alert.alert('Saved')}>
                  <Text style={styles.common.buttonText}>บันทึก</Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 50 }}></View>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

export default SaveVisitScreen;