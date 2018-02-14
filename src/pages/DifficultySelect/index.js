import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Layout from '../../Menu/components/Layout'
import { Actions }  from 'react-native-router-flux'
import Option from '../../Menu/components/Option'
import EnterName from '../EnterName'
import { connect } from 'react-redux'

class DifficultySelect extends Component {

  handleEasyAction = () => {
    this.props.dispatch({
      type: 'Difficulty',
      payload: 1
    })
    Actions.EnterName({id: 'Easy'})
  }

  handleHardAction = () => {
    this.props.dispatch({
      type: 'Difficulty',
      payload: 2
    })

    Actions.EnterName({id: 'Hard'})
  }

  render () {
    return (
      <Layout title='Difficulty Select'>
        <Option text='Easy' handlePress={this.handleEasyAction}/>
        <Option text='Hard' handlePress={this.handleHardAction}/>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
})

export default connect(null)(DifficultySelect)
