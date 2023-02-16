const { Sequelize } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('fuck', 'root', null, {
  host: 'localhost',
  dialect:  'mysql',
  logging: false,
});

let conectDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}
module.exports = conectDB;