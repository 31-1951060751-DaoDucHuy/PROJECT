'use strict';
const { sequelize } = require("../models");
module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('clinics', {
    
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      
      address: {
        type: sequelize.STRING,
      },
      description: {
        type: sequelize.TEXT,
      },
      igage: {
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
    await queryInterface.dropTable('clinics');
  }
};