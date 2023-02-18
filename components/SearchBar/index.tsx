import axios from 'axios';
// import { NextResponse, NextRequest } from 'next/server';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

interface SearchBarProps {
  setFoundFlights: any;
  isListView?: boolean;

  initialDateFrom?: string;
  initialDateTo?: string;
  initialDirectionFrom?: string;
  initialDirectionTo?: string;
}

const SearchBar = ({
  setFoundFlights,
  isListView,
  initialDateFrom,
  initialDateTo,
  initialDirectionFrom,
  initialDirectionTo,
}: SearchBarProps) => {
  const [citiesFrom, setCitiesFrom] = useState([]);

  const [citiesTo, setCitiesTo] = useState([]);

  const [date, setDate] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0],
  });

  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');

  useEffect(() => {
    getPlCities();
  }, []);

  useEffect(() => {
    if (
      initialDateFrom &&
      initialDateTo &&
      initialDirectionFrom &&
      initialDirectionTo
    ) {
      getCitiesAbroad(initialDirectionFrom);
      setDate({
        startDate: initialDateFrom,
        endDate: initialDateTo,
      });
      setCityFrom(initialDirectionFrom);
      setCityTo(initialDirectionTo);
      handleSubmit(
        initialDateFrom,
        initialDateTo,
        initialDirectionFrom,
        initialDirectionTo
      );
    }
  }, [
    initialDateFrom,
    initialDateTo,
    initialDirectionFrom,
    initialDirectionTo,
  ]);

  const handleDateChange = (newValue: any) => {
    setDate(newValue);
  };

  const getPlCities = () => {
    if (!citiesFrom?.length) {
      axios
        .get(`${process?.env?.NEXT_PUBLIC_API_URL}cities/pl`)
        .then((response) => {
          if (response?.data) {
            setCitiesFrom(response?.data);
          }
        })
        .catch((error) => {
          // console.log(error);
        });
    }
  };

  const getCitiesAbroad = (city: string) => {
    axios
      .get(
        `${process?.env?.NEXT_PUBLIC_API_URL}cities/abroad/${city
          .normalize('NFD')
          .replace(/\u0142/g, 'l')
          .replace(/\u0141/g, 'L')
          .replace(/[\u0300-\u036f]/g, '')}`
      )
      .then((response) => {
        if (response?.data) {
          setCitiesTo(response?.data);
        }
      })
      .catch((error) => {
        setCitiesTo([]);
        // console.log(error);
      });
  };

  const handleSetCityFrom = (city: string) => {
    setCityTo('');
    setCityFrom(city);
    getCitiesAbroad(city);
  };

  const handleSubmit = (
    initialDateFrom?: string,
    initialDateTo?: string,
    initialDirectionFrom?: string,
    initialDirectionTo?: string
  ) => {
    if (isListView && cityFrom && cityTo && date) {
      return Router.push(
        `kierunki/${cityFrom}/${cityTo}/${date?.startDate}/${date?.endDate}/1`
      );
    } else if (
      (cityFrom && cityTo && date) ||
      (initialDateFrom &&
        initialDateTo &&
        initialDirectionFrom &&
        initialDirectionTo)
    ) {
      axios
        .get(
          `${process?.env?.NEXT_PUBLIC_API_URL}flight/${(initialDirectionFrom
            ? initialDirectionFrom
            : cityFrom
          )
            .normalize('NFD')
            .replace(/\u0142/g, 'l')
            .replace(/\u0141/g, 'L')
            .replace(/[\u0300-\u036f]/g, '')}/${(initialDirectionTo
            ? initialDirectionTo
            : cityTo
          )
            .normalize('NFD')
            .replace(/\u0142/g, 'l')
            .replace(/\u0141/g, 'L')
            .replace(/[\u0300-\u036f]/g, '')}/${
            initialDateFrom ? initialDateFrom : date?.startDate
          }/${initialDateTo ? initialDateTo : date?.endDate}`
        )
        .then((response) => {
          if (response?.data) {
            setFoundFlights(response?.data);
          }
        })
        .catch((error) => {
          setFoundFlights([]);
          // console.log(error);
        });
    }
  };

  return (
    <div className='sm:my-autoinner-form xl:mx-26 items-top mx-6 mt-24 w-full max-w-screen-xl justify-between rounded-2xl bg-white-500 p-4 sm:mx-auto sm:flex sm:w-auto sm:w-8/12 sm:rounded-full lg:w-6/12'>
      <div className='input-field first-wrap mb-3 mr-0 ml-0 w-full sm:mb-0 sm:mr-1 sm:ml-6 sm:w-1/5'>
        <div className='mb-1 flex items-center'>
          <div className='icon-wrap '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='#62E699'
            >
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path>
            </svg>
          </div>
          <p className='pl-1 text-sm font-bold leading-normal text-black-600'>
            Z
          </p>
        </div>
        <div
          className='choices'
          role='listbox'
          data-type='select-one'
          tabIndex={0}
          aria-haspopup='true'
          aria-expanded='false'
          dir='ltr'
          aria-activedescendant='choices-choices-single-defaul-rg-item-choice-1'
        >
          <div className='choices__inner'>
            <select
              id='from'
              className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:placeholder-gray-400'
              onChange={(e) => handleSetCityFrom(e?.target?.value)}
            >
              <option>Wybierz</option>
              {citiesFrom?.map((city: string) => {
                return (
                  <option
                    key={city}
                    value={city}
                    selected={city === cityFrom ? true : false}
                  >
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className='input-field first-wrap mb-3 mr-0 mr-0 w-full sm:mr-1 sm:w-1/5'>
        <div className='mb-1 flex items-center'>
          <div className='icon-wrap '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='#62E699'
            >
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'></path>
            </svg>
          </div>
          <p className='pl-1 text-sm font-bold leading-normal text-black-600'>
            Do
          </p>
        </div>
        <div
          className='choices'
          role='listbox'
          data-type='select-one'
          tabIndex={0}
          aria-haspopup='true'
          aria-expanded='false'
          dir='ltr'
          aria-activedescendant='choices-choices-single-defaul-rg-item-choice-1'
        >
          <div className='choices__inner'>
            <select
              id='to'
              className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full rounded-lg border p-2.5 text-sm dark:placeholder-gray-400'
              onChange={(e) => setCityTo(e?.target?.value)}
            >
              <option>Wybierz</option>
              {citiesTo?.map((city: string) => {
                return (
                  <option
                    key={city}
                    value={city}
                    selected={city === cityTo ? true : false}
                  >
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className='input-field second-wrap mr-0 mr-0 mb-3 w-full  sm:mr-2 sm:w-2/5'>
        <div className='mb-1 flex items-center'>
          <div className='icon-wrap '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              viewBox='0 0 24 24'
              fill='#62E699'
            >
              <path d='M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z'></path>
            </svg>
          </div>
          <p className='pl-1 text-sm font-bold leading-normal text-black-600'>
            Termin
          </p>
        </div>
        <div className='datepicker__container'>
          <Datepicker
            i18n='pl'
            value={date}
            onChange={handleDateChange}
            primaryColor='green'
            disabledDates={[
              {
                startDate: '1000-01-01',
                endDate: '2023-02-01',
              },
              {
                startDate: '2024-01-01',
                endDate: '9999-01-01',
              },
            ]}
          />
        </div>
      </div>

      <div className='input-field fifth-wrap  justify-end'>
        <button
          className='btn-search sm:py-auto flex h-auto w-full items-center justify-center rounded-lg bg-green-500 py-3 sm:h-20 sm:w-20 sm:rounded-full '
          type='button'
          onClick={() => handleSubmit()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='#fff'
            className='bi bi-search h-7 w-7'
            viewBox='0 0 16 16'
          >
            {' '}
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />{' '}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
