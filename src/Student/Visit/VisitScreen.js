import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import {
  Card,
  Rating
} from 'react-native-elements'
import styles from '../../styles';

class VisitScreen extends Component {
  render() {
    const visit = [
      {
        detail1: 'ความรับผิดชอบต่องานที่ได้รับมอบหมาย',
        detail2: 'มีความรอบคอบในการทำงาน',
        detail3: 'มีมนุษย์สัมพันธ์',
        detail4: 'ตรงต่อเวลา',
        detail5: 'ปฏิบัติตนถูกต้องตามระเบียบข้อบังคับของสถานที่ฝึกงาน',
        comment: "These approaches provide no safety checks. It's up to you to guarantee that those images are available in the application. Also you have to specify image dimensions manually.",
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
                      readonly
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
                      readonly
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
                      readonly
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
                      readonly
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
                      readonly
                      onFinishRating={this.ratingCompleted}
                      onStartRating={this.ratingStarted}
                    />
                  </View>
                </Card>
                <Card containerStyle={styles.common.card}>
                  <Text style={styles.visit.label}>{v.comment}</Text>
                </Card>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

export default VisitScreen;