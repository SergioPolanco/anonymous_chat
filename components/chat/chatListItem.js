import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class ChatListItem extends Component{
    render(){
        return(
            <View style={styles.boxChatItem}>
                <View style={styles.imgBoxChatItem}>
                    <View style={styles.containerImageUserIcon}>
                        <Image
                            style={styles.userIcon}
                            source={require('../../assets/images/user/user_icon.png')}
                        />
                    </View>
                </View>
                <View style={styles.containerMessageInfo}>
                    <View style={styles.contentBoxChatItem}>
                        <Text style={styles.userName}>
                            {this.props.userName}
                        </Text>
                        <Text style={styles.colorGray}>
                            {this.props.content}
                        </Text>
                    </View>
                    <View style={styles.dateBoxChatItem}>
                        <Text style={styles.colorGray}>
                            {this.props.date}
                        </Text>
                    </View> 
                </View>   
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxChatItem: {
        padding: 10,
        flexDirection: "row",
    },
    colorBlack:{
        color: "#000"
    },
    colorGray: {
        color: "#9E9E9E"
    },
    userName:{
        fontWeight: "bold",
        color: "#000"
    },
    imgBoxChatItem: {
        flex: 1,
        alignItems: "center"
    },
    containerMessageInfo:{
        flexDirection: "row",
        flex: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE"
    },
    contentBoxChatItem:{
        flex: 4,
        marginBottom: 5
    },
    dateBoxChatItem: {
        flex: 1
    },
    containerImageUserIcon:{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#9E9E9E",
        borderRadius: 100/2,
        padding: 3
    },
    userIcon:{
        maxWidth: "100%",
        maxHeight: "100%",
    }
});