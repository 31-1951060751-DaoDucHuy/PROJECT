'use strict';
const { sequelize } = require("../models");
module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('allcodes', {
    
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      key: {
        type: sequelize.STRING,
      },
      type: {
        type: sequelize.STRING,
      },
      valueEn: {
        type: sequelize.STRING,
      },
      valueVi: {
        type: sequelize.STRING,
      },
      createdAt:
       {
        allowNull: false,
        type: sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: sequelize.DATE,
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('allcodes');
  }
};