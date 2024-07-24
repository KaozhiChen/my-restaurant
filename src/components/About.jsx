import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import fish from '../assets/Food Images/fish3.png';
const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 items-center mb-10'>
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
          <img src={fish} alt='fish' />
        </div>
      </div>
    </div>
  );
};

export default About;
