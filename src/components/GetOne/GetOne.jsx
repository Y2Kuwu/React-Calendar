import { Component } from "react";
import { getUser } from "../../utilities/users-service";
import { createDate } from "../../utilities/day-api";

export default class GetOne extends Component{
    constructor(props){
    super(props)
    this.state =
    {
      user: '',
      
      month: '',
      day: '',
      year: '',
     // tasks: {},
    }
    //this.getDay = this.getDay.bind(this);
    this.setDays = this.setDays.bind(this);
    this.handleIn = this.handleIn.bind(this)
    }
   

    // async getDay(){
        
    // return getOneDay()
    //     //return getOneDay()
    // }

    handleIn (evt){
        this.setState({[evt.target.name] : evt.target.value});
    }

    async setDays(evt){
    const {user, month , day, year} = this.state

    try{
    evt.preventDefault(evt)


   createDate(this.state,
      
    {
        user: user,
        month:month,
        day:day,
        year:year,
    })
    }
    catch{

    }
    }
            
        
        

    componentDidMount()
    {
        
        this.setState({user:getUser(), month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
        document.getElementById("subDate").click();
        this.setDays()
     }


render(){
    return(
    <>

    
         <form  >
                  <div className ="setDate">
                     <input type="" name="month" className='' value={this.state.month}/>
                     <input type="" name="day" className='' value={this.state.day}/>
                     <input  type="" name="year" className='' value={this.state.year}/>
                     <button type="hidden" id = "subDate"></button>
                  </div>
                     
         </form>
        
      

        
        {/* {Object.values(this.state.tasks).map((name ,idx)=> (
            <div className = "jobTitleList" key = {idx}>
            <p className = "jobTitleLi"> {name.taskName}</p>
         
            
           </div>
        ))}  
     */}
    </>
               
    )
        }

}
