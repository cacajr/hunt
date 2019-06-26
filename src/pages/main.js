import React, {Component} from 'react';

import api from '../services/api';

import{View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Main extends Component{

    static navigationOptions = {
        title: 'hunt'
    };

    state = {
        term: "",
        docs: [],
    };

    componentDidMount(){
        this.loadLaunches();
    }

    loadLaunches = async (limit = 5) => {
        const response = await api.get("/launches");

        this.setState({docs: response.data});

//        //PRINTA O NUMERO DE launches RETIRADO DA API
//        console.log(response.data.length);
    };

    renderItem = ({item}) => (
        <View style={styles.launcheContainer}>
            <Text style={styles.launcheMission}>Missão: {item.mission_name}</Text>
            <Text style={styles.launcheRocket}>Foguete: {item.rocket.rocket_name}</Text>

            <TouchableOpacity
                style={styles.launcheButtonVer}
                onPress={() => {
                    this.props.navigation.navigate('Launche', {launche: item});
                }}
             >
                <Text style={styles.launcheButtonText}>Ver lançamento</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.launcheButtonArtigo}
                onPress={() => {
                    this.props.navigation.navigate('launcheArticle', {launcheArticle: item});
                }}
             >
                <Text style={styles.launcheButtonText}>Artigo do lançamento</Text>
            </TouchableOpacity>
        </View>
    )

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.containerSearch}>
                    <Icon style={styles.iconSearch}
                        name="search"
                    />
                    <TextInput style={styles.searchBar}
                        placeholder = "Pesquisar..."
                        onChangeText = {(text) => this.setState({term: text})}
                    />
                </View>

                <FlatList
                    contentContainerStyle={styles.list}

                    data = {this.state.docs.filter(launches => ((launches.mission_name).toLowerCase()).includes((this.state.term).toLowerCase()))}

                    keyExtractor={item => String(item.flight_number)}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20,
        backgroundColor: "#fafafa"
    },

    containerSearch: {
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 10,
        borderColor: "#0000ff",
        height: 50,
        alignItems: "center",
        paddingHorizontal:20
    },

    searchBar: {
        height: 50,
        width: 300,
        fontSize:18,
        borderRadius: 5,
        marginLeft: 5,
        backgroundColor: "transparent"
    },

    iconSearch: {
        fontSize: 20,
        color: "#0000ff"
    },

    list:{

    },

    launcheContainer:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#0000ff",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    launcheMission: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    launcheRocket: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    launcheButtonVer: {
        height: 42,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#0000ff",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    launcheButtonArtigo: {
        height: 42,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#0000ff",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    launcheButtonText: {
        fontSize: 16,
        color: "#0000ff",
        fontWeight: "bold"
    }
});