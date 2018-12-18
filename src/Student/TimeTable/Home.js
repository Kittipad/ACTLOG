import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import TimeTableScreen from './TimeTableScreen'
import AddTimeTableScreen from './AddTimeTableScreen'

const RootStack = createStackNavigator({
    Home: {
        screen: TimeTableScreen,
    },
    AddTimeTable: {
        screen: AddTimeTableScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)