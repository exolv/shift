import React from 'react';

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
  children: JSX.Element | string;
  color?: ButtonPropsColor;
  rightArrow?: JSX.Element;
  leftArrow?: JSX.Element;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'royal-blue',
  rightArrow = <></>,
  leftArrow = <></>,
  disabled = false,
  className = ''
}) => {
  let _rightArrow, _leftArrow;
  if (rightArrow) {
    _rightArrow = React.cloneElement(rightArrow, {
      className: `w-6 h-6 ${ButtonIconPropsColorMap[color]}`
    });
  }
  if (leftArrow) {
    _leftArrow = React.cloneElement(leftArrow, {
      className: `w-6 h-6 ${ButtonIconPropsColorMap[color]}`
    });
  }

  return (
    <button className={`flex flex-row items-center justify-center gap-x-10 text-xs px-5 py-3 rounded-xl ${ButtonPropsColorMap[color]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`} disabled={disabled}>
      {_leftArrow}
      <span className='font-montserrat font-semibold'>{children}</span>
      {_rightArrow}
    </button>
  );
};

export default Button;