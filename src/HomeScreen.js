import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation'
import styles from './styles'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    }

    render() {
        return (
            <View style={styles.common.container}>
                <Text>Home Screen</Text>
                <Button
                    title='Logout' />
            </View>
        );
    }
}

export default HomeScreen;