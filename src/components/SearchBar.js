import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import{View, StyleSheet, TextInput} from 'react-native';

export default class SearchBar extends Component{
    render(){
        return(
            <View style={styles.containerSearch}>
                <Icon style={styles.iconSearch}
                    name="search"
                />
                <TextInput style={styles.searchBar}
                    placeholder = "Pesquisar..."
                    onChangeText = {(text) => this.props.estado(text)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

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
    }

})