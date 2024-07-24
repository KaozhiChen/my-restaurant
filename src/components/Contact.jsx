import React from 'react';

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='flex justify-between items-end gap-4 flex-wrap border-solid border-b border-black pb-8'>
        <div>
          <div className='uppercase font-semibold'>Let's talk</div>
          <div className='text-3xl font-bold'>Want to reserve a table?</div>
        </div>
        <div className='rounded-tr-[1rem] rounded-b-[1rem] bg-black text-white p-4 text-[0.85rem]'>
          <a href='#'>Contact Us Now</a>
        </div>
      </div>
      <p className='mt-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt
        minima nam eos ducimus maxime voluptatum rerum voluptate, asperiores
        obcaecati quis. Porro dignissimos fugit aut nemo numquam exercitationem
        dolores delectus.
      </p>
    </div>
  );
};

export default Contact;
