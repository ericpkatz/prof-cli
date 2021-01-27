const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db');

syncAndSeed = async()=> {
  await conn.sync({ force: true });
  const moe = await User.create({ name: 'moe' });
  const lucy = await User.create({ name: 'lucy' });
};

const User = conn.define('user', {
  name: STRING
});

module.exports = {
  models: { User },
  syncAndSeed
};
