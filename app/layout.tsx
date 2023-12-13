import '@/app/ui/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mantine/core/styles.css';
import { Providers } from './providers';
import { roboto } from './ui/fonts';
import { ColorSchemeScript } from '@mantine/core';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
