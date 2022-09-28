const BlogPostSchema = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost',{
      id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },{
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    })
    return BlogPost;
  }
  
  module.exports = BlogPostSchema