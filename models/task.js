const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//day month year all one to many 

const taskSchema = new Schema(
{
    //day: {type: Schema.Types.ObjectId, ref: 'Day', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    

    month:{type:String},
    day:{type:String},
    year:{type:String},

    taskName: 
    {type: String, required: true},
    category:
    {type: String},
    severity:
    {type: Number},
    // involvedParties:
    // [{
    //     partyName: String,  //send to parties involve address'
    //     partyContact: String,
    //     partyAlert: Boolean
    // }],
    // reminder:
    // [{
    // isSet: Boolean,
    // alertQuote: String,
    // //
    // alertFreq: Number,
    // rangeStart: Date,
    // rangeEnd: Date,
    // //
    // complete: Boolean,
    // }]
},
{
    timestamps: true
});


module.exports = mongoose.model('Task', taskSchema);