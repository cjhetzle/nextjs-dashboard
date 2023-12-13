import { deleteInvoice } from '@/app/lib/actions';
import { ActionIcon, Button } from '@mantine/core';
// import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function CreateInvoice() {
  return (
    <Button radius='md'>
      <a href="/dashboard/invoices/create">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>

      </a>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <a
      href={`/dashboard/invoices/${id}/edit`}
    ><ActionIcon className="border p-2" radius='md'>
        <EditIcon className='w-5' />
      </ActionIcon>
    </a>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <>
      <ActionIcon className="rounded-xl border p-2" radius='md' onClick={() => { deleteInvoice(id) }}>
        <DeleteIcon className="w-5" />
      </ActionIcon>
    </>
  );
}
