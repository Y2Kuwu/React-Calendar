import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import React from 'react';


export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
        //if employee == super display my companies and user information
        //if employee !== super display track record and user information
       

    return (
        <nav>
       
           
            
          
            <Link to={""} onClick={handleLogOut} className = "logOut">Logout</Link>
            <div>
            <span className = "welcome">Welcome, </span>
            <Link to= " " className = "userName">{user.name} </Link>
            </div> 
            

            

        </nav>
        
            
            
    )
}
