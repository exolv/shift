import React from 'react';
import shiftLogo from '../../assets/shift-logo.svg';

import Title from '@components/ui/title/Title';
import Caption from '@components/ui/caption/Caption';
import Progress from '@components/ui/progress/Progress';
import Stats from '@components/ui/stats/Stats';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

const Sidebar: React.FC = () => {
  return (
    <div className='bg-white p-10 w-1/5 h-full flex flex-col justify-between shadow-sidebar'>
      <div className='w-[100px]'>
        <img src={shiftLogo} alt='shift' />
      </div>
      <div className='mt-10'>
        <Caption className='block'>Titlu:</Caption>
        <Title className='mt-2'>Verifică capabilitatea personală pentru o reconversie în domeniul IT</Title>
        <div className='mt-10'>
          <Caption className='mr-3'>Înregistrat ca:</Caption>
          <Caption color='dark-navy' weight='medium'>georgebaba99@yahoo.com</Caption>
        </div>
      </div>
      <div className='flex justify-center my-10'>
        <Progress title='Progres' percentage={56} />
      </div>
      <div className='flex justify-between gap-x-4'>
        <Stats icon={<QuestionMarkCircleIcon />} title='Întrebări' value='24' className='w-full' />
        <Stats icon={<QuestionMarkCircleIcon />} title='Răspunsuri' value='6' className='w-full' />
      </div>
      <div className='mt-10 text-center'>
        <Caption className='block'>Toate datele sunt colectate și stocate într-un mod securizat.</Caption>
        <div className='mt-2'>
          <Caption>Dezvoltat de </Caption>
          <a href='https://xsuve.com/' target='_blank'>
            <Caption color='dark-navy' weight='medium'>xsuve.com</Caption>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;