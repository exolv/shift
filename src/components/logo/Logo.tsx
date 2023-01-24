import React from 'react';
import shiftLogo from '../../assets/shift-logo.svg';

type LogoPropsSize = 'regular' | 'lg';

interface LogoProps {
  size?: LogoPropsSize;
  className?: string;
};

const LogoPropsSizeMap = {
  'regular': 'w-[64px]',
  'lg': 'w-[128px]'
};

const Logo: React.FC<LogoProps> = ({
  size = 'regular',
  className = ''
}) => {
  return (
    <div className={`${LogoPropsSizeMap[size]} ${className}`}>
      <img src={shiftLogo} alt='shift' />
    </div>
  );
};

export default Logo;