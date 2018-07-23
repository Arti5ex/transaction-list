export default function reducer (state = {
  transactions: []
}, action) {
  switch (action.type) {
    case 'TRANSACTION_FETCH_SUCCEEDED': {
      return {
        ...state,
        transactions: action.data || []
      }
    }
    case 'TRANSACTION_CREATE': {
      return {
        ...state,
        transactions: state.transactions.concat(action.data)
      }
    }
    case 'TRANSACTION_DELETE_SUCCEEDED': {
      return {
        ...state,
        transactions: action.data
      }
    }
    case 'TRANSACTION_FETCH_FAILED': {
      return {
        ...state,
        transactions: []
      }
    }
    default:
      return state
  }
}
