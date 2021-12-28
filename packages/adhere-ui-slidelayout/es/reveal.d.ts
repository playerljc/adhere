/// <reference types="react" />
import { IRevealProps, ISlideLayoutState } from './types';
import SlideLayout from './slide';
/**
 * Reveal
 * @class Reveal
 * @classdesc Reveal
 */
declare class Reveal extends SlideLayout<IRevealProps, ISlideLayoutState> {
    static defaultProps: any;
    static propTypes: any;
    private rMasterEl;
    constructor(props: any);
    render(): JSX.Element;
}
export default Reveal;
