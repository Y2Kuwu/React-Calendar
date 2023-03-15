import { Component } from "react";
import { getUser } from "../../utilities/users-service";
import { createTask } from "../../utilities/day-api";

export default class Agenda extends Component{
    constructor(props){
    super(props)
    this.state =
    {
      createNew: false,

      thisDate : this.props.data,
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
    }

    handleSubmit (evt){
         try{
       
          
           
         evt.preventDefault();
         const {taskName , category, severity} = this.state;
         createTask(this.state,
             {
                taskName:taskName,
                category:category,
                severity:severity

             })
             
             
             this.setState(this.save = false)
           
           
           
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
                     <form autoComplete='false' className = "newAgenda"onSubmit={this.handleSubmit}>
                     <label className='newTask'>Task:</label>
                     <input type="text" name="taskName" className='newAg' value={this.state.taskName} onChange={this.handleInputChange}/>
                     
                     <label className='cat'>Category:</label>
                     <input type="text" name="category" className='newAg' value={this.state.category} onChange={this.handleInputChange}/>

                     <label className='newTask'>Severity level:</label>
                     <input type="range" name="severity" className='newAg' value={this.state.severity} onChange={this.handleInputChange}/>

                     {/* <label className='newTask'>Parties:</label>
                     <input type="range" name="involvedParties" className='newAg' value={this.state.involvedParties} onChange={this.handleInputChange}/>
                    
                     <label className='newTask'>Reminder settings:</label>
                     <input type="range" name="reminder" className='newAg' value={this.state.reminder} onChange={this.handleInputChange}/> */}
                     
                     <button type = "submit">Add</button>
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
            <button onClick={()=>{this.setState({createNew:true})}}>Add to agenda</button>
            {this.state.createNew ? this.createATask() : null}
           {/* {console.log(this.state.thisDate)} */}
           
        </>
    )
    }
    }