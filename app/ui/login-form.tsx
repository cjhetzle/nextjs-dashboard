'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '../lib/actions';
import { Button, Input } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="email" id="email" name="email" placeholder="john@doe.com" required />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="password" id="password" name="password" placeholder="************" required />
            </div>
          </div>
        </div>
        <Button className="mt-4 w-full" endIcon={<NavigateNextIcon />} type='submit'>
          Login
        </Button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <ErrorOutlineIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form >
  );
}

function LoginButton() {

  return (
    <Button className="mt-4 w-full" endIcon={<NavigateNextIcon />}>
      Login
    </Button>
  );
}
