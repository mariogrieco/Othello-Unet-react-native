import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, ScrollView } from 'react-native'
import BoardContainer from '../../Board/container/BoardContainer'

class GamePlay extends Component {
  state = {
    turno: 1,
    negras: 0,
    blancas: 0,
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.ImageBackground}
          source={require('../../../assets/images/wallpaper-menu-optimized.jpg')}
        >
        </ImageBackground>
        <Text>GamePlay</Text>
        <ScrollView>
          <BoardContainer />
        </ScrollView>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  ImageBackground: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
})

export default GamePlay
