const Task = require('../../models/task');
const Day = require('../../models/day');

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
            //user: req.body.user,
            //taskName: 'placeholder',
            //month:req.body.month, 
            //day:req.body.day, 
            //year:req.body.year
            taskName: req.body.taskName,
            category: req.body.category,
            severity: req.body.severity
        })
    
        if(!date)
        {res.json(alert("No tasks set for this day"))}
        if(date)
        {
         
        console.log(date.month)
        //const getData = getDayData(date)
        res.json(date.month)

       // getDayData(date)
        //res.json(date.map(t=>{t.taskName}))
        }
        //var thisMonth = req.query.month;

        
        // var thisDay = req.query.day;
        // var thisYear = req.query.year;
        // const newTask = Task(
        //     {
        //         month: req.params.month,
                
        //     }

       // const {month, day, year} = req.body;
       
        
        // let taskData = Task({
        //     //user: req.body.user,
         //date: req.body.date,
        //taskName: req.body.taskName,
           //let compMonth = ({month: 'req.params.month'})
            // day: req.params.day,
            // year: req.params.year,
        // })
      
        
       //const getDate = await Task.find()
        //console.log(thisMonth)
        //const taskDate = await Task.find().where ('taskDate.month',thisMonth)  ('taskDate.day',thisDay)  ('taskDate.year', thisYear)

    //     const taskDate = await Task.find().where('month').equals(thisMonth)  ('day').equals(thisDay)  ('year').equals(thisYear)
    //     //.then(dateData => res.json(dateData))
       // console.log(found)
        
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