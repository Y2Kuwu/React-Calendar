const { where } = require('../../models/task');
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
            taskName: req.body.taskName,
            category: req.body.category,
            severity: req.body.severity,
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
        // const userDates = Task.find({user:req.user._id, month:req.body.month,day:req.body.day,year:req.body.year}, {taskName: 1})
        const userDates = await Task.find({month:req.body.month,day:req.body.day,year:req.body.year})

        
        //const newNames = userDates.get('taskName')
        // const dayTask = await userDates.find({month:req.body.month, day:req.body.day, year:req.body.year});
       // const dayTask = await userDates.find({userDates:userDates._id})

        // const dayTask = userDates.find(where ({month:req.body.month} , {day:req.body.day} , {year:req.body.year}))
        //const taskHere = dayTask.find({id:id})
        //     console.log(dayTask)
        //const todaysTasks = await userDates.find({})
       

        

    //    const mapDates = userDates.map(task=>({task}))
    //    console.log(mapDates)
       //console.log(taskHere)
        // console.log(userDates.map(m => m.taskName))


     //console.log(userDates.map(task=>(task.taskName)))

     console.log(userDates)
        // res.json(userDates.map(task=>({task})))
    //    res.json(userDates.map(m => m.taskName))
        }
        catch(error)
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