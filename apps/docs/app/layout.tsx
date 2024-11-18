import type { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Boo-Design',
  description:
    'Boo-Design Docs provided by GDG on Campus HUFS. Explore detailed guidelines and components for creating consistent and user-friendly designs.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
