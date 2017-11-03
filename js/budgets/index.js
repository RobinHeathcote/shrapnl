import {connect} from 'react-redux'
import store from '../store'
import * as actions from './actions'
import Budgets from './budgets'
import {getBudgets} from '../reducers'

// Realm.Results is auto-updating, therefore no need to re-fetch the data
const BudgetResults = store.getBudgets()

const mapStateToProps = (state, props) => ({
  ...getBudgets(state),
  dataSource: store.budgetDS.cloneWithRows(BudgetResults)
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Budgets)
