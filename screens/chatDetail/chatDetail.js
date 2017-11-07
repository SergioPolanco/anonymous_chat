import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, KeyboardAvoidingView, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import Header from '../../components/utils/header'
import ItemMessage from './itemMessage'
import uuid from 'uuid';

let messagesList = [
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 1,
        dateTime: "20:01"
    },
    {   
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message, Example Message",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message, Example Message, Example Message, Example Message, Example Message",
        authorId: 1,
        dateTime: "20:01"
    },

]
export default class ChatDetail extends Component{
    state = {
        text: ""
    }
    render(){
        console.log(this.props.navigation)
        return(
            <View style={styles.container}>
                <Header 
                    title={this.props.navigation.state.params.conversationId}
                />
                <KeyboardAvoidingView
                    behavior="padding"
                    style={styles.containerFlatListMessages}
                >
                    <FlatList 
                        style={styles.containerItemMessages}
                        data={messagesList}
                        renderItem={({item}) => (
                            <ItemMessage
                                key={uuid()}
                                id={item.idMessage}
                                body={item.body}
                                dateTime={item.dateTime}
                                authorId={item.authorId}
                            /> 
                        )}
                    />
                    <View style={styles.containerSendText}>
                        <Icon 
                            name="mood"
                            size={30} 
                            color={"#9E9E9E"} 
                            style={{ marginRight: 10 }}
                        />
                        <TextInput
                            style={styles.boxSendMessage}
                            placeholder={"Type"}
                            placeholderTextColor={"#9E9E9E"}
                            onChangeText={(text) => this.setState({text})}
                            underlineColorAndroid={"#fff"}
                        >
                        </TextInput>
                        <Icon 
                            name="send"
                            size={30} 
                            color={this.state.text == '' ? "#9E9E9E" : "#2196F3"} 
                            style={{ marginLeft: 10 }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerFlatListMessages:{
        flex: 1,
    },
    containerItemMessages:{
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    containerSendText: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        padding: 5
    },
    boxSendMessage: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        height: 40
    }
});