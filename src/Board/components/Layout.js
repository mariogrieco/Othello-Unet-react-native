import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native'

function Layout(props) {
  return (
    <View style={styles.container}>
       <View>
         <Text style={styles.title}>
            {`${props.username} vs Computer`}
          </Text>
       </View>
      {props.children}
      <View style={styles.subcontainer}>
        <Text style={styles.textTo}>
           {`Blancas: ${props.blancas} - Negras: ${props.negras}`}
         </Text>
         <View style={styles.button}>
          <Button onPress={props.goBack}
            title='Last state'
            color='#ABDBDf'
          />
        </View>
        <View style={styles.button}>
          <Button
            onPress={props.restart}
            title='Restart'
            color='#ABDBDf'
          />
        </View>
      </View>
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
    fontSize: 20,
    color: '#f6f6f6',
    padding: 25
  },
  subcontainer: {
    margin: 5
  },
  button: {
    margin: 5
  }
})

export default Layout
