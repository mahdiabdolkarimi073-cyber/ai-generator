import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://aria.app'),
  title: 'آریا | پلتفرم نوین',
  description:
    'پلتفرم نوین برای ساخت و مدیریت اپلیکیشن‌های وب — سریع، زیبا و قابل اعتماد.',
  openGraph: {
    title: 'آریا | پلتفرم نوین',
    description:
      'پلتفرم نوین برای ساخت و مدیریت اپلیکیشن‌های وب — سریع، زیبا و قابل اعتماد.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
