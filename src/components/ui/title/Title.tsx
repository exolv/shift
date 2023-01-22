import React from 'react';

interface TitleProps {
  children: JSX.Element | string;
  className?: string;
};

const Title: React.FC<TitleProps> = ({
  children,
  className = ''
}) => {
  return (
    <h1 className={`font-prompt text-dark-navy text-xl font-medium ${className}`}>{children}</h1>
  );
};

export default Title;