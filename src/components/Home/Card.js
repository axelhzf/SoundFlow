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

export default class Card extends Component {

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
        <Image source={{ uri: user.photo }} resizeMode="contain" style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
        <View>
          { showLoading && <Text>Loading...</Text> }
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
    width: 120,
    height: 120,
    marginBottom: 20,
    marginTop: 20
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
    color: colors.grey,
    marginBottom: 20,
  }
});
