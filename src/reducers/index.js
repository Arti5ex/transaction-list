import { combineReducers } from 'redux'

import transaction from './transactionReducer'
import bank from './bankReducer'
import user from './userReducer'

export default combineReducers({
  transaction,
  bank,
  user
})
