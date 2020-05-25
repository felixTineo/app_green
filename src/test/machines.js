//const uuid = require('uuid/v1');
const products = require('./products');

const machines = [
  {
    _id: '123456789-1',
    ubication: "CC Marinas plaza's",
    products: products.filter(product => product.tag === 'JEWEL')
  },
  {
    _id: '123456789-2',
    ubication: "Hipergalerias Cumaná",
    products: products.filter(product => product.tag === 'EBOOK')
  },
  {
    _id: '123456789-3',
    ubication: "CC Mall Plaza",
    products: products.filter(product => product.tag === 'CANDY')
  }
]

module.exports = machines;