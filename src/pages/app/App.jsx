import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

// import {Redirect} from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import Calendar from '../../components/Calendar/Calendar';

import NavBar from '../../components/NavBar/NavBar';

import {getUser} from '../../utilities/users-service';


function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());


    return (
      
         < main className="App">
             {user ?
              <>
                   
                <NavBar user={user} setUser={setUser}/>
  

                    <Routes>
     
                        <Route path="/Calendar" element={<Calendar user={user} setUser={setUser}/>}/>

                    </Routes>
                    
               
                    </>
                
                 :
                <AuthPage setUser={setUser}/>}
        
         </main>
       
     );
   
}

export default App;