import React, { Component } from 'react';
import {
    Vibration,
    Alert,  
    View, 
    StyleSheet, 
    Text,
    FlatList, 
    TextInput,
    ScrollView
} from 'react-native';
import { Icon } from 'react-native-elements'
import ChatListItem from './chatListItem';
import FadeInView from '../utils/fadeInView'
import uuid from 'uuid';

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
        chatList: dummyChatList,
        text: "",
        markedMessages: []
    }
    _onLongPressChatItem = (id)=> {
        let markedMessages = this.state.markedMessages.slice();
        markedMessages.push(id)
        this.setState({
            markedMessages: markedMessages
        });
    }
    _desMarkMessage = (id) => {
        let markedMessages = this.state.markedMessages.slice();
        let index = markedMessages.indexOf(id);
        markedMessages.splice(index, 1);
        this.setState({
            markedMessages: markedMessages
        });
    }
    render(){
        return(
            <View style={[ styles.container, { backgroundColor: '#fff' } ]} >
                {
                    this.state.markedMessages.length == 0?
                    <View style={styles.containerSearchBox}>
                        <Icon name="search" size={20} color="#9E9E9E" style={{marginRight: 10}} />
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
                                    Vibration.vibrate(50)
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
                                        "Just pinned " + this.state.markedMessages.length + " message":
                                        "Just pinned " + this.state.markedMessages.length + " messages"
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
                                        "Just marked as not viewed " + this.state.markedMessages.length + " message":
                                        "just marked as not viewed " + this.state.markedMessages.length + " messages"
                                    
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
                                        "Just deleted " + this.state.markedMessages.length + " message":
                                        "Just deleted " + this.state.markedMessages.length + 'messages'
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
                    data={this.state.chatList}
                    extraData={this.state.markedMessages}
                    renderItem={({item}) => (
                        <ChatListItem 
                            key={uuid()}
                            id={item.key}
                            userName={item.userName} 
                            content={item.content} 
                            date={item.date}
                            isMark={chatIsMark(this.state.markedMessages, item.key)}
                            markMode={this.state.markedMessages.length==0 ? false : true}
                            onLongPress={this._onLongPressChatItem}
                            onDesMark={this._desMarkMessage}
                            navigator={this.props.navigator}
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


function chatIsMark(markedMessages, messageId) {
    for(let item of markedMessages){
        if(item == messageId){
            return true
        }
    }
    return false
}