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
                            backgroundColor: this.props.authorId == 2 ? "#ECF2F5" : "#2196F3"
                        }
                    ]}
                >
                    <View style={styles.containerBody}>
                        <Text style={{ color:  this.props.authorId == 2 ? "#666" : "#fff" }}>
                            {this.props.body}
                        </Text>
                    </View>
                    <View style={styles.containerDateTime}>
                        <Text>
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
        borderColor: "#666",
        padding: 5,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,

    },
    containerBody:{
        marginRight: 10,
        maxWidth: "90%"
    },
    containerDateTime:{

    }
});