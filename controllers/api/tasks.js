const Task = require('../../models/task');
//const Day = require('../../models/day');

function createTask(req,res)
{
    try{
    const thisDay = Day.find({_id : Day._id});
    const thisTask =  new Task(
        {
            //user: req.body.user,
             day: thisDay,
            //month: req.body.month,
            //day: req.body.day,
            //year: req.body.year,
            taskName: req.body.taskName,
            category: req.body.category,
            severity: req.body.severity,
        }
    );
    thisTask.save();
    thisDay.taskList.push(thisTask);
    thisTask.save();

    res.json(thisTask)
    }
    catch(error)
    {
        res.status(400).json(error)
        alert("Could not create task")
    }
}

// function getDayData(dayData)
// {
//     console.log(dayData.map(j=>(j.day)))
// }

async function getOneDay(req,res)
{   
    try{
        const date = new Task({
            taskName: req.body.taskName,
            category: req.body.category,
            severity: req.body.severity
        })
    
        if(!date)
        {res.json(alert("No tasks set for this day"))}
        if(date)
        {
         
        console.log(date.month)
        res.json(date.month)
        }

        
        }
        
      catch
        {
            res.status(400).json(error)
            //alert("Could not create task")
        }
        
   
       
}



module.exports = 
{
    createTask,
    getOneDay,

}