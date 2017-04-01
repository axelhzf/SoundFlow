import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Button from '../Button/Button';
import ProfileSectionHeader from './ProfileSectionHeader'

export default class ProfileRole extends Component {

  state = {
    active: 'Producer'
  };

  renderButton(role) {
    const { active } = this.state;
    return (
      <Button
        label={role}
        onPress={() => this.setState({ active: role})}
        active={active === role}
        size="big"
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ProfileSectionHeader title="Profile role"/>
        { this.renderButton('Producer') }
        { this.renderButton('Singer') }
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});