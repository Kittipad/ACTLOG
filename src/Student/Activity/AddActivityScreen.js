import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import firebase from 'react-native-firebase'
import styles from '../../styles'

class AddActivity extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    return {
      title: navigation.getParam('date'),
      headerRight: (
        <TouchableOpacity
          onPress={() => params.save()}
          style={{ marginRight: 15 }}>
          {<Icon name='save' size={20} color='white' />}
        </TouchableOpacity>
      )
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      morning: '',
      afternoon: ''
    }
  }

  componentDidMount() {
    this.getActivity()
    this.props.navigation.setParams({ save: this.saveActivity.bind(this) })
  }

  saveActivity() {
    const { morning, afternoon } = this.state
    var { navigation } = this.props;
    var uid, timeTable
    var key = navigation.getParam('key')
    console.log(key)
    uid = firebase.auth().currentUser.uid
    timeTable = firebase.database().ref('timeTable/' + uid + '/' + key)
    console.log(key)
    timeTable.update({
      morning: morning,
      afternoon: afternoon,
    }).then(() => {
      Alert.alert('แก้ไขแล้ว')
      this.props.navigation.goBack()
    })
  }

  getActivity() {
    var { navigation } = this.props;
    var date = navigation.getParam('date');
    var morning = navigation.getParam('morning');
    var afternoon = navigation.getParam('afternoon');

    this.setState({
      date: date,
      morning: morning,
      afternoon: afternoon
    })
  }

  render() {
    const { morning, afternoon } = this.state
    return (
      <ScrollView style={styles.view.scrollView}>
        <TextInput
          style={styles.input.actField}
          placeholderTextColor='black'
          defaultValue={morning}
          onChangeText={(text) => this.setState({ morning: text })}
          multiline={true}
          autoCapitalize='none'
          autoCorrect={false} />
        <TextInput
          style={styles.input.actField}
          placeholderTextColor='black'
          defaultValue={afternoon}
          onChangeText={(text) => this.setState({ afternoon: text })}
          multiline={true}
          autoCapitalize='none'
          autoCorrect={false} />
      </ScrollView>
    );
  }
}

export default AddActivity;