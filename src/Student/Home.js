import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import Logout from '../LogoutScreen'

const RootTab = createBottomTabNavigator({
    Detail: { screen: DetailScreen },
    Home: { screen: HomeScreen },
    Logout: { screen: Logout }
}, {
        initialRouteName: 'Home',
        barStyle: {
            backgroundColor: '#5499C7',
        },
        order: ['Detail', 'Home', 'Logout'],
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        tabBarOptions: {
            showIcon: true
        },
    })

export default createAppContainer(RootTab)