const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
   chatId : Number,
   name: String,
   message: String
},{
   timestamps : true
});

module.exports = mongoose.model('Chat', ChatSchema);