import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import styles from '../styles'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.home.container}>
                <TouchableOpacity
                    style={styles.home.menu}
                    onPress={this.props.navigation.navigate('TimeTable')}>
                    <Text style={styles.home.menuItem}>Time Table</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Text style={styles.home.menuItem}>Activity</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Text style={styles.home.menuItem}>Visit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Text style={styles.home.menuItem}>Comment</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen