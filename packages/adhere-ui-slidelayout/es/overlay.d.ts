/// <reference types="react" />
import { IOverlayProps, ISlideLayoutState } from './types';
import SlideLayout from './slide';
/**
 * Overlay
 * @class Overlay
 * @classdesc Overlay
 */
declare class Overlay extends SlideLayout<IOverlayProps, ISlideLayoutState> {
    static defaultProps: any;
    static propTypes: any;
    constructor(props: any);
    render(): JSX.Element;
}
export default Overlay;
