import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Nav from '../global-widgets/nav';
import ProfileInfo from './ProfileInfo';
import ProfileRole from './ProfileRole';
import ProfileStyles from './ProfileStyles';

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Nav
          type="profile"
          toHome={() => this.props.navigator.replace({ id: 'home' })}
        />
        <ScrollView style={styles.container}>
          <ProfileInfo />
          <ProfileRole/>
          <ProfileStyles/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  }
});