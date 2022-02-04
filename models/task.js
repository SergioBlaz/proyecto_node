const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String, 
        require: true,
    },
    completed:{
        type: Boolean,
        require: true, 
        default: false,
    },
    created_at:{
        type: Date,
        require: true,
        default: Date.now,
    }
})

module.exports = mongoose.model('Task', TaskSchema)