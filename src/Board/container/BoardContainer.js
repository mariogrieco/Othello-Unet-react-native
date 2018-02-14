import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Button,
  TouchableHighlight
} from 'react-native'
import timer  from 'react-native-timer'
import Layout from '../components/Layout'
import Row from '../components/Row'
import Cell from '../container/CellContainer'
import Chip from '../components/Chip'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/gameplay'
import {
  canMove,
  blanca,
  negra  
} from '../../../utils'

class BoardContainer extends Component {
  getSize (w, h) {
    let sw = w/8
    let sh = h/8
    if (sw < sh) {
      return sw
    }
    else {
      return sh
    }
  }

  restart = () => {
    this.props.actions.restar()
  }

  goBack = () => {
    this.props.actions.goBack()
  }

  moveHandle = (rowKey, colKey) => {
    if (this.props.BoardState.getIn([rowKey, colKey]) === canMove) {
      this.props.actions.move(rowKey, colKey)
      timer.setTimeout(this, 'PC PLAY', () => {
        this.props.actions.IA()
      }, 750)
      // this.props.actions.validateWining()
    }
  }

  componentDidMount() {
    this.props.actions.validate();
  }

  render () {
    let width = Dimensions.get('window').width
    let height = Dimensions.get('window').height

    let size = this.getSize(width, height)
    size = size-8

    let rows = new Array(this.props.size).fill(0)
    let cols = new Array(this.props.size).fill(0)
    let board = this.props.BoardState
    let countN = this.props.countN
    let countB = this.props.countB

    return (
      <Layout 
        goBack={this.goBack}
        restart={this.restart} 
        username={this.props.username} 
        blancas={countB} 
        negras={countN}>
        {
          rows.map((row, rowKey) => {
            return (
              <View key={rowKey} style={styles.row}>
                {
                  cols.map((col, colKey) => {
                    let color = undefined
                    let disabled = false
                    if (board.getIn([rowKey, colKey]) === negra) {
                      color = '#434343'
                    }
                    else if (board.getIn([rowKey, colKey]) === blanca) {
                      color = 'white'
                    }
                    else if (board.getIn([rowKey, colKey]) === canMove) {
                      color = 'rgba(24, 124, 124, 0.4)'
                    }
                    return (
                      <TouchableHighlight
                        key={colKey}
                        onPressIn={()=>{
                          this.moveHandle(rowKey, colKey)
                        }}
                      >
                        <View style={styles.col}>
                          <Cell
                            chip={color}
                            disabled={disabled}
                            size={size}
                            color={color}
                          />
                        </View>
                      </TouchableHighlight>
                    )
                  })
                }
              </View>
            )
          })
        }
      </Layout>
    )
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

function mapStateToProps(state, props) {
  let BoardState = state.get('gameplay').get('state')
  let size = state.get('gameplay').get('size')
  let username = state.get('gameplay').get('USERNAME')
  let countB = state.get('gameplay').get(blanca)
  let countN = state.get('gameplay').get(negra)

  return {
    BoardState,
    size,
    countN,
    countB,
    username
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  col: {
    borderWidth: 1,
    borderColor: '#888'
  }
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer)
