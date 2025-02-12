import Emitter from '@baifendian/adhere-util-emitter';
import { IAction, IPolygonSelection, IStyle } from '../types';
/**
 * DrawAction
 * @class DrawAction
 * @classdesc DrawAction
 */
declare abstract class DrawAction extends Emitter.Events implements IAction {
    protected context: IPolygonSelection | null;
    protected status: number;
    style: IStyle;
    anchorStyle: IStyle;
    moveGemStyle: IStyle;
    getAnchorStyle(): IStyle;
    getStyle(): IStyle;
    getMoveGemStyle(): IStyle;
    setAnchorStyle(style: Partial<IStyle> | undefined): void;
    setStyle(style: Partial<IStyle> | undefined): void;
    setMoveGemStyle(style: Partial<IStyle> | undefined): void;
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
