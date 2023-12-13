// app/providers.tsx
'use client'

// import { ThemeProvider, useTheme } from '@mui/material/styles'
import { SessionProvider } from 'next-auth/react';
import { MantineProvider, createTheme } from '@mantine/core';

export function Providers({ children }: { children: React.ReactNode }) {
  // const theme = useTheme();
  return (
    //<ThemeProvider theme={theme}>
      <MantineProvider theme={createTheme({ })}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </MantineProvider>
    //</ThemeProvider>
  )
}