import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setAlert } from '../../src/store/alertSlice';

interface Props {
  msg: string;
  type: string;
}

const Alert = ({ msg, type }: Props) => {
  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    console.log(['msg', msg]);
    // setShowAlert(true);

    setTimeout(() => {
      dispatch(setAlert({ show: false, msg: '', type: '' }));
    }, 3000);
  }, [msg]);

  return (
    <>
      {showAlert && (
        <div
          className={`font-white-500 absolute left-0 left-0 right-0 top-[30px] z-50 m-auto w-full max-w-[600px]  `}
        >
          <div
            className={`ml-5 mr-5 rounded-md ${
              type === 'success'
                ? 'bg-green-500'
                : type === 'error'
                ? 'bg-red-500'
                : null
            }`}
          >
            <p className='text-md pl-3 pr-3 pt-2 pb-2 text-center text-white-500'>
              {msg}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
