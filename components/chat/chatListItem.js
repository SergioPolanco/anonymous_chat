import React, { Component } from 'react';
import { 
    Vibration, 
    Alert, 
    View, 
    StyleSheet, 
    Text, 
    Image, 
    TouchableHighlight, 
    TouchableOpacity, 
    Modal 
} from 'react-native';
import { Icon, Avatar } from 'react-native-elements'
export default class ChatListItem extends Component{
    state={
        marked: this.props.isMark,
        modalVisible: false,
        markMode: this.props.markMode
    }
    _onPressIconUser(){
        if(this.state.markMode){
            this.state.marked ? this.desMark() : this.mark();
        }else{
            this.setState({
                modalVisible: true
            })
        }
        
    }
    _onPressChatItem(){
        if(this.state.markMode){
            this.state.marked ? this.desMark() : this.mark();
        }else{
            this.props.navigation.navigate("ChatDetail")
        }
    }
    desMark(){
        Vibration.vibrate(50)
        this.props.onDesMark(this.props.id);
    }
    mark(){
        Vibration.vibrate(50)
        this.props.onLongPress(this.props.id);
    }
    _onLongPressChatItem(){
        this.mark()
    }
    render(){
        return(
            <View style={[styles.boxChatItem, {backgroundColor: this.state.marked ? "rgba(0,0,0,0.04)": "rgba(255,255,255,1)"}]}>
                <Modal
                    transparent={true}
                    visible={this.state.modalVisible}
                    animationType="fade"
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}
                >
                    <View style={styles.containerModalIconUser}>
                        <View style={styles.containerModalImageIconUser}>
                            <Image
                                style={{width: "100%", height: "100%"}}
                                resizeMode="contain"
                                source={require('../../assets/images/user/user_icon.png')}
                            />
                        </View>
                    </View>
                </Modal>
                <View style={styles.imgBoxChatItem}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.containerImageUserIcon}
                        onPress={this._onPressIconUser.bind(this)}
                        onLongPress={this._onLongPressChatItem.bind(this)}
                    >
                        <Image
                            style={styles.userIcon}
                            source={require('../../assets/images/user/user_icon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.5}
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
    containerModalIconUser:{
        flex: 1,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems: "center",
        justifyContent: "center"
    },
    containerModalImageIconUser:{
        backgroundColor: "#fff",
        width: 200,
        height: 200
    },
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