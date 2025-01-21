import React from 'react';

export interface UpdateProps<T, R = any> {
    url: string;
    data: T;
    id: string | number;


    onSuccess?: (response: R) => void;
    onError?: (error: any) => void;


}