const mongoose = require('mongoose');
const {User} = require("./User")

const groupSchema = new mongoose.Schema({
    Groupname: { type: String, required: true, unique: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;

