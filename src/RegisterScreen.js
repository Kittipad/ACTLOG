import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
} from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation'
import styles from './styles'

class RegisterScreen extends Component {

    static navigationOptions = {
        title: 'Register',
    }

    Register() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <ScrollView
                style={{ flex: 1 }}>
                <TextInput
                    style={styles.common.input}
                    placeholder='Username' />
                <TextInput
                    style={styles.common.input}
                    placeholder='Password' />
                <Button
                    title='Register'
                    onPress={() => this.Register(this)} />
            </ScrollView>
        );
    }
}

export default RegisterScreen;