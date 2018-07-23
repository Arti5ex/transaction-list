export default function reducer (state = {
  banks: [],
}, action) {
  switch (action.type) {
    case 'BANK_FETCH_SUCCEEDED': {
      return {
        ...state,
        banks: action.data
      }
    }
    case 'BANK_FETCH_FAILED': {
      return {
        ...state,
        banks: []
      }
    }
    default:
      return state
  }
}
