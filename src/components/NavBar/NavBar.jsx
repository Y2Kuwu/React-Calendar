import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as userData from '../../utilities/users-api';
import React from 'react';
import prof from './prof.png'
import { userImage } from '../../utilities/users-api';

let userPic;

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
       
    async function getThisUser()
    {
        userPic = await userData.userImage();
    }

    //for user picture getUser()..

    return (
        <nav className='navi'>
            
            <div>
            <span className = "welcome">Welcome </span>
            <br></br>
            <img src ={prof} className="profile"/>
            {/* <img src ={getThisUser()} className="profile"/> */}
            <br></br>
            <Link to={""} onClick={handleLogOut} className = "logOut">Logout</Link>
            
        
            </div> 
        </nav>
        
            
            
    )
}
