import { Events } from '@baifendian/adhere-util-emitter';

import defaultAnchorStyle from '../defaultAnchorStyle';
import defaultMoveGemStyle from '../defaultMoveGemStyle';
import defaultStyle from '../defaultStyle';
import { ActionStatus, IAction, IPolygonSelection, IStyle } from '../types';

/**
 * 绘制Action抽象基类
 * @abstract
 * @class DrawAction
 * @classdesc 所有绘制Action的基类，提供基础的绘制功能
 * @implements {IAction}
 * @extends {Events}
 */
abstract class DrawAction extends Events implements IAction {
  /** 上下文对象 */
  protected context: IPolygonSelection | null = null;

  /** 当前状态 */
  protected status: number = ActionStatus.UnStart;

  /** 样式对象 */
  style: IStyle = { ...defaultStyle };

  /** 修改样式对象 */
  anchorStyle: IStyle = { ...defaultAnchorStyle };

  /** 移动样式对象 */
  moveGemStyle: IStyle = { ...defaultMoveGemStyle };

  /**
   * 获取锚点样式
   * @returns 锚点样式对象的副本
   */
  getAnchorStyle(): IStyle {
    return { ...this.anchorStyle };
  }

  /**
   * 获取样式
   * @returns 样式对象的副本
   */
  getStyle(): IStyle {
    return { ...this.style };
  }

  /**
   * 获取移动几何图形样式
   * @returns 移动几何图形样式对象的副本
   */
  getMoveGemStyle(): IStyle {
    return { ...this.moveGemStyle };
  }

  /**
   * 设置锚点样式
   * @param style - 样式对象
   */
  setAnchorStyle(style: Partial<IStyle> | undefined): void {
    this.anchorStyle = { ...defaultAnchorStyle, ...(style ?? {}) };
  }

  /**
   * 设置样式
   * @param style - 样式对象
   */
  setStyle(style: Partial<IStyle> | undefined): void {
    this.style = { ...defaultStyle, ...(style ?? {}) };
  }

  /**
   * 设置移动几何图形样式
   * @param style - 样式对象
   */
  setMoveGemStyle(style: Partial<IStyle> | undefined): void {
    this.moveGemStyle = { ...defaultMoveGemStyle, ...(style ?? {}) };
  }

  /**
   * 销毁Action
   * @description 清理资源并重置状态
   */
  destroy(): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context?.getCanvasEl?.();

    const assistCanvasEl = context?.getAssistCanvasEl?.();

    if (!canvasEl || !assistCanvasEl) return;

    // 重置光标样式
    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
  }

  /**
   * 结束Action
   * @param e - 鼠标事件
   * @description 结束当前Action并重置光标样式
   */
  end(e?: MouseEvent): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context?.getCanvasEl();

    const assistCanvasEl = context?.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    // 重置光标样式
    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
  }

  /**
   * 开始Action
   * @param style - 样式对象
   * @description 开始绘制Action，设置光标样式
   */
  start(style?: IStyle): void {
    if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status)) return;

    const { context } = this;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    // 设置绘制光标样式
    canvasEl.style.cursor = `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3OTEzNjM1NDc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzMDgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4wMDIgODg3QzMwNC44OTIgODg3IDEzNyA3MTkuMTA4IDEzNyA1MTIuMDAyIDEzNyAzMDQuODkyIDMwNC44OTIgMTM3IDUxMi4wMDIgMTM3IDcxOS4xMDggMTM3IDg4NyAzMDQuODkyIDg4NyA1MTIuMDAyIDg4NyA3MTkuMTA4IDcxOS4xMDggODg3IDUxMi4wMDIgODg3ek01MTIgNzg3YzE1MS44NzggMCAyNzUtMTIzLjEyMiAyNzUtMjc1UzY2My44NzggMjM3IDUxMiAyMzcgMjM3IDM2MC4xMjIgMjM3IDUxMnMxMjMuMTIyIDI3NSAyNzUgMjc1eiIgZmlsbD0iIzFBQTVGRiIgcC1pZD0iNDMwOSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0yMjUgMGEyMjUgMjI1IDAgMSAwIDQ1MCAwIDIyNSAyMjUgMCAxIDAtNDUwIDBaIiBmaWxsPSIjMUFBNUZGIiBwLWlkPSI0MzEwIj48L3BhdGg+PC9zdmc+), auto`;
  }

  /**
   * 设置上下文对象
   * @param context - 多边形选择上下文
   */
  setContext(context: IPolygonSelection): void {
    this.context = context;
  }

  /**
   * 获取状态
   * @returns 当前状态值
   */
  getStatus(): number {
    return this.status;
  }
}

export default DrawAction;
