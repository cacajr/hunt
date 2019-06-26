import React from 'react';

import {WebView} from 'react-native';

const Launche = ({navigation}) => (
    <WebView source = {{uri: navigation.state.params.launche.links.video_link}}/>
);

Launche.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.launche.mission_name
});

export default Launche;