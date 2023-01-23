import React, { ChangeEvent, useState } from 'react';

interface RatingProps {
  name: string;
  lowest: number;
  highest: number;
  onChange?: (value: number) => void;
  className?: string;
};

const Rating: React.FC<RatingProps> = ({
  name,
  lowest,
  highest,
  onChange = undefined,
  className = ''
}) => {
  const [selected, setSelected] = useState<number>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value));

    if (onChange) {
      onChange(Number(e.target.value));
    }    
  };

  const range = (start: number, stop: number, step: number) => Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );

  return (
    <div className={`flex gap-x-6 w-full ${className}`}>
      { range(lowest, highest, 1).map((option, index) => (
        <div key={index} className={`relative w-16 h-16 flex items-center justify-center shadow-sidebar rounded-xl p-5 cursor-pointer ${selected === option ? 'bg-royal-blue' : 'bg-white'}`}>
          <input
            type='radio'
            id={`${name}-${index}`}
            name={name}
            value={option}
            onChange={handleChange}
            className='appearance-none cursor-pointer absolute w-full h-full top-0 left-0 right-0 bottom-0'
          />
          <label htmlFor={`${name}-${index}`} className={`font-montserrat text-sm ${selected === option ? 'text-white' : 'text-dark-navy'} font-medium`}>{option}</label>
        </div>
      )) }
    </div>
  );
};

export default Rating;