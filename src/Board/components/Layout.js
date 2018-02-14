import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native'

function Layout (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`${props.username} vs Computer`} 
      </Text>
       <Button 
         style={styles.button}
         onPress={props.restart}
          title='Restart'
          color='#ABDBDf'
        />
        <Button onPress={props.goBack}
          title='Last state'
          color='#ABDBDf'
        />
      <Text style={styles.textTo}>
        {`Blancas: ${props.blancas} - Negras: ${props.negras}`} 
      </Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1  
  },
  textTo: {
    color: 'white'
  },
  title: {
    fontSize: 25,
    color: '#f6f6f6',
    padding: 25
  },
  button: {
    marginBottom: 10
  }
})

export default Layout
