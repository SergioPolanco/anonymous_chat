import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ItemMessage extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View 
                    style={[
                        styles.containerMessage, 
                        {
                            alignSelf: this.props.authorId == 2 ? "flex-start" : "flex-end",
                            backgroundColor: this.props.authorId == 2 ? "#ECF2F5" : "#2196F3",
                            borderColor: this.props.authorId == 2 ? "#ECF2F5" : "#2196F3"
                        }
                    ]}
                >
                    <View style={styles.containerBody}>
                        <Text 
                            style={[
                                styles.formatBodyText,
                                { 
                                    color:  this.props.authorId == 2 ? "#666" : "#fff" 
                                }
                            ]}
                        >
                            {this.props.body}
                        </Text>
                    </View>
                    <View style={styles.containerDateTime}>
                        <Text 
                            style={[
                                styles.formatDateTimeText,
                                {
                                    color: this.props.authorId == 2 ? "#9E9E9E" : "#F5F5F5"
                                }
                            ]}
                        >
                            {this.props.dateTime}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerMessage:{
        maxWidth: "90%",
        borderWidth: 1,
        padding: 3,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,

    },
    containerBody:{
        maxWidth: "90%",
        marginRight: 10,
        alignSelf: 'stretch'
    },
    formatBodyText:{ 
        textAlign: "justify",
        alignSelf: 'stretch'
    },
    containerDateTime:{
        width: "10%",
        alignSelf: 'stretch',
        //justifyContent: 'flex-end'
    },
    formatDateTimeText: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        fontSize: 10
    }
});