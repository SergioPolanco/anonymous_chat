import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class GroupListContainer extends Component{
    render(){
        return(
            <View style={[ styles.container, { backgroundColor: '#fff' } ]} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});