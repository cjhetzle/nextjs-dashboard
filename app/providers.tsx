// app/providers.tsx
'use client'

import { ThemeProvider, useTheme } from '@mui/material/styles'

export function Providers({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}