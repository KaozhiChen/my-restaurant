import React from 'react';
import { mainMenu } from '../Data';
import { RxDashboard } from 'react-icons/rx';
import { useState } from 'react';

const NavIcon = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`${
          toggle ? 'scale-1' : 'scale-0'
        } fixed w-full flex justify-center z-20 bottom-8 transition-all duration-300`}
      >
        <div className='flex sm:gap-8 gap-6 bg-black rounded-xl p-4 '>
          {mainMenu.map((main) => {
            return (
              <div
                key={main.id}
                className='text-white p-2 rounded-full bg-glass'
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href={`#${main.href}`}>{main.icon}</a>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className='fixed top-[20%] right-0 z-20 cursor-pointer bg-black'
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <RxDashboard className='text-white text-3xl' />
      </div>
    </>
  );
};

export default NavIcon;
