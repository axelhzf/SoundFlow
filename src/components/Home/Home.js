import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Nav from '../Navigation/Navigation';
import SwipeCards from '../SwipeCards';
import users from '../../data/users';
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../style/colors';

export default class Home extends Component {

  handleYup(card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope(card) {
    console.log(`Nope for ${card.text}`)
  }

  noMore() {
    return (
      <View style={styles.card}>
        <Text>No More Cards</Text>
      </View>
    )
  }

  yup() {
    this.refs['swiper']._goToNextCard()
  }

  nope() {
    this.refs['swiper']._goToNextCard()
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav toMessages={() => this.props.navigator.replace({ id: "messages" })}
             toProfile={() => this.props.navigator.replace({ id: 'profile' })} />
        <SwipeCards
          ref={'swiper'}
          cards={users}
          containerStyle={{ alignItems: 'center', flex: 1 }}
          renderCard={(user) => <Card user={user} />}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYup}
          handleNope={this.handleNope} />
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 150
        }}>
          <TouchableOpacity style={styles.noButton} onPress={() => this.nope()}>
            <Icon name="microphone-slash" size={30} color={colors.pink} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.yesButton} onPress={() => this.yup()}>
            <Icon name="music" size={30} color={colors.pink} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yesButton: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginLeft: 30,
  },
  noButton: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginRight: 30
  },
  card: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#e3e3e3',
    width: 350,
    height: 420,
  }
});
