import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harmanjeet Singh - Senior Cloud Architect',
  description: 'Portfolio of Harmanjeet Singh, Senior Cloud Architect with expertise in Google Cloud Platform and Microsoft Azure',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
