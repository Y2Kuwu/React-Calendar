import { Component, Fragment } from "react";
import { getThisDay, getThisMonth } from "../../utilities/day-api";
import '../../index.css';
import { ImArrowRight } from 'react-icons/im';
import { ImArrowLeft } from 'react-icons/im';
import Agenda from "../Agenda/Agenda";
import { getUser } from "../../utilities/users-service";
import GetOne from "../GetOne/GetOne";
import { getOneDay } from "../../utilities/tasks-api";

export default class Calendar extends Component{
constructor(props){
super(props)
this.state =
{
    user : '',
    monthName: '',
    dayCount: '',
    dayArray: [],
    monthNumber: '',
    selectedDay: '', //user selected
    selectedYear: '',
    date: '',

    thisDayCap: [], //set intial value w/o click
    fullDate: '',
    showCal: false,
    changeView: false,
    ready: false,
    tasks: {},

}
    this.getThisDate = this.getThisDate.bind(this, false);
    this.displayMonth = this.displayMonth.bind(this);
    this.advanceMonth = this.advanceMonth.bind(this);

    this.showHide = this.showHide.bind(this);
    this.sendDate = this.sendDate.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.capDay = this.capDay.bind(this);

    this.disReady = this.disReady.bind(this);
    this.one = this.one.bind(this);
}

    capDay()
    {
        this.setState(giveFull=>
        ({thisDayCap : [giveFull.monthName,giveFull.selectedDay,giveFull.selectedYear]}))
        // if(this.state.thisDayCap = [])
        // {
        //     this.setState(
        //     {thisDayCap : [this.state.monthName, this.state.selectedDay ,this.state.selectedYear]})
        // }
        // {thisDayCap : [this.state.monthName ,this.state.selectedDay, this.state.selectedYear]})
           
           
        // {this.state.monthName} {this.state.selectedDay} {this.state.selectedYear}
    }

    one()
    {
        getOneDay(this.state.thisDayCap)

        return(
        <>
        {Object.values(this.state.tasks).map((name ,idx)=>            
         <div className = "jobTitleList" key = {idx}>
         <p className = "jobTitleLi"> {name.taskName}</p>
         </div>
        )}
        
        </>
        )
   
    }

handleChange(val)
{
    let value = val.target.value;
    this.setState({give: value});
    

}

showHide() //2nd
{
    this.setState(currState=>({
        showCal: !currState.showCal
    }));
    console.log(this.state.fullDate)
}

// viewChange()
// {
//     this.setState(currState=>({
//         changeView: currState.this.props.thisView
       
//     }));
//     console.log('here')
// }


disReady()
{
    this.setState(currState=>({
        ready: !currState.ready
    }));
}

displayMonth(currentMonth)
{

    let monthDays1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    let monthDays2 = monthDays1; 
    monthDays2.push(29,30);
    let monthDays3 = monthDays2; 
    monthDays3.push(31);

    switch(currentMonth){ //add leap year bool
        case '01':
        this.setState({monthName : 'January'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        
        break;
        case '02':
    
        this.setState({monthName : 'February'});
        this.setState({dayCount : 28})
        this.setState({dayArray: monthDays1})
        break;
        case '03':
        this.setState({monthName : 'March'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        
        break;
        case '04':
        this.setState({monthName : 'April'});
        this.setState({dayCount : 30})
        this.setState({dayArray: monthDays2})
        break;
        case '05':
        this.setState({monthName : 'May'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        break;
        case '06':
        this.setState({monthName : 'June'});
        this.setState({dayCount : 30})
        this.setState({dayArray: monthDays2})
        break;
        case '07':
        this.setState({monthName : 'July'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        break;
        case '08':
        this.setState({monthName : 'August'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        break;
        case '09':
        this.setState({monthName : 'September'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        break;
        case '10':
        this.setState({monthName : 'October'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        break;
        case '11':
        this.setState({monthName : 'November'});
        this.setState({dayCount : 30})
        this.setState({dayArray: monthDays2})
        break;
        case '12':
        this.setState({monthName : 'December'});
        this.setState({dayCount : 31})
        this.setState({dayArray: monthDays3})
        break;
        }
        
       
    
}

getThisDate() //1st
{
    
    this.showHide() //2nd
    this.setState({showCal:true})
    this.capDay() //3rd //only rec day data
    //const hereDate = await getThisMonth(this.state.date);
    //console.log(hereDate)
    let thisDay = new Date();
    let day = String(thisDay.getDate()).padStart(2, '0');
    let month = String(thisDay.getMonth() + 1).padStart(2, '0');
    let year = thisDay.getFullYear();

    
    
    

    //MONTH
    let convertMonth = Number(month)
    let revertMonth;
    //this.setState({monthNumber:convertMonth})
    if(this.state.monthNumber == 0)
    {
        revertMonth = String(convertMonth)
        this.setState({
            monthNumber: convertMonth+1
        });
        
    }
    else if(this.state.monthNumber !== 0 && this.state.monthNumber < 12)
    {
        convertMonth = this.state.monthNumber
        revertMonth = String(this.state.monthNumber)
    }
    else if(this.state.monthNumber !== 0 && this.state.monthNumber === 12)
    {
        this.state.monthNumber = 1;
        revertMonth = String(this.state.monthNumber)
    }
   
   let dayConvert = String(this.selectedDay);
   let dayRevert = Number(day);
   if(this.state.selectedDay = dayRevert)
   {
    thisDay = revertMonth + '/' + day + '/' + year;
   }
   else if(this.state.selectedDay !== dayRevert)
   {

    thisDay = revertMonth + '/' + dayConvert + '/' + year;
   }
 
   
    //thisDay = revertMonth + '/' + day + '/' + year;

    this.setState({selectedYear : year})
    
    this.setState({date : thisDay})
    if(convertMonth < 10)
    {
    this.displayMonth('0' + revertMonth) //4th convert month

    }
    else
    {
        this.displayMonth(revertMonth)
    
    }
    console.log(this.state.date)
}

sendDate()
{
    this.setState({
        fullDate : this.state.monthName + '-' + this.state.selectedDay + '-' + this.state.selectedYear}
    )
    console.log(this.state.fullDate)
    }
advanceMonth()
{
  
    this.setState(currMonth=>({
        monthNumber: currMonth.monthNumber+1
    }));
    this.getThisDate()
}


render(){
return(
    <>
        
        
        <div className = "background">
        <button className = "dateBtn"onClick={this.getThisDate = this.getThisDate.bind(this, true)}>Today's date:</button>



 
        <p className = "dateTitle">{this.state.date}</p>
        <p className = "monthTitle">{this.state.monthName}</p>
        </div>

        {this.state.showCal ?
        <>
       

         <Fragment>


        <div className="dayGrid">
        {this.state.dayArray.map((d,thisKey)=>
            <div key = {thisKey} className="dayKeys" onClick={()=>{this.setState({selectedDay : thisKey+1});this.capDay();this.disReady()}}>{d}</div>

            )}

            </div>
            <div className = "newAgenda">
            {/* <Agenda data={this.state.monthName+''+this.state.selectedDay+''+this.state.selectedYear}/> */}
            {/* <Agenda data={this.state.thisDayCap}/> */}
            <Agenda data={this.state.thisDayCap}/>
            {/* {this.state.monthName} {this.state.selectedDay} {this.state.selectedYear} */}

            </div>
            {/* show month // show day // show year //search*/}
            
            </Fragment>
            <div className="selectedDayBox">
            
            <p>Selected day: <span>
            <br></br>
            {/* {this.state.monthName} {this.state.selectedDay} {this.state.selectedYear}</span></p> */}
            
            {this.state.monthName} {this.state.selectedDay} {this.state.selectedYear}</span></p>

            {/* {console.log(this.state.fullDate)} */}
            
            <button className= "forward"onClick={()=>{this.advanceMonth()}}>next month<ImArrowRight className="arrow"/></button>
            
            </div>
            {/* <div className="backForward"> */}
            

            
            </>
            
            
            :null}

            {this.state.ready?
        <>
            {/* <GetOne data = {this.state.thisDayCap}/> */}
           {this.one()}
                
        </>
            :null}
            
                        {/* <button className= "back"onClick={this.decreaseMonth()}><ImArrowLeft/></button> */}
            {/* <button className= "forward"onClick={this.advanceMonth = this.advanceMonth.bind(this, true)}><ImArrowRight/></button> */}
            {/* <button className= "back"onClick={()=>{this.decreaseMonth()}}><ImArrowLeft/></button> */}
            
    </>
)

}

}
