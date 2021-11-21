import React from 'react';

export interface TitleProps {
    className?: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}
