const Task = require('../../models/tasks');

async function createTask(req,res)
{
    try{
    const dayTask = await Task.create(req.body);
    return res.json(dayTask)
    }
    catch(error)
    {
        res.status(400).json(error)
        alert("Could not create task")
    }
}
// function getOneDay(req,res)
// {}
// function getOneTask()
// {}
// function getThisMonthTasks()
// {}

module.exports = 
{
    createTask,

}