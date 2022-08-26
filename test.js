const db = require('./models');
// const User = require('./models/Users');
const user = db.User;
const tweet = db.Tweet;

// const users = async () => {
//   const uss = await User.findAll();
//   console.log(uss);
// };
// users();
// console.log(db.sequelize.models);
// console.log(user);
const check = async () => {
  const res = await user.findAll();
  console.log(res);
};

check();
const check2 = async () => {
  const res = await tweet.findAll();
  console.log(res);
};

check2();
// const Users = require('./models/Users');

// console.log(users);
