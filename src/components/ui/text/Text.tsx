import React from 'react';

type TextPropsSize = 'regular';
const TextPropsSizeMap = {
  'regular': 'text-sm'
};

type TextPropsColor = 'dark-navy' | 'regent-gray';
const TextPropsColorMap = {
  'dark-navy': 'text-dark-navy',
  'regent-gray': 'text-regent-gray'
};

interface TextProps {
  children: JSX.Element | string;
  size?: TextPropsSize;
  color?: TextPropsColor;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  size = 'regular',
  color = 'regent-gray',
  className = ''
}) => {
  return (
    <h1 className={`font-montserrat ${TextPropsColorMap[color]} ${TextPropsSizeMap[size]} font-regular ${className}`}>{children}</h1>
  );
};

export default Text;