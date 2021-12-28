import React from 'react';
import { ISliderScaleProps } from './types';
/**
 * SliderScale
 * @class SliderScale
 * @classdesc SliderScale
 */
declare class SliderScale extends React.Component<ISliderScaleProps, any> {
    static defaultProps: any;
    static propTypes: any;
    private el;
    private preValue;
    private rangeEl;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<ISliderScaleProps>, nextContext: any): void;
    private onMousemove;
    private onTouchmove;
    private touchEvent;
    private renderScale;
    render(): JSX.Element;
}
export default SliderScale;
