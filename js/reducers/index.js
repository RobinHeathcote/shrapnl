import {combineReducers} from 'redux'
import budgets from './budgets'

export default combineReducers({
  budgets
})

export const getBudgets = ({budgets}) => budgets
