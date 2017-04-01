import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import _ from 'lodash';
import Button from '../Button/Button';

export default class ProfileStyles extends Component {

  state = {
    genres: {
      'Latino': false,
      'Pop': false,
      'Rock': false,
      'Soul': true,
      'Indie': false,
      'Hip Hop': true,
      'Electronic/Dance': false,
      'Chill': false,
      'Country': false,
      'Folk': false,
      'Funk': true,
      'Metal': false,
      'Jazz': false,
      'Blues': false,
      'Reggae': false,
      'RnB': true,
      'Punk': false,
    }
  };

  toggleGenre = (genre) => {
    const { genres } = this.state;
    genres[genre] = !genres[genre];
    this.setState({ genres });
  };

  render() {
    const { genres } = this.state;
    return (
      <View style={styles.container}>
        {_.map(genres, (selected, genre) => (
          <Button
            active={selected}
            label={genre}
            onPress={() => this.toggleGenre(genre)}
            key={genre}
          />
        ))}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
