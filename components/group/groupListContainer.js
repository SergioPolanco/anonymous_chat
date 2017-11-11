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
import GroupListItem from './groupListItem';
import FadeInView from '../utils/fadeInView'
import uuid from 'uuid';

var dummyGroupList = [
    {   
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 1',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 2',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 3',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 4',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 5',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 6',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 7',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    },
    {
        key: uuid(),
        imgUrl: "",
        groupName: 'Group 8',
        userName: "User Random",
        content: "Example Message",
        date: "20:01"
    }
]

export default class GroupListContainer extends Component{
    state={
        groupList: dummyGroupList,
        textSearch: "",
        markedGroups: []
    }
    _onLongPressGroupItem = (id)=> {
        let markedGroups = this.state.markedGroups.slice();
        markedGroups.push(id)
        this.setState({
            markedGroups: markedGroups
        });
    }
    _desMarkGroup = (id) => {
        let markedGroups = this.state.markedGroups.slice();
        let index = markedGroups.indexOf(id);
        markedGroups.splice(index, 1);
        this.setState({
            markedGroups: markedGroups
        });
    }
    render(){
        return(
            <View style={[ styles.container, { backgroundColor: '#fff' } ]} >
                {
                    this.state.markedGroups.length == 0?
                    <View style={styles.containerSearchBox}>
                        <Icon name="search" size={20} color="#9E9E9E" style={{marginRight: 10}} />
                        <TextInput
                            style={styles.boxSearch}
                            placeholder={"Search"}
                            placeholderTextColor={"#9E9E9E"}
                            onChangeText={(text) => this.setState({textSearch})}
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
                                        markedGroups: []
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
                                    let message = this.state.markedGroups.length == 1 ?
                                        'Just pinned ' + this.state.markedGroups.length + ' Group':
                                        'Just pinned ' + this.state.markedGroups.length + ' Groups'
                                    this.setState({
                                        markedGroups: []
                                    })
                                    Alert.alert(message)
                                }} 
                            />
                            <Icon
                                name='eye-slash'
                                type='font-awesome'
                                color='#2196F3'
                                onPress={() => {
                                    let message = this.state.markedGroups.length == 1 ?
                                        'Just marked as not viewed ' + this.state.markedGroups.length + ' Group':
                                        'just marked as not viewed ' + this.state.markedGroups.length + ' Groups'
                                    
                                    this.setState({
                                        markedGroups: []
                                    })
                                    Alert.alert(message)
                                }} 
                            />
                            <Icon
                                name='trash'
                                type='font-awesome'
                                color='#2196F3'
                                onPress={() => {
                                    let message = this.state.markedGroups.length == 1 ?
                                        'Just deleted ' + this.state.markedGroups.length + ' Group':
                                        'Just deleted ' + this.state.markedGroups.length + ' Group'
                                    this.setState({
                                        markedGroups: []
                                    })
                                    Alert.alert(message)
                                }} 
                            />
                        </View>
                    </FadeInView>
                    
                }
                <FlatList
                    style={styles.containerGroupList}
                    data={this.state.groupList}
                    extraData={this.state.markedGroups}
                    renderItem={({item}) => (
                        <GroupListItem 
                            key={uuid()}
                            id={item.key}
                            userName={item.userName}
                            groupName={item.groupName} 
                            content={item.content} 
                            date={item.date}
                            isMark={groupIsMark(this.state.markedGroups, item.key)}
                            markMode={this.state.markedGroups.length == 0 ? false : true}
                            onLongPress={this._onLongPressGroupItem}
                            onDesMark={this._desMarkGroup}
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
    titleGroups:{
        color: "#000",
        fontWeight: "bold"
    },
    containerGroupList:{
        flex: 1,
        backgroundColor: "#fff"
    },
    boxSearch:{
        flex: 1,
        height: 40
    }
});


function groupIsMark(markedGroups, groupId) {
    for(let item of markedGroups){
        if(item == groupId){
            return true
        }
    }
    return false
}