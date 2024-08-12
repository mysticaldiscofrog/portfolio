// src/components/Layout.tsx

import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="container mx-auto p-4">
            {children}
        </div>
    );
}
