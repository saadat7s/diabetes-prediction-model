const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  pregnancies: {
    type: Number,
    required: true,
  },
  glucose: {
    type: Number,
    required: true,
  },
  bloodPressure: {
    type: Number,
    required: true,
  },
  skinThickness: {
    type: Number,
    required: true,
  },
  insulin: {
    type: Number,
    required: true,
  },
  bmi: {
    type: Number,
    required: true,
  },
  diabetesPedigreeFunction: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  outcome: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
