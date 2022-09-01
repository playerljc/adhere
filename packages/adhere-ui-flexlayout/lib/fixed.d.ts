import React from 'react';
import { IFixedProps } from './types';
/**
 * Fixed
 * @class Fixed
 * @classdesc Fixed
 */
declare class Fixed extends React.Component<IFixedProps, any> {
    static defaultProps: any;
    static propTypes: any;
    private direction;
    private ref;
    constructor(props: any);
    getEl(): HTMLDivElement;
    renderInner({ direction }: {
        direction: any;
    }): JSX.Element;
    render(): JSX.Element;
}
export default Fixed;
