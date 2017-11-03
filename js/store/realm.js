import Realm from 'realm'
import { ListView } from 'realm/react-native'

class Budget extends Realm.Object{}
  Budget.schema = {
    name: 'Budget',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      amount: { type: 'int' },
      name: { type: 'string' }
    }
  };

export const budgetDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id !== r2.id})

export const getBudgets = () => {
  Realm.open({path: Budget.realm, schema: [Budget], schemaVersion: 4})
  .then(realm =>
    realm.objects('Budget')
    )
}

export const getBudget = (id) => {
  const budget = realm.objectForPrimaryKey(budget, id)
  return budget
}

export const updatebudget = (budget, name, amount) => {
  realm.write(() => {
    try {
      budget.name = name
      budget.amount = amount
    } catch (e) {
      console.warn(e)
    }
  })
}

export const createBudget = (value) => {
  Realm.open({path: Budget.realm, schema: [Budget], schemaVersion: 4})
    .then(realm =>
      realm.write(() => {
        realm.create('Budget', {
          id: 4,
          name: value,
          amount: 100,
        })
      })
    )
}

export const deleteBudget = (budget) => {
  realm.write(() => {
    realm.delete(budget)
  })
}


export default new Realm({schema: [Budget], schemaVersion: 4})
