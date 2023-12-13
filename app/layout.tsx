import '@/app/ui/global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Providers } from './providers';
import { roboto } from './ui/fonts';
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='dark'>
      <body className={`${roboto.className} antialiased`}>
        <Providers>
          <SessionProvider>
            {children}
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
