import React from 'react';

interface Props {
  children: any;
  addClass?: string;
}

const ButtonPrimary = ({ children, addClass }: Props) => {
  return (
    <button
      className={`rounded-full bg-green-500 py-3 px-12 font-semibold text-white-500 outline-none transition-all hover:shadow-lg lg:py-4 lg:px-16 ${addClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
