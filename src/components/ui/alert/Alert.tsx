import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import Caption from '../caption/Caption';
import Text from '../text/Text';

type AlertPropsType = 'success' | 'error' | 'warning' | 'info';
const AlertPropsTypeMap = {
  'success': {
    'bg': 'bg-jellyfish',
    'icon': <CheckCircleIcon className='w-6 h-6 text-white' />
  },
  'error': {
    'bg': 'bg-bittersweet',
    'icon': <XCircleIcon className='w-6 h-6 text-white' />
  },
  'warning': {
    'bg': 'bg-sunglow',
    'icon': <ExclamationCircleIcon className='w-6 h-6 text-white' />
  },
  'info': {
    'bg': 'bg-royal-blue',
    'icon': <InformationCircleIcon className='w-6 h-6 text-white' />
  }
};

export interface AlertProps {
  type: AlertPropsType;
  title: string;
  text: string;
  className?: string;
};

const Alert: React.FC<AlertProps> = ({
  type,
  title,
  text,
  className = ''
}) => {
  return (
    <div className={`w-full border border-titan-white rounded-xl p-2 ${className}`}>
      <div className='flex justify-start items-center gap-x-4'>
        <div className={`rounded-xl w-12 h-12 flex flex-shrink-0 justify-center items-center ${AlertPropsTypeMap[type].bg}`}>
          <div className='rounded-lg w-9 h-9 flex justify-center items-center border border-white border-opacity-60'>
            {AlertPropsTypeMap[type].icon}
          </div>
        </div>
        <div className='text-left'>
          <Text weight='medium' color='dark-navy'>{title}</Text>
          <Caption className='block'>{text}</Caption>
        </div>
      </div>
    </div>
  );
};

export default Alert;