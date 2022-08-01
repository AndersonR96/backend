import DataTypes  from 'sequelize';

import connection from '../../../database/connection.js';
import Customer from '../customer.js';
import Provider from '../provider.js'
import User from '../user.js'
import Product from '../product.js'
import Purchase from '../purchase.js'
import Cost from '../cost.js'
import ProductService from '../service.js';

const Associations = {}

///////////////PURCHASE - PRODUCT  ASSOCIATION ///////////////////////
Associations.PurchaseProduct = connection.define('PurchaseProducts', {
    PurchaseId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
          key: 'id'
        }
      },
    ProductId: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,
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
          key: 'dni'
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

///////////////PROVIDER - PRODUCTSERIVE ASSOCIATION ///////////////////////
Associations.ProviderProductService = connection.define('ProviderProductService', {
  ProviderId: {
      type: DataTypes.INTEGER,
      references: {
        model: Provider,
        key: 'dni'
      }
    },
  ProductServiceId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductService,
        key: 'id'
      }
    }
})

///////////////PRODUCTSERIVE - PURCHASE ASSOCIATION ///////////////////////
Associations.ProductServicePurchase = connection.define('ProductServicePurchase', {
  ProductServiceId: {
      type: DataTypes.INTEGER,
      references: {
        model: ProductService,
        key: 'id'
      }
    },
  PurchaseId: {
      type: DataTypes.INTEGER,
      references: {
        model: Purchase,
        key: 'id'
      }
    }
})

// ASSOCIATIONS MANY TO MANY CUSTOMER - PURCHASE
Purchase.belongsToMany(Product, { through: Associations.PurchaseProduct });
Product.belongsToMany(Purchase, { through: Associations.PurchaseProduct });

// ASSOCIATIONS ONE TO MANY CUSTOMER - PURCHASE
Customer.hasMany(Purchase)
Purchase.belongsTo(Customer)

//ASSOCIATIONS MANY TO MANY PROVIDER-COST
Provider.belongsToMany(Cost, {through:Associations.ProviderCost})
Cost.belongsToMany(Provider,{through: Associations.ProviderCost})

//ASSOCIATIONS MANY TO MANY PROVIDER-PRODUCTSERVICE
Provider.belongsToMany(ProductService, {through: Associations.ProviderProductService})
ProductService.belongsToMany(Provider, {through: Associations.ProviderProductService})

//ASSOCIATIONS MANY TO MANY PRODUCTE SERVICE - PURCHASE
ProductService.belongsToMany(Purchase, {through: Associations.ProductServicePurchase})
Purchase.belongsToMany(ProductService, {through: Associations.ProductServicePurchase})

///////////////CUSTOMER - PURCHASE ASSOCIATION ///////////////////////
Customer.hasMany(Purchase,{
  foreignKey:'customerId'
})
Purchase.belongsTo(Customer)

export default Associations