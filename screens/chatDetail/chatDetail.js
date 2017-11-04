import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
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
    
    render(){
        console.log(this.props.navigation)
        return(
            <View style={styles.container}>
                <Header 
                    title={this.props.navigation.state.params.conversationId}
                />
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerItemMessages:{
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    }
});