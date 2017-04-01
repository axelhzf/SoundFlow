import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Nav from '../global-widgets/nav'
import SwipeCards from '../SwipeCards';
import users from '../../data/users';
import Card from './Card';


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
        <Nav chat={() => this.props.navigator.replace({ id: "messages" })}
             toProfile={() => this.props.navigator.replace({ id: 'profile' })} />
        <SwipeCards
          ref={'swiper'}
          cards={users}
          containerStyle={{ backgroundColor: '#ccc', alignItems: 'center', flex: 1 }}
          renderCard={(user) => <Card user={user} />}
          renderNoMoreCards={() => this.noMore()}
          handleYup={this.handleYup}
          handleNope={this.handleNope} />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 150 }}>
          <TouchableOpacity style={styles.buttons} onPress={() => this.nope()}>
            <Text>Nope</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSmall} />
          <TouchableOpacity style={styles.buttons} onPress={() => this.yup()}>
            <Text>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  buttons: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40
  },
  buttonSmall: {
    width: 50,
    height: 50,
    borderWidth: 10,
    borderColor: '#e7e7e7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
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
