const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Fullname: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true }
    //Group: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }]
});

const User = mongoose.model('User', userSchema);

module.exports = { userSchema, User };
