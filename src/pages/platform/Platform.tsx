import React, { useState } from 'react';
import Sidebar from '@components/sidebar/Sidebar';
import Title from '@components/ui/title/Title';
import Caption from '@components/ui/caption/Caption';
import Text from '@components/ui/text/Text';
import Button from '@components/ui/button/Button';
import Modal from '@components/ui/modal/Modal';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline';

import MultipleChoice from '@components/survey/multiple-choice/MultipleChoice';
import Rating from '@components/survey/rating/Rating';

const Platform: React.FC = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <div className='flex h-screen'>
      <Modal
        title='Rezultatul tău final contează.'
        text='Un rezultat pozitiv al chestionarului îți va oferi atât o viziune clară asupra capabilității tale pentru reconversie, cât și oportunitatea de a învăța în platforma educatională Shift.'
        buttons={[
          <Button type='button' color='royal-blue' onClick={() => setToggled(false)}>Să începem!</Button>
        ]}
        toggled={toggled}
      />

      <Sidebar />

      <div className='h-full w-full flex flex-col justify-between'>
        <div className='flex p-10'>
          <Title color='royal-blue' size='small'>Salvează progresul</Title>
        </div>
        <div className='p-10 mx-auto w-2/3 flex flex-col items-center text-center'>
          <div className='flex items-center mb-10'>
            <Caption color='royal-blue' weight='medium'>7</Caption>
            <Caption weight='medium' className='mx-2'>|</Caption>
            <Caption weight='medium'>24</Caption>
          </div>
          <Title className='leading-relaxed'>Care dintre motivele de mai jos te-au îndemnat către a face reconversia profesională în domeniul IT?</Title>
          <Text className='my-10'>Selectează până la 3 motive.</Text>
          <div className='w-full flex justify-center'>
            {/* <MultipleChoice name='' options={[
              { value: 'option_1', label: 'Mi-ar place să lucrez în domeniul acesta', checked: false },
              { value: 'option_2', label: 'Mă înteresează partea financiară', checked: false },
              { value: 'option_3', label: 'Vreau să urmez o facultate de informatică', checked: false }
            ]} /> */}
            <Rating name='rating' lowest={1} highest={10} />
          </div>
        </div>
        <div className='flex justify-around gap-x-10 w-full p-10 bg-[#e7e8ed]'>
          <Button type='button' color='none' leftArrow={<ArrowLongLeftIcon />}>Înapoi</Button>
          <Button type='button' color='royal-blue' rightArrow={<ArrowLongRightIcon />}>Înainte</Button>
        </div>
      </div>
    </div>
  );
};

export default Platform;