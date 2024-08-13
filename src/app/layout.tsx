// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Studio Create',
  description: 'Integrating Vision, Technology, and Sustainability',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-purple-lilac">
        {/* You can add a header or navigation component here if needed */}
        {children}
        {/* You can add a footer component here if needed */}
      </body>
    </html>
  );
}
