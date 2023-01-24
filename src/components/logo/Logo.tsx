import React from 'react';
import shiftLogo from '../../assets/shift-logo.svg';

interface LogoProps {
  className?: string;
};

const Logo: React.FC<LogoProps> = ({
  className = ''
}) => {
  return (
    <div className={`w-[64px] ${className}`}>
      <img src={shiftLogo} alt='shift' />
    </div>
  );
};

export default Logo;