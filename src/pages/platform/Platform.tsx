import React from 'react';
import Sidebar from '@components/sidebar/Sidebar';
import Title from '@components/ui/title/Title';
import Caption from '@components/ui/caption/Caption';
import Text from '@components/ui/text/Text';
import Button from '@components/ui/button/Button';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';
import MultipleChoice from '@components/ui/multiple-choice/MultipleChoice';

const Platform: React.FC = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar />

      <div className='h-full w-full p-10'>
        <div className='flex'>
          <Title color='royal-blue' size='small'>Salvează progresul</Title>
        </div>
        <div className='mt-10 mx-auto w-1/2 flex flex-col items-center text-center'>
          <div className='flex items-center mb-10'>
            <Caption color='royal-blue' weight='medium'>7</Caption>
            <Caption weight='medium' className='mx-2'>|</Caption>
            <Caption weight='medium'>24</Caption>
          </div>
          <Title className='leading-relaxed'>Care dintre motivele de mai jos te-au îndemnat către a face reconversia profesională în domeniul IT?</Title>
          <Text className='my-10'>Selectează până la 3 motive.</Text>
          <div className='w-full flex justify-center'>
            <MultipleChoice options={[
              { value: 'option_1', label: 'Mi-ar place să lucrez în domeniul acesta', checked: false },
              { value: 'option_2', label: 'Mă înteresează partea financiară', checked: false },
              { value: 'option_3', label: 'Vreau să urmez o facultate de informatică', checked: false }
            ]} />
          </div>
          <div className='flex justify-around gap-x-10 w-full mt-20'>
            <Button color='none' leftArrow={<ArrowLongLeftIcon />}>Înapoi</Button>
            <Button color='royal-blue' rightArrow={<ArrowLongRightIcon />}>Înainte</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;