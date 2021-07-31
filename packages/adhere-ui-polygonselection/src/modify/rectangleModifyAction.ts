// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';

import {IPoint, IRectangleData, SelectType} from '../types';
import ModifyAction from './modifyAction';

/**
 * RectangleModifyAction
 * @class RectangleModifyAction
 * @classdesc - 矩形修改
 * @remark:
 */
class RectangleModifyAction extends ModifyAction {
  private rectangleAnchorPoints: IPoint[] = [];

  private startIndex: number = -1;

  private indexToModifyHandlerMapping: Map<number, Function> = new Map<number, Function>([
    [0, this.modifyDataByLeftTop],
    [1, this.modifyDataByCenterTop],
    [2, this.modifyDataByRightTop],
    [3, this.modifyDataByRightCenter],
    [4, this.modifyDataByRightBottom],
    [5, this.modifyDataByCenterBottom],
    [6, this.modifyDataByLeftBottom],
    [7, this.modifyDataByLeftCenter],
  ]);

  constructor(data: IRectangleData) {
    super(data);
  }

  /**
   * drawAnchors
   * 4个角，四条边的中心点
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const { leftTopPoint, width, height } = this?.data?.data;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    // 4个角,4条边中心点 顺时针绘制
    this.rectangleAnchorPoints = [
      {
        ...leftTopPoint,
      },
      {
        x: leftTopPoint.x + widthHalf,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + heightHalf,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + widthHalf,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + heightHalf,
      },
    ];

    ctx.beginPath();

    this.setAnchorStyle();

    for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
      const point = this.rectangleAnchorPoints[i];

      ctx.ellipse(
        point.x,
        point.y,
        this.anchorRadius,
        this.anchorRadius,
        (45 * Math.PI) / 180,
        0,
        2 * Math.PI,
      );
    }

    ctx.stroke();

    ctx.fill();
  }

  /**
   * getPointInAnchor
   * @param targetPoint
   * @return IPoint | null
   */
  protected getPointInAnchor(targetPoint: IPoint): { point: IPoint; index: number } | null {
    if (!this.data) return null;

    let point: IPoint | null = null;
    let index: number = -1;

    for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
      const center = this.rectangleAnchorPoints[i];

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
   * draw
   * @param targetPoint
   */
  protected draw(targetPoint: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return;

    // 判断index 0 1 2 3 4 5 6 7的情况下各自怎么修改leftTopPoint,width,height
    const handler = this.indexToModifyHandlerMapping.get(this.startIndex);

    if (!handler) return;

    const result = handler.call(this, targetPoint);

    if (!result) return;

    context.clear();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Circle;
  }

  protected onCanvasMousedown(e) {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    if (!canvasEl) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const point = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect(),
    });

    // 判断按下的startPoint是否为anchor点
    // 用isPointInPath判断只能判断出point在路径中，但是不能获取anchor的中心点
    // 需要判断point在那个anchor里才可以，这样可以获取命中的圆形中心点
    const findPoint: { point: IPoint; index: number } | null = this.getPointInAnchor(point);

    if (findPoint) {
      this.startPoint = findPoint.point;
      this.startIndex = findPoint.index;

      canvasEl?.addEventListener('mousemove', this.onCanvasMousemove);
      canvasEl?.addEventListener('mouseup', this.onCanvasMouseup);
    }
  }

  protected modifyDataByLeftTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.x > box.rightTop.x || targetPoint.y > box.rightBottom.y) return false;

    // 修改
    data.data.leftTopPoint = targetPoint;
    data.data.width = box.rightTop.x - targetPoint.x;
    data.data.height = box.rightBottom.y - targetPoint.y;

    return true;
  }

  protected modifyDataByCenterTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.y > box.leftBottom.y) return false;

    // 修改
    data.data.leftTopPoint = {
      x: box.leftTop.x,
      y: targetPoint.y,
    };
    data.data.width = width;
    data.data.height = box.rightBottom.y - targetPoint.y;

    return true;
  }

  protected modifyDataByRightTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.x < box.leftTop.x || targetPoint.y > box.leftBottom.y) return false;

    // 修改
    data.data.leftTopPoint = {
      x: box.leftTop.x,
      y: targetPoint.y,
    };
    data.data.width = targetPoint.x - box.leftTop.x;
    data.data.height = box.rightBottom.y - targetPoint.y;

    return true;
  }

  protected modifyDataByRightCenter(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.x < box.leftTop.x) return false;

    // 修改
    data.data.leftTopPoint = { ...leftTopPoint };
    data.data.width = targetPoint.x - box.leftTop.x;
    data.data.height = height;

    return true;
  }

  protected modifyDataByRightBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.x < box.leftTop.x || targetPoint.y < box.leftTop.y) return false;

    // 修改
    data.data.leftTopPoint = { ...leftTopPoint };
    data.data.width = targetPoint.x - box.leftTop.x;
    data.data.height = targetPoint.y - box.leftTop.y;

    return true;
  }

  protected modifyDataByCenterBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.y < box.leftTop.y) return false;

    // 修改
    data.data.leftTopPoint = { ...leftTopPoint };
    data.data.width = width;
    data.data.height = targetPoint.y - box.leftTop.y;

    return true;
  }

  protected modifyDataByLeftBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.x > box.rightBottom.x || targetPoint.y < box.rightTop.y) return false;

    // 修改
    data.data.leftTopPoint = {
      x: targetPoint.x,
      y: leftTopPoint.y,
    };
    data.data.width = box.rightBottom.x - targetPoint.x;
    data.data.height = targetPoint.y - box.rightTop.y;

    return true;
  }

  protected modifyDataByLeftCenter(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.id);

    if (!data) return false;

    const { leftTopPoint, width, height } = data.data;

    // 计算出四个角的坐标
    const box = {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };

    // 范围限制
    if (targetPoint.x > box.rightBottom.x) return false;

    // 修改
    data.data.leftTopPoint = {
      x: targetPoint.x,
      y: leftTopPoint.y,
    };

    data.data.width = box.rightBottom.x - targetPoint.x;
    data.data.height = height;

    return true;
  }

  destroy() {
    this.startIndex = -1;

    super.destroy();
  }
}

export default RectangleModifyAction;
