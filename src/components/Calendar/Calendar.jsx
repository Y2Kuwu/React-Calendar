import { Component } from "react";
import { getThisDay, getThisMonth } from "../../utilities/day-api";

export default class Calendar extends Component{
constructor(props){
super(props)
this.state =
{
    monthName: '',
    dayCount: '',
    month : '',
    day: '',
    date: ''

}
    this.getThisDate = this.getThisDate.bind(this, false);
    this.displayMonth = this.displayMonth.bind(this);
}

getCurrent()
{

}

displayMonth(currentMonth)
{
    switch(currentMonth){ //add leap year bool
        case '01':
        this.setState({monthName : 'January'});
        this.setState({dayCount : 31})
        break;
        case '02':
        if(this.state.year)
        {

        }
        
        this.setState({monthName : 'February'});
        this.setState({dayCount : 28})
        break;
        case '03':
        this.setState({monthName : 'March'});
        this.setState({dayCount : 31})
        break;
        case '04':
        this.setState({monthName : 'April'});
        this.setState({dayCount : 30})
        break;
        case '05':
        this.setState({monthName : 'May'});
        this.setState({dayCount : 31})
        break;
        case '06':
        this.setState({monthName : 'June'});
        this.setState({dayCount : 30})
        break;
        case '07':
        this.setState({monthName : 'July'});
        this.setState({dayCount : 31})
        break;
        case '08':
        this.setState({monthName : 'August'});
        this.setState({dayCount : 31})
        break;
        case '09':
        this.setState({monthName : 'September'});
        this.setState({dayCount : 31})
        break;
        case '10':
        this.setState({monthName : 'October'});
        this.setState({dayCount : 31})
        break;
        case '11':
        this.setState({monthName : 'November'});
        this.setState({dayCount : 30})
        break;
        case '12':
        this.setState({monthName : 'December'});
        this.setState({dayCount : 31})
        break;
        }
        console.log(this.state.monthName)
       
}

getThisDate()
{
    //const hereDate = await getThisMonth(this.state.date);
    //console.log(hereDate)
    let thisDay = new Date();
    let day = String(thisDay.getDate()).padStart(2, '0');
    let month = String(thisDay.getMonth() + 1).padStart(2, '0');
    let year = thisDay.getFullYear();

    thisDay = month + '/' + day + '/' + year;
    

    this.setState({date : thisDay})
    this.displayMonth(month)
    //getThisDay(month);
    //console.log(this.state.date)
}

render(){
return(
    <>
        <button onClick={this.getThisDate = this.getThisDate.bind(this, true)}></button>
        <p>{this.state.date}</p>
        <p>{this.state.monthName}</p>
    </>
)

}

}
