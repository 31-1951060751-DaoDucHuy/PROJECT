"use strict";
const { sequelize } = require("../models");
module.exports = {
  up: async (queryInterface, sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      email: {
        type: sequelize.STRING,
      },
      password: {
        type: sequelize.STRING,
      },
      firstName: {
        type: sequelize.STRING,
      },
      lastName: {
        type: sequelize.STRING,
      },
      address: {
        type: sequelize.STRING,
      },
      gender: {
        type: sequelize.BOOLEAN,
      },
      roleId: {
        type: sequelize.STRING,
      },
      phonenumber: {
        type: sequelize.STRING,
      },
      positionId: {
        type: sequelize.STRING,
      },
      image: {
        type: sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
