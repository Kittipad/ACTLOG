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
      <ScrollView style={styles.view.scrollView}>
        <View style={styles.view.headerContainer}>
          <Card containerStyle={styles.view.cards}>
            <View style={styles.label.header}>
              <Text style={styles.label.sub}>{ACT}</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

export default CheckActivityScreen;