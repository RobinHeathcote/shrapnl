import Budget from '../store/realm'
import store from '../store'

export const createBudget = (budgetText) => {
  store.createBudget(budgetText)
  return {
    type: 'BUDGET_ADDED'
  }
}

export const deleteBudget = (budget) => {
  store.deletebudget(budget)
  return {
    type: 'BUDGET_DELETED'
  }
}
