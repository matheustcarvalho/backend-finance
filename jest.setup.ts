import sequelize from './src/config/database';

jest.setTimeout(10000); 

beforeAll(async () => {
  await sequelize.sync(); 
});

afterAll(async () => {
  await sequelize.close();
});
