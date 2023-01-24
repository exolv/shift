import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

type ButtonPropsType = 'submit' | 'button';

type ButtonPropsColor = 'none' | 'royal-blue';
const ButtonPropsColorMap = {
  'none': 'border border-patient-gray bg-transparent text-dark-navy',
  'royal-blue': 'border border-royal-blue bg-royal-blue text-white'
};

const ButtonIconPropsColorMap = {
  'none': 'text-dark-navy',
  'royal-blue': 'text-white'
};

interface ButtonProps {
  type: ButtonPropsType;
  children: JSX.Element | string;
  color?: ButtonPropsColor;
  rightArrow?: JSX.Element;
  leftArrow?: JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  color = 'royal-blue',
  rightArrow = <></>,
  leftArrow = <></>,
  disabled = false,
  loading = false,
  onClick = undefined,
  className = ''
}) => {
  let _rightArrow, _leftArrow;
  if (rightArrow) {
    _rightArrow = React.cloneElement(rightArrow, {
      className: `w-6 h-6 ${ButtonIconPropsColorMap[color]} leading-none`
    });
  }
  if (leftArrow) {
    _leftArrow = React.cloneElement(leftArrow, {
      className: `w-6 h-6 ${ButtonIconPropsColorMap[color]} leading-none`
    });
  }

  return (
    <button
      type={type}
      className={`flex flex-row items-center justify-between gap-x-10 text-xs px-5 py-3 h-[50px] rounded-xl ${ButtonPropsColorMap[color]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {_leftArrow}
      <span className='font-montserrat font-semibold'>{children}</span>
      { !loading && _rightArrow }
      { loading && <ArrowPathIcon className={`w-6 h-6 ${ButtonIconPropsColorMap[color]} leading-none animate-spin`} /> }
    </button>
  );
};

export default Button;