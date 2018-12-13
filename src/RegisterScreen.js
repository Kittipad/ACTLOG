import React, { Component } from 'react';
import {
    Button,
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
        title: 'Register',
    }

    Register() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })]
        })
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        return (
            <ScrollView
                style={styles.common.scrollView}>
                <Avatar
                    containerStyle={styles.detail.avatar}
                    rounded
                    size='xlarge'
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }} />
                <Input
                    containerStyle={styles.common.input}
                    inputContainerStyle={styles.common.input_}
                    placeholderTextColor='white'
                    leftIcon={
                        <Icon
                            name='user-alt'
                            size={24}
                            color='white'
                        />
                    }
                    placeholder='Username' />
                <Input
                    containerStyle={styles.common.input}
                    inputContainerStyle={styles.common.input_}
                    placeholderTextColor='white'
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='white'
                        />
                    }
                    placeholder='Password' />
                <TouchableOpacity
                    style={styles.common.button}
                    onPress={() => this.Register(this)}>
                    <Text style={styles.common.buttonText}>Register</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

export default RegisterScreen;