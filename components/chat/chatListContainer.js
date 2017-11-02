import React, { Component } from 'react';
import {
    Vibration,
    Alert,  
    View, 
    StyleSheet, 
    Text,
    FlatList, 
    TextInput 
} from 'react-native';
import { Icon } from 'react-native-elements'
import ChatListItem from './chatListItem';
import FadeInView from '../utils/fadeInView'
import uuid from 'uuid';
//import IconVector from 'react-native-vector-icons/FontAwesome';
var dummyChatList = [
    {   
        key: uuid(),
        imgUrl: "",
        userName: "User 1",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 2",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 3",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 4",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 5",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 6",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 7",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        userName: "User 8",
        content: "Example Message",
        date: "20:01"
    }
]

export default class ChatListContainer extends Component{
    state={
        text: "",
        markedMessages: [],
    }
    _onLongPressChatItem(userName){
        let markedMessages = this.state.markedMessages.slice();
        markedMessages.push(userName)
        this.setState({
            markedMessages: markedMessages
        })
        //Alert.alert(this.state.markedMessages[0])
    }
    render(){
        return(
            <View style={[ styles.container, { backgroundColor: '#fff' } ]} >
                {
                    this.state.markedMessages.length == 0?
                    <View style={styles.containerSearchBox}>
                        <Icon name="search" size={20} color="#9E9E9E" style={{ marginRight: 10 }} />
                        <TextInput
                            style={styles.boxSearch}
                            placeholder={"Search"}
                            placeholderTextColor={"#9E9E9E"}
                            onChangeText={(text) => this.setState({text})}
                            underlineColorAndroid={"#fff"}
                        >
                        </TextInput>
                    </View>:
                    <FadeInView duration={ 500 } style={styles.containerActionsBox}>
                        <View style={styles.containerIconCloseActionBox}>
                            <Icon
                                name='long-arrow-left'
                                type='font-awesome'
                                color='#2196F3'
                                onPress={()=>{
                                    this.setState({
                                        markedMessages: []
                                    })
                                    Vibration.vibrate(100)
                                }}
                            />
                        </View>
                        <View style={styles.containerIconsActionsBox}>
                            <Icon
                                name='thumb-tack'
                                type='font-awesome'
                                color='#2196F3'
                                onPress={() => {
                                    let message = this.state.markedMessages.length == 1 ?
                                        "Just pinned the conversation with " + this.state.markedMessages.join():
                                        "Just pinned the conversations with the following users: " + this.state.markedMessages.join()
                                    this.setState({
                                        markedMessages: []
                                    })
                                    Alert.alert(message)
                                }} 
                            />
                            <Icon
                                name='eye-slash'
                                type='font-awesome'
                                color='#2196F3'
                                onPress={() => {
                                    let message = this.state.markedMessages.length == 1 ?
                                        "Just marked as not viewed the conversation with " + this.state.markedMessages.join():
                                        "just marked as not viewed the conversations with the following users: " + this.state.markedMessages.join()
                                    
                                    this.setState({
                                        markedMessages: []
                                    })
                                    Alert.alert(message)
                                }} 
                            />
                            <Icon
                                name='trash'
                                type='font-awesome'
                                color='#2196F3'
                                onPress={() => {
                                    let message = this.state.markedMessages.length == 1 ?
                                        "Just deleted the conversation with " + this.state.markedMessages.join():
                                        "Just deleted the conversations with the following users: " + this.state.markedMessages.join()
                                    this.setState({
                                        markedMessages: []
                                    })
                                    Alert.alert(message)
                                }} 
                            />
                        </View>
                    </FadeInView>
                    
                }
                <FlatList
                    style={styles.containerChatList}
                    data={dummyChatList}
                    extraData={this.state}
                    renderItem={({item}) => (
                        <ChatListItem 
                            userName={item.userName} 
                            content={item.content} 
                            date={item.date}
                            clearMark={this.state.markedMessages.length == 0 ? true: false}
                            onLongPress={(userName)=>this._onLongPressChatItem(userName)}
                        />
                    )}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerIconCloseActionBox:{
        flex: 2,
        alignItems:"flex-start",
        justifyContent: "center"
    },
    containerIconsActionsBox:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    containerActionsBox:{
        backgroundColor: "#fff",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#2196F3",
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },
    containerSearchBox:{
        backgroundColor: "#fff",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    titleChats:{
        color: "#000",
        fontWeight: "bold"
    },
    containerChatList:{
        flex: 1,
        backgroundColor: "#fff"
    },
    boxSearch:{
        flex: 1,
        height: 40
    }
});