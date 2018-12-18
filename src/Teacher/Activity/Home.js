import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import ActivityScreen from './ActivityScreen'
import CheckActivityScreen from './CheckActivityScreen'

const RootStack = createStackNavigator({
    Home: {
        screen: ActivityScreen,
    },
    CheckActivity: {
        screen: CheckActivityScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)