import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {
  Router,
  Scene
} from 'react-native-router-flux'
import Home from './src/pages/Home'
import DifficultySelect from './src/pages/DifficultySelect'
import Login from './src/pages/Login'
import EnterName from './src/pages/EnterName'
import GamePlay from './src/pages/GamePlay'
import rootReducer from './src/reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router>
            <Scene key='root'>
              <Scene
                key='Home'
                title='Home'
                path='/'
                component={Home}
                // hideNavBar
              />
              <Scene
                key='DifficultySelect'
                title='DifficultySelect'
                path='/DifficultySelect'
                component={DifficultySelect}
                // hideNavBar
              />
              <Scene
                key='EnterName'
                title='EnterName'
                path='/'
                component={EnterName}
                // hideNavBar
              />
              <Scene
                key='GamePlay'
                title='GamePlay'
                path='/'
                component={GamePlay}
                hideNavBar
              />
            </Scene>
          </Router>
          {/* <View style={styles.appInfo}> */}
            {/* <Text style={styles.text}>
              Development version '0.5.0' -
              Mario Grieco
            </Text> */}
          {/* </View> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#434343'
  },
  appInfo: {
    position: 'absolute',
    backgroundColor: 'red',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: '#434343',
    right: -1,
    flex: 1,
  },
  text: {
    color: '#fff'
  }
});
