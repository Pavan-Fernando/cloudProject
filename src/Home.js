import React from 'react'
import Hero from './components/Hero';
import Product from './components/Products';
import { ProductData, ProductDataTwo, ProductDataThree } from './components/Products/data';
import Feature from './components/Features';
import Footer from './components/Footer';
import Youtube from './youtube';
import './style.css';


const Home = () => {
   return (
      <div>
         <Hero />
          <Product heading='Choose Your Favorite Pizza' data={ProductData}/>
          <Feature />
          <Product heading='Appetizers' data={ProductDataTwo}/>
          <Product heading='Sweets For You' data={ProductDataThree}/>
          <div className="homeyoutube1">
             <h1>How to Making Pizza</h1>
            <div className="homeyoutube2">
               <Youtube videoId='Hg5zM6-UbgU' />
            </div>
          </div>
          <Footer />
      </div>
   )
}

export default Home;


