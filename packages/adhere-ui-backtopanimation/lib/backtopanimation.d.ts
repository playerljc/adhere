import React from 'react';
import { IBackTopAnimationProps } from './types';
/**
 * BackTopAnimation
 * @class BackTopAnimation
 * @classdesc BackTopAnimation
 */
declare class BackTopAnimation extends React.Component<IBackTopAnimationProps> {
    static defaultProps: any;
    static propTypes: any;
    private el;
    private maskEl;
    private scrollEl;
    private key;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private initScrollEvent;
    private renderMask;
    private onTrigger;
    render(): JSX.Element;
}
export default BackTopAnimation;
