import React from 'react';
import './style.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import Footer from './components/Footer';
import Gmail from './gmail';

export default function Signin() {

   return (
      <div>
      <div className="SignIn2">
         <div className="signInContainer">
         <Form className="signIn-form">
            <h1>Sign In</h1>
            <FormGroup>
               <Label>Email</Label><br/>
               <Input type="email" placeholder="E-mail"></Input>
            </FormGroup>
            <FormGroup>
               <Label>Password</Label><br/>
               <Input type="password" placeholder="Password"></Input>
            </FormGroup>
            <Button>Sign In</Button>
            <div className="txt-in-signIn">--Or Continue with Social Accounts--</div>
            <div className="SignInGoogleBtn">
            <Gmail />
            </div>
            <FacebookLoginButton />
            <div className="text-center">
               <a href="#">Sign Up</a>
               <span className="p-2"> | </span>
               <a href="#">Fogot Pasword</a>
            </div>
         </Form>
      </div>
      </div>
      <Footer />
      </div>
   )
}
