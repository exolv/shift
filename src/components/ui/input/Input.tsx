import React from 'react';
import Caption from '../caption/Caption';

type InputPropsType = 'text' | 'email' | 'password';
interface InputProps {
  type: InputPropsType;
  name: string;
  placeholder?: string;
  label?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder = '',
  label = undefined,
  className = ''
}) => {
  return (
    <div className={`text-left ${className}`}>
      { label ? <Caption color='dark-navy' weight='medium' className='block mb-2'>{label}</Caption> : null }
      <div className={`overflow-hidden rounded-xl h-[50px] border border-titan-white hover:border-regent-gray group`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full h-full text-xs font-montserrat font-regular outline-none px-5 placeholder:opacity-85 group-hover:placeholder:text-regent-gray group-hover:placeholder:opacity-100`}
        />
      </div>
    </div>
  );
};

export default Input;