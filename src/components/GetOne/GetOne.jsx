import { Component } from "react";
import { getUser } from "../../utilities/users-service";
import { getOneDay } from "../../utilities/tasks-api";

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

      //tasks: {},
    }
    //this.getDay = this.getDay.bind(this);
    this.setDays = this.setDays.bind(this);
    }
   

    // async getDay(){
        
    // return getOneDay()
    //     //return getOneDay()
    // }

   

    async setDays(){
    getOneDay((this.state.month))
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
        this.setState({user:getUser()._id, month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
        // this.setDays().then(result => this.setState({
        //      tasks : result
        //  }))
       
        this.setDays()
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
        
        {/* {Object.values(this.state.tasks).map((name ,idx)=> (
            <div className = "jobTitleList" key = {idx}>
            <p className = "jobTitleLi"> {name.taskName}</p> */}
            {/* (this.setState(this.state.currentTitle = name),(this.state.currentId = name._id), this.toggleShow())}>{name.taskName}</button> */}
            
            
           {/* </div>
        ))}  */}
    
    </>
               
    )
        }

}
