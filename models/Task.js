const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String,
  createdAt: { type: Date, default: Date.now }
});

const taskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
  assignee: { type: Schema.Types.ObjectId, ref: 'User' },
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: String,
    required: true,
    enum: ['todo', 'inprogress', 'review', 'done'],
    lowercase: true
  },
  priority: {
    type: String,
    required: true,
    enum: ['low', 'medium', 'high', 'urgent'],
    lowercase: true
  },
  dueDate: Date,
  tags: [String],
  attachments: [String],
  comments: [commentSchema]
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
