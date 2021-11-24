<<<<<<< HEAD
const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
  user: {type: String, required: true},
  password: {type: String, required: true},
})

const User = mongoose.model('users', UserModel);

=======
const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
  user: {type: String, required: true},
  password: {type: String, required: true},
})

const User = mongoose.model('users', UserModel);

>>>>>>> 6885d66c56ea0187e081247acfb4db1a86b4d399
module.exports = User;