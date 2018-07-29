export default function reducer (state = {
  banks: new Map(),
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
        banks: new Map()
      }
    }
    default:
      return state
  }
}
