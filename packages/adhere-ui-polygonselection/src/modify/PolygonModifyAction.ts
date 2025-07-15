import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import PolygonDrawAction from '../draw/PolygonDrawAction';
import { 
  IPoint, 
  IPolygonData, 
  SelectType, 
  IAnchorInfo,
  IActionData 
} from '../types';
import ModifyAction from './ModifyAction';

/**
 * 多边形修改Action类
 * @class PolygonModifyAction
 * @classdesc 多边形几何图形的修改功能，支持调整多边形顶点位置和整体移动
 * @extends {ModifyAction}
 * @remark 提供每个顶点的控制点，用于调整多边形形状
 */
class PolygonModifyAction extends ModifyAction {
  /** 起始点的索引 */
  protected startIndex: number = -1;

  /**
   * 构造函数
   * @param data - 多边形数据
   * @description 初始化多边形修改Action
   */
  constructor(data: IPolygonData) {
    super(data);
  }

  /**
   * 绘制锚点
   * @description 在多边形的每个顶点绘制控制锚点
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    const data: IPoint[] = this?.data?.data?.data || [];

    for (let i = 0; i < data.length; i++) {
      const point = data[i];

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
   * 获取点是否在锚点内
   * @param targetPoint - 目标点坐标
   * @returns 锚点信息和索引，如果不在任何锚点内则返回null
   * @description 检测目标点是否在多边形的某个控制锚点内
   */
  protected getPointInAnchor(targetPoint: IPoint): IAnchorInfo | null {
    if (!this.data) return null;

    const {
      data: { data },
    } = this.data;

    for (let i = 0; i < data.length; i++) {
      const center = data[i];
      const radius = this.anchorRadius + this.anchorLineWidth;

      if (MathUtil.isPointInCircle(targetPoint, { center, radius })) {
        return {
          point: center,
          index: i,
        };
      }
    }

    return null;
  }

  /**
   * 根据索引设置调整大小的光标
   * @param index - 锚点索引
   * @description 设置多边形顶点调整时的光标样式
   */
  protected setResizeCursorByIndex(index: number): void {
    if (!this.context) return;

    const canvasEl = this.context.getCanvasEl();
    const assistCanvasEl = this.context.getAssistCanvasEl();

    if (!canvasEl || !assistCanvasEl) return;

    canvasEl.style.cursor = assistCanvasEl.style.cursor = 'nesw-resize';
  }

  /**
   * 绘制修改
   * @param targetPoint - 目标点坐标
   * @description 根据目标点修改多边形的顶点位置
   */
  protected drawModify(targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint || this.startIndex === -1) return;

    // 从历史数据中获取当前多边形数据
    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return;

    // 更新指定索引的顶点位置
    data.data[this.startIndex] = targetPoint;
    this.data.data = data;

    // 重新绘制
    context.clearDraw();
    context.drawHistoryData();
    this.drawAnchors();
  }

  /**
   * 绘制移动
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @description 移动整个多边形到新位置
   */
  protected drawMove(startPoint: IPoint, targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data) return;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return;

    // 计算偏移量
    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    // 移动所有顶点
    data.data.forEach((point: IPoint) => {
      point.x += offsetX;
      point.y += offsetY;
    });

    this.data.data = data;

    // 重新绘制
    context.clearDraw();
    context.drawHistoryData();
    this.drawAnchors();
  }

  /**
   * 获取选择类型
   * @returns 多边形选择类型
   * @description 返回当前Action的选择类型
   */
  protected getSelectType(): SelectType {
    return SelectType.Polygon;
  }

  /**
   * 判断是否可以移动
   * @param targetPoint - 目标点坐标
   * @returns 是否可以移动到目标点
   * @description 检查目标点是否在多边形内部且不在控制锚点内
   */
  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const points = [...this?.data?.data?.data];
    points.push(points[0]); // 闭合多边形

    const pt = turf.point([targetPoint.x, targetPoint.y]);
    const poly = turf.polygon([points.map((point) => [point.x, point.y])]);

    return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPoint);
  }

  /**
   * 绘制移动时的几何图形
   * @description 在辅助Canvas上绘制移动中的多边形
   */
  drawMoveGeometry(): void;
  /**
   * 绘制移动时的几何图形
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @returns 移动后的多边形数据，如果无法移动则返回null
   * @description 在辅助Canvas上绘制移动中的多边形，并返回移动后的数据
   */
  drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
  drawMoveGeometry(startPoint?: IPoint, targetPoint?: IPoint): IActionData | null | void {
    if (!this.context || !this.data) return;

    // 无参数版本
    if (!startPoint || !targetPoint) {
      PolygonDrawAction.draw(
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        this.data as IPolygonData,
      );
      return;
    }

    // 带参数版本
    // 深拷贝原始数据
    const srcData = JSON.parse(JSON.stringify(this.data.data as IPolygonData));
    srcData.data = srcData.data.map((point) => ({ ...point }));

    // 计算偏移量
    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.length) {
      // 移动所有顶点
      srcData.data.forEach((point: IPoint) => {
        point.x += offsetX;
        point.y += offsetY;
      });

      // 应用移动样式
      const style = { ...this.moveGemStyle, ...(srcData.style ?? {}) };
      srcData.style = {
        lineWidth: style.lineWidth,
        lineJoin: style.lineJoin,
        lineCap: style.lineCap,
        lineDash: style.lineDash,
        lineDashOffset: style.lineDashOffset,
        strokeStyle: style.strokeStyle,
        fillStyle: style.fillStyle,
        globalAlpha: style.globalAlpha ?? 1,
      };

      // 在辅助Canvas上绘制
      PolygonDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }

    return srcData;
  }
}

export default PolygonModifyAction;
