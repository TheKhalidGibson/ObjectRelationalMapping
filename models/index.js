// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foreignKey: 'reader_id',
    onDelete: 'CASCADE',
  });

// Categories have many Products

Category.hasMany(Product, {
    foreignKey: 'reader_id',
  });

// Products belongToMany Tags (through ProductTag)

  Product.belongsToMany(Tag, {
    foreignKey: 'reader_id',
    onDelete: 'CASCADE',
  });

// Tags belongToMany Products (through ProductTag)

  Tag.belongsToMany(Product, {
    foreignKey: 'reader_id',
  });




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
