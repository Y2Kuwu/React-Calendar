const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const daySchema = new Schema(
{
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    // thisDay:{  //set to current day/month as default
    // type: Date,
    // default: Date.now,
    // required:true
    // },
    // thisMonth:
    // {
    //     type: String
    // }

    month:{type:String},
    day:{type:Number},
    year:{type:Number},
    //taskList:[{type: Schema.Types.ObjectId, ref: 'Task'}]
    //
    // moon:{}, // cycle
    // weather:{}, // local 
    // onThisDay:{}, // fun fact on day

    // thisMonth:  //make static method 
    // [{
    //     monthNum: Number,
    //     monthName: String,
    // }]

},
{
    timestamps: true
});


module.exports = mongoose.model('Day', daySchema);

// daySchema.methods.dateMonth = function dateMonth(year, month, day)
// {
//     const currentDate = this;
    
// }  // return in front end set state
