import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles'

class HomeScreen extends Component {
    render() {
        let icoSize = 100
        return (
            <View style={styles.home.container}>
                <TouchableOpacity style={styles.home.menu}>
                    <Icon
                        name='table'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>Visit Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Icon
                        name='table'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>Activity Check</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;