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
      title: {
        type:Sequelize.STRING,
      },
      content: {
        type:Sequelize.STRING
      },
      user_id: {
        type:Sequelize.INTEGER,
        references: {
          model: 'users',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      published: Sequelize.DATE,
      updated: Sequelize.DATE,
    });

  },

  down: async (queryInterface, _Sequelize) => {

    await queryInterface.dropTable('blog_posts');

  }
};
