import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import users from './../data/users'

import Home from './Home/Home';
import Messages from './messages';
import Profile from './Profile/Profile';
import Chat from './chat';

export default class Index extends Component {
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'home') {
      return (
        <Home
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
      );
    }
    if (routeId === 'messages') {
      return (
        <Messages
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
      );
    }
    if (routeId === 'profile') {
      return (
        <Profile
          {...this.props}
          userData={route.userData}
          navigator={navigator} />
      );
    }
    if (routeId === 'chat') {
      return (
        <Chat
          {...this.props}
          userData={route.userData}
          navigator={navigator}
          messages={users[0].messages}/>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          style={{ flex: 1 }}
          ref={'NAV'}
          initialRoute={{ id: 'profile', name: 'home' }}
          renderScene={this.renderScene.bind(this)} />
      </View>
    )
  }
}

