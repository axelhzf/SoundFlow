import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';


export default class Song extends Component {

  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Icon name="play" size={10} color={colors.grey} style={styles.icon}/>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 7,
    borderBottomColor: colors.grey,
    borderBottomWidth: 0.25,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  title: {

  },
});
