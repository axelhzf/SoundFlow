import React, { Component } from 'react'
import {
  View,
  Image,
  StyleSheet,
} from 'react-native'
import Nav from '../Navigation/Navigation';
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends Component {

  state = {
    messages: []
  };

  componentWillMount() {
    this.setState({
      messages: this.props.user.messages
    });
  }

  onSend = (messages = []) => {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  };

  renderAvatar = (message) => {
    const { user } = this.props;
    return (
      <Image source={user.photo} style={styles.avatar}/>
    )
  };

  render() {
    const { user } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Nav type='chat' toMessages={() => this.props.navigator.replace({ id: 'messages' })} />
        <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{ _id: 1 }}
          renderAvatar={this.renderAvatar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});
