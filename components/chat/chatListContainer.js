import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';

export default class ChatListContainer extends Component{
    render(){
        return(
            <View style={[ styles.container, { backgroundColor: '#fff' } ]} >
                <View style={styles.containerTitleChats}>
                    <Text style={styles.titleChats}>
                        Chat's List
                    </Text>
                    <ScrollView contentContainerStyle={styles.contentChatsContainer}>
                    <FlatList
                        data={[{key: 'Chat 1'}, {key: 'Chat 2'}]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                    />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTitleChats:{
        backgroundColor: "#E0E0E0",
        alignItems: "center",
        padding: 10
    },
    titleChats:{
        color: "#000",
        fontWeight: "bold"
    },
    contentChatsContainer: {

    }
});