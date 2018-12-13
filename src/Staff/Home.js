import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import Logout from '../LogoutScreen'

const RootTap = createBottomTabNavigator({
    Detail: {
        screen: DetailScreen
    },
    Home: {
        screen: HomeScreen
    },
    Logout: {
        screen: Logout,
    }
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'gray'
        },
    })

export default createAppContainer(RootTap);