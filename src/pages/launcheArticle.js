import React from 'react';

import {WebView} from 'react-native';

const launcheArticle = ({navigation}) => (
    <WebView source = {{uri: navigation.state.params.launcheArticle.links.article_link}}/>
);

launcheArticle.navigationOptions = ({navigation}) => ({
    title: navigation.state.params.launcheArticle.mission_name
});

export default launcheArticle;