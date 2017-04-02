import React, { Component } from 'react';
import {
  Navigator,
  View
} from 'react-native';

import Home from './Home/Home';
import Messages from './Messages/Messages';
import Profile from './Profile/Profile';
import Chat from './Chat/Chat';

export default class Index extends Component {

  renderScene = (route, navigator) => {
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
      console.log('route user', route.user);
      return (
        <Chat
          {...this.props}
          user={route.user}
          navigator={navigator}
        />
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          style={{ flex: 1 }}
          ref={'NAV'}
          initialRoute={{ id: 'profile', name: 'profile' }}
          renderScene={this.renderScene} />
      </View>
    )
  }
}

