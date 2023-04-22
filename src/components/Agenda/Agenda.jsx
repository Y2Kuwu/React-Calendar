import { Component, Fragment } from "react";
import { getUser } from "../../utilities/users-service";
import { createTask } from "../../utilities/tasks-api";
//import AlertDismissable from "./Alert";
import Alert  from "react-bootstrap/Alert";

export default class Agenda extends Component{
    constructor(props){
    super(props)
    this.state =
    {
      createNew: false,

      user: getUser()._id,
      thisDate : [],

      month: '',
      day: '',
      year: '',

      taskName: '',
      category: '',
      severity: '',
      involvedParties: '', //[]
      reminder: '', // []

      alert: false,

    }
        this.getDateList = this.getDateList.bind(this);  //send id / date to check schdeduled events 
        this.createATask = this.createATask.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createOne = this.createOne.bind(this);
        this.bindDateData = this.bindDateData.bind(this);
    
    }

 

    createOne()
    {
        

        this.setState(currState=>({
            createNew: !currState.createNew
        }));
        
        if(this.props.data[0] === "")
        {
            this.setState(currState=>({
                alert: !currState.alert
            }));
        }
}

    getOne()
    {

    }
    
    

    bindDateData()
    {
        //console.log(this.props.data)


        this.setState({month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
        console.log(this.state.day)
    }

    handleSubmit (evt){
       
         try{
            
          
           
         evt.preventDefault();
         const {user, taskName , category, month, day, year, severity} = this.state;
         createTask(this.state,
             {
                //user:user,
                //month:month,
                //day:day,
                //year:year,
                //thisDate:thisDate,
                taskName:taskName,
                category:category,
                severity:severity

             })
            
           alert('success');
           
       }
       catch
       {
           this.setState({ error: 'creation failed' });
       }
   }


    async getDateList()
    {
        
        //get activities generate button with num of actvs for this day 
         //this.setState({thisDate : this.props.fullDate})
        // console.log(this.state.thisDate)
    }

    createATask()
    {
        
        return(
            <>
                    

                     <form autoComplete='false'  onSubmit={this.handleSubmit}>
                     {/* <label className='newTask'>Task:</label> */}
                     <div className ="create">
                     <input placeholder = "Task name"type="text" name="taskName" className='newAg' value={this.state.taskName} onChange={this.handleInputChange}/>
                     
                     {/* <label className='cat'>Category:</label> */}
                     <input placeholder = "Category" type="text" name="category" className='newAg' value={this.state.category} onChange={this.handleInputChange}/>

                     <label id='sev'>Severity level:</label>
                     <input  type="range" min = "0" max= "10" step = "1" name="severity" className='sevBar' value={this.state.severity} onChange={this.handleInputChange}/>

                     {/* <label className='newTask'>Parties:</label>
                     <input type="range" name="involvedParties" className='newAg' value={this.state.involvedParties} onChange={this.handleInputChange}/>
                    
                     <label className='newTask'>Reminder settings:</label>
                     <input type="range" name="reminder" className='newAg' value={this.state.reminder} onChange={this.handleInputChange}/> */}
                     <button className = "saveTask" type = "submit">Add</button>
                     </div>
                     
                     </form>
            </>
        )
    }


    handleInputChange (evt){
        this.setState({[evt.target.name] : evt.target.value});
    }

    render(){
    return(
        <>

            

          {/* {console.log(this.state.month)} */}
            <button className = "agBtn"onClick={()=>{this.createOne();this.bindDateData()}}>Add a task</button>

            {this.state.createNew ? 
            <>
            {this.createATask()}
            </>
            : null}
           {/* {console.log(this.state.thisDate)} */}
            {this.state.alert ?
            <div className="warning">
            <p>Please select a date before continuing</p>
            <p>Otherwise task will not be saved to agenda.</p>
            </div>

            :null}
           
        </>

        
    )
    }
    // render(){
    //     <Calendar thisView={this.state.createNew}/>
    //     return<></>
    // }

    }
