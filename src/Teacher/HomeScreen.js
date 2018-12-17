import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles'

class HomeScreen extends Component {
    render() {
        let icoSize = 100
        return (
            <ImageBackground
                style={styles.home.container}
                source={require('../img/bg.png')}>
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
            </ImageBackground>
        );
    }
}

export default HomeScreen;