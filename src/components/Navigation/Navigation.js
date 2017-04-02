import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';

class Header extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          {this.props.leftIcon}
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/logo.jpg')}
            resizeMode="contain"
            style={styles.logo} />
        </View>
        <View style={styles.icon}>
          {this.props.rightIcon}
        </View>
      </View>
    )
  }

}

class HeaderIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Icon name={this.props.name} size={20} color={colors.pink} />
      </TouchableOpacity>
    );
  }
}


export default class Nav extends Component {

  home() {
    return (
      <Header
        leftIcon={<HeaderIcon name="user" onPress={this.props.toProfile} />}
        rightIcon={<HeaderIcon name="wechat" onPress={this.props.toMessages} />}
      />
    );
  }

  profile() {
    return (
      <Header
        rightIcon={ <HeaderIcon name="music" onPress={this.props.toHome} />}
      />
    );
  }

  message() {
    return (
      <Header
        rightIcon={ <HeaderIcon name="music" onPress={this.props.toHome} />}
      />
    );
  }

  chat() {
    return (
      <Header
        rightIcon={ <HeaderIcon name="wechat" onPress={this.props.toMessages} />}
      />
    );
  }

  render() {
    const { type } = this.props;
    switch (type) {
      case 'message':
        return this.message();
      case 'profile':
        return this.profile();
      case 'chat':
        return this.chat();
      default:
        return this.home()
    }
  }

}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderColor: colors.pink
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 60,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 153,
    height: 39
  }
});
