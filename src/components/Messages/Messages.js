/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView,
  View,
} from 'react-native';

import Nav from '../Navigation/Navigation';
import users from '../../data/users'
import _ from 'lodash';
import MessagesRow from "./MessagesRow";

var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Messages extends Component {
  state = {
    usersDS: ds.cloneWithRows(users),
  };

  renderRow = (user) => {
    const { navigator } = this.props;
    return <MessagesRow user={user} navigator={navigator} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav type='message' toHome={() => this.props.navigator.replace({ id: 'home' })} />
        <ScrollView style={styles.scroll}>
          <View>
            <ListView
              horizontal={false}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              dataSource={this.state.usersDS}
              pageSize={5}
              renderRow={this.renderRow}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    padding: 10
  },
});
