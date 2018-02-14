import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function Chip (props) {
  const color = props.color
  const size = props.size

  return (
    <Icon name="circle" size={size} color={color} />
  )
}

Chip.defaultProps = {
  size: 20,
  color: 'red'
}

export default Chip
