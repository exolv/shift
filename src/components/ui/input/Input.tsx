import React from 'react';
import Caption from '../caption/Caption';

type InputPropsType = 'text' | 'email' | 'password';
interface InputProps {
  type: InputPropsType;
  name: string;
  placeholder?: string;
  label?: string;
  register?: any;
  errors?: any;
  validation?:any;
  required?: boolean;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  name,
  placeholder = '',
  label = undefined,
  register = undefined,
  errors = undefined,
  validation = undefined,
  required = false,
  className = ''
}) => {
  return (
    <div className={`text-left ${className}`}>
      { label ? <Caption color='dark-navy' weight='medium' className='block mb-2'>{label}</Caption> : null }
      <div className={`overflow-hidden rounded-xl h-[50px] border group ${errors && errors[name] ? 'border-bittersweet hover:border-bittersweet' : 'border-titan-white hover:border-regent-gray'}`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={`w-full h-full text-xs font-montserrat font-regular outline-none px-5 placeholder:opacity-85 group-hover:placeholder:opacity-100 ${errors && errors[name] ? 'placeholder:text-bittersweet group-hover:placeholder:text-bittersweet' : 'group-hover:placeholder:text-regent-gray'}`}
          {...register(name, validation)}
        />
      </div>
      { errors && errors[name]?.type === 'required' ? <Caption color='bittersweet'>{errors[name]?.message}</Caption> : null }
      { errors && errors[name]?.type === 'pattern' ? <Caption color='bittersweet'>{errors[name]?.message}</Caption> : null }
      { errors && errors[name]?.type === 'minLength' ? <Caption color='bittersweet'>{errors[name]?.message}</Caption> : null }
    </div>
  );
};

export default Input;