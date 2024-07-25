import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiBowlOfRice, GiHamburger, GiCakeSlice } from 'react-icons/gi';
import { MdContactPage, MdExplore } from 'react-icons/md';
import { IoIceCream } from 'react-icons/io5';
import {
  FaFacebook,
  FaInstagramSquare,
  FaCcApplePay,
  FaCcAmazonPay,
  FaAlipay,
  FaCcPaypal,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import noodles from '../src/assets/Food Images/tomato and egg noodles.jpg';
import lemonFish from '../src/assets/Food Images/lemon fish.jpg';
import fish from '../src/assets/Food Images/fish.jpg';
import cake from '../src/assets/Food Images/strawberry cake.jpg';
import shrimp from '../src/assets/Food Images/shrimp.jpg';
import chicken from '../src/assets/Food Images/chicken.jpg';
import { FiPhone, FiMail } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';

const Data = () => {};

export const paymentIcons = [
  <FaCcPaypal />,
  <FaCcApplePay />,
  <FaAlipay />,
  <FaCcAmazonPay />,
];

export const footerContacts = [
  {
    id: 1,
    icon: <FiPhone />,
    text: '(404)123-4567',
  },
  {
    id: 2,
    icon: <FiMail />,
    text: 'abcd1234@gmail.com',
  },
  {
    id: 3,
    icon: <IoLocationOutline />,
    text: 'Peachtree,Atlanta,Georgia',
  },
];

export const explores = ['Drinks', 'Burger', 'Salad', 'Breakfast', 'Dinner'];

export const socialMediaIcons = [
  <FaFacebook />,
  <FaInstagramSquare />,
  <FaXTwitter />,
];

export const recipes = [
  {
    id: 1,
    image: noodles,
    price: '$22',
    name: 'Tomato & Eggs Noodles',
  },
  {
    id: 2,
    image: lemonFish,
    price: '$22',
    name: 'Lemon Fish',
  },
  {
    id: 3,
    image: fish,
    price: '$22',
    name: 'Spicy Fish',
  },
  {
    id: 4,
    image: chicken,
    price: '$22',
    name: 'Chicken Drumstick',
  },
  {
    id: 5,
    image: shrimp,
    price: '$22',
    name: 'Shrimps',
  },
  {
    id: 6,
    image: cake,
    price: '$22',
    name: 'Strawberry Cake',
  },
];

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
