import React from 'react';

import Logo from '@components/logo/Logo';
import Title from '@components/ui/title/Title';
import Caption from '@components/ui/caption/Caption';
import Progress from '@components/ui/progress/Progress';
import Stats from '@components/ui/stats/Stats';
import { ArrowRightOnRectangleIcon, CheckCircleIcon, ClockIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useUser } from '@hooks/useUser';
import Button from '@components/ui/button/Button';
import supabase from '@services/supabase';

const Sidebar: React.FC = () => {
  const user = useUser({ redirect: '/login' });

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };
  
  return (
    <div className='bg-white p-10 w-1/4 h-full flex flex-col justify-between shadow-sidebar'>
      <div className='flex justify-between items-center'>
        <Logo />
        <Button type='button' color='none' className='px-0 py-0 w-[36px] h-[36px] !justify-center' onClick={signOut}>
          <ArrowRightOnRectangleIcon className='w-5 h-5 text-dark-navy leading-none' />
        </Button>
      </div>
      <div className='mt-8'>
        <Caption className='block'>Titlu:</Caption>
        <Title className='mt-2'>Verifică capabilitatea personală pentru o reconversie în domeniul IT</Title>
        <div className='mt-8'>
          <Caption className='mr-3'>Înregistrat ca:</Caption>
          <Caption color='dark-navy' weight='medium'>{user?.email}</Caption>
        </div>
      </div>
      <div className='flex justify-center my-8'>
        <Progress title='Progres' percentage={56} />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <Stats icon={<QuestionMarkCircleIcon />} title='Întrebări' value='24' className='w-full' />
        <Stats icon={<CheckCircleIcon />} title='Răspunsuri' value='6' className='w-full' />
        <Stats icon={<ClockIcon />} title='Timp de completare' value='15 min' className='col-span-2 w-full' />
      </div>
      <div className='mt-8 text-center'>
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