import React from 'react';
import {
  socialMediaIcons,
  mainMenu,
  explores,
  footerContacts,
  paymentIcons,
} from '../Data';

const Footer = () => {
  return (
    <div className='section'>
      <div className='grid lg:grid-cols-3 sm:gria-cols-2 gap-10 mb-8'>
        <div>
          <div className='text-xl font-semibold mb-3'>Food Zone</div>
          <p className=' mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius
            tempore delectus quidem? Voluptates cum, voluptatem exercitationem
            nemo, natus nihil repudiandae aperiam sed at labore quia excepturi
            provident culpa maiores.
          </p>
          <div className='flex items-center gap-4'>
            <span>Follow Us</span>
            <div className='h-[2px] w-12 bg-black'></div>

            {socialMediaIcons.map((socialMediaIcon, index) => {
              return (
                <div key={index}>
                  <a href='#'>{socialMediaIcon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div>
            <h3 className='font-semibold text-[1.1rem] mb-4'>Main Menu</h3>
            {mainMenu.map((menu, index) => {
              return (
                <div key={index} className='mb-2'>
                  <a href={`#${menu.href}`}>{menu.text}</a>
                </div>
              );
            })}
          </div>
          <div>
            <h3 className='font-semibold text-[1.1rem] mb-4'>Explore</h3>
            {explores.map((explore, index) => {
              return (
                <div key={index} className='mb-2'>
                  <a href='#'>{explore}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className='font-semibold text-[1.1rem] mb-4'>Contact</h3>
          {footerContacts.map((footerContact) => {
            return (
              <div
                key={footerContact.id}
                className='mb-4 flex items-center gap-4'
              >
                <div className='text-xl'>{footerContact.icon}</div>
                <div>{footerContact.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-wrap justify-between gap-4 pb-8'>
        <div>
          Copyright &#169; <span className='font-bold'>Kaozhi Chen</span> All
          rights deserved.
        </div>
        <div className='flex gap-4 '>
          {paymentIcons.map((paymenIcon, index) => {
            return (
              <div key={index} className='text-[4rem] '>
                {paymenIcon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
