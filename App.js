import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import LoginScreen from './src/LoginScreen'
import RegisterScreen from './src/RegisterScreen'
import StudentHome from './src/Student/Home'
import TeacherHome from './src/Teacher/Home'
import StaffHome from './src/Staff/Home'

const RootStack = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    },
    Student: {
        screen: StudentHome
    },
    Teacher: {
        screen: TeacherHome
    },
    Staff: {
        screen: StaffHome
    }
}, { initialRouteName: 'Login' })

export default createAppContainer(RootStack)