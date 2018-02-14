import React from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

function Cell (props) {
  const size = props.size
  const color = props.color

  const styles = StyleSheet.create({
    cell: {
      backgroundColor: color,
      borderColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      height: size,
      width: size,
      margin: -1
    }
  })


  return (
    <View style={styles.cell}>
      {props.children}
    </View>
  )
}

Cell.defaultProps = {
  color: '#4f990b',
  size: 40
}

export default Cell
