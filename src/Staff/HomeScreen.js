import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../styles'

class HomeScreen extends Component {

    TimeTable() {
        this.props.navigation.navigate('TimeTable')
    }

    Actvity() {
        this.props.navigation.navigate('Activity')
    }

    Comment() {
        this.props.navigation.navigate('Comment')
    }

    Detail() {
        this.props.navigation.navigate('Detail')
    }

    render() {
        let icoSize = 100
        return (
            <View style={styles.home.container}>
                <TouchableOpacity
                    style={styles.home.menu}
                    onPress={() => this.TimeTable(this)}>
                    <Icon
                        name='table'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>ตรวจตารางเวลา</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.home.menu}
                    onPress={() => this.Actvity(this)}>
                    <Icon
                        name='list-ul'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>ตรวจกิจกรรม</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.home.menu}
                    onPress={() => this.Comment(this)}>
                    <Icon
                        name='comment-dots'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>บันทึกความคิดห็น</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.home.menu}
                    onPress={() => this.Detail(this)}>
                    <Icon
                        name='info-circle'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>ข้อมูลส่วนตัว</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.home.menu}
                    onPress={() => Alert.alert('Logout Pressed')}>
                    <Icon
                        name='power-off'
                        size={icoSize}
                        color='white'
                    />
                    <Text style={styles.common.label}>ออกจากระบบ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default HomeScreen;