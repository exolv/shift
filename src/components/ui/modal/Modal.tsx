import React, { MouseEvent, useEffect, useState } from 'react';
import Title from '../title/Title';
import Text from '../text/Text';
import modal from './modal.svg';

interface ModalProps {
  title: string;
  text: string;
  buttons?: JSX.Element[];
  toggled: boolean;
  onChange?: (toggled: boolean) => void;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  title,
  text,
  buttons = [],
  toggled,
  onChange = undefined,
  className = ''
}) => {
  const [_toggled, setToggled] = useState(toggled);

  useEffect(() => {
    setToggled(toggled);
  }, [toggled]);

  const _toggle = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget !== e.target) {
      return;
    }
    setToggled(!_toggled);

    if (onChange) { 
      onChange(!_toggled);
    }
  };

  return (
    <div className={`fixed w-full h-full top-0 right-0 button-0 left-0 flex justify-center items-center bg-slate-900/50 z-50 ${_toggled ? 'block' : 'hidden'}`} onClick={(e) => _toggle(e)}>
      <div className={`font-montserrat bg-white rounded-2xl w-1/4 p-2 flex flex-col justify-center text-center ${className}`}>
        <div className='w-full h-48 bg-titan-white rounded-t-xl flex justify-center items-center'>
          <img src={modal} className='w-44 h-44' alt='' />
        </div>
        <div className='mt-10 px-10'>
          <Title>{title}</Title>
          <Text className='mt-5 mb-10'>{text}</Text>
          <div className='flex justify-center gap-4 mb-10'>
            { buttons.map((button, index) => <div key={index}>{button}</div>) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;