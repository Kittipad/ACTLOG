import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

class TimeTableScreen extends Component {
    render() {
        return (
            <View>
                <Text>TimeTable Screen</Text>
                <Button
                    title='Back'
                    onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

export default TimeTableScreen;