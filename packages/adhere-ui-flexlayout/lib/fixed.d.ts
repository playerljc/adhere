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
    private props;
    private direction;
    constructor(props: any);
    renderInner({ direction }: {
        direction: any;
    }): JSX.Element;
    render(): JSX.Element;
}
export default Fixed;
