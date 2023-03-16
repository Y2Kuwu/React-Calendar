import { Component } from "react";
import { getUser } from "../../utilities/users-service";
import { createTask } from "../../utilities/tasks-api";
import Calendar from "../Calendar/Calendar";

export default class Agenda extends Component{
    constructor(props){
    super(props)
    this.state =
    {
      createNew: false,

      user: getUser()._id,
      thisDate : '',
      taskName: '',
      category: '',
      severity: '',
      involvedParties: '', //[]
      reminder: '', // []

    }
        this.getDateList = this.getDateList.bind(this);  //send id / date to check schdeduled events 
        this.createATask = this.createATask.bind(this);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createOne = this.createOne.bind(this);
    }

    createOne()
    {
        this.setState(currState=>({
            createNew: !currState.createNew
        }));
    }

     handleSubmit (evt){
         try{
       
          
           
         evt.preventDefault();
         const {user, taskName , category} = this.state;
         console.log('here')
         createTask(this.state,
             {
                user:user,
                //thisDate:this.props.data,
                taskName:taskName,
                category:category,
                // severity:severity

             })
     
           alert('success');
           
       }
       catch
       {
           this.setState({ error: 'creation failed' });
       }
   }


    getDateList()
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
                     {/* <input  type="range" name="severity" className='sevBar' value={this.state.severity} onChange={this.handleInputChange}/> */}

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
     
            <button className = "agBtn"onClick={()=>{this.createOne()}}>Add a task</button>

            {this.state.createNew ? 
            <>
            {this.createATask()}
            </>
            : null}
           {/* {console.log(this.state.thisDate)} */}

           
        </>

        
    )
    }
    // render(){
    //     <Calendar thisView={this.state.createNew}/>
    //     return<></>
    // }

    }