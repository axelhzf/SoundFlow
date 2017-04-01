import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated
} from 'react-native';
import EqualizerBar from './EqualizerBar';

export default class Equalizer extends Component {

  render() {
    return (
      <View style={styles.container}>
        <EqualizerBar />
        <EqualizerBar />
        <EqualizerBar />
        <EqualizerBar />
        <EqualizerBar />
        <EqualizerBar />
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
