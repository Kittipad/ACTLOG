import {
    createStackNavigator,
    createAppContainer,
} from 'react-navigation'
import SaveCommentScreen from './SaveCommentScreen';
import CommentScreen from './CommentScreen';

const RootStack = createStackNavigator({
    Home: {
        screen: CommentScreen,
    },
    SaveComment: {
        screen: SaveCommentScreen
    }
}, { initialRouteName: 'Home', headerMode: 'none' })

export default createAppContainer(RootStack)