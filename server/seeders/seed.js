const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  
  await User.deleteMany();

  await User.create({
    name:'guy dude',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  await User.create({
    name:'lady gal',
    email: 'eholt2@testmail.com',
    password: 'password12345'
  });
  await User.create({
    name:'dude bro',
    email: 'eholt3@testmail.com',
    password: 'password12345'
  });
  await User.create({
    name:'whatever asif',
    email: 'eholt4@testmail.com',
    password: 'password12345'
  });
  await User.create({
    name:'fake person',
    email: 'eholt5@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});