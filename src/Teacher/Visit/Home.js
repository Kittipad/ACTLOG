import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import SaveVisitScreen from './SaveVisitScreen';
import VisitScreen from './VisitScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: VisitScreen,
    },
    SaveVisit: {
        screen: SaveVisitScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)