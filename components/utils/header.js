import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
            <View style={styles.mainHeader}>
                <Text style={styles.titleHeader}>
                    {this.props.title}
                </Text>
                {/* <Button
                    onPress={() => this.props.navigation.navigate("ChatDetail", {conversationId: 'Test'})}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainHeader: {
        justifyContent: "center",
        backgroundColor: "#2196F3",
        padding: 10
    },
    titleHeader: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18
    }
});