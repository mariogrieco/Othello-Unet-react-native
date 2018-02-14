import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

function Option (props) {
  const text = props.text
  const disabled = props.disabled
  const handlePress = disabled ? ()=>{} : props.handlePress
  const style = disabled ? [styles.textMenu, styles.disabled] : styles.textMenu
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={style}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textMenu: {
    margin: 5,
    backgroundColor: 'rgba(52, 52, 52, 0.25)',
    padding: 10,
    textAlign: 'center',
    color: '#000',
    fontWeight: '200',
    minWidth: 100
  },
  disabled: {
    color: 'rgba(0, 0, 0, 0.15)'
  },
})

export default Option
