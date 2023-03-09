import { useRouter } from 'next/router';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const Share = () => {
  const router = useRouter();

  const url = `https://ostatnibilet.pl${router.asPath}`;

  return (
    <div className='mx-auto mb-10 max-w-[600px] rounded-2xl bg-white-300 pt-8 pb-10'>
      <h3 className='text-1xl lg:text-1xl pb-2 text-center font-bold leading-normal text-black-500 sm:mb-3 sm:pb-0 xl:text-2xl'>
        Udostępnij
      </h3>

      <div className='flex justify-center'>
        <FacebookMessengerShareButton
          appId={
            process?.env?.NEXT_PUBLIC_FB_APP_ID
              ? process?.env?.NEXT_PUBLIC_FB_APP_ID
              : ''
          }
          url={url}
          className='mr-2'
        >
          <FacebookMessengerIcon size={35} round />
        </FacebookMessengerShareButton>

        <WhatsappShareButton url={url} className='mr-2'>
          <WhatsappIcon size={35} round />
        </WhatsappShareButton>

        <FacebookShareButton url={url}>
          <FacebookIcon size={35} round />
        </FacebookShareButton>
      </div>
    </div>
  );
};

export default Share;
