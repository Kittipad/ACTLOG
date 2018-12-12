import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import styles from './styles'

class RegisterScreen extends Component {
    static navigationOptions = {
        title: 'Register',
    }
    render() {
        return (
            <View style={styles.common.container}>
                <Text>Register Screen</Text>
            </View>
        );
    }
}

export default RegisterScreen;