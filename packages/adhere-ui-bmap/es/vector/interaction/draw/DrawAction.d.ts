import Emitter from '@baifendian/adhere-util-emitter';
import { IAction, IInteractionLayer, IStyle, SelectType } from '../types';
/**
 * DrawAction
 * @class DrawAction
 * @classdesc DrawAction
 */
declare abstract class DrawAction extends Emitter.Events implements IAction {
    protected context: IInteractionLayer | null;
    protected style: IStyle;
    protected status: number;
    /**
     * getSelectType
     * @description - 获取Select的类型
     */
    abstract getSelectType(): SelectType;
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
     * setCursor
     */
    setCursor(): void;
    /**
     * setContext
     * @param context
     */
    setContext(context: IInteractionLayer): void;
    /**
     * getStatus - 获取状态
     */
    getStatus(): number;
}
export default DrawAction;
