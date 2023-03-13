const Day = require('../../models/day');

async function getThisDay(req,res)
{
    try{
    let monthName;
    const currentMonth = await Day({thisMonth: req.body});
    switch(currentMonth){
    case 1:
    monthName = 'January';
    break;
    case 2:
    monthName = 'February';
    break;
    case 3:
    monthName = 'March';
    break;
    case 4:
    monthName = 'April';
    break;
    case 5:
    monthName = 'May';
    break;
    case 6:
    monthName = 'June';
    break;
    case 7:
    monthName = 'July';
    break;
    case 8:
    monthName = 'August';
    break;
    case 9:
    monthName = 'September';
    break;
    case 10:
    monthName = 'October';
    break;
    case 11:
    monthName = 'November';
    break;
    case 12:
    monthName = 'December';
    break;
    }
    console.log(monthName)
    return res.json(currentMonth)
    }
    catch(error)
    {
        res.status(400).json(error)
        alert("Could not create day")
    }
}

async function getThisMonth(req,res)
{
    const month = await Day(thisMonth , req.thisMonth)
    res.json(month)
}


module.exports = 
{
    getThisDay,
    getThisMonth,
}