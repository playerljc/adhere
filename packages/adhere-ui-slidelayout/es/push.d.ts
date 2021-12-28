/// <reference types="react" />
import { IPushProps, ISlideLayoutState } from './types';
import SlideLayout from './slide';
/**
 * Push
 * @class Push
 * @classdesc Push
 */
declare class Push extends SlideLayout<IPushProps, ISlideLayoutState> {
    static defaultProps: any;
    static propTypes: any;
    private pMasterEl;
    private pSlaveEl;
    constructor(props: any);
    render(): JSX.Element;
}
export default Push;
