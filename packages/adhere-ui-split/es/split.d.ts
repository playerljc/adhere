import React from 'react';
import { ISplitProps } from './types';
/**
 * SplitGroup
 * @class SplitGroup
 * @classdesc SplitGroup
 */
declare class SplitGroup extends React.Component<ISplitProps, any> {
    static defaultProps: any;
    static propTypes: any;
    render(): JSX.Element;
}
/**
 * Split
 * @class Split
 * @classdesc Split
 */
declare class Split extends React.Component<ISplitProps, any> {
    static defaultProps: any;
    static propTypes: any;
    static Group: typeof SplitGroup;
    getStyle(): {
        display: string;
        width: number;
        height: string;
        margin: string;
    } | {
        width: string;
        height: number;
        margin: string;
        display?: undefined;
    };
    render(): React.ReactElement;
}
export default Split;
