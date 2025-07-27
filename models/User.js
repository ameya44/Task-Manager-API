const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  avatar: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'manager', 'member'],
    lowercase: true
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
