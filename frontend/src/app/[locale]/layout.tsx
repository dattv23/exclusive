import type { Metadata } from 'next';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { i18n, Locale } from '@/config';
import { Container, Footer, Header } from '@/components';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exclusive',
  description: 'A e-commerce website',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <AntdRegistry>
          <NextIntlClientProvider messages={messages}>
            <Container>{children}</Container>
          </NextIntlClientProvider>
        </AntdRegistry>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
