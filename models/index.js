// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });

// Categories have many Products

Category.hasMany(Product, {
    foreignKey: 'category_id',
  });

  Product.belongsToMany(Tag, {
    // Define the third table needed to store the foreign keys
    through: {
      model: ProductTag,
      
    },
    foreignKey: "product_id"
    // Define an alias for when data is retrieved
    // as: 'planned_trips'
  });
  
  Tag.belongsToMany(Product, {
    // Define the third table needed to store the foreign keys
    through: {
      model: ProductTag,
      
    },
    foreignKey: "tag_id"
    // Define an alias for when data is retrieved
    // as: 'location_Travelers'
  });




module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
