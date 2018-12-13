import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';
import styles from '../styles'

class DetailScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.common.scrollView}>
                <Image
                    style={styles.detail.avatar}
                    source={require('../img/avatar.png')} />
                <Text style={styles.common.label}>Username</Text>
                <Text style={styles.common.label}>E-mail</Text>
                <Text style={styles.common.label}>First name</Text>
                <Text style={styles.common.label}>Last name</Text>
            </ScrollView>
        );
    }
}

export default DetailScreen;