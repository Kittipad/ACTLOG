import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import Logout from '../LogoutScreen'
import TimeTableScreen from './TimeTable/TimeTableScreen'

const RootTap = createBottomTabNavigator({
    Detail: {
        screen: DetailScreen
    },
    Home: {
        screen: HomeScreen,
    },
    Logout: {
        screen: Logout
    }
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray'
        },
    })

export default createAppContainer(RootTap)