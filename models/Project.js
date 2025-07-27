const mongoose = require('mongoose');
const { Schema } = mongoose;
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    owner:{type: Schema.Types.ObjectId, ref :  'User'},
    members:[{type: Schema.Types.ObjectId, ref :  'User'}],
    status:{
        type: String,
        required: true,
        enum:['active','completed','archived'],
        lowercase: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
                type: Date,
        default: Date.now
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;