'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('products', [
      {
        name: 'Sepeda',
        description: 'Sepeda bagus banget',
        stock: 10,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sepatu',
        description: 'Sepatu bagus banget',
        stock: 0,
        available: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baju',
        description: 'Baju bagus banget',
        stock: 8,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sendal',
        description: 'Sendal bagus banget',
        stock: 20,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sepeda',
        description: 'Sepeda bagus banget',
        stock: 10,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sendok',
        description: 'Sendok bagus banget',
        stock: 1,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
