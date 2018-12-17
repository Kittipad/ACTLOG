import {
    createAppContainer,
    createStackNavigator
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import ActivityScreen from './Activity/ActivityScreen'
import VisitScreen from './Visit/VisitScreen'

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'หน้าหลัก'
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'ข้อมูลส่วนตัว'
        }
    },
    Visit: {
        screen: VisitScreen,
        navigationOptions: {
            title: 'เยี่ยมนิเทศ'
        }
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            title: 'ตรวจกิจกรรม'
        }
    },
}, { initialRouteName: 'Home' })

export default createAppContainer(RootStack);