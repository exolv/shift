import React from 'react';

interface ProgressProps {
  title: string;
  percentage: number;
  className?: string;
};

const Progress: React.FC<ProgressProps> = ({
  title,
  percentage,
  className = ''
}) => {
  return (
    <div className={`w-[200px] h-[200px] rounded-full border border-titan-white p-4 flex justify-center items-center ${className}`}>
      <div className='w-full h-full rounded-full border-4 border-titan-white p-4 flex justify-center items-center relative'>
        <div className='absolute w-full h-full rounded-full'></div>
        <div className='w-full h-full rounded-full bg-white shadow-progress flex flex-col justify-center items-center'>
          <span className='text-xxs font-montserrat font-regular text-regent-gray mb-2'>{title}</span>
          <h2 className='font-prompt text-2xl font-regular text-dark-navy'>{percentage}%</h2>
        </div>
      </div>
    </div>
  );
};

export default Progress;