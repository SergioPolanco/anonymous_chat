import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home'
import ChatDetail from '../screens/chatDetail'

const RootNavigator = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: null,
            },
        },
        ChatDetail: {
            screen: ChatDetail,
            navigationOptions: {
                headerTitle: 'Chat',
            },
        }
    },
);

export default RootNavigator;