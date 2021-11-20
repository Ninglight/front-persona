import React from 'react';

export interface ColProps {
    size: ColSize;
    children: React.ReactNode;
    className: string;
}

export type ColSize = 1 | 2 | 3;
