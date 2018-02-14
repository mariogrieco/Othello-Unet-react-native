// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   Dimensions,
//   Button,
//   TouchableHighlight
// } from 'react-native'
// import Layout from '../components/Layout'
// import Row from '../components/Row'
// import Cell from '../container/CellContainer'
// import Chip from '../components/Chip'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as Actions from '../../actions/multi'

// class BoardContainer extends Component {
//   getSize (w, h) {
//     let sw = w/8
//     let sh = h/8
//     if (sw < sh) {
//       return sw
//     }
//     else {
//       return sh
//     }
//   }

//   moveHandle = (x, y) => {
//     if (this.props.BoardState.getIn([x, y]) === 'CM') {
//       // validate
//       this.props.actions.move(x,y)
//       this.props.actions.eat(x,y)
//       // this.props.actions.changeRound()
      
//       this.props.actions.IA() // get move, eat

//       // this.props.actions.changeRound()
//       // this.props.actions.validate()
//     }
//   }

//   componentDidMount() {
//     this.props.actions.validate()
//   }

//   render () {
//     let width = Dimensions.get('window').width
//     let height = Dimensions.get('window').height

//     let size = this.getSize(width, height)
//     size = size-0

//     let rows = new Array(this.props.size).fill(0)
//     let cols = new Array(this.props.size).fill(0)
//     let board = this.props.BoardState
//     let countN = this.props.countN
//     let countB = this.props.countB

//     return (
//       <Layout>
//         <View>
//           <Text>
//             Contador Blancas: {countB}
//           </Text>
//           <Text>
//             Contador Negras: {countN}
//           </Text>
//         </View>
//         {
//           rows.map((row, rowKey) => {
//             return (
//               <View key={rowKey} style={styles.row}>
//                 {
//                   cols.map((col, colKey) => {
//                     let color = undefined
//                     let disabled = false
//                     if (board.getIn([rowKey, colKey]) === 'B ') {
//                       color = 'white'
//                     }
//                     else if (board.getIn([rowKey, colKey]) === 'N ') {
//                       color = '#434343'
//                     }
//                     else if (board.getIn([rowKey, colKey]) === 'CM') {
//                       color = 'rgba(24, 124, 124, 0.4)'
//                     }
//                     return (
//                       <TouchableHighlight
//                         key={colKey}
//                         onPressIn={()=>{
//                           this.moveHandle(rowKey, colKey)
//                         }}
//                       >
//                         <View style={styles.col}>
//                           <Cell
//                             chip={color}
//                             disabled={disabled}
//                             size={size}
//                             color={color}
//                           />
//                         </View>
//                       </TouchableHighlight>
//                     )
//                   })
//                 }
//               </View>
//             )
//           })
//         }
//       </Layout>
//     )
//   }
// }

// function mapDispatchToProps(dispatch, props) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }

// function mapStateToProps(state, props) {
//   let BoardState = state.get('gameplay').get('state')
//   let size = state.get('gameplay').get('size')
//   let countB = state.get('gameplay').get('B ')
//   let countN = state.get('gameplay').get('N ')

//   return {
//     BoardState,
//     size,
//     countN,
//     countB
//   }
// }

// const styles = StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//   },
//   col: {
//     borderWidth: 1,
//     borderColor: '#888'
//   }
// })



// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BoardContainer)
