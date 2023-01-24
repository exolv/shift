import React from 'react';
import Logo from '@components/logo/Logo';
import Text from '@components/ui/text/Text';
import Title from '@components/ui/title/Title';
import Button from '@components/ui/button/Button';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Caption from '@components/ui/caption/Caption';
import Input from '@components/ui/input/Input';

const Login: React.FC = () => {
  return (
    <div className='flex h-screen'>
      <div className='h-full w-1/4 flex flex-col justify-between items-center bg-white p-20'>
        <Link to='/'>
          <Logo size='lg' />
        </Link>
        <div className='w-full text-center'>
          <Title size='lg' className='mb-5'>Autentifică-te în Shift</Title>
          <Text>Introdu email-ul și parola ta pentru a te autentifica.</Text>
        </div>
        <div className='w-full text-center flex flex-col gap-y-10'>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            label='Adresa de email'
          />
          <Input
            type='password'
            name='password'
            placeholder='Parolă'
            label='Parola'
          />
          <Link to='/forgot'>
            <Caption color='royal-blue' weight='medium'>Ți-ai uitat parola?</Caption>
          </Link>
        </div>
        <div className='w-full text-center'>
          <Button type='submit' color='royal-blue' rightArrow={<ArrowLongRightIcon />} className='w-full'>Continuă</Button>
          <div className='mt-5'>
            <Caption>Nu ai un cont? </Caption>
            <Link to='/signup'>
              <Caption color='dark-navy' weight='medium'>Înregistrează-te</Caption>
            </Link>
          </div>
        </div>
      </div>
      <div className='h-full w-3/4 bg-login bg-cover bg-center relative'>
        <div className='absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-dark-navy to-transparent flex items-end'>
          <div className='p-20 flex flex-col justify-between gap-y-10'>
            <div className='w-[100px] h-[2px] bg-white'></div>
            <div>
              <Title color='white' size='lg' className='mb-2'>Nu arunca banii pe cursuri.</Title>
              <Title color='white' size='lg'>Reconversia spre IT începe când ești pregătit.</Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;