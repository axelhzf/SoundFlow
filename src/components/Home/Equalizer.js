import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated
} from 'react-native';
import EqualizerBar from './EqualizerBar';

export default class Equalizer extends Component {

  render() {
    const { active } = this.props;
    return (
      <View style={styles.container}>
        <EqualizerBar active={active} />
        <EqualizerBar active={active} />
        <EqualizerBar active={active} />
        <EqualizerBar active={active} />
        <EqualizerBar active={active} />
        <EqualizerBar active={active} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 160
  },
});
