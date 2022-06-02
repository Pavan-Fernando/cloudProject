import React from 'react';
import { useState } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import './style.css'

export default function Gmail() {
   const clientId = "";
   const [showSignInBtn, setShowSignBtn] = useState(true);
   const [showSignOutBtn, setShowSignOutBtn] = useState(false);

   const succesFullySignIn = (res) => {
      console.log('Sign In Sucess:', res.profileObj);
      setShowSignBtn(false);
      setShowSignOutBtn(true);
   }
   const failedSignIn = (res) => {
      console.log('Sign In Failed:', res);
   }
   const succesFullySignOut = () => {
      alert("Successfully Sign out!!!");
      setShowSignBtn(true);
      setShowSignOutBtn(false);
   }
   
   return (
      <div>
            {showSignInBtn ?
            <GoogleLogin 
               clientId={clientId}
               onSuccess={succesFullySignIn}
               onFailure={failedSignIn}
               cookiePolicy={'single_host_origin'}
            />: null}
            {showSignOutBtn ?
            <GoogleLogout
               clientId={clientId}
               onLogoutSuccess={succesFullySignOut}>
            </GoogleLogout> : null }
      </div>
   )
}
