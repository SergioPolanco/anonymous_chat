import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList, TextInput } from 'react-native';
import ChatListItem from './chatListItem';
import uuid from 'uuid';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        text: ""
    }
    render(){
        return(
            <View style={[ styles.container, { backgroundColor: '#fff' } ]} >
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
                </View>
                <ScrollView contentContainerStyle={styles.contentChatsContainer}>
                <FlatList
                    style={styles.containerChatList}
                    data={dummyChatList}
                    renderItem={({item}) => <ChatListItem userName={item.userName} content={item.content} date={item.date}/>}
                />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    contentChatsContainer: {
        backgroundColor: "#fff"
    },
    boxSearch:{
        flex: 1,
        height: 40
    }
});