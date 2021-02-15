import React from 'react';
import { ISpaceProps } from './types';
/**
 * SpaceGroup
 * @class SpaceGroup
 * @classdesc SpaceGroup
 */
declare class SpaceGroup extends React.Component<ISpaceProps, any> {
    static defaultProps: any;
    static propTypes: any;
    render(): JSX.Element;
}
/**
 * Space
 * @class Space
 * @classdesc Space
 */
declare class Space extends React.Component<ISpaceProps, any> {
    static defaultProps: any;
    static propTypes: any;
    static Group: typeof SpaceGroup;
    getStyle(): {
        display: string;
        height: string;
        margin: string;
        width?: undefined;
    } | {
        width: string;
        margin: string;
        display?: undefined;
        height?: undefined;
    };
    render(): React.ReactElement;
}
export default Space;
