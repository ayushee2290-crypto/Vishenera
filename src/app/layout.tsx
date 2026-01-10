import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatBot from '@/components/ui/ChatBot';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Vishenera Technologies | Cloud, AI & Digital Transformation',
  description: 'Premium CloudOps, DBOps, AppOps, AI Automation & Digital Transformation—built for scale, security, and performance.',
  keywords: ['CloudOps', 'DevOps', 'Digital Transformation', 'AI Automation', 'DBOps', 'AppOps', 'Cloud Solutions'],
  authors: [{ name: 'Vishenera Technologies' }],
  openGraph: {
    title: 'Vishenera Technologies | Cloud, AI & Digital Transformation',
    description: 'Premium CloudOps, DBOps, AppOps, AI Automation & Digital Transformation—built for scale, security, and performance.',
    type: 'website',
    siteName: 'Vishenera Technologies',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
