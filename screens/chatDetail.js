import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ChatDetail extends Component{
    render(){
        return(
            <View style={styles.boxChatItem}>
                <Text style={styles.colorGray}>
                    Chat
                </Text>  
            </View>
        )
    }
}

const styles = StyleSheet.create({

});