import connection from '../../database/connection.js'
import Customer from './customer.js'
import Provider from './provider.js'
import User from './user.js'
import Product from './product.js'
import Purchase from './purchase.js'
import DataTypes  from 'sequelize';

const Models = {
    Customer,
    Provider,
    User,
    Product,
    Purchase,
}

Models.PurchaseProducts = connection.define('PurchaseProducts', {
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


// RELACION MANY TO MANY CUSTOMER - PURCHASE
Purchase.belongsToMany(Product, { through: Models.PurchaseProducts });
Product.belongsToMany(Purchase, { through: Models.PurchaseProducts });

// RELACION ONE TO MANY CUSTOMER - PURCHASE
Customer.hasMany(Purchase)
Purchase.belongsTo(Customer)


export default Models

connection.sync({alter: true})