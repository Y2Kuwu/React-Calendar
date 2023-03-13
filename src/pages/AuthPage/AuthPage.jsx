import React from 'react';
import {useState} from "react";
import SignUp from '../../components/SignUp/SignUp';
import LogIn from '../../components/LogIn/LogIn';

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <main>
            
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            {showSignUp ?
                <SignUp setUser={setUser}/>
                :
                <LogIn setUser={setUser}/>
            }
            
        </main>
    );
}