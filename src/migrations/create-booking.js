'use strict';
const { sequelize } = require("../models");
module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('bookings', {
    
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      statusId: {
        type: sequelize.STRING,
      },
      doctorId: {
        type: sequelize.INTEGER,
      },
      patianId: {
        type: sequelize.INTEGER,
      },
      date: {
        type: sequelize.DATE,
      },
      timeType: {
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
    await queryInterface.dropTable('bookings');
  }
};