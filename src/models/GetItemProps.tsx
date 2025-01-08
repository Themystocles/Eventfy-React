import React from 'react';

export interface GetItemProps<T> {
    url: string;
    id: string | number;
    renderItem: (item: T) => React.ReactNode;
    title: string
}