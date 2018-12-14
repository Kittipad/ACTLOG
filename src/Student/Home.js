import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import Logout from '../LogoutScreen'

const RootTap = createBottomTabNavigator({
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'ข้อมูลส่วนตัว'
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'หน้าหลัก'
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            title: 'ออกจากระบบ'
        }
    }
}, {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#1976D2',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 15,
            },
        }
    })

export default createAppContainer(RootTap)