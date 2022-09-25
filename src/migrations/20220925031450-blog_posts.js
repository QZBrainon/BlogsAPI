'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('blog_posts', { 
      id: {
      type:Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      user_id: {
        type:Sequelize.INTEGER,
        references: {
          model: 'users',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: Sequelize.DATETIME,
      updated: Sequelize.DATETIME,
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('blog_posts');
     
  }
};
