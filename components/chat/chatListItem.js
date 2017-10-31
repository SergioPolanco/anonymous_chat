import React, { Component } from 'react';
import { Alert, View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements'
export default class ChatListItem extends Component{
    state={
        marked: false
    }
    _onPressChatItem(){
        Alert.alert(
            "Conversation with " + this.props.userName
        )
    }
    /* clearMark(){
        this.setState({
            marked: false
        })
    } */
    _onLongPressChatItem(){
        this.setState({
            marked: true
        })
        this.props.onLongPress(this.props.userName);       
    }
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
                <TouchableHighlight 
                    style={styles.TouchableChatItemArea} 
                    onPress={this._onPressChatItem.bind(this)}
                    onLongPress={this._onLongPressChatItem.bind(this)}
                    underlayColor="white"
                >
                    <View style={styles.containerMessageInfo}>
                        <View style={styles.contentBoxChatItem}>
                            <View style={{ flexDirection:"row" }}>
                                <Text style={styles.userName}>
                                    {this.props.userName}
                                </Text>
                                {
                                    this.state.marked?
                                    <Icon
                                        name='check-circle'
                                        type='font-awesome'
                                        color='#26A69A'
                                        size= {15}
                                    />: void 0
                                }
                                
                            </View>
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
                </TouchableHighlight> 
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
        color: "#000",
        marginRight: 10
    },
    imgBoxChatItem: {
        flex: 1,
        alignItems: "center"
    },
    TouchableChatItemArea:{
        flex: 5
    },
    containerMessageInfo:{
        flexDirection: "row",
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
        width: 45,
        height: 45,
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