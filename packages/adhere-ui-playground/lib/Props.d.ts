import React from 'react';
import { IPropsProps } from './types';
/**
 * Props
 * @class Props
 * @classdesc Props
 */
declare class Props extends React.Component<IPropsProps, any> {
    protected getColumns(): ({
        title: string;
        key: string;
        dataIndex: string;
        width: string;
        align: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        dataIndex: string;
        width: string;
        align?: undefined;
        render?: undefined;
    } | {
        title: string;
        key: string;
        dataIndex: string;
        width: string;
        render: (value: any) => JSX.Element;
        align?: undefined;
    })[];
    protected render(): JSX.Element;
}
export default Props;
