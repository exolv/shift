import React, { BaseSyntheticEvent, useState } from 'react';
import Logo from '@components/logo/Logo';
import Text from '@components/ui/text/Text';
import Title from '@components/ui/title/Title';
import Button from '@components/ui/button/Button';
import Caption from '@components/ui/caption/Caption';
import Input from '@components/ui/input/Input';
import { Link } from 'react-router-dom';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import supabase from '@services/supabase';
import Alert, { AlertProps } from '@components/ui/alert/Alert';
import { useUser } from '@hooks/useUser';

type SignupData = {
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const user = useUser({ redirect: '/platform', foundRedirect: true });
  
  const [loading, setLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<SignupData>({ mode: 'onChange' });

  const submitSignup = async (signupData: SignupData, e: BaseSyntheticEvent | undefined) => {
    e?.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: signupData.email,
      password: signupData.password,
      // options: {
      //   data: {
      //     fullName: null
      //   }
      // }
    });

    if (error) {
      setLoading(false);
      setAlert({
        type: 'error',
        title: 'A apărut o eroare la înregistrare.',
        text: error.message
      });
      return;
    }

    setLoading(false);
    setAlert({
      type: 'success',
      title: 'Te-ai înregistrat cu succes!',
      text: 'Am trimis un link de confirmare pe adresa de email.'
    });
    reset();
  };

  return (
    <div className='flex h-screen'>
      <div className='h-full w-1/4 flex flex-col justify-between items-center bg-white p-20'>
        <Link to='/'>
          <Logo size='lg' />
        </Link>
        <div className='w-full text-center'>
          <Title size='lg' className='mb-5'>Înregistrează-te în Shift</Title>
          <Text>Introdu email-ul și parola ta pentru a te înregistra.</Text>
        </div>
        <form className='w-full flex flex-col gap-y-20' onSubmit={handleSubmit(submitSignup)} autoComplete='off' noValidate>
          <div className='w-full text-center flex flex-col gap-y-10'>
            <Input
              type='email'
              name='email'
              placeholder='Email'
              label='Adresa de email'
              errors={errors}
              register={register}
              validation={{
                required: 'Acest câmp trebuie completat.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Introdu o adresă de email validă.'
                }
              }}
              required
            />
            <Input
              type='password'
              name='password'
              placeholder='Parolă'
              label='Parola'
              errors={errors}
              register={register}
              validation={{
                required: 'Acest câmp trebuie completat.',
                minLength: {
                  value: 8,
                  message: 'Parola trebuie să aibă cel puțin 8 caractere.'
                }
              }}
              required
            />
            <>
              { alert && !loading ? <Alert {...alert} /> : null }
            </>
          </div>
          <div className='w-full text-center'>
            <Button type='submit' color='royal-blue' rightArrow={<ArrowLongRightIcon />} className='w-full' loading={loading} disabled={!isValid || loading}>Continuă</Button>
            <div className='mt-5'>
              <Caption>Ai deja un cont? </Caption>
              <Link to='/login'>
                <Caption color='dark-navy' weight='medium'>Autentifică-te</Caption>
              </Link>
            </div>
          </div>
        </form>
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

export default Signup;