import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import avatar from '../../images/eze.jpg';
import Song from './Song';

export default class ProfileInfo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image
            style={styles.image}
            source={avatar}
            resizeMode="contain"
          />
          <Text style={styles.name}>Ezekiel "Zeke" Figuero</Text>
        </View>

        <Song title="Rule the World (I Came From the City)"/>
        <Song title="Cadillac"/>
        <Song title="Losing Your Mind"/>
        <Song title="Ball of Confusion"/>

      </View>
    )
  }

}



const styles = StyleSheet.create({
  container: {

  },
  info: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 20,
  }
});
