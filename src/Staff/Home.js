import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import TimeTableScreen from './TimeTable/Home'
import ActivityScreen from './Activity/Home'
import CommentScreen from './Comment/Home'

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
    TimeTable: {
        screen: TimeTableScreen,
        navigationOptions: {
            title: 'ตรวจตารางเวลา'
        }
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            title: 'ตรวจกิจกรรม'
        }
    },
    Comment: {
        screen: CommentScreen,
        navigationOptions: {
            title: 'บันทึกความคิดเห็น'
        }
    },
}, { initialRouteName: 'Home' })

export default createAppContainer(RootStack);