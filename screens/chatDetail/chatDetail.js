import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ChatDetail extends Component{
    
    render(){
        console.log(this.props.navigation)
        return(
            <View style={styles.boxChatItem}>
                <Text style={styles.colorGray}>

                    {this.props.navigation.state.params.conversationId}
                </Text>  
            </View>
        )
    }
}

const styles = StyleSheet.create({

});