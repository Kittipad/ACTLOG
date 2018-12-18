import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import ActivityScreen from './ActivityScreen'
import AddActivityScreen from './AddActivityScreen'

const RootStack = createStackNavigator({
    Home: {
        screen: ActivityScreen,
    },
    AddActivity: {
        screen: AddActivityScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)