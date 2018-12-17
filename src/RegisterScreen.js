import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input, Avatar } from 'react-native-elements';
import styles from './styles'

class RegisterScreen extends Component {

    static navigationOptions = {
        title: 'สมัครสมาชิก',
    }

    Register() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        let icoSize = 30
        return (
            <ScrollView
                style={styles.common.scrollView}>
                <Avatar
                    containerStyle={styles.detail.avatar}
                    rounded
                    size='xlarge'
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }} />
                <Input
                    inputStyle={styles.common.inputText}
                    containerStyle={styles.common.input}
                    inputContainerStyle={styles.common.input_}
                    placeholderTextColor='white'
                    leftIcon={
                        <Icon
                            name='user-alt'
                            size={icoSize}
                            color='white'
                        />
                    }
                    placeholder='ชื่อผู้ใช้' />
                <Input
                    inputStyle={styles.common.inputText}
                    containerStyle={styles.common.input}
                    inputContainerStyle={styles.common.input_}
                    placeholderTextColor='white'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={icoSize}
                            color='white'
                        />
                    }
                    placeholder='รหัสผ่าน' />
                <TouchableOpacity
                    style={styles.common.button}
                    onPress={() => this.Register(this)}>
                    <Text style={styles.common.buttonText}>สมัครสมาชิก</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default RegisterScreen;