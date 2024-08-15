import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';
import cn from 'classnames';
import styles from './layout.module.scss';
import { WithRedux } from '@/providers/WithRedux';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Template',
  description: 'Koreana App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutClassName = cn(inter.className, styles.wrapper);

  return (
    <WithRedux>
      <html lang="ru">
        <body className={layoutClassName}>
          <Header />
          <main className={styles.content}>{children}</main>
          <Footer />
        </body>
      </html>
    </WithRedux>
  );
}
