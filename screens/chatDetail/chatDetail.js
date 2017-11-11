import React, { Component } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    FlatList,
    KeyboardAvoidingView,
    TextInput,
    Keyboard
} from 'react-native';
import { Icon } from 'react-native-elements'
import Header from '../../components/utils/header'
import ItemMessage from './itemMessage'
import uuid from 'uuid';

let messagesList = [
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 1",
        authorId: 1,
        dateTime: "20:01"
    },
    {   
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 2",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 3",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 4",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 5",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 6",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 7",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 8",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 9",
        authorId: 1,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message 10", 
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message, Example Message 11",
        authorId: 2,
        dateTime: "20:01"
    },
    {
        key: uuid(),
        idMessage: uuid(),
        body: "Example Message, Example Message, Example Message, Example Message, Example Message 12",
        authorId: 1,
        dateTime: "20:01"
    },

]
export default class ChatDetail extends Component{
    state = {
        text: "",
        messages: messagesList,
    }

    sendMessage(){
        if(this.state.text){
            let messages = this.state.messages.slice();
            messages.unshift(
                {
                    key: uuid(),
                    idMessage: uuid(),
                    body: this.state.text,
                    authorId: 1,
                    dateTime: "20:01"
                }
            );
            this.setState({
                messages: messages,
                text: ''
            });
            Keyboard.dismiss;
        }
    }

    render(){
        console.log(this.props.navigation)
        return(
            <View style={styles.container}>
                <Header 
                    title={this.props.navigation.state.params.conversationId}
                />
                <KeyboardAvoidingView
                    style={styles.containerFlatListMessages}
                >
                    <FlatList
                        inverted
                        style={styles.containerItemMessages}
                        data={this.state.messages}
                        extraData={this.state.messages}
                        ref="containerItemMessages"
                        //initialScrollIndex={11}
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
                            value={this.state.text}
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
                            onPress={() => {
                                this.sendMessage()
                            }}
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