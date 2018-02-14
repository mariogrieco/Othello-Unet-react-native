import { fromJS } from 'immutable'
import {
  getOneBoard,
  validate,
  changeRound,
  eat,
  clear,
  getLength,
  getValidMove,
  clearOption,
  printState,
  getRandMove,
  blanca,
  canMove,
  negra,
  getIsNot
} from '../../utils'
import { Alert } from 'react-native'

const initialState = validate(getOneBoard(), negra, blanca)
let lastState = []

function gameplay (state = initialState, action) {
  switch (action.type) {
    case 'VALIDATE': {
      let nextState = clear(state)
      nextState = validate(nextState, negra, blanca)
      nextState = getLength(nextState)

      return nextState
    }
    case 'GO_BACK': {
      let back = lastState.pop()
      if (back) {
        return back
      }
      
      return state
    }
    case 'USERNAME': {
      let nextState = getOneBoard()
      return nextState.set('USERNAME', action.payload.username)
    }
    case 'MOVE': {
      let { row, col } = action.payload
      let nextState = state
      if (state.getIn(['state', row, col]) === canMove) {
        nextState = clear(nextState)
        nextState = nextState.setIn(['state', row, col], negra)
        nextState = eat(nextState, row, col, negra)
        nextState = getLength(nextState)
        lastState.push(state)
        nextState = clear(nextState)
        nextState = validate(nextState, negra, blanca)
        return nextState
      }
      else {
        Alert.alert(`Movimiento invalido ${action.payload.x}, ${action.payload.y}!`)
      }
     
      return nextState
    }
    case 'CLEAR': {
      return clear(state)
    }
    case 'RESET': {
      return validate(getOneBoard().set('USERNAME', state.get('USERNAME')), negra, blanca)
    }
    case 'Difficulty': {
      return state.set('Difficulty', action.payload)
    }
    case 'NoMore': {
        //sin negras! juega la IA!
        if (nextState.get(negra) === 0) {

        }

      return state
    }
    case 'VALIDATEWINING': {
      let  nextState = getLength(state)
      if ((nextState.get(negra)+nextState.get(blanca)) === 8*8) {
          lastState = []
          if (nextState.get('negra') > nextState.get(blanca)) {
            Alert.alert(`Gana ${state.get('USERNAME')}`)
          }else {
            Alert.alert(`Pierde ${state.get('USERNAME')}`)
            Alert.alert(`Gana PC`)
          }
          return getOneBoard().set('USERNAME', state.get('USERNAME'))
      }
    }
    case 'IA': {
      let nextState =  clear(state)
      let moves = {}
      nextState = validate(nextState, blanca, negra)
      if (state.get('Difficulty') === 1) {
        moves = getRandMove(nextState)
      }
      else {
        moves = getValidMove(nextState)
      }
        // // validar cuando no tienen mas movimientos
      if (moves !== false && nextState.getIn(['state', moves.row, moves.col]) === canMove) {
        nextState = clear(state)
        nextState = nextState.setIn(['state', moves.row, moves.col], blanca)
        nextState = eat(nextState, moves.row, moves.col, blanca)
        nextState = clear(nextState)
        nextState = validate(nextState, negra, blanca)
        nextState = getLength(nextState)
      }
      else if (!moves) {
        Alert.alert('PC sin movimientos!')
        nextState = clear(nextState)
        nextState = validate(nextState, negra, blanca)
        nextState = getLength(nextState)
      }  
      if ((nextState.get(negra)+nextState.get(blanca)) === 8*8) {
        lastState = []
        if (nextState.get('negra') > nextState.get(blanca)) {
          Alert.alert(`Gana ${state.get('USERNAME')}`)
        }else {
          Alert.alert(`Pierde ${state.get('USERNAME')}`)
          Alert.alert(`Gana PC`)
        }
        return getOneBoard()
      } else if ((!getIsNot(nextState))) {
        Alert.alert(`${state.get('USERNAME')} sin jugadas`)
        while (!getIsNot(nextState)) {
          nextState = clear(nextState)
          nextState = validate(nextState, blanca, negra)
          nextState = getLength(nextState)
          let moves = state.get('Difficulty') === 1 ? getRandMove(nextState) : getValidMove(nextState);
          nextState = clear(state)
          if (moves !== false && nextState.getIn(['state', moves.row, moves.col]) === canMove) {
            nextState = nextState.setIn(['state', moves.row, moves.col], blanca)
            nextState = eat(nextState, moves.row, moves.col, blanca)
            nextState = clear(nextState)
            nextState = validate(nextState, negra, blanca)
            nextState = getLength(nextState)
          }
          else {
            nextState = clear(nextState)
            nextState = validate(nextState, negra, blanca)
            nextState = getLength(nextState)
            break;
          }
        }
      }
      return nextState
    }
    default: {
      return state
    }
  }
}

export default gameplay
