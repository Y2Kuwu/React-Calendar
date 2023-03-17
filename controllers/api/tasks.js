const Task = require('../../models/task');

function createTask(req,res)
{
    try{
    // const userTask = Task.find({user:req.body});
    userTask =  new Task(
        {
            user: req.body.user,
            date: req.body.date,
            taskName:req.body.taskName,
            category:req.body.category,
        }
    );
    userTask.save()
    console.log(req.body.date)
   
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
        const userDates = Task.find({user:req.user._id, date:req.body.date})

        const dayTask = await userDates.find({taskName: taskName});

        return res.json(dayTask)

        }
        catch(error)
        {
            res.status(400).json(error)
            alert("Could not create task")
        }
}
// function getOneTask()
// {}
// function getThisMonthTasks()
// {}

module.exports = 
{
    createTask,
    getOneDay,

}