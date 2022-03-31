const mongoose = require("mongoose");
const diarySchema = new mongoose.Schema({
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
  diary_date:{
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("diary", diarySchema);
