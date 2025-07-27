const { text } = require('express');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskSchema = new mongoose.Schema({
    title:{ 
        type: String, 
        required: true},
    description:{
        type: String, 
        required: true},
    project:{
        type: Schema.Types.ObjectId, ref :  'Project'},
    assignee:{
        type: Schema.Types.ObjectId, ref :  'User'},
    creator:{
        type: Schema.Types.ObjectId, ref :  'User'},
    status:{
        type: String,
        required: true,
        enum:['todo','inprogress','review','done'],
        lowercase: true
    },
    priority:{
        type: String,
        required: true,
        enum:['low','medium','high','urgent'],
        lowercase: true
    },
    dueDate:{
        type: Date
    },
    tags:{ 
        type: String, 
        required: true
    },
    attachments:{ 
        type: String, 
        required: true
    },                
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    tags:{ 
        type: String, 
        required: true
    },
    comments: [{type: Schema.Types.ObjectId, ref :  'User', text: String, createdAt: Date}],            
    createdAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    }      
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
