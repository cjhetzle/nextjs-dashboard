

import { NotificationIcon } from './Notification';
import { CheckIcon } from './CheckIcon';
import clsx from 'clsx';
import { Chip } from '@mui/material';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <Chip
      className='capitalize'
      label={status} deleteIcon={status === 'paid' ? <CheckIcon size={18} height={undefined} width={undefined} /> : <NotificationIcon size={18} height={undefined} width={undefined} />}
    />
  );
}
