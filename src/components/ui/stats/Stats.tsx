import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import Caption from '../caption/Caption';

interface StatsProps {
  icon: JSX.Element;
  title: string;
  value: string;
  className?: string;
};

const Stats: React.FC<StatsProps> = ({
  icon = <QuestionMarkCircleIcon />,
  title = '',
  value = '',
  className = ''
}) => {
  const _icon = React.cloneElement(icon, {
    className: `w-6 h-6 text-royal-blue`
  });

  return (
    <div className={`border border-titan-white rounded-xl p-4 ${className}`}>
      {_icon}
      <div className='flex justify-between items-center gap-x-2 mt-3'>
        <Caption>{title}</Caption>
        <h3 className='font-prompt text-lg font-regular text-dark-navy'>{value}</h3>
      </div>
    </div>
  );
};

export default Stats;