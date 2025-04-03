'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'João Silva',
        cpf: '12345678901',
        email: 'joao@example.com',
        password: 'senha123',
        balance: 1000.0,
        isMerchant: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fabiano Oliveira',
        cpf: '32145678901',
        email: 'fabiano@example.com',
        password: 'senha123',
        balance: 800.0,
        isMerchant: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Loja X',
        cpf: '10987654321',
        email: 'loja@example.com',
        password: 'senha123',
        balance: 500.0,
        isMerchant: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
