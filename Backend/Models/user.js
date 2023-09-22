const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  prenom: String,
  nom: String,
  phone: Number,
  email: String,
  password: String,
  isLoggedIn: {
    type: Boolean,
    default: false,
  },
  loggedInEmail: {
    type: String,
    default: null,
  },
});

const userModel = mongoose.model('Users', UserSchema);

module.exports = userModel;
