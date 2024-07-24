import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import steak from '../assets/Food Images/steak.png';
// import fish from '../assets/Food Images/fish3.png';
const About = () => {
  return (
    <div className='section' id='about'>
      {/* The best Chinese Food */}
      <div className='grid md:grid-cols-2 items-center gap-10 mb-10'>
        <div
          className='flex flex-col justify-center
        items-start gap-6'
        >
          <div className='sm:text-3xl text-xl font-bold mb-6'>
            The Best Chinese Food in Atlanta!
          </div>
          <p className='text-sm opacity-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            ratione minima officiis voluptatum quis ex, eum dolorum dicta est
            eveniet, aliquam ducimus, sequi perferendis facilis tenetur pariatur
            placeat quaerat nam.
          </p>
          <div className='btn'>
            <a href='#' className='text-white text-[0.85rem]'>
              Explore More
            </a>
            <FaArrowRight className='text-white' />
          </div>
        </div>
        <div className='md:row-start-1'>
          <img src={steak} alt='fish' />
        </div>
      </div>
      {/* cheif */}
      <div className='grid md:grid-cols-2 items-center gap-10'>
        <div>
          <div className='text-xl sm:text-3xl font-bold mb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <p className='text-sm opacity-80'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            debitis nihil soluta totam animi! Enim explicabo recusandae, eaque,
            eius eligendi distinctio mollitia debitis eveniet commodi dolores
            quam, laudantium ipsam velit.
          </p>
        </div>
        <div>
          <img src={steak} alt='steak' />
        </div>
      </div>
    </div>
  );
};

export default About;
