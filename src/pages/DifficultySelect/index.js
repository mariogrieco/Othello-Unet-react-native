import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Layout from '../../Menu/components/Layout'
import { Actions }  from 'react-native-router-flux'
import Option from '../../Menu/components/Option'
import EnterName from '../EnterName'

class DifficultySelect extends Component {

  handleAction = () => {
    Actions.EnterName({id: 'Easy'})
  }

  render () {
    return (
      <Layout title='Difficulty Select'>
        <Option text='Easy' handlePress={this.handleAction}/>
        <Option text='Hard' handlePress={this.handleAction}/>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
})

export default DifficultySelect
