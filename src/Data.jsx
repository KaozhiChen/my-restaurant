import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiBowlOfRice, GiHamburger, GiCakeSlice } from 'react-icons/gi';
import { MdContactPage, MdExplore } from 'react-icons/md';
import { IoIceCream } from 'react-icons/io5';

const Data = () => {};
export const heroIcons = [
  <GiHamburger />,
  <GiCakeSlice />,
  <IoIceCream />,
  <GiBowlOfRice />,
];
export const mainMenu = [
  {
    id: 1,
    href: 'home',
    text: 'Home',
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: 'about',
    text: 'About',
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: 'recipe',
    text: 'Recipe',
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: 'contact',
    text: 'Contact',
    icon: <MdContactPage />,
  },
];

export default Data;
