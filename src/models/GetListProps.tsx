import React from 'react';

export interface GetListProps<T> {
    url: string;
    renderItem: (item: T) => React.ReactNode;
    title: string

}