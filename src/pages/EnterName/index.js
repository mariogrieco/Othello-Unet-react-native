import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'


class GamePlay extends Component {
  state = {
    username: ''
  }

  setPlayerName = (username) => {
    this.setState({
      username: username.replace(' ', '-')
    })
  }

  onPressBtn = () => {
    if (this.state.username.length>0) {
      this.props.dispatch({
        type: 'USERNAME',
        payload: {
          username: this.state.username
        }
      })
      Actions.GamePlay()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>Enter Player Name:</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
            minWidth: 100,
            maxWidth: '100%'
          }}
          onChangeText={this.setPlayerName}
          value={this.state.username}
        />
        <Button
        disabled={this.state.username.length<=0}
        onPress={this.onPressBtn}
        title='Play Game'
        color='#A41584'
        // accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default connect(null)(GamePlay)
