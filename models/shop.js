'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('tblShop', {
    name: DataTypes.STRING(50),
      taxCode: DataTypes.STRING(50),
      represent: DataTypes.STRING(50),
      position: DataTypes.STRING(70),
      address: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      status: DataTypes.STRING(50),
      userId: DataTypes.INTEGER,
      createdDate: DataTypes.DATE,
      moneyLimit: DataTypes.BIGINT,
      province: DataTypes.STRING(50),
      latitude: DataTypes.FLOAT,
      longtitude: DataTypes.FLOAT,
      totalMoneyInBank: DataTypes.BIGINT,
      shopId2: DataTypes.INTEGER,
      postShopId: DataTypes.INTEGER,
      provinceId: DataTypes.INTEGER,
      shopGroup: DataTypes.STRING(50)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};