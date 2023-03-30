import { useEffect, useState } from 'react';

import 'react-input-range/lib/css/index.css';

import ButtonPrimary from '../../components/misc/ButtonPrimary';

interface TravelPlanProps {
  directionTo?: string;
  dateFrom?: string;
  dateTo?: string;
  peopleCount?: number;
}

const TravelPlan = ({
  directionTo,
  dateFrom,
  dateTo,
  peopleCount,
}: TravelPlanProps) => {
  const [showSceleton, setShowSceleton] = useState(true);

  const [travelExpensiveness, setTravelExpensiveness] = useState({
    title: {
      en: 'Travel expensiveness should be ',
      pl: 'Jak kosztowna ma być to podróż?',
    },
    options: [
      {
        id: 1,
        en: 'luxurious.',
        pl: 'YOLO',
        selected: false,
      },
      {
        id: 2,
        en: 'normal as a tourist.',
        pl: 'Mam umiarkowany budżet',
        selected: true,
      },
      {
        id: 3,
        en: 'really low.',
        pl: 'Podróżuję raczej budżetowo',
        selected: false,
      },
    ],
  });

  const handleSetTravelExpensiveness = (optionId: number) => {
    const travelExpensivenessOptions = travelExpensiveness?.options;
    travelExpensivenessOptions.map((element) => {
      element?.id === optionId
        ? (element.selected = true)
        : (element.selected = false);
    });

    // console.log(['travelExpensivenessCopy', travelExpensivenessOptions]);

    setTravelExpensiveness({
      ...travelExpensiveness,
      options: travelExpensivenessOptions,
    });
  };

  const [travelPace, setTravelPace] = useState({
    title: {
      en: 'Traveling intesiveness should be ',
      pl: 'Jak dużo chcesz zwiedzać?',
    },
    options: [
      {
        id: 1,
        en: 'Fast-paced.',
        pl: 'Chcę zobaczyć jak najwięcej',
        selected: true,
      },
      {
        id: 2,
        en: 'Slow-paced.',
        pl: 'Preferuje raczej spokojne zwiedzanie',
        selected: false,
      },
      {
        id: 3,
        en: 'Slow-paced.',
        pl: 'Nie lubie turystycznych atrakcji',
        selected: false,
      },
    ],
  });

  const handleSetTravelPace = (optionId: number) => {
    const travelPaceOptions = travelPace?.options;
    travelPaceOptions.map((element) => {
      element?.id === optionId
        ? (element.selected = true)
        : (element.selected = false);
    });

    // console.log(['travelExpensivenessCopy', travelExpensivenessOptions]);

    setTravelPace({
      ...travelPace,
      options: travelPaceOptions,
    });
  };

  const [travelActivities, setTravelActivities] = useState({
    title: {
      en: 'I really like ',
      pl: 'Wybierz interesujące Ciebie aktywności',
    },
    options: [
      {
        id: 1,
        en: 'watching popular attractions, ',
        pl: 'Popularne atrakcje',
        selected: true,
      },
      {
        id: 2,
        en: 'spend time in museums, ',
        pl: 'Muzea',
        selected: false,
      },
      {
        id: 3,
        en: 'eating nice food, ',
        pl: 'Jedzenie',
        selected: false,
      },
      {
        id: 4,
        en: 'watching art, ',
        pl: 'Sztuka',
        selected: false,
      },
      {
        id: 5,
        en: 'Partying hard, ',
        pl: 'Impreza',
        selected: false,
      },
      {
        id: 6,
        en: 'doing adrenaline boost activities, ',
        pl: 'Adrenalina',
        selected: false,
      },
      {
        id: 7,
        en: 'watching sport events, ',
        pl: 'Sport',
        selected: false,
      },
      {
        id: 8,
        en: 'spend time in nature, ',
        pl: 'Natura',
        selected: false,
      },
    ],
  });

  const handleSetTravelActivities = (optionId: number) => {
    const travelActivitiesOptions = travelActivities?.options;
    travelActivitiesOptions.map((element) => {
      element?.id === optionId && (element.selected = !element.selected);
    });

    // console.log(['travelExpensivenessCopy', travelExpensivenessOptions]);

    setTravelActivities({
      ...travelActivities,
      options: travelActivitiesOptions,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setShowSceleton(false);
    }, 1000);
  }, []);

  const handleGenerateTravel = () => {
    console.log(['handleGenerateTravel']);
  };

  const questionStyles = 'text-lg font-bold text-black-500';
  const optionContainerStyles =
    'border-1 border-gray-100 mr-2 rounded-md px-4 py-1';
  const optionContainerTextStyles = '';

  return (
    <section className='pt-2 pb-10'>
      {/* <h3 className='font-bold uppercase text-black-500'>
        Przygotuj dopasowany do Ciebie
      </h3> */}
      <h2 className='text-3xl font-bold leading-normal text-black-600 sm:mb-5 lg:text-3xl xl:text-4xl'>
        Plan podróży
      </h2>

      <div>
        <h4 className={questionStyles}>{travelExpensiveness?.title?.pl}</h4>
        <div>
          {travelExpensiveness?.options?.map((singleOption) => (
            <button
              key={singleOption?.id}
              className={`${optionContainerStyles} ${
                singleOption?.selected ? 'bg-green-500' : 'bg-gray-100'
              }`}
              onClick={() => handleSetTravelExpensiveness(singleOption?.id)}
            >
              <p
                className={`${optionContainerTextStyles} ${
                  singleOption?.selected ? 'text-white-500' : 'text-black-500'
                }`}
              >
                {singleOption?.pl}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className='mt-3'>
        <h4 className={questionStyles}>{travelPace?.title?.pl}</h4>
        <div>
          {travelPace?.options?.map((singleOption) => (
            <button
              key={singleOption?.id}
              className={`${optionContainerStyles} ${
                singleOption?.selected ? 'bg-green-500' : 'bg-gray-100'
              }`}
              onClick={() => handleSetTravelPace(singleOption?.id)}
            >
              <p
                className={`${optionContainerTextStyles} ${
                  singleOption?.selected ? 'text-white-500' : 'text-black-500'
                }`}
              >
                {singleOption?.pl}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className='mt-3'>
        <h4 className={questionStyles}>{travelActivities?.title?.pl}</h4>
        <div>
          {travelActivities?.options?.map((singleOption) => (
            <button
              key={singleOption?.id}
              className={`${optionContainerStyles} ${
                singleOption?.selected ? 'bg-green-500' : 'bg-gray-100'
              }`}
              onClick={() => handleSetTravelActivities(singleOption?.id)}
            >
              <p
                className={`${optionContainerTextStyles} ${
                  singleOption?.selected ? 'text-white-500' : 'text-black-500'
                }`}
              >
                {singleOption?.pl}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div onClick={handleGenerateTravel} className='mb-2 mt-5 sm:mb-0'>
        <ButtonPrimary>Wygeneruj plan</ButtonPrimary>
      </div>
    </section>
  );
};

export default TravelPlan;
