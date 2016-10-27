'use strict';
module.exports = function(sequelize, DataTypes) {
  var TestExcel = sequelize.define('TestExcel', {
    cashFlowReport: DataTypes.STRING(200),
    feeType: DataTypes.STRING(200),
    feeTypeCode: DataTypes.INTEGER,
    contractValue: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TestExcel;
};