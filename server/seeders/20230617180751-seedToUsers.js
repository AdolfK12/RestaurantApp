"use strict";

const data = [
  {
    userName: "admin1",
    email: "admin1@example.com",
    password: "admin123",
    role: "admin",
    phoneNumber: "081234567890",
    address: "Jalan Admin 1, Jakarta",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "admin2",
    email: "admin2@example.com",
    password: "admin234",
    role: "admin",
    phoneNumber: "082345678901",
    address: "Jalan Admin 2, Jakarta",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "user1",
    email: "user1@example.com",
    password: "user12345",
    role: "user",
    phoneNumber: "083456789012",
    address: "Jalan User 1, Bandung",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    userName: "user2",
    email: "user2@example.com",
    password: "user23456",
    role: "user",
    phoneNumber: "084567890123",
    address: "Jalan User 2, Bandung",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", data, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
