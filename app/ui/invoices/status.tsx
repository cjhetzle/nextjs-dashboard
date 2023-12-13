

import { NotificationIcon } from './Notification';
import { CheckIcon } from './CheckIcon';
import clsx from 'clsx';
import { Chip } from '@mantine/core';
// import { Chip } from '@mui/material';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <Chip
      className='capitalize'
      color={status === 'paid' ? "teal" : "pink"} icon={status === 'paid' ? <CheckIcon size={18} height={undefined} width={undefined} /> : <NotificationIcon size={18} height={undefined} width={undefined} />}
      checked={true} variant='light'
    >{status}</Chip>


  );
}

export function StatusRadio({ label }: { label: string }) {
  return (
    <Chip
      className='capitalize'
      color={label === 'paid' ? "teal" : "pink"} icon={label === 'paid' ? <CheckIcon size={18} height={undefined} width={undefined} /> : <NotificationIcon size={18} height={undefined} width={undefined} />} id={label}
      name="status"
      type="radio"
      value={label} variant='light'
    >{label}</Chip>


  );
}
