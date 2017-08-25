import Realm from 'realm'

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


export default new Realm({schema: [Budget], schemaVersion: 3})
