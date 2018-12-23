import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation'

export default class LogoutScreen extends Component {
    async Logout() {
        await AsyncStorage.removeItem('token')
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        return (
            this.Logout()
        )
    }
}