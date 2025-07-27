const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  status: {
    type: String,
    required: true,
    enum: ['active', 'completed', 'archived'],
    lowercase: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
