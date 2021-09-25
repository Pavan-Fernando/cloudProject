import React from 'react'
import Hero from './components/Hero';
import Product from './components/Products';
import { ProductData, ProductDataTwo, ProductDataThree } from './components/Products/data';
import Feature from './components/Features';
import Footer from './components/Footer';

const Home = () => {
   return (
      <div>
         <Hero />
          <Product heading='Choose Your Favorite Pizza' data={ProductData}/>
          <Feature />
          <Product heading='Appetizers' data={ProductDataTwo}/>
          <Product heading='Sweets For You' data={ProductDataThree}/>
          <Footer />
      </div>
   )
}

export default Home;


