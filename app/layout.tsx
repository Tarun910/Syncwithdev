import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'SyncWithDev | Intern. Build. Grow.',
  description: 'Transform your potential into expertise through virtual internships, real client projects, and industry mentorship. Join thousands of students building their careers with SyncWithDev.',
  keywords: 'virtual internships, student careers, web development, app development, marketing internships, design internships, career growth',
  authors: [{ name: 'SyncWithDev' }],
  creator: 'SyncWithDev',
  openGraph: {
    title: 'SyncWithDev | Intern. Build. Grow.',
    description: 'Transform your potential into expertise through virtual internships, real client projects, and industry mentorship.',
    url: 'https://syncwithdev.com',
    siteName: 'SyncWithDev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyncWithDev | Intern. Build. Grow.',
    description: 'Transform your potential into expertise through virtual internships, real client projects, and industry mentorship.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3B82F6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}