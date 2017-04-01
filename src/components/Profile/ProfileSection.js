import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import colors from '../../style/colors'

export default class ProfileSection extends Component {

  render() {
    return (
      <View>
        <Text style={styles.header}>{this.props.title}</Text>
        <View style={styles.content}>
          {this.props.children}
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    color: colors.grey,
    marginLeft: 10,
    marginTop: 20,
    fontWeight: 'bold'
  },
  content: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 3,
    padding: 20
  }
});
