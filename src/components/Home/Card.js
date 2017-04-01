import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Sound from 'react-native-sound';

//Sound.setCategory('Playback');

export default class Card extends Component {

  state = {
    loaded: false
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
    this.releaseSong();
  }

  play = () => {
    this.setState({ playing: true });
    this.sound.play(() => {
      console.log('playing');
    });
  };

  pause = () => {
    this.setState({ playing: false });
    this.sound.pause();
  };

  render() {
    const { user } = this.props;
    const { loading, playing } = this.state;

    const showLoading = loading;
    const showPlay = !loading && playing;
    const showPause = !loading && !playing;

    return (
      <View style={styles.container}>
        <Image source={{ uri: user.photo }} resizeMode="contain" style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <View>
          { showLoading && <Text>Loading...</Text> }
          { showPause &&
            <TouchableOpacity style={styles.buttons} onPress={this.pause}>
            <Text>Pause</Text>
            </TouchableOpacity>
          }
          { showPlay &&
            <TouchableOpacity style={styles.buttons} onPress={this.play}>
            <Text>Play</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    height: 200
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 30,
  },
  content: {
    width: 350,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    fontWeight: '300',
    color: '#444'
  }
});
