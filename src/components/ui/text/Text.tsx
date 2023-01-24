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

type TextPropsWeight = 'regular' | 'medium';
const TextPropsWeightMap = {
  'regular': 'font-regular',
  'medium': 'font-medium'
};

interface TextProps {
  children: JSX.Element | string;
  size?: TextPropsSize;
  color?: TextPropsColor;
  weight?: TextPropsWeight;
  className?: string;
};

const Text: React.FC<TextProps> = ({
  children,
  size = 'regular',
  color = 'regent-gray',
  weight = 'regular',
  className = ''
}) => {
  return (
    <h1 className={`font-montserrat ${TextPropsColorMap[color]} ${TextPropsSizeMap[size]} ${TextPropsWeightMap[weight]} leading-relaxed ${className}`}>{children}</h1>
  );
};

export default Text;