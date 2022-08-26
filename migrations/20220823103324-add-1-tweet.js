'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Tweets', 'userId', {
      type: Sequelize.BIGINT,
      allowNull: false,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tweets', 'userId');
  },
};
