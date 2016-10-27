'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('tblShop',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      taxCode:{
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      represent:{
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      position:{
        allowNull: true,
        type: Sequelize.STRING(70)
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      userId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      moneyLimit: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      province: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      latitude: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      longtitude: {
        allowNull: true,
        type: Sequelize.FLOAT
      },
      totalMoneyInBank: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      shopId2: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      postShopId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      provinceId: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      shopGroup: {
        allowNull: false,
        type: Sequelize.STRING(50)
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
