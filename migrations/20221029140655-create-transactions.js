'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hash: {
        type: Sequelize.STRING
      },
      nonce: {
        type: Sequelize.INTEGER
      },
      blockHash: {
        type: Sequelize.STRING
      },
      blockNumber: {
        type: Sequelize.INTEGER
      },
      transactionIndex: {
        type: Sequelize.INTEGER
      },
      from: {
        type: Sequelize.STRING
      },
      to: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      gas: {
        type: Sequelize.INTEGER
      },
      gasPrice: {
        type: Sequelize.STRING
      },
      input: {
        type: Sequelize.TEXT
      },
      v: {
        type: Sequelize.STRING
      },
      r: {
        type: Sequelize.STRING
      },
      s: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};