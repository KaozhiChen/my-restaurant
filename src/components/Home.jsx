import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { heroIcons } from '../Data';
import steak from '../assets/Food Images/steak.png';
const Home = () => {
  return (
    <div
      className='section flex items-center xl:justify-center flex-wrap'
      id='home'
    >
      <div className='flex flex-col items-start gap-10 mb-2 mr-2'>
        {/* slogan */}
        <div className='sm:text-[2.5rem] text-[1.8rem] font-bold'>
          Delisious <br /> Food is Waiting <br /> For you
        </div>
        {/* menu button */}
        <div className='btn'>
          <a href='#'>View Menu</a>
          <FaArrowRight />
        </div>
        {/* menu icons */}
        <div className='flex md:gap-6 gap-2'>
          {heroIcons.map((heroIcon, index) => {
            return (
              <div
                className='flex items-center justify-center w-12 h-12 bg-black text-white md:text-3xl text-xl rounded-md'
                key={index}
              >
                {heroIcon}
              </div>
            );
          })}
        </div>
      </div>
      <div className='min-w-[200px] md:w-[600px] justify-self-center '>
        <img src={steak} alt='steak-img' />
      </div>
    </div>
  );
};

export default Home;
