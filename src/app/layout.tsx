import ClientProviders from '@/components/common/ClientProviders';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Libertio',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster />
        <ClientProviders>{children}</ClientProviders>
        <Footer />
      </body>
    </html>
  );
}
