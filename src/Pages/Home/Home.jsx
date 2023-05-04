import React from 'react';
import Banner from '../Banner/Banner';
import CardItems from '../CardItems/CardItems';
import OurService from '../OurService/OurService';

const Home = () => {
     
     return (
          <div className='text-center'>
               <Banner></Banner>
               <CardItems></CardItems>
               <OurService></OurService>
          </div>
     );
};

export default Home;