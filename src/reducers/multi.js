import { fromJS } from 'immutable'
import {
  getOneBoard,
  validate,
  changeRound,
  eat,
  clear,
  getLength,
  getValidMove
} from '../../utils'
import { Alert } from 'react-native'

const initialState = getOneBoard()

function multi (state = initialState, action) {
  switch(action.type) {
    default: {
      return state
    }
  }
}

export default multi
