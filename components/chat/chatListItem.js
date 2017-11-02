import React, { Component } from 'react';
import { Vibration, Alert, View, StyleSheet, Text, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
export default class ChatListItem extends Component{
    state={
        marked: !this.props.clearMark
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
        Vibration.vibrate(100)
        this.props.onLongPress(this.props.userName);       
    }
    render(){
        return(
            <View style={[styles.boxChatItem, {backgroundColor: this.state.marked ? "rgba(0,0,0,0.04)": "rgba(255,255,255,1)"}]}>
                <View style={styles.imgBoxChatItem}>
                    <View style={styles.containerImageUserIcon}>
                        <Image
                            style={styles.userIcon}
                            source={require('../../assets/images/user/user_icon.png')}
                        />
                    </View>
                    
                </View>
                <TouchableOpacity
                    style={styles.TouchableChatItemArea} 
                    onPress={this._onPressChatItem.bind(this)}
                    onLongPress={this._onLongPressChatItem.bind(this)}
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
                            <Text style={[styles.colorGray, {marginBottom: 10}]}>
                                {this.props.content}
                            </Text>
                        </View>
                        <View style={styles.dateBoxChatItem}>
                            <Text style={styles.colorGray}>
                                {this.props.date}
                            </Text>
                        </View> 
                    </View>
                </TouchableOpacity> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxChatItem: {
        marginTop: 1,
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
        marginRight: 10,
        marginBottom: 6,
        fontSize: 15
    },
    imgBoxChatItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    TouchableChatItemArea:{
        flex: 4
    },
    containerMessageInfo:{
        flexDirection: "row",
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE"
    },
    contentBoxChatItem:{
        flex: 4,
    },
    dateBoxChatItem: {
        flex: 1
    },
    containerImageUserIcon:{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#9E9E9E",
        borderRadius: 100/2
    },
    userIcon:{
        maxWidth: "100%",
        maxHeight: "100%",
    }
});