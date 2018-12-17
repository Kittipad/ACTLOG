import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import Logout from '../LogoutScreen'
import TimeTableScreen from './TimeTable/TimeTableScreen'
import ActivityScreen from './Activity/ActivityScreen'

const RootTab = createBottomTabNavigator({
    Detail: { screen: DetailScreen },
    Home: { screen: HomeScreen },
    Logout: { screen: Logout }
}, { initialRouteName: 'Home' })

export default createAppContainer(RootTab)