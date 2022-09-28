const PostCategorySchema = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
    {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull: false
        }
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    });
  
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
        as:'posts',
        through: PostCategory,
        foreignKey: 'post_id',
        otherKey: 'category_id'
      })
      models.Category.belongsToMany(models.BlogPost, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'category_id',
        otherKey: 'post_id'
      })
    }
  
    return PostCategory;
  }
  
  module.exports = PostCategorySchema