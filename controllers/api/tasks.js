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
        var thisMonth = req.query.month;
        // var thisDay = req.query.day;
        // var thisYear = req.query.year;
        
        var mm = req.params ('month')
       // const {month, day, year} = req.body;

        // let taskData = Task({
        //     //user: req.body.user,
        //     // date: req.body.date,
        //     //taskName: req.body.taskName,
        //     month: req.params.month,
        //     day: req.params.day,
        //     year: req.params.year,
        // })
        const getDate = await Task.find(mm)
        //console.log(thisMonth)
        //const taskDate = await Task.find().where ('taskDate.month',thisMonth)  ('taskDate.day',thisDay)  ('taskDate.year', thisYear)

    //     const taskDate = await Task.find().where('month').equals(thisMonth)  ('day').equals(thisDay)  ('year').equals(thisYear)
    //     //.then(dateData => res.json(dateData))
   console.log(getDate)
        
       res.json(getDate)

            
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