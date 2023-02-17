'use strict';
const { sequelize } = require("../models");
module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable('doctor_clinic_specialty', {
    
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      doctorId: {
        type: sequelize.INTEGER,
      },
      clinicId: {
        type: sequelize.INTEGER,
      },
      specialtyId: {
        type: sequelize.INTEGER,
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
    await queryInterface.dropTable('doctor_clinic_specialty');
  }
};