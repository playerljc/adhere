import MathUtil from '@baifendian/adhere-util';

import CircleDrawAction from '../draw/CircleDrawAction';
import { ICircleData, IPoint, SelectType, IModifyContext, IActionData } from '../types';
import ModifyAction from './ModifyAction';

/**
 * 圆形修改Action类
 * @class CircleModifyAction
 * @classdesc 圆形几何图形的修改功能，支持调整圆形大小和位置
 * @extends {ModifyAction}
 * @remark 提供4个控制点：上、右、下、左，用于调整圆形大小
 */
class CircleModifyAction extends ModifyAction {
  /** 调整大小的光标映射 */
  protected ResizeCursorMapping = new Map<number, string>([
    [0, 'ns-resize'],  // 上
    [1, 'ew-resize'],  // 右
    [2, 'ns-resize'],  // 下
    [3, 'ew-resize'],  // 左
  ]);

  /**
   * 构造函数
   * @param data - 圆形数据
   * @description 初始化圆形修改Action
   */
  constructor(data: ICircleData) {
    super(data);
  }

  /**
   * 绘制锚点
   * @description 绘制圆形的4个控制点：上、右、下、左
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    const { center, radius } = this?.data?.data?.data;
    if (!center || typeof radius !== 'number') return;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      {
        x: center.x,
        y: center.y - radius,
      },
      {
        x: center.x + radius,
        y: center.y,
      },
      {
        x: center.x,
        y: center.y + radius,
      },
      {
        x: center.x - radius,
        y: center.y,
      },
    ];

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const point = circleAnchorPoints[i];

      ctx.beginPath();
      this.setAnchorCircleStyle();

      ctx.ellipse(
        point.x,
        point.y,
        this.anchorRadius,
        this.anchorRadius,
        (45 * Math.PI) / 180,
        0,
        2 * Math.PI,
      );

      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }
  }

  /**
   * 获取点击的锚点
   * @param targetPoint - 目标点
   * @returns 锚点信息和索引，如果未点击到锚点则返回null
   * @description 检测目标点是否在某个锚点范围内
   */
  protected getPointInAnchor(targetPoint: IPoint): { point: IPoint; index: number } | null {
    if (!this.data) return null;

    let point: IPoint | null = null;
    let index: number = -1;

    const { center, radius } = this?.data?.data?.data;
    if (!center || typeof radius !== 'number') return null;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      {
        x: center.x,
        y: center.y - radius,
      },
      {
        x: center.x + radius,
        y: center.y,
      },
      {
        x: center.x,
        y: center.y + radius,
      },
      {
        x: center.x - radius,
        y: center.y,
      },
    ];

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const center = circleAnchorPoints[i];
      const radius = this.anchorRadius + this.anchorLineWidth;

      if (MathUtil.isPointInCircle(targetPoint, { center, radius })) {
        point = center;
        index = i;
        break;
      }
    }

    if (point && index !== -1) {
      return {
        point,
        index,
      };
    }

    return null;
  }

  /**
   * 根据索引设置调整大小的光标
   * @param index - 锚点索引
   * @description 根据锚点索引设置相应的光标样式
   */
  protected setResizeCursorByIndex(index: number): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();
    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    const cursor = this.ResizeCursorMapping.get(index);
    if (cursor) {
      canvasEl.style.cursor = assistCanvasEl.style.cursor = cursor;
    }
  }

  /**
   * 绘制修改过程
   * @param targetPoint - 目标点
   * @description 根据目标点调整圆形大小
   */
  protected drawModify(targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return;

    // 获取历史数据
    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return;

    // 中心点和startPoint的距离就是半径
    const { center } = data.data;
    if (!center) return;

    // 两点间距离(圆的中心点和targetPoint)之间的距离
    data.data.radius = MathUtil.getDistanceByBetweenPoint({ p1: center, p2: targetPoint });

    this.data.data = data;

    context.clearDraw();
    context.drawHistoryData();
    this.drawAnchors();
  }

  /**
   * 绘制移动过程
   * @param startPoint - 起始点
   * @param targetPoint - 目标点
   * @description 根据起始点和目标点移动圆形位置
   */
  protected drawMove(startPoint: IPoint, targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data) return;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return;

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (data.data.center) {
      data.data.center.x += offsetX;
      data.data.center.y += offsetY;
    }

    this.data.data = data;

    context.clearDraw();
    context.drawHistoryData();
    this.drawAnchors();
  }

  /**
   * 获取选择类型
   * @returns 选择类型
   * @description 返回圆形的选择类型
   */
  protected getSelectType(): SelectType {
    return SelectType.Circle;
  }

  /**
   * 判断是否可以移动
   * @param targetPoint - 目标点
   * @returns 是否可以移动
   * @description 判断目标点是否在圆形内部且不在锚点上
   */
  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const { center, radius } = this?.data?.data?.data;
    if (!center || typeof radius !== 'number') return false;

    return (
      MathUtil.isPointInCircle(targetPoint, { center, radius }) &&
      !this.getPointInAnchor(targetPoint)
    );
  }

  /**
   * 绘制移动当中的几何图形
   * @description 绘制当前状态的几何图形
   */
  drawMoveGeometry(): void;
  /**
   * 绘制移动当中的几何图形
   * @param startPoint - 起始点
   * @param targetPoint - 目标点
   * @returns 移动后的数据
   * @description 根据起始点和目标点绘制移动中的几何图形
   */
  drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
  drawMoveGeometry(startPoint?: IPoint, targetPoint?: IPoint): void | IActionData | null {
    if (!this.context || !this.data) return null;

    if (!startPoint || !targetPoint) {
      // 无参数版本
      CircleDrawAction.draw(
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        this.data as ICircleData,
      );
      return;
    }

    // 带参数版本
    const srcData = JSON.parse(JSON.stringify(this.data.data as ICircleData));
    srcData.data = {
      ...srcData.data,
      center: {
        ...srcData.data.center,
      },
    };

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.center) {
      srcData.data.center.x += offsetX;
      srcData.data.center.y += offsetY;

      const style = { ...this.moveGemStyle, ...(srcData.style ?? {}) };
      srcData.style.lineWidth = style.lineWidth;
      srcData.style.lineJoin = style.lineJoin;
      srcData.style.lineCap = style.lineCap;
      srcData.lineDash = style.lineDash;
      srcData.style.lineDashOffset = style.lineDashOffset;
      srcData.style.strokeStyle = style.strokeStyle;
      srcData.style.fillStyle = style.fillStyle;
      srcData.style.globalAlpha = style.globalAlpha ?? 1;

      CircleDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }

    return srcData;
  }

  /**
   * 获取修改上下文
   * @returns 修改上下文对象
   * @description 获取当前修改操作的上下文信息
   */
  getModifyContext(): IModifyContext {
    return {
      context: this.context,
      startPoint: this.startPoint,
      startIndex: this.startIndex,
      data: this.data,
    };
  }

  /**
   * 验证圆形数据
   * @param data - 圆形数据
   * @returns 数据是否有效
   * @description 验证圆形数据的完整性
   */
  static validateCircleData(data: ICircleData): boolean {
    return !!(
      data?.data?.center &&
      typeof data.data.radius === 'number' &&
      data.data.radius > 0
    );
  }

  /**
   * 计算圆形的边界框
   * @param data - 圆形数据
   * @returns 边界框对象
   * @description 获取圆形的边界框信息
   */
  static getCircleBounds(data: ICircleData): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
  } | null {
    if (!this.validateCircleData(data)) return null;

    const { center, radius } = data.data;
    return {
      minX: center.x - radius,
      minY: center.y - radius,
      maxX: center.x + radius,
      maxY: center.y + radius,
    };
  }
}

export default CircleModifyAction;
