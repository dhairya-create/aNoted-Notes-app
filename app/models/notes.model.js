const mongoose = require("mongoose");
const users = require('./user.model');
const notesSchema = new mongoose.Schema({
    user_id: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    }],
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
   }, {
      timestamps: true,
  });
  
  module.exports = mongoose.model("notes", notesSchema);
  