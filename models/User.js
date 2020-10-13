const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  sub: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
    required: true,
  },
  family_name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  locale: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
