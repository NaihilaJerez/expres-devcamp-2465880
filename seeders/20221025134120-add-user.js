'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'holisss@misena.edu.co', 
        password:'2711'
        }, 
      {
        name: 'maria',
        email: 'mari200@misena.edu.co', 
        password:'2711'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
