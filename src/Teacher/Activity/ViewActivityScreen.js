import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
} from 'react-native'
import {
  Card,
} from 'react-native-elements'
import styles from '../../styles'

class CheckActivityScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('date')
    }
  }

  render() {
    var ACT = this.props.navigation.getParam('ACT')
    return (
      <ScrollView style={styles.common.scrollView}>
        <View style={styles.common.container}>
          <Card containerStyle={styles.common.card}>
            <View style={styles.activity.container}>
              <Text style={styles.activity.date}>{ACT}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default CheckActivityScreen;