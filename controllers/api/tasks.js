const Task = require('../../models/tasks');

async function createTask(req,res)
{
    try{
    const userTask = Task.find({user:req.user._id});
    const dayTask = await Task.create(req.body);
    return res.json(dayTask)
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