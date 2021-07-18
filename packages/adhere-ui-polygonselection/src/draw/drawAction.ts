import { ActionStatus, IAction, IPolygonSelection, IStyle } from '../types';
import DefaultStyle from '../defaultStyle';

/**
 * DrawAction
 * @class DrawAction
 * @classdesc
 */
abstract class DrawAction implements IAction {
  // 上下文对象
  protected context: IPolygonSelection | null = null;

  // 样式对象
  // @ts-ignore
  protected style: IStyle = {
    ...DefaultStyle,
  };

  // 当前状态
  protected status: number = ActionStatus.UnStart;

  /**
   * destroy
   */
  abstract destroy(): void;

  /**
   * end
   * @param e
   */
  abstract end(e?: MouseEvent): void;

  /**
   * start
   * @param style
   */
  abstract start(style: IStyle): void;

  /**
   * setContext
   * @param context
   */
  setContext(context: IPolygonSelection) {
    this.context = context;
  }

  /**
   * getStatus - 获取状态
   */
  getStatus(): number {
    return this.status;
  }
}

export default DrawAction;
