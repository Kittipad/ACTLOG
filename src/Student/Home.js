import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import TimeTableScreen from './TimeTable/Home'
import ActivityScreen from './Activity/Home'
import VisitScreen from './Visit/VisitScreen'
import CommentScreen from './Comment/CommentScreen'

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
            title: 'ตารางลงเวลา',
        },
    },
    Activity: {
        screen: ActivityScreen,
        navigationOptions: {
            title: 'บันทึกกิจกรรม'
        }
    },
    Visit: {
        screen: VisitScreen,
        navigationOptions: {
            title: 'ดูผลการนิเทศ'
        }
    },
    Comment: {
        screen: CommentScreen,
        navigationOptions: {
            title: 'ดูความคิดเห็น'
        }
    }
}, { initialRouteName: 'Home' })

export default createAppContainer(RootStack)