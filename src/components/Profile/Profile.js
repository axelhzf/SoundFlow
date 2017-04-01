import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Nav from '../global-widgets/nav';
import ProfileInfo from './ProfileInfo';
import ProfileRole from './ProfileRole';
import ProfileGenres from './ProfileGenres';
import ProfileSection from './ProfileSection';

export default class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Nav
          type="profile"
          toHome={() => this.props.navigator.replace({ id: 'home' })}
        />
        <ScrollView style={styles.container}>
          <ProfileSection title="Profile">
            <ProfileInfo />
          </ProfileSection>
          <ProfileSection title="Role">
            <ProfileRole/>
          </ProfileSection>
          <ProfileSection title="Genres">
            <ProfileGenres/>
          </ProfileSection>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  }
});
