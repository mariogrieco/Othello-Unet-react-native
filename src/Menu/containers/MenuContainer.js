import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text 
} from 'react-native'
import { Actions }  from 'react-native-router-flux'
import Layout from '../components/Layout'
import Option from '../components/Option'

class MenuContainer extends Component {
  playHandlePless = () => {
    Actions.DifficultySelect()
  }

  render () {
    return (
      <Layout title="OTHELLO">
         <Option text='Play Game' handlePress={this.playHandlePless} />
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
})

export default MenuContainer
