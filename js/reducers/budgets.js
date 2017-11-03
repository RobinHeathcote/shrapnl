const DEFAULT_STATE = {}

export default (state = DEFAULT_STATE, {type, payload} = {}) => {
  switch (type) {
    case 'BUDGET_ADDED':
    case 'BUDGET_DELETED':
      return {...state, lastModified: Date.now()}
    default:
      return state
  }
}
