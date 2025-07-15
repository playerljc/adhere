import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import StartDrawAction from '../draw/StartDrawAction';
import { 
  IPoint, 
  IStartData, 
  SelectType, 
  IAnchorInfo,
  ICursorMapping,
  IActionData 
} from '../types';
import ModifyAction from './ModifyAction';

/**
 * 星形修改Action类
 * @class StartModifyAction
 * @classdesc 五角星几何图形的修改功能，支持调整星形大小和位置
 * @extends {ModifyAction}
 * @remark 提供4个控制点：上、右、下、左，用于调整星形大小
 */
class StartModifyAction extends ModifyAction {
  /** 调整大小的光标映射 */
  protected ResizeCursorMapping: ICursorMapping = new Map<number, string>([
    [0, 'ns-resize'],  // 上
    [1, 'ew-resize'],  // 右
    [2, 'ns-resize'],  // 下
    [3, 'ew-resize'],  // 左
  ]);

  /**
   * 构造函数
   * @param data - 星形数据
   * @description 初始化星形修改Action
   */
  constructor(data: IStartData) {
    super(data);
  }

  /**
   * 绘制锚点
   * @description 在星形的4个控制点绘制锚点：上、右、下、左
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    const { center, outRadius } = this?.data?.data?.data;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      { x: center.x, y: center.y - outRadius }, // 上
      { x: center.x + outRadius, y: center.y }, // 右
      { x: center.x, y: center.y + outRadius }, // 下
      { x: center.x - outRadius, y: center.y }, // 左
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

    // 绘制外圆轮廓
    ctx.beginPath();
    this.setAnchorLineStyle();

    ctx.ellipse(center.x, center.y, outRadius, outRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);

    ctx.closePath();
    ctx.stroke();
  }

  /**
   * 获取点是否在锚点内
   * @param targetPoint - 目标点坐标
   * @returns 锚点信息和索引，如果不在任何锚点内则返回null
   * @description 检测目标点是否在星形的某个控制锚点内
   */
  protected getPointInAnchor(targetPoint: IPoint): IAnchorInfo | null {
    if (!this.data) return null;

    const { center, outRadius } = this?.data?.data?.data;

    // 顺时针，上，右，下，左
    const circleAnchorPoints: IPoint[] = [
      { x: center.x, y: center.y - outRadius },
      { x: center.x + outRadius, y: center.y },
      { x: center.x, y: center.y + outRadius },
      { x: center.x - outRadius, y: center.y },
    ];

    for (let i = 0; i < circleAnchorPoints.length; i++) {
      const center = circleAnchorPoints[i];
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
   * @description 设置星形调整大小时的光标样式
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
   * 绘制修改
   * @param targetPoint - 目标点坐标
   * @description 根据目标点修改星形的大小
   */
  protected drawModify(targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return;

    // 从历史数据中获取当前星形数据
    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return;

    // 中心点和startPoint的距离就是半径
    const { center } = data.data;

    // 计算两点间距离作为外半径
    data.data.outRadius = MathUtil.getDistanceByBetweenPoint({ p1: center, p2: targetPoint });
    data.data.innerRadius = data.data.outRadius / 2;

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
   * @description 移动整个星形到新位置
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

    // 移动中心点
    data.data.center.x += offsetX;
    data.data.center.y += offsetY;

    this.data.data = data;

    // 重新绘制
    context.clearDraw();
    context.drawHistoryData();
    this.drawAnchors();
  }

  /**
   * 获取选择类型
   * @returns 星形选择类型
   * @description 返回当前Action的选择类型
   */
  protected getSelectType(): SelectType {
    return SelectType.Start;
  }

  /**
   * 判断是否可以移动
   * @param targetPoint - 目标点坐标
   * @returns 是否可以移动到目标点
   * @description 检查目标点是否在星形内部且不在控制锚点内
   */
  isCanMove(targetPoint: IPoint): boolean {
    if (!this.data) return false;

    const {
      // 圆的中心点
      center,
      // 外半径
      outRadius,
      // 内半径(外半径的一半)
      innerRadius,
    } = this?.data?.data?.data;

    const pt = turf.point([targetPoint.x, targetPoint.y]);

    const startCount = 5;
    const spend = 360 / startCount;
    const min = 90 - spend;
    const max = spend - min;

    const points: IPoint[] = [];

    // 生成星形的顶点坐标
    for (let i = 0; i < startCount; i++) {
      points.push({
        x: Math.cos(((min + i * spend) / 180) * Math.PI) * outRadius + center.x,
        y: -Math.sin(((min + i * spend) / 180) * Math.PI) * outRadius + center.y,
      });

      points.push({
        x: Math.cos(((max + i * spend) / 180) * Math.PI) * innerRadius + center.x,
        y: -Math.sin(((max + i * spend) / 180) * Math.PI) * innerRadius + center.y,
      });
    }

    const polygon = points.map((point) => [point.x, point.y]);
    polygon.push(polygon[0]); // 闭合多边形
    const poly = turf.polygon([polygon]);

    return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPoint);
  }

  /**
   * 绘制移动时的几何图形
   * @description 在辅助Canvas上绘制移动中的星形
   */
  drawMoveGeometry(): void;
  /**
   * 绘制移动时的几何图形
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @returns 移动后的星形数据，如果无法移动则返回null
   * @description 在辅助Canvas上绘制移动中的星形，并返回移动后的数据
   */
  drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
  drawMoveGeometry(startPoint?: IPoint, targetPoint?: IPoint): IActionData | null | void {
    if (!this.context || !this.data) return;

    // 无参数版本
    if (!startPoint || !targetPoint) {
      StartDrawAction.draw(
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        this.data as IStartData,
      );
      return;
    }

    // 带参数版本
    // 深拷贝原始数据
    const srcData = JSON.parse(JSON.stringify(this.data.data as IStartData));
    srcData.data = {
      ...srcData.data,
      center: {
        ...srcData.data.center,
      },
    };

    // 计算偏移量
    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.center) {
      // 移动中心点
      srcData.data.center.x += offsetX;
      srcData.data.center.y += offsetY;

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
      StartDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }

    return srcData;
  }
}

export default StartModifyAction;
