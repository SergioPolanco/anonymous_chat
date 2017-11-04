import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/home/home'
import ChatDetail from '../screens/chatDetail/chatDetail'

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
            path: 'chat/:conversationId',
            navigationOptions: {
                header: null,
            },
        }
    },
);

export default RootNavigator;