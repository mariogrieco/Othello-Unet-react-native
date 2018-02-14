import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground
} from 'react-native'

function Layout (props) {
  const title = props.title

  return (
    <View style={styles.layout}>
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../../assets/images/wallpaper-menu-optimized.jpg')}
      >
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
      <View>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: '#f5f5f5',
    fontWeight: 'bold'
  },
  ImageBackground: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    position: 'absolute',
  }
})

export default Layout
