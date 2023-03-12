const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const daySchema = new Schema(
{
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    thisDay:{  //set to current day/month as default
    type: Date,
    required:true
    },
    thisMonth:
    {
        type: String
    }
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

daySchema.statics.dateMonth = function dateMonth($month)
{
    return this.where({thisDay: $month, thisNumber});
}  // return in front end set state
