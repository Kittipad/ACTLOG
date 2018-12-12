import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import HomeScreen from './src/HomeScreen'
import LoginScreen from './src/LoginScreen'
import RegisterScreen from './src/RegisterScreen'

const RootStack = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    }
}, { initialRouteName: 'Login' })

export default createAppContainer(RootStack)