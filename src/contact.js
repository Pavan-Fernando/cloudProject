import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Map from './map';
import Footer from './components/Footer';


function Contact (){
   return(
      <div>
         <div className="contact1"></div>
         <div className="contact2">
            <h1>Contact Us</h1>
           <div className="contact3">
               <p><FontAwesomeIcon icon={["fas", "coffee"]} /></p>
               <p><FaMapMarkerAlt /> <strong>The Pizza Zone Resturent</strong></p>
               <p>79 Galle Road,</p>
               <p>Moratuwa.</p>
           </div>
           <div className="contact4">
               <p><FaPhoneAlt />  +94712345678</p>
               <p><FaPhoneAlt />  +94112481632</p>
           </div>
           <div className="contact5">
               <p><MdEmail />  info@pizzazoneonline.com</p>
           </div>
         </div>
         <br/>
         <br/>
         <hr/>
         <div className="contact6">
            <Map />
         </div>
         
         <Footer />
      </div>
   )
}
export default Contact;