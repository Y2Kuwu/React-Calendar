import { Component } from "react";
import { getThisDay, getThisMonth } from "../../utilities/day-api";
import '../../index.css';
import { ImArrowRight } from 'react-icons/im';
import { ImArrowLeft } from 'react-icons/im';

export default class Calendar extends Component{
constructor(props){
super(props)
this.state =
{
    monthName: '',
    dayCount: '',
    dayArray: [],
    monthNumber: 0,
    day: '',
    date: '',
    showCal: false,

}
    this.getThisDate = this.getThisDate.bind(this, false);
    this.displayMonth = this.displayMonth.bind(this);
    this.advanceMonth = this.advanceMonth.bind(this);
    this.decreaseMonth = this.decreaseMonth.bind(this);

    this.showHide = this.showHide.bind(this);

}

// getCurrent()
// {

// }

// displayGrid(count)
// {
//     let oneDay = [];
//     for(let countDays = 0; count < countDays; countDays++)
//     {

//     }
// }


decreaseMonth()
{

}

showHide()
{
    this.setState(currState=>({
        showCal: !currState.showCal
    }));
}


displayMonth(currentMonth)
{

    let monthDays1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
    let monthDays2 = monthDays1; 
    monthDays2.push(29,30);
    let monthDays3 = monthDays2; 
    monthDays3.push(31);

    // for(let i =0; i < monthDays3.length; i++){
    //console.log(monthDays2[i])
    //let monthDays3 = monthDays2.push(31);

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
   // }
        //console.log(this.state.monthName)
       //this.displayGrid(this.state.dayCount)
    //    console.log(this.state.dayArray)
    console.log()
    
}

getThisDate()
{
    this.showHide()
    this.setState({showCal:true})
    //const hereDate = await getThisMonth(this.state.date);
    //console.log(hereDate)
    let thisDay = new Date();
    let day = String(thisDay.getDate()).padStart(2, '0');
    let month = String(thisDay.getMonth() + 1).padStart(2, '0');
    //
    // let updateMonth = String(thisDay.getMonth() + (addSub+1)).padStart(2, '0');
    //
    let year = thisDay.getFullYear();

    ///
    

    let convertMonth = Number(month)
    let revertMonth;
    console.log(month)
    //this.setState({monthNumber:convertMonth})
    if(this.state.monthNumber == 0)
    {
        revertMonth = String(convertMonth)
        this.setState({
            monthNumber: convertMonth+1
        });
        

        // this.setState(this.monthNumber , convertMonth)
    }
    else if(this.state.monthNumber !== 0)
    {
        convertMonth = this.state.monthNumber
        revertMonth = String(this.state.monthNumber)
        //console.log(this.state.monthNumber)
    }

    // else if(this.state.monthNumber < 0)
    // {
    //     convertMonth = this.state.monthNumber
    //     revertMonth = String(this.state.monthNumber)
    //     //console.log(this.state.monthNumber)
    // }
    
    //console.log(convertMonth)
    // convertMonth = Number(month) + convertMonth
   
    
   console.log(revertMonth)
    

   
    thisDay = revertMonth + '/' + day + '/' + year;
    
   
    //thisDay = revertMonth + '/' + day + '/' + year;
    

    this.setState({date : thisDay})
    if(convertMonth < 10)
    {
    this.displayMonth('0' + revertMonth)
    }
    else
    {
        this.displayMonth(revertMonth)
    }

    
    //getThisDay(month);
    //console.log(this.state.date)
}


advanceMonth()
{
  
    this.setState(currMonth=>({
        monthNumber: currMonth.monthNumber+1
    }));
    this.getThisDate()
}
decreaseMonth()
{
    // this.setState(this.monthNumber , this.monthNumber-1)
    this.setState(currMonth=>({
        monthNumber: currMonth.monthNumber-1
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
        <div className="dayGrid">
        {this.state.dayArray.map((d,thisKey)=>
            <div key = {thisKey} className="dayKeys">{d}</div>
            )}
             
            </div>
            <br></br>

            <div className="backForward">
            {/* <button className= "back"onClick={this.decreaseMonth()}><ImArrowLeft/></button> */}
            {/* <button className= "forward"onClick={this.advanceMonth = this.advanceMonth.bind(this, true)}><ImArrowRight/></button> */}
            <button className= "back"onClick={()=>{this.decreaseMonth()}}><ImArrowLeft/></button>
            <button className= "forward"onClick={()=>{this.advanceMonth()}}><ImArrowRight/></button>
            </div>
            </>
            :null}
            
             
    </>
)

}

}
