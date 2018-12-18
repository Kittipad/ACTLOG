import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import ActivityScreen from './ActivityScreen';
import ViewActivityScreen from './ViewActivityScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: ActivityScreen,
    },
    ViewActivity: {
        screen: ViewActivityScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)