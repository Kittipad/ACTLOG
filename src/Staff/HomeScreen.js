import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import styles from '../styles'

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.home.container}>
                <TouchableOpacity style={styles.home.menu}>
                    <Text style={styles.home.menuItem}>Time Table Check</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Text style={styles.home.menuItem}>Activity Check</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Text style={styles.home.menuItem}>Comment</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;