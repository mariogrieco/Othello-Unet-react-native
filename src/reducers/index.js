import { combineReducers } from 'redux-immutable'
import gameplay from './gameplay'
// import multi from './multi'

let rootReducer = combineReducers({
  gameplay,
  // multi
})

export default rootReducer
