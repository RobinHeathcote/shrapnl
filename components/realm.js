import Realm from 'realm'

class Budget extends Realm.Object{}
  Budget.schema = {
    name: 'Budget',
    amount: { type: 'integer' }
  }
