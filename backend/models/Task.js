const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    Title: String,
    Creator: String,
    assignee: String,
    dueDate: Date,
    priority: String,
    status: String,
    description: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = 
{   
    taskSchema,
    Task,
    
};
