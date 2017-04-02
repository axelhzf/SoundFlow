import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';
import Rating from '../Rating/Rating';
import Equalizer from "./Equalizer";

export default class Card extends Component {

  mounted = true;

  state = {
    loading: false
  };

  componentDidMount() {
    this.loadSong();
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    const { user: prevUser } = prevProps;

    if (user !== prevUser) {
      this.releaseSong();
      this.loadSong();
    }
  }

  loadSong() {
    const { user } = this.props;
    this.setState({ loading: true });
    this.sound = new Sound({ uri: user.song }, (error) => {
      if (!this.mounted) return;

      this.setState({ loading: false });
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      this.play();
    });
  }

  releaseSong() {
    if (this.sound) {
      this.sound.release();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
    this.releaseSong();
  }

  play = () => {
    this.setState({ playing: true });
    this.sound.play();
  };

  pause = () => {
    this.setState({ playing: false });
    this.sound.pause();
  };

  render() {
    const { user } = this.props;
    const { loading, playing } = this.state;

    const showLoading = loading;
    const showPlay = !loading && !playing;
    const showPause = !loading && playing;

    return (
      <View style={styles.container}>
        <Image source={user.photo} resizeMode="contain" style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        { showLoading &&
          <View style={styles.loadingContainer}>
            <Text>Loading...</Text>
          </View>
        }
        { showPause &&
          <TouchableOpacity style={styles.button} onPress={this.pause}>
            <Icon name="pause" size={50} color={colors.pink} />
          </TouchableOpacity>
        }
        { showPlay &&
          <TouchableOpacity style={styles.button} onPress={this.play}>
            <Icon name="play" size={50} color={colors.pink} />
          </TouchableOpacity>
        }
        <View style={styles.ratingContainer}>
          <Rating value={user.rating} />
        </View>
        <View style={styles.ratingContainer}>
          <Equalizer/>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 200
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: 64,
  },
  name: {
    fontSize: 20,
    fontWeight: '300',
    color: colors.grey,
  },
  ratingContainer: {

  },
  loadingContainer: {
    height: 50
  }
});
