'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { Pagination as MuiPagination } from '@mui/material';
import { Pagination as MantinePagination } from '@mantine/core';

export default function Pagination({ totalPages }: { totalPages: number }) {
  // NOTE: comment in this code when you get to this point in the course
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const { replace } = useRouter();

  const setPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const handlePagination = (value: number) => {
    setPageURL(value);
  }

  return (
    <MantinePagination radius='md' total={totalPages} onChange={(n) => handlePagination(n)} />
  );
}

