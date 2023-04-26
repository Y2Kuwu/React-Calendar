// import { Component } from "react";
// import { getUser } from "../../utilities/users-service";
// import { createDate } from "../../utilities/day-api";

// export default class GetOne extends Component{
//     constructor(props){
//     super(props)
//     this.state =
//     {
//       user: '',
      
//       month: '',//this.state.props[0],
//       day:'', //this.state.props[1],
//       year:'' //this.state.props[2],
//      // tasks: {},
//     }
//     //this.getDay = this.getDay.bind(this);
//     this.setDays = this.setDays.bind(this);
//     //this.handleIn = this.handleIn.bind(this)
//     }
   

//     setDays(){
//         //const {user, month , day, year} = this.state
    
//         console.log(this.state)
 
        
    
//         //evt.preventDefault();
//         //console.log(this.state)
//         createDate(this.state)
          
       
//     }

    
    



//     // async getDay(){
        
//     // return getOneDay()
//     //     //return getOneDay()
//     // }

//     // handleIn (evt){
//     //     this.setState({[evt.target.name] : evt.target.value});
//     // }

//     // setDays(evt){
//     // const {user, month , day, year} = this.state

    
//     // try{
    

//     // evt.preventDefault();
//     // //console.log(this.state)
//     // createDate(this.state,
      
//     // {
//     //     user: user,
//     //     month:month,
//     //     day:day,
//     //     year:year,
//     // })
   
//     // }
    
//     // catch(error){
//     //     alert(error)
//     // }
//     // }
            
        
        

//     componentDidMount()
//     {
//         this.setState({user: getUser()._id, month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})

//         this.setDays()
//         // this.setState({user: getUser()._id, month : this.props.data[0], day : this.props.data[1], year : this.props.data[2]})
//        //document.getElementById("subDate").click();//was with mount
//         //this.setDays();
//         //this.ghostClick();
//      }

    

// render(){
//     return(
//     <>

    
//          {/* <form onSubmit={this.setDays}>
//                   <div className ="setDate">
           
//                      <input type="hidden" name="month" value={this.state.month} />
//                      <input type="hidden" name="day" value={this.state.day} />
//                      <input  type="hidden" name="year" value={this.state.year} />
//                      <button type="submit" id = "subDate"></button>
//                   </div>
                     
//          </form> */}
        
      

        
//         {/* {Object.values(this.state.tasks).map((name ,idx)=> (
//             <div className = "jobTitleList" key = {idx}>
//             <p className = "jobTitleLi"> {name.taskName}</p>
         
            
//            </div>
//         ))}  
//      */}
//     </>
               
//     )
//         }

// }
