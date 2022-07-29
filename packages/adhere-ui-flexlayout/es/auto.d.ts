import React from 'react';
import { IAutoProps } from './types';
/**
 * Auto
 * @class Auto
 * @classdesc Fixed
 */
declare class Auto extends React.Component<IAutoProps, any> {
    private direction;
    private ref;
    static defaultProps: any;
    static propTypes: any;
    constructor(props: any);
    getEl(): HTMLDivElement;
    renderInner({ direction }: {
        direction: any;
    }): JSX.Element;
    render(): JSX.Element;
}
export default Auto;
