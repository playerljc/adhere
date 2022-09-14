import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import defaultMoveGemStyle from '../defaultMoveGemStyle';
import DiamondDrawAction from '../draw/DiamondDrawAction';
import { IDiamondData, IPoint, SelectType } from '../types';
import ModifyAction from './ModifyAction';

/**
 * DiamondModifyAction
 * @class DiamondModifyAction
 * @classdesc - 菱形修改
 * @remark:
 */
class DiamondModifyAction extends ModifyAction {
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

  constructor(data: IDiamondData) {
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

    const { leftTopPoint, width, height } = this?.data?.data?.data;

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
   * @param targetPoint
   */
  protected drawModify(targetPoint: IPoint) {
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

    this.data.data = data;

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * drawMove
   * @param startPoint
   * @param targetPoint
   */
  protected drawMove(startPoint: IPoint, targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data) return;

    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return;

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    data.data.leftTopPoint.x += offsetX;
    data.data.leftTopPoint.y += offsetY;

    this.data.data = data;

    context.clearDraw();

    context.drawHistoryData();

    this.drawAnchors();
  }

  /**
   * getSelectType
   */
  protected getSelectType(): SelectType {
    return SelectType.Diamond;
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

    const ctx = context?.getCtx();

    if (!context || !ctx || !this.data) return null;

    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return null;

    const { leftTopPoint, width, height } = data.data;

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

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { width } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { leftTopPoint, height } = data.data;

    // 计算出四个角的坐标
    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { leftTopPoint } = data.data;

    // 计算出四个角的坐标
    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { leftTopPoint, width } = data.data;

    // 计算出四个角的坐标
    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { leftTopPoint } = data.data;

    // 计算出四个角的坐标
    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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
    const data = context.getHistoryDataById(this.data.data.id);

    if (!data) return false;

    const { leftTopPoint, height } = data.data;

    // 计算出四个角的坐标
    // 计算出四个角的坐标
    const box = this.getBox();

    if (!box) return false;

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

  /**
   * isCanMove
   * @param targetPoint
   */
  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const { leftTopPoint, width, height } = this?.data?.data?.data;

    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const pt = turf.point([targetPoint.x, targetPoint.y]);
    const poly = turf.polygon([
      [
        [leftTopPoint.x, leftTopPoint.y + halfHeight],
        [leftTopPoint.x + halfWidth, leftTopPoint.y],
        [leftTopPoint.x + width, leftTopPoint.y + halfHeight],
        [leftTopPoint.x + halfWidth, leftTopPoint.y + height],
        [leftTopPoint.x, leftTopPoint.y + halfHeight],
      ],
    ]);

    return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPoint);
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   */
  // @ts-ignore
  drawMoveGeometry(): void {
    if (!this.context || !this.data) return;

    DiamondDrawAction.draw(
      this.context.getAssistCtx() as CanvasRenderingContext2D,
      this.data as IDiamondData,
    );
  }

  /**
   * drawMoveGeometry
   * @description 绘制移动时的几何图形
   * @param startPoint
   * @param targetPoint
   */
  // @ts-ignore
  drawMoveGeometry(startPoint?: IPoint, targetPoint?: IPoint): void {
    if (!this.context || !this.data || !startPoint || !targetPoint) return;

    const srcData = { ...(this.data.data as IDiamondData) };
    srcData.data = {
      ...srcData.data,
      leftTopPoint: {
        ...srcData.data.leftTopPoint,
      },
    };

    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.leftTopPoint) {
      srcData.data.leftTopPoint.x += offsetX;
      srcData.data.leftTopPoint.y += offsetY;

      if (srcData.style) {
        srcData.style.globalAlpha = defaultMoveGemStyle.globalAlpha;
        srcData.style.strokeStyle = defaultMoveGemStyle.strokeStyle;
        srcData.style.lineWidth = defaultMoveGemStyle.lineWidth;
        srcData.style.lineDash = defaultMoveGemStyle.lineDash;
        srcData.style.lineDashOffset = defaultMoveGemStyle.lineDashOffset;
      }

      DiamondDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }
  }

  destroy() {
    this.startIndex = -1;

    super.destroy();
  }
}

export default DiamondModifyAction;
