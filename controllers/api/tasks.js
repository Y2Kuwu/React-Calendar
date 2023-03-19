const Task = require('../../models/task');

function createTask(req,res)
{
    try{
    // const userTask = Task.find({user:req.body});
    userTask =  new Task(
        {
            user: req.body.user,
            // date: req.body.date,
            month: req.body.month,
            day: req.body.day,
            year: req.body.year,
            taskName:req.body.taskName,
            category:req.body.category,
            severity:req.body.severity,
        }
    );
    userTask.save()
 
    //console.log(userTask.date.map(j=>{j}))
    console.log(userTask.month)
    res.json(userTask)
    }
    catch(error)
    {
        res.status(400).json(error)
        alert("Could not create task")
    }
}
async function getOneDay(req,res)
{
    try{
        const userDates = Task.find(req)

        const dayTask = await userDates.find({month:req.body.month, month:req.body.day, month:req.body.year});
        
        //     console.log(dayTask)
         //const todaysTasks = dayTask.find({taskName:taskName})
        // const mapTasks = todaysTasks.map(task=>({task}))
        console.log(dayTask)
        res.json(dayTask)

        }
        catch(error)
        {
            res.status(400).json(error)
            alert("Could not create task")
        }
}


module.exports = 
{
    createTask,
    getOneDay,

}