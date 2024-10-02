import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import '../styles/globals.scss';
import cn from 'classnames';
import styles from './layout.module.scss';
import { WithRedux } from '@/providers/WithRedux';

const inter = Archivo({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '8 Legends',
  description: '8 Legends AI mini-app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutClassName = cn(inter.className, styles.wrapper);

  return (
    <WithRedux>
      <html lang="en">
        <body className={layoutClassName} id="root">
          {children}
        </body>
      </html>
    </WithRedux>
  );
}
