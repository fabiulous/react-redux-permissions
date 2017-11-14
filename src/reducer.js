import { RRP_ADD_PERMISSION, RRP_REMOVE_PERMISSION, RRP_CLEAR } from "./constants"

export const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case RRP_ADD_PERMISSION:
      return [
        ...state,
        action.role,
      ]
    case RRP_REMOVE_PERMISSION:
      return state.filter(role => role !== action.role)
    case RRP_CLEAR:
      return []
    default:
      return state
  }
}

export default reducer
