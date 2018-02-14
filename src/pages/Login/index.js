import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Layout from '../../Menu/components/Layout'

class Login extends Component {
  render () {
    return (
      <Layout title='Sign In'>
        <Text style={[styles.btnDefault, styles.facebook]}>Facebook</Text>
        <Text style={styles.btnDefault}>Github</Text>
        <Text style={styles.btnDefault}>Othello acount</Text>
      </Layout>
    )
  }
}

const styles = StyleSheet.create({
  facebook: {
    backgroundColor: '#4267b2',
    color: '#fff'
  },
  github: {

  },
  normal: {
  },
  btnDefault: {
    padding: 10,
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
    borderRadius: 4,
    margin: 5,
    fontSize: 20
  }
})

export default Login
