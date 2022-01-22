import * as turf from '@turf/turf';
// @ts-ignore
import MathUtil from '@baifendian/adhere-util';

import { IPoint, IInteractionLayer, ITriangleData, SelectType } from '../types';
import ModifyAction from './ModifyAction';
import TriangleDrawAction from '../draw/TriangleDrawAction';
import defaultMoveGemStyle from '../DefaultMoveGemStyle';

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

  protected ResizeCursorMapping = new Map<number, string>([
    [0, 'nwse-resize'],
    [1, 'ns-resize'],
    [2, 'nesw-resize'],
    [3, 'ew-resize'],
    [4, 'nwse-resize'],
    [5, 'ns-resize'],
    [6, 'nesw-resize'],
    [7, 'ew-resize'],
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

    const { points } = TriangleDrawAction.transformOriginToReal(
      this.context,
      this?.data?.data?.data,
    );

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

      ctx.stroke();
      ctx.fill();
    }

    // 矩形绘制
    ctx.beginPath();
    this.setAnchorLineStyle();
    ctx.moveTo(leftTopPoint.x, leftTopPoint.y);
    ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y);
    ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y + height);
    ctx.lineTo(leftTopPoint.x, leftTopPoint.y + height);
    ctx.lineTo(leftTopPoint.x, leftTopPoint.y);
    ctx.stroke();
  }

  /**
   * getPointInAnchor
   * @param targetPixel
   * @return IPoint | null
   */
  protected getPointInAnchor(targetPixel: IPoint): { point: IPoint; index: number } | null {
    if (!this.data) return null;

    let point: IPoint | null = null;
    let index: number = -1;

    for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
      const center = this.rectangleAnchorPoints[i];

      const radius = this.anchorRadius + this.anchorLineWidth;

      if (MathUtil.isPointInCircle(targetPixel, { center, radius })) {
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
   * setResizeCursorByIndex
   * @param index
   */
  protected setResizeCursorByIndex(index: number): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();

    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = this.ResizeCursorMapping.get(
      index,
    ) as string;
  }

  /**
   * drawModify
   * @param targetPixel
   */
  protected drawModify(targetPixel: IPoint) {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data || !this.startPoint) return;

    // canvasHistory需要修改 需要修改半径
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    // 判断index 0 1 2 3 4 5 6 7的情况下各自怎么修改leftTopPoint,width,height
    const handler = this.indexToModifyHandlerMapping.get(this.startIndex);

    if (!handler) return;

    const result = handler.call(this, targetPixel);

    if (!result) return;

    this.data.data = {
      ...data,
    };

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * drawMove
   * @param startPixel
   * @param targetPixel
   */
  protected drawMove(startPixel: IPoint, targetPixel: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data) return;

    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    const startPoint = context.pixelToPoint(startPixel);
    const targetPoint = context.pixelToPoint(targetPixel);

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    // historyData是原始数据，修改修改的是原始数据
    data.data.points.forEach((point: IPoint) => {
      point.x += offsetX;
      point.y += offsetY;
    });

    this.data.data = {
      ...data,
    };

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

    const { points } = TriangleDrawAction.transformOriginToReal(context, data.data);

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

  /**
   * modifyDataByLeftTop
   * @param targetPixel
   */
  protected modifyDataByLeftTop(targetPixel: IPoint): boolean {
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
    if (targetPixel.x > box.rightTop.x || targetPixel.y > box.rightBottom.y) return false;

    const leftTopPoint = targetPixel;
    const width = box.rightTop.x - targetPixel.x;
    const height = box.rightBottom.y - targetPixel.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByCenterTop
   * @param targetPixel
   */
  protected modifyDataByCenterTop(targetPixel: IPoint): boolean {
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
    if (targetPixel.y > box.leftBottom.y) return false;

    // 修改
    const leftTopPoint = {
      x: box.leftTop.x,
      y: targetPixel.y,
    };
    const width = box.rightTop.x - box.leftTop.x;
    const height = box.rightBottom.y - targetPixel.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByRightTop
   * @param targetPixel
   */
  protected modifyDataByRightTop(targetPixel: IPoint): boolean {
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
    if (targetPixel.x < box.leftTop.x || targetPixel.y > box.leftBottom.y) return false;

    // 修改
    const leftTopPoint = {
      x: box.leftTop.x,
      y: targetPixel.y,
    };
    const width = targetPixel.x - box.leftTop.x;
    const height = box.rightBottom.y - targetPixel.y;

    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByRightCenter
   * @param targetPixel
   */
  protected modifyDataByRightCenter(targetPixel: IPoint): boolean {
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
    if (targetPixel.x < box.leftTop.x) return false;

    const leftTopPoint = {
      x: box.leftTop.x,
      y: box.leftTop.y,
    };
    const width = targetPixel.x - box.leftTop.x;
    const height = box.rightBottom.y - box.rightTop.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByRightBottom
   * @param targetPixel
   */
  protected modifyDataByRightBottom(targetPixel: IPoint): boolean {
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
    if (targetPixel.x < box.leftTop.x || targetPixel.y < box.leftTop.y) return false;

    const leftTopPoint = { ...box.leftTop };
    const width = targetPixel.x - box.leftTop.x;
    const height = targetPixel.y - box.leftTop.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByCenterBottom
   * @param targetPixel
   */
  protected modifyDataByCenterBottom(targetPixel: IPoint): boolean {
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
    if (targetPixel.y < box.leftTop.y) return false;

    const leftTopPoint = { ...box.leftTop };
    const width = box.rightTop.x - box.leftTop.x;
    const height = targetPixel.y - box.leftTop.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByLeftBottom
   * @param targetPixel
   */
  protected modifyDataByLeftBottom(targetPixel: IPoint): boolean {
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
    if (targetPixel.x > box.rightBottom.x || targetPixel.y < box.rightTop.y) return false;

    const leftTopPoint = {
      x: targetPixel.x,
      y: box.leftTop.y,
    };
    const width = box.rightBottom.x - targetPixel.x;
    const height = targetPixel.y - box.rightTop.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  /**
   * modifyDataByLeftCenter
   * @param targetPixel
   */
  protected modifyDataByLeftCenter(targetPixel: IPoint): boolean {
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
    if (targetPixel.x > box.rightBottom.x) return false;

    const leftTopPoint = {
      x: targetPixel.x,
      y: box.leftTop.y,
    };
    const width = box.rightBottom.x - targetPixel.x;
    const height = box.rightBottom.y - box.rightTop.y;

    // 修改
    data.data.points = TriangleDrawAction.transformRealToOrigin(context, {
      points: [
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
      ],
    }).points;

    return true;
  }

  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const points = TriangleDrawAction.transformOriginToReal(this.context as IInteractionLayer, {
      points: [...(this?.data?.data?.data?.points || [])],
    }).points;
    points.push(points[0]);

    const pt = turf.point([targetPoint.x, targetPoint.y]);
    const poly = turf.polygon([points.map((point) => [point.x, point.y])]);

    return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPoint);
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   */
  // @ts-ignore
  drawMoveGeometry(): void {
    if (!this.context || !this.data) return;

    TriangleDrawAction.draw(
      this.context,
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as ITriangleData,
    );
  }

  // @ts-ignore
  drawMoveGeometry(startPixel?: IPoint, targetPixel?: IPoint): void {
    if (!this.context || !this.data || !startPixel || !targetPixel) return;

    const srcData = { ...(this.data.data as ITriangleData) };
    srcData.data = {
      ...srcData.data,
      points: srcData.data.points.map((point) => ({ ...point })),
    };

    const startPoint = this.context.pixelToPoint(startPixel);
    const targetPoint = this.context.pixelToPoint(targetPixel);

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.points && srcData.data.points.length) {
      srcData.data.points.forEach((point: IPoint) => {
        point.x += offsetX;
        point.y += offsetY;
      });

      if (srcData.style) {
        srcData.style.globalAlpha = defaultMoveGemStyle.globalAlpha;
        srcData.style.strokeStyle = defaultMoveGemStyle.strokeStyle;
        srcData.style.lineWidth = defaultMoveGemStyle.lineWidth;
        srcData.style.lineDash = defaultMoveGemStyle.lineDash;
        srcData.style.lineDashOffset = defaultMoveGemStyle.lineDashOffset;
      }

      TriangleDrawAction.draw(
        this.context,
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        srcData,
      );
    }
  }

  destroy() {
    this.startIndex = -1;

    super.destroy();
  }
}

export default TriangleModifyAction;
