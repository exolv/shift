import React from 'react';

type TitlePropsSize = 'small' | 'regular' | 'lg';
const TitlePropsSizeMap = {
  'small': 'text-base',
  'regular': 'text-xl',
  'lg': 'text-2xl'
};

type TitlePropsColor = 'dark-navy' | 'royal-blue' | 'white';
const TitlePropsColorMap = {
  'dark-navy': 'text-dark-navy',
  'royal-blue': 'text-royal-blue',
  'white': 'text-white'
};

interface TitleProps {
  children: JSX.Element | string;
  size?: TitlePropsSize;
  color?: TitlePropsColor;
  className?: string;
};

const Title: React.FC<TitleProps> = ({
  children,
  size = 'regular',
  color = 'dark-navy',
  className = ''
}) => {
  return (
    <h1 className={`font-prompt ${TitlePropsColorMap[color]} ${TitlePropsSizeMap[size]} font-medium ${className}`}>{children}</h1>
  );
};

export default Title;