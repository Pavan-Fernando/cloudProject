import { HeroContainer, HeroContent, HeroItem, HeroH1, HeroP, HeroBtn } from './HeroElements';
import React from 'react';


const Hero  = () => {
      return (
            <HeroContainer>
              <HeroContent>
              <HeroItem>
                  <HeroH1>Greatest Pizza in Sri Lanka</HeroH1>
                  <HeroP>Ready in 2 Minutes</HeroP>
                  <HeroBtn>Place Order</HeroBtn>
              </HeroItem>
              </HeroContent>    
            </HeroContainer>
      );
}

export default Hero 
