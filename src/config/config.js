require('ts-node').register({
    files: true,  
  });
  
  module.exports = {
    development: {
      dialect: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      define: {
        timestamps: true,
      },
      migrationStorage: 'sequelize',
      migrationStorageTableName: 'sequelize_meta',
      migrations: ['src/database/migrations/*.ts'],
      seeders: ['src/database/seeders/*.ts'],
    },
  };
  