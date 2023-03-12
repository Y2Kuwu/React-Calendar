const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//day month year all one to many 

const taskSchema = new Schema(
{
    taskName: 
    {type: String, required: true},
    category:
    {type: String, required: true},
    severity:
    {type: Number, required: true},
    reminder:
    [{
    isSet: Boolean,
    alertQuote: String,
    complete: Boolean,
    }]
},
{
    timestamps: true
});


module.exports = mongoose.model('Task', taskSchema);