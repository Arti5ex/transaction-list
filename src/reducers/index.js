import { combineReducers } from 'redux'

import transaction from 'src/reducers/transactionReducer'
import bank from 'src/reducers/bankReducer'
import user from 'src/reducers/userReducer'

export default combineReducers({
  transaction,
  bank,
  user
})
