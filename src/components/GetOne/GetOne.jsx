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

    //   month: this.props[0],
    //   day: this.props[1],
    //   year: this.props[2],
        // mdy: this.props

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
//    var giveDate = 
//    ({
//     month:this.state.month,
//     day:this.state.day,
//     year:this.state.year,
//    })
//    console.log(giveDate)

   createDate(this.state,
      
    {
        user: user,
        month:month,
        day:day,
        year:year,
    })
    //console.log(month)
    }
    catch{

    }
    }
            

    //        // this.setState({tasks : getOneDay(this.state.month)}) 
            

    // }
        //console.log(this.state.user, this.state.month , this.state.day, this.state.year)
        //return getOneDay()
        // const {user,month,day,year} = this.state
        // const thisState = (this.state.user, this.state.month , this.state.day, this.state.year)
        
        
        
        //await getOneDay()
            // {
            //     user:user,
            //     month:month,
            //     day:day,
            //     year:year
            // })
        
        

    componentDidMount()
    {
        //this.setState({month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
       //this.setDays()
    //     //const {month,day,year} = this.state
    //    // this.setState({month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
        this.setState({user:getUser(), month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
        document.getElementById("subDate").click();
        this.setDays()
        // this.setDays().then(result => this.setState({
        //      tasks : result
        //  }))
        //this.setDays()
        // return(
        
        
     }

    // getDate()
    // {
    //     this.setState({month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
    // }

    // getOne()
    // {

        
    //     getOneDay(this.state)
           

    // }


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
