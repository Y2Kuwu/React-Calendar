import { Component } from "react";
import { getUser } from "../../utilities/users-service";
import { getOneDay } from "../../utilities/tasks-api";

export default class GetOne extends Component{
    constructor(props){
    super(props)
    this.state =
    {

      user: getUser()._id,
      
    //   month: '',
    //   day: '',
    //   year: '',

      month: this.props.data[0],
      day: this.props.data[1],
      year: this.props.data[2],

      tasks: {},
    }
    this.getDay = this.getDay.bind(this);
}
    async getDay(){
        
        
        //return getOneDay(this.state)
        const {user,month,day,year} = this.state
        await getOneDay(this.state,
            {
                user:user,
                month:month,
                day:day,
                year:year
            })
        
        }

    componentDidMount()
    {
        // this.setState({month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
        this.getDay().then(result => this.setState({
            tasks : result
        }))
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
       Object.values(this.state.tasks).map((name ,idx)=> (
             <div className = "jobTitleList" key = {idx}>

                <p>{name.taskName}</p>
             </div>)))
    
       

             
                       
}

    
}