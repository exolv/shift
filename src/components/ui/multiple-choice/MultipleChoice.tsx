import React, { ChangeEvent, useState } from 'react';

type MultipleChoicePropsOption = {
  value: string;
  label: string;
  checked: boolean;
};
interface MultipleChoiceProps {
  options: MultipleChoicePropsOption[];
  onChange?: (options: MultipleChoicePropsOption[]) => void;
  className?: string;
};

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  options,
  onChange = undefined,
  className = ''
}) => {
  const [_options, setOptions] = useState<MultipleChoicePropsOption[]>(options);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {    
    const __options = _options.map(option => {
      if (option.value === e.target.id) {
        return {
          ...option,
          checked: !option.checked
        };
      } else {
        return option;
      }
    });
    setOptions(__options);    

    if (onChange) {
      onChange(__options);
    }    
  };

  return (
    <div className={`flex flex-col gap-y-6 w-full ${className}`}>
      { _options.map((option, index) => (
        <div key={index} className={`relative flex items-center gap-x-6 shadow-sidebar rounded-xl p-5 w-full text-left cursor-pointer border ${option.checked ? 'border-royal-blue bg-royal-blue/10' : 'border-white bg-white'}`}>
          <input
            type='checkbox'
            id={option.value}
            name={option.value}
            onChange={handleChange}
            className='appearance-none cursor-pointer absolute w-full h-full top-0 left-0 right-0 bottom-0'
          />
          <div className={`w-8 h-8 rounded-lg border ${option.checked ? 'bg-royal-blue border-royal-blue bg-checked bg-[length:24px_24px] bg-no-repeat bg-center' : 'bg-white border-patient-gray'}`}></div>
          <label htmlFor={option.value} className='font-montserrat text-sm text-dark-navy font-medium'>{option.label}</label>
        </div>
      )) }
    </div>
  );
};

export default MultipleChoice;