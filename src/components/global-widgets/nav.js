import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';

export default class Nav extends Component {

    home() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.toProfile}>
                    <Icon name="user" size={20} color={colors.pink} style={styles.leftIcon}/>
                </TouchableOpacity>
                { /*
                 <Image source={require('../../images/logo.png')} resizeMode="contain"
                 style={{ width: 100, height: 30 }} />
                 */
                }
                <TouchableOpacity onPress={this.props.toChat}>
                    <Icon name="wechat" size={20} color={colors.pink} style={styles.rightIcon}/>
                </TouchableOpacity>
            </View>
        );
    }

  profile() {
    console.log(this.props.toHome);return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.toHome}>
          <Icon name="music" size={20} color={colors.pink} style={styles.leftIcon}/>
        </TouchableOpacity>
      </View>
    );
  }

    message() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Icon name="music" size={20} color={colors.pink} style={styles.leftIcon}/>
                </TouchableOpacity>
                {/*
                 <Image source={require('../../images/logo.png')} resizeMode="contain"
                 style={{ width: 100, height: 30 }} />
                 */}
                <View style={{width: 25, height: 25, margin: 10}}/>
            </View>
        );
    }

    chat() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    pepe
                </TouchableOpacity>
                {/*
                 <Image source={require('../../images/logo.png')} resizeMode="contain"
                 style={{ width: 100, height: 30 }} />
                 */}
                <View style={{width: 25, height: 25, margin: 10}}/>
            </View>
        )
    }

    render() {
        // TODO: WTF?????
        if (this.props.type == "message") {
            return (
                <View>{this.message()}</View>
            );
        } else if (this.props.type == "profile") {
            return (
                <View>{this.profile()}</View>
            );
        } else if (this.props.type == "chat") {
            return (
                <View>{this.chat()}</View>
            );
        } else {
            return (
                <View>{this.home()}</View>
            );
        }
    }

}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)'
    },
    leftIcon: {
        marginLeft: 10
    },
    rightIcon: {
        marginRight: 10
    }
});