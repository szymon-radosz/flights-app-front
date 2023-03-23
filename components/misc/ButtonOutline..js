import React from 'react';

const ButtonOutline = ({ children }) => {
  return (
    <button className='rounded-l-full rounded-r-full border border-green-500 bg-white-500 py-2 px-5 font-medium capitalize tracking-wide text-green-500 outline-none transition-all hover:bg-green-500 hover:text-white-500 hover:shadow-lg sm:px-8 '>
      {' '}
      {children}
    </button>
  );
};

export default ButtonOutline;
