// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math';

import { IPoint, ITriangleData, SelectType } from '../types';
import ModifyAction from './modifyAction';

/**
 * TriangleModifyAction
 * @class TriangleModifyAction
 * @classdesc - 三角形修改
 * @remark:
 */
class TriangleModifyAction extends ModifyAction {
  private rectangleAnchorPoints: IPoint[] = [];

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

  constructor(data: ITriangleData) {
    super(data);
  }

  /**
   * drawAnchors
   * circle有4个anchor，上，下，左，右
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();

    if (!ctx) return;

    const { points } = this?.data?.data?.data;

    if (!points || !points.length) return;

    // points三个点分别为左下，上中，右下

    // 绘制矩形和八个控制点
    const leftTopPoint = {
      x: points[0].x,
      y: points[1].y,
    };
    const width = points[2].x - points[0].x;
    const height = points[2].y - points[1].y;
    const widthHalf = width / 2;
    const heightHalf = height / 2;

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

    // 4个角,4条边中心点 顺时针绘制
    for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
      const point = this.rectangleAnchorPoints[i];

      ctx.beginPath();

      this.setAnchorStyle();

      ctx.ellipse(
        point.x,
        point.y,
        this.anchorRadius,
        this.anchorRadius,
        (45 * Math.PI) / 180,
        0,
        2 * Math.PI,
      );

      ctx.stroke();
      ctx.fill();

      // 矩形绘制
      ctx.beginPath();

      this.setAnchorStyle();

      ctx.moveTo(leftTopPoint.x, leftTopPoint.y);
      ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y);
      ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y + height);
      ctx.lineTo(leftTopPoint.x, leftTopPoint.y + height);
      ctx.lineTo(leftTopPoint.x, leftTopPoint.y);

      ctx.stroke();
      ctx.fill();
    }
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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    // 判断index 0 1 2 3 4 5 6 7的情况下各自怎么修改leftTopPoint,width,height
    const handler = this.indexToModifyHandlerMapping.get(this.startIndex);

    if (!handler) return;

    const result = handler.call(this, targetPoint);

    if (!result) return;

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Triangle;
  }

  /**
   * getBox
   */
  protected getBox(): {
    leftTop: IPoint;
    rightTop: IPoint;
    rightBottom: IPoint;
    leftBottom: IPoint;
  } | null {
    const { context } = this;

    if (!context || !this.data) return null;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return null;

    const { points } = data.data;

    if (!points || !points.length) return null;

    const leftTopPoint = {
      x: points[0].x,
      y: points[1].y,
    };
    const width = points[2].x - points[0].x;
    const height = points[2].y - points[1].y;

    return {
      leftTop: { ...leftTopPoint },
      rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
      rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
      leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
    };
  }

  protected modifyDataByLeftTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.x > box.rightTop.x || targetPoint.y > box.rightBottom.y) return false;

    const leftTopPoint = targetPoint;
    const width = box.rightTop.x - targetPoint.x;
    const height = box.rightBottom.y - targetPoint.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByCenterTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.y > box.leftBottom.y) return false;

    // 修改
    const leftTopPoint = {
      x: box.leftTop.x,
      y: targetPoint.y,
    };
    const width = box.rightTop.x - box.leftTop.x;
    const height = box.rightBottom.y - targetPoint.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByRightTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.x < box.leftTop.x || targetPoint.y > box.leftBottom.y) return false;

    // 修改
    const leftTopPoint = {
      x: box.leftTop.x,
      y: targetPoint.y,
    };
    const width = targetPoint.x - box.leftTop.x;
    const height = box.rightBottom.y - targetPoint.y;

    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByRightCenter(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.x < box.leftTop.x) return false;

    const leftTopPoint = {
      x: box.leftTop.x,
      y: box.leftTop.y,
    };
    const width = targetPoint.x - box.leftTop.x;
    const height = box.rightBottom.y - box.rightTop.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByRightBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.x < box.leftTop.x || targetPoint.y < box.leftTop.y) return false;

    const leftTopPoint = { ...box.leftTop };
    const width = targetPoint.x - box.leftTop.x;
    const height = targetPoint.y - box.leftTop.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByCenterBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.y < box.leftTop.y) return false;

    const leftTopPoint = { ...box.leftTop };
    const width = box.rightTop.x - box.leftTop.x;
    const height = targetPoint.y - box.leftTop.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByLeftBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.x > box.rightBottom.x || targetPoint.y < box.rightTop.y) return false;

    const leftTopPoint = {
      x: targetPoint.x,
      y: box.leftTop.y,
    };
    const width = box.rightBottom.x - targetPoint.x;
    const height = targetPoint.y - box.rightTop.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  protected modifyDataByLeftCenter(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return false;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { points } = data.data;

    if (!points || !points.length) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

    // 范围限制
    if (targetPoint.x > box.rightBottom.x) return false;

    const leftTopPoint = {
      x: targetPoint.x,
      y: box.leftTop.y,
    };
    const width = box.rightBottom.x - targetPoint.x;
    const height = box.rightBottom.y - box.rightTop.y;

    // 修改
    data.data.points = [
      {
        x: leftTopPoint.x,
        y: leftTopPoint.y + height,
      },
      {
        x: leftTopPoint.x + width / 2,
        y: leftTopPoint.y,
      },
      {
        x: leftTopPoint.x + width,
        y: leftTopPoint.y + height,
      },
    ];

    return true;
  }

  destroy() {
    this.startIndex = -1;

    super.destroy();
  }
}

export default TriangleModifyAction;
