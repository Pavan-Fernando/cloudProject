import React from 'react';
import { useState } from 'react';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
import './style.css'

export default function Signin() {

   const clientId = "129410002550-hllhb7t0il9tff0gufpq3o4qpphoogfk.apps.googleusercontent.com";
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
      <div className="signin1">
         {showSignInBtn ?
         <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={succesFullySignIn}
            onFailure={failedSignIn}
            cookiePolicy={'single_host_origin'}
         />: null}

         {showSignOutBtn ?
         <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={succesFullySignOut}>
         </GoogleLogout> : null }
      </div>
   )
}
