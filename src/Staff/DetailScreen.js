import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    Image,
    ImageBackground,
} from 'react-native';
import styles from '../styles';

class DetailScreen extends Component {
    render() {
        return (
            <ImageBackground
                style={styles.common.container}
                source={require('../img/bg.png')}>
                <ScrollView style={styles.common.scrollView}>
                    <Image
                        style={styles.detail.avatar}
                        source={require('../img/avatar.png')} />
                    <Text style={styles.common.label}>Username</Text>
                    <Text style={styles.common.label}>E-mail</Text>
                    <Text style={styles.common.label}>First name</Text>
                    <Text style={styles.common.label}>Last name</Text>
                </ScrollView>
            </ImageBackground>
        );
    }
}

export default DetailScreen;