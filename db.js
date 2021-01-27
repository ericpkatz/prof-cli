const Sequelize = require('sequelize');
const { STRING } = Sequelize;
const config = {};
if(process.env.SSL){
  console.log('yes');
  config.dialectOptions = {
    ssl :  {
      rejectUnauthorized: false
    }
  };
}
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_db', config);

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
