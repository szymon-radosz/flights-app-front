import React from 'react';

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        'hover:shadow-green-md rounded-full bg-green-500 py-3 px-12 font-semibold text-white-500 outline-none transition-all lg:py-4 lg:px-16 ' +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
