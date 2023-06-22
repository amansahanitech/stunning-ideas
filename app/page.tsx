import React from 'react';
import Banner from './components/banner';
import Products from './components/products';

const LandingPage = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Banner/>
      <Products/>
    </div>
  );
}

export default LandingPage;
