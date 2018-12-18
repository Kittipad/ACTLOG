import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import TimeTableScreen from './TimeTableScreen';
import ViewTimeTableScreen from './ViewTimeTableScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: TimeTableScreen,
    },
    ViewTimeTable: {
        screen: ViewTimeTableScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)