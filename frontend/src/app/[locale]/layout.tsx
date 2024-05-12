import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer, Header } from '@/components';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { i18n } from '@/config';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'A e-commerce website',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <AntdRegistry>
          <Header />
          {children}
          <Footer />
        </AntdRegistry>
      </body>
    </html>
  );
}
