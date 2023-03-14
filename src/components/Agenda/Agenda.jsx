import { Component } from "react";


export default class Agenda extends Component{
    constructor(props){
    super(props)
    this.state =
    {
      thisDate : ''
    
    }
        this.getDateList = this.getDateList.bind(this);  //send id / date to check schdeduled events 
        
    
    }
    getDateList()
    {
        //get activities generate button with num of actvs for this day 
         //this.setState({thisDate : this.props.fullDate})
        // console.log(this.state.thisDate)
    }

    render(){
    return(
        <>
           {console.log(this.props.data)}
        </>
    )
    }
    }