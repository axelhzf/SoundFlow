import React, { Component } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';

export default class Rating extends Component {

  render() {
    const { value } = this.props;
    return (
      <View style={styles.container}>
        {_.range(5).map(i => (
          <Icon
            key={i}
            name="star"
            size={20}
            color={i < value ? colors.pink: colors.lightGrey }
            style={styles.icon}
          />
        ))}
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150
  },
  icon: {
    marginLeft: 5,
    marginRight: 5
  }
};
