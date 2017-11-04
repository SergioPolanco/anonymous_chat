/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ChatListContainer from '../../components/chat/chatListContainer'
import ConfigContainer from '../../components/config/configContainer'
import Header from '../../components/utils/header'
import GroupListContainer from '../../components/group/groupListContainer'
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import RootNavigator  from '../../navigator/navigator'

const ChatListRoute = () => <ChatListContainer />;
const GroupListRoute = () => <GroupListContainer/>;
const ConfigRoute = () => <ConfigContainer />;

export default class Home extends PureComponent {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Chats' },
      { key: '2', title: 'Groups' },
      { key: '3', title: 'Config'}
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar indicatorStyle={{ backgroundColor: "#fff" }} {...props} />;

  _renderScene = SceneMap({
    '1': () => <ChatListContainer navigator={this.props.navigation}/>,
    '2': GroupListRoute,
    '3': ConfigRoute
  });

  render() {
    return (
        <View style={styles.containerParent}>
            <Header
              title="Anonymous Chat"
            />
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
            /> 
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerParent: {
    flex: 1
  },
  container: {
    flex: 1,
  },
});