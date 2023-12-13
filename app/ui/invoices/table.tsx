'use client';

import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { invoices } from '@/app/lib/placeholder-data';
import type { InvoicesTable } from '@/app/lib/definitions';
import { Avatar, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function InvoicesTable({
  invoices
}: {
  invoices: InvoicesTable[];
}) {
  // const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <>
      <Table>
        <TableHead aria-label='Example'>
          <TableRow>
          <TableCell>Customer</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices?.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`} />
                  <p>{invoice.name}</p>
                </div>
              </TableCell>
              <TableCell>
                <p
                  className={`truncate text-sm font-medium md:text-base`}
                >
                  {formatCurrency(invoice.amount)}
                </p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-gray-500">
                  {formatDateToLocal(invoice.date)}
                </p>
              </TableCell>
              <TableCell>
                <InvoiceStatus status={invoice.status} />
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-3">
                  <UpdateInvoice id={invoice.id} />
                  <DeleteInvoice id={invoice.id} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
    /*<div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Avatar
                        src={invoice.image_url}
                        className="mr-2 rounded-full w-28 h-28"
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>*/
  );
}
