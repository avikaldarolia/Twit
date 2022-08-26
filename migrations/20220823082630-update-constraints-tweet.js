'use strict';
const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint('Tweets', {
      fields: ['createdAt', 'updatedAt'],
      type: 'default',
      defaultValue: DataTypes.NOW,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColoumn('Tweets', 'createdAt', {
      defaultValue: null,
    });
    await queryInterface.changeColoumn('Tweets', 'updatedAt', {
      defaultValue: null,
    });
  },
};
