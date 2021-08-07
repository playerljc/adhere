import Emitter from '@baifendian/adhere-util-emitter/lib/events';
import { IAction, IPolygonSelection, IStyle } from '../types';
/**
 * DrawAction
 * @class DrawAction
 * @classdesc DrawAction
 */
declare abstract class DrawAction extends Emitter implements IAction {
    protected context: IPolygonSelection | null;
    protected style: IStyle;
    protected status: number;
    /**
     * destroy
     */
    destroy(): void;
    /**
     * end
     * @param e
     */
    end(e?: MouseEvent): void;
    /**
     * start
     * @param style
     */
    start(style?: IStyle): void;
    /**
     * setContext
     * @param context
     */
    setContext(context: IPolygonSelection): void;
    /**
     * getStatus - 获取状态
     */
    getStatus(): number;
}
export default DrawAction;
