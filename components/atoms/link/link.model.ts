import React from 'react';

export interface LinkProps {
    className?: string;
    href: string;
    target?: string;
    rel?: string;
    children: React.ReactNode;
}
