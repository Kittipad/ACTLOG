import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Avatar, ListItem } from 'react-native-elements';
import styles from '../styles'

class DetailScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Krittanupong\n',
            email: 'krittanupong@gmail.com\n'
        }
    }
    render() {
        return (
            <View style={styles.common.container}>
                <ScrollView style={styles.common.scrollView}>
                    <Avatar
                        containerStyle={styles.detail.avatar}
                        rounded
                        size='xlarge'
                        source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }} />
                    <Text style={styles.detail.text}>
                        {this.state.username}
                        {this.state.email}
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

export default DetailScreen;