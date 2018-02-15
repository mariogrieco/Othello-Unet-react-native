import React, { Component, PureComponent }  from 'react'
import Cell from '../components/Cell'
import Chip from '../components/Chip'
import timer from 'react-native-timer'

class CellContainer extends PureComponent {
  state = {
    color: false
  }

  // componentWillReceiveProps (nextProps) {
  //   if (nextProps.color === '#434343' && nextProps.color !== this.state.color) {
  //     this.setState(() =>{
  //       return {
  //         color: '#888'
  //       }
  //     }, () => {
  //       timer.setTimeout(this, 'PC PLAY', () => {
  //         this.setState({
  //           color: '#434343'
  //         })
  //       }, 350)
  //     })
  //   }
  //   else if (nextProps.color === 'white' && nextProps.color !== this.state.color) {
  //     this.setState(() =>{
  //       return {
  //         color: 'red'
  //       }
  //     }, () => {
  //       timer.setTimeout(this, 'PC PLAY', () => {
  //         this.setState({
  //           color: 'white'
  //         })
  //       }, 350)
  //     })
  //   }
  // }

  render () {
    const chip = this.props.chip
    const color = this.props.color
    const size = this.props.size

    return (
      <Cell size={size}>
        {
          chip &&
          <Chip size={size-10} color={color}/>
        }
      </Cell>
    )
  }
}

export default CellContainer
