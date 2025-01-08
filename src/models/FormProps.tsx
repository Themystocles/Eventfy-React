import React from 'react';

export interface FormProps<T, R = any> {
    url: string;
    data: T;
    renderResponse?: (response: any) => React.ReactNode;
    onSuccess?: (response: R) => void;
    onError?: (error: any) => void;


}