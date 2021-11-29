import React from 'react';

export interface ColProps {
    size?: ColSize;
    offset?: ColSize;
    children: React.ReactNode;
    className?: string;
}

export type ColSize = 0 | 1 | 2 | 3;
