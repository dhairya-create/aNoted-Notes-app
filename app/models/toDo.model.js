const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({

    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

    title: {
        type: String,
        required: true,
    },

    description: {
        tasks: [{
            task:String,
            isCheck:Boolean
        }],
    },
},{
    timestamps:true
});
module.exports = mongoose.model("ToDo", toDoSchema);
