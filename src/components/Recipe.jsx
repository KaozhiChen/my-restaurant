import React from 'react';
import { recipes } from '../Data';
const Recipe = () => {
  return (
    <div className='section' id='recipe'>
      <div>
        {/* title */}
        <div className='text-3xl font-bold text-center mb-16'>
          Hot Selling Recipes
        </div>
        {/* images */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {recipes.map((recipes) => {
            return (
              <div
                key={recipes.id}
                className='p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer'
              >
                <img className='rounded-lg' src={recipes.image} alt='recipe' />
                {/* name and nums */}
                <div className='flex items-center justify-between'>
                  <div className='font-semibold md:text-lg text-[1rem] '>
                    {recipes.name}
                  </div>
                  {/* add or remove button */}
                  <div className='flex gap-3 items-center font-semibold'>
                    <button>-</button>
                    <span className='text-[0.85rem]'>0</span>
                    <button>+</button>
                  </div>
                </div>

                {/* recipe description */}
                <p className='text-[0.85rem] opacity-80 mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  quasi iusto aperiam distinctio, sint dolore quo fugiat
                  aspernatur, aliquam soluta accusantium error accusamus.
                </p>
                <div className='flex justify-between items-center'>
                  <span className='font-bold'>{recipes.price}</span>
                  <span className='btn cursor-pointer p-3'>Add to cart</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
