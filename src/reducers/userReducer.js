
let INITIAL_STATE = {
  user: 'Загрузка'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "USER_SET_SUCCEEDED":
      return { ...state, user: action.payload || false }
    case "USER_SET_FAILED":
      return { ...state, user: null }
    default:
      return state
  }
}
