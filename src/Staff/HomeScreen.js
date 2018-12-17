import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
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
                    <Text style={styles.common.label}>ตรวจตารางเวลา</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Icon
                        name='list-ul'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>ตรวจกิจกรรม</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.home.menu}>
                    <Icon
                        name='comment-dots'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>บันทึกความคิดห็น</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

export default HomeScreen;