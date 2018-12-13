import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation'

export default class Logout extends Component {
    Logout() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
        this.props.navigation.dispatch(resetAction)
    }
    render() {
        return (
            <View>
                {this.Logout()}
            </View>
        )
    }
}