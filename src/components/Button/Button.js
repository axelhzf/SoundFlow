import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../style/colors';

export default class Button extends Component {

  render() {
    const textStyle = this.props.size === 'big'
      ? { fontSize: 20, width: 120, textAlign: 'center' }
      : { };
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={
          this.props.active
            ? styles.activeLabel
            : styles.inactiveLabel
        }
      >
        <Text style={textStyle}>
          {this.props.label}
        </Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  activeLabel: {
    borderWidth: 1,
    borderColor: colors.pink,
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  inactiveLabel: {
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 10,
    borderRadius: 10,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#fff'
  }
});
