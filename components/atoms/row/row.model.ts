import React from 'react';

export interface RowProps {
    className?: string;
    children: React.ReactNode;
    id?: string;
    reverse?: boolean;
    verticalAlignement?: RowAlignment;
}

export enum RowAlignment {
    START = 'start',
    CENTER = 'center',
    END = 'end'
}
