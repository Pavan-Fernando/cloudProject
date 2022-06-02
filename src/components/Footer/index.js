import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, FtLink } from './FooterElements';
import '../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
   return (
   <div>  
      <FooterContainer>
         <FooterWrap>
            <SocialMedia>
               <SocialMediaWrap>
                  <SocialLogo to="/">Pizza Zone</SocialLogo>
                  <SocialIcons>
                     <SocialIconLink href="/" target="_blank" arial-label="Facebook" rel="noopener noreferrer">
                        <FaFacebook />
                     </SocialIconLink>

                     <SocialIconLink href="/" target="_blank" arial-label="Instagram" rel="noopener noreferrer">
                        <FaInstagram />
                     </SocialIconLink>

                     <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener noreferrer">
                        <FaYoutube />
                     </SocialIconLink>

                     <SocialIconLink href="/" target="_blank" arial-label="Twitter" rel="noopener noreferrer">
                        <FaTwitter />
                     </SocialIconLink>
                  </SocialIcons>
               </SocialMediaWrap>
            </SocialMedia>
         </FooterWrap>
      </FooterContainer>
      <div className="footer">
         {/* <a href="/">Home</a>
         <a href="/about">About</a>
         <a href="/contact">Contact Us</a>
         <a href="/signin">Sign</a> */}
            <FtLink to='/'>Home</FtLink>
            <FtLink to='/about'>About</FtLink>
            <FtLink to='/contact'>Contact Us</FtLink>
            <FtLink to='/signin'>Sign In</FtLink>

            <div className="footerCate">
               <h2>Food Menu</h2><br/><br/>
               <a href="#">Pizza</a><br/><br/>
               <a href="#">Appetizers</a><br/><br/>
               <a href="#">Dessert</a>
            </div>
            <div className="footerImg">
               <h2>Contact Us</h2>
               <div className="ft">
                     <p><FontAwesomeIcon icon={["fas", "coffee"]} /></p>
                     <p><FaMapMarkerAlt /> <strong>The Pizza Zone Resturent</strong></p>
                     <p>79 Galle Road,</p>
                     <p>Moratuwa.</p>
               </div>
               <div className="ft">
                     <p><FaPhoneAlt />  +94712345678</p>
                     <p><FaPhoneAlt />  +94112481632</p>
               </div>
            </div>
            <div className="ft4">
                     <p><MdEmail />  info@pizzazoneonline.com</p>
               </div>

            <div className="copyR1">
               <span className="copyR">&copy; IT2019234</span>
            </div>
      </div>
      </div>
      
   )
} 

export default Footer
