import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated
} from 'react-native';
import colors from '../../style/colors';
import _ from 'lodash';

export default class Equalizer extends Component {

  state = {
    step: new Animated.Value(0),
  };

  componentDidMount() {
    this.toHigh();
  }

  toHigh = () => {
    Animated.timing(
      this.state.step,
      {
        toValue: 30,
        duration: _.random(500, 1000),
      }
    ).start(this.toLow);
  };

  toLow = () => {
    Animated.timing(
      this.state.step,
      {
        toValue: 0,
        duration: _.random(500, 1000),
      }
    ).start(this.toHigh);
  };

  render() {
    return (
      <Animated.View style={{
        width: 15,
        backgroundColor: colors.pink,
        height: this.state.step
      }} />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 200
  },
  bar: {
    width: 15,
    height: 40,
    backgroundColor: colors.pink
  }
});
