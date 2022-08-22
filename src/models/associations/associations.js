import DataTypes  from 'sequelize';
import Sequelize from 'sequelize';

import connection from '../../../database/connection.js';
import Customer from '../customer.js';
import Provider from '../provider.js'
import User from '../user.js'
import Purchase from '../purchase.js'
import Cost from '../cost.js'
import Item from '../item.js';
import auxiliaryTables from '../AuxiliaryTables/index.js';

const Associations = {}

///////////////PURCHASE - ITEM  ASSOCIATION ///////////////////////
Associations.PurchaseItem = connection.define('PurchaseItem', {
    PurchaseId: {
        type: DataTypes.INTEGER,
        references: {
          model: Purchase,
          key: 'id'
        }
      },
    ItemId: {
        type: DataTypes.INTEGER,
        references: {
          model: Item,
          key: 'id'
        }
      }
})

///////////////PROVIDER - COST ASSOCIATION ///////////////////////
Associations.ProviderCost = connection.define('ProviderCost', {
    ProviderId: {
        type: DataTypes.INTEGER,
        references: {
          model: Provider,
          key: 'id'
        }
      },
    CostId: {
        type: DataTypes.INTEGER,
        references: {
          model: Cost,
          key: 'id'
        }
      }
})

//////////////PROVIDER - ITEM ASSOCIATION////////////////////////
Associations.ProviderItem = connection.define('ProviderItem', {
  ProviderId: {
      type: DataTypes.INTEGER,
      references: {
        model: Provider,
        key: 'id'
      }
    },
  ItemId: {
      type: DataTypes.INTEGER,
      references: {
        model: Item,
        key: 'id'
      }
    }
})


// ASSOCIATIONS MANY TO MANY PURCHASE - ITEM
Purchase.belongsToMany(Item, { through: Associations.PurchaseItem });
Item.belongsToMany(Purchase, { through: Associations.PurchaseItem });

//ASSOCIATIONS MANY TO MANY PROVIDER-COST
Provider.belongsToMany(Cost, {through:Associations.ProviderCost})
Cost.belongsToMany(Provider,{through: Associations.ProviderCost})

//ASSOCIATIONS MANY TO MANY PROVIDER-ITEM
Provider.belongsToMany(Item, {through: Associations.ProviderItem})
Item.belongsToMany(Provider, {through: Associations.ProviderItem})

// ASSOCIATIONS ONE TO MANY CUSTOMER - PURCHASE
Customer.hasMany(Purchase)
Purchase.belongsTo(Customer)

// ASSOCIATIONS ONE TO MANY TAXES - COST
const CostTaxes =  connection.define('CostTaxes',{
  CostId:{
    type: DataTypes.INTEGER,
    references: {
      model: Cost,
      key:'id'
    }
  },
  TaxesId:{
    type:DataTypes.INTEGER,
    references:{
      model: auxiliaryTables.Taxes,
      key:'id'
    }
  }
})

Cost.belongsToMany(auxiliaryTables.Taxes, {through:CostTaxes})
auxiliaryTables.Taxes.belongsToMany(Cost,{through: CostTaxes})


export default Associations