import SingleAccomodation from './SingleAccomodation';

interface AccomodationProps {
  directionTo?: string;
  dateFrom?: string;
  dateTo?: string;
  peopleCount?: number;
}

const Accomodation = ({
  directionTo,
  dateFrom,
  dateTo,
  peopleCount,
}: AccomodationProps) => {
  return (
    <section className='pt-2 pb-10'>
      <h2 className='text-3xl font-bold leading-normal text-black-600 sm:mb-5 lg:text-3xl xl:text-4xl'>
        Nocleg
      </h2>

      <SingleAccomodation
        logo='/assets/booking.png'
        url={`https://www.booking.com/searchresults.pl.html?ss=${directionTo}&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=pl&ac_suggestion_list_length=5&search_selected=true&checkin=${dateFrom}&checkout=${dateTo}&group_adults=${peopleCount}&no_rooms=1&group_children=0&sb_travel_purpose=leisure&order=popularity`}
        date={`${dateFrom} - ${dateTo}`}
        directionTo={directionTo}
      />
      <SingleAccomodation
        logo='/assets/airbnb.jpeg'
        url={`https://www.airbnb.pl/s/${directionTo}/homes?tab_id=home_tab&price_filter_input_type=0&query=${directionTo}&date_picker_type=calendar&checkin=${dateFrom}&checkout=${dateTo}&adults=${peopleCount}`}
        date={`${dateFrom} - ${dateTo}`}
        directionTo={directionTo}
      />
    </section>
  );
};

export default Accomodation;
