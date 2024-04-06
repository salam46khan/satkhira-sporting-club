import HomeContent from '@/components/home/HomeContent';
import React from 'react';

const HomePage = () => {
  return (
    <div className='home-page py-5 px-3 overflow-hidden'>
      <div className='pt-20'>
        <HomeContent />
      </div>
    </div>
  );
};

export default HomePage;