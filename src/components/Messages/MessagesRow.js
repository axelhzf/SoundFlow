import React, { Component } from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';

export default class MessagesRow extends Component {

  getLastMessage() {
    const { user } = this.props;
    const lastMessage = _.last(user.messages);
    return lastMessage
    ? lastMessage.text
    : '';
  }

  render() {
    const { user, navigator } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigator.replace({ id: 'chat', user })}>
        <Image source={user.photo} style={styles.image} />
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text numberOfLines={1} style={styles.message}>{this.getLastMessage()}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    margin: 10
  },
  name: {
    fontWeight: '600', color: '#111'
  },
  message: {
    fontWeight: '400',
    color: '#888',
    width: 200
  }
});
