import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';
import Launche from './pages/launche';
import launcheArticle from './pages/launcheArticle';

export default createStackNavigator({
    Main,
    Launche,
    launcheArticle
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#0000ff"
        },
        headerTintColor: "#FFF"
    },
    headerLayoutPreset: "center"
});