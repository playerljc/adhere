import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';

import DiamondDrawAction from '../draw/DiamondDrawAction';
import { 
  IDiamondData, 
  IPoint, 
  SelectType, 
  IAnchorInfo,
  IRectangleBox,
  ModifyHandler,
  ICursorMapping,
  IActionData 
} from '../types';
import ModifyAction from './ModifyAction';

/**
 * 菱形修改Action类
 * @class DiamondModifyAction
 * @classdesc 菱形几何图形的修改功能，支持调整菱形大小和位置
 * @extends {ModifyAction}
 * @remark 提供8个控制点：4个角和4条边的中心点，用于调整菱形大小
 */
class DiamondModifyAction extends ModifyAction {
  /** 矩形锚点数组 */
  private rectangleAnchorPoints: IPoint[] = [];

  /** 索引到修改处理器的映射 */
  private indexToModifyHandlerMapping: Map<number, ModifyHandler> = new Map<number, ModifyHandler>([
    [0, this.modifyDataByLeftTop],
    [1, this.modifyDataByCenterTop],
    [2, this.modifyDataByRightTop],
    [3, this.modifyDataByRightCenter],
    [4, this.modifyDataByRightBottom],
    [5, this.modifyDataByCenterBottom],
    [6, this.modifyDataByLeftBottom],
    [7, this.modifyDataByLeftCenter],
  ]);

  /** 调整大小的光标映射 */
  protected ResizeCursorMapping: ICursorMapping = new Map<number, string>([
    [0, 'nwse-resize'],  // 左上角
    [1, 'ns-resize'],    // 上边中心
    [2, 'nesw-resize'],  // 右上角
    [3, 'ew-resize'],    // 右边中心
    [4, 'nwse-resize'],  // 右下角
    [5, 'ns-resize'],    // 下边中心
    [6, 'nesw-resize'],  // 左下角
    [7, 'ew-resize'],    // 左边中心
  ]);

  /**
   * 构造函数
   * @param data - 菱形数据
   * @description 初始化菱形修改Action
   */
  constructor(data: IDiamondData) {
    super(data);
  }

  /**
   * 绘制锚点
   * @description 在菱形的8个控制点绘制锚点：4个角和4条边的中心点
   */
  protected drawAnchors(): void {
    if (!this.context) return;

    const ctx = this.context.getCtx();
    if (!ctx) return;

    const { leftTopPoint, width, height } = this?.data?.data?.data;

    const widthHalf = width / 2;
    const heightHalf = height / 2;

    this.rectangleAnchorPoints = [
      { ...leftTopPoint }, // 左上角
      { x: leftTopPoint.x + widthHalf, y: leftTopPoint.y }, // 上边中心
      { x: leftTopPoint.x + width, y: leftTopPoint.y }, // 右上角
      { x: leftTopPoint.x + width, y: leftTopPoint.y + heightHalf }, // 右边中心
      { x: leftTopPoint.x + width, y: leftTopPoint.y + height }, // 右下角
      { x: leftTopPoint.x + widthHalf, y: leftTopPoint.y + height }, // 下边中心
      { x: leftTopPoint.x, y: leftTopPoint.y + height }, // 左下角
      { x: leftTopPoint.x, y: leftTopPoint.y + heightHalf }, // 左边中心
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

      ctx.closePath();
      ctx.stroke();
      ctx.fill();
    }

    // 绘制矩形轮廓
    ctx.beginPath();
    this.setAnchorLineStyle();

    ctx.moveTo(leftTopPoint.x, leftTopPoint.y);
    ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y);
    ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y + height);
    ctx.lineTo(leftTopPoint.x, leftTopPoint.y + height);
    ctx.lineTo(leftTopPoint.x, leftTopPoint.y);

    ctx.closePath();
    ctx.stroke();
  }

  /**
   * 获取点是否在锚点内
   * @param targetPoint - 目标点坐标
   * @returns 锚点信息和索引，如果不在任何锚点内则返回null
   * @description 检测目标点是否在菱形的某个控制锚点内
   */
  protected getPointInAnchor(targetPoint: IPoint): IAnchorInfo | null {
    if (!this.data) return null;

    for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
      const center = this.rectangleAnchorPoints[i];
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
   * @description 设置菱形调整大小时的光标样式
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
   * @description 根据目标点和当前索引修改菱形的大小和位置
   */
  protected drawModify(targetPoint: IPoint): void {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return;

    // 从历史数据中获取当前菱形数据
    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return;

    // 根据索引获取对应的修改处理器
    const handler = this.indexToModifyHandlerMapping.get(this.startIndex);
    if (!handler) return;

    // 执行修改操作
    const result = handler.call(this, targetPoint);
    if (!result) return;

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
   * @description 移动整个菱形到新位置
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

    // 移动左上角点
    data.data.leftTopPoint.x += offsetX;
    data.data.leftTopPoint.y += offsetY;

    this.data.data = data;

    // 重新绘制
    context.clearDraw();
    context.drawHistoryData();
    this.drawAnchors();
  }

  /**
   * 获取选择类型
   * @returns 菱形选择类型
   * @description 返回当前Action的选择类型
   */
  protected getSelectType(): SelectType {
    return SelectType.Diamond;
  }

  /**
   * 获取菱形边界框
   * @returns 菱形的四个角点坐标，如果无法获取则返回null
   * @description 计算菱形的四个角点坐标
   */
  protected getBox(): IRectangleBox | null {
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

  /**
   * 通过左上角修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整左上角来修改菱形的大小和位置
   */
  protected modifyDataByLeftTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过右下角
    if (targetPoint.x > box.rightTop.x || targetPoint.y > box.rightBottom.y) return false;

    // 修改左上角点和尺寸
    data.data.leftTopPoint = targetPoint;
    data.data.width = box.rightTop.x - targetPoint.x;
    data.data.height = box.rightBottom.y - targetPoint.y;

    return true;
  }

  /**
   * 通过上边中心修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整上边中心来修改菱形的高度
   */
  protected modifyDataByCenterTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    const { width } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过下边
    if (targetPoint.y > box.leftBottom.y) return false;

    // 修改左上角点和高度
    data.data.leftTopPoint = {
      x: box.leftTop.x,
      y: targetPoint.y,
    };
    data.data.width = width;
    data.data.height = box.rightBottom.y - targetPoint.y;

    return true;
  }

  /**
   * 通过右上角修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整右上角来修改菱形的宽度和高度
   */
  protected modifyDataByRightTop(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过左下角
    if (targetPoint.x < box.leftTop.x || targetPoint.y > box.leftBottom.y) return false;

    // 修改左上角点、宽度和高度
    data.data.leftTopPoint = {
      x: box.leftTop.x,
      y: targetPoint.y,
    };
    data.data.width = targetPoint.x - box.leftTop.x;
    data.data.height = box.rightBottom.y - targetPoint.y;

    return true;
  }

  /**
   * 通过右边中心修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整右边中心来修改菱形的宽度
   */
  protected modifyDataByRightCenter(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    const { leftTopPoint, height } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过左边
    if (targetPoint.x < box.leftTop.x) return false;

    // 修改宽度
    data.data.leftTopPoint = { ...leftTopPoint };
    data.data.width = targetPoint.x - box.leftTop.x;
    data.data.height = height;

    return true;
  }

  /**
   * 通过右下角修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整右下角来修改菱形的宽度和高度
   */
  protected modifyDataByRightBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    const { leftTopPoint } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过左上角
    if (targetPoint.x < box.leftTop.x || targetPoint.y < box.leftTop.y) return false;

    // 修改宽度和高度
    data.data.leftTopPoint = { ...leftTopPoint };
    data.data.width = targetPoint.x - box.leftTop.x;
    data.data.height = targetPoint.y - box.leftTop.y;

    return true;
  }

  /**
   * 通过下边中心修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整下边中心来修改菱形的高度
   */
  protected modifyDataByCenterBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    const { leftTopPoint, width } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过上边
    if (targetPoint.y < box.leftTop.y) return false;

    // 修改高度
    data.data.leftTopPoint = { ...leftTopPoint };
    data.data.width = width;
    data.data.height = targetPoint.y - box.leftTop.y;

    return true;
  }

  /**
   * 通过左下角修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整左下角来修改菱形的宽度和高度
   */
  protected modifyDataByLeftBottom(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    const { leftTopPoint } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过右上角
    if (targetPoint.x > box.rightBottom.x || targetPoint.y < box.rightTop.y) return false;

    // 修改左上角点、宽度和高度
    data.data.leftTopPoint = {
      x: targetPoint.x,
      y: leftTopPoint.y,
    };
    data.data.width = box.rightBottom.x - targetPoint.x;
    data.data.height = targetPoint.y - box.rightTop.y;

    return true;
  }

  /**
   * 通过左边中心修改数据
   * @param targetPoint - 目标点坐标
   * @returns 修改是否成功
   * @description 通过调整左边中心来修改菱形的宽度
   */
  protected modifyDataByLeftCenter(targetPoint: IPoint): boolean {
    const { context } = this;

    const ctx = context?.getCtx();
    if (!context || !ctx || !this.data || !this.startPoint) return false;

    const data = context.getHistoryDataById(this.data.data.id);
    if (!data) return false;

    const { leftTopPoint, height } = data.data;

    // 计算出四个角的坐标
    const box = this.getBox();
    if (!box) return false;

    // 范围限制：不能超过右边
    if (targetPoint.x > box.rightBottom.x) return false;

    // 修改左上角点和宽度
    data.data.leftTopPoint = {
      x: targetPoint.x,
      y: leftTopPoint.y,
    };
    data.data.width = box.rightBottom.x - targetPoint.x;
    data.data.height = height;

    return true;
  }

  /**
   * 判断是否可以移动
   * @param targetPoint - 目标点坐标
   * @returns 是否可以移动到目标点
   * @description 检查目标点是否在菱形内部且不在控制锚点内
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
   * 绘制移动时的几何图形
   * @description 在辅助Canvas上绘制移动中的菱形
   */
  drawMoveGeometry(): void;
  /**
   * 绘制移动时的几何图形
   * @param startPoint - 起始点坐标
   * @param targetPoint - 目标点坐标
   * @returns 移动后的菱形数据，如果无法移动则返回null
   * @description 在辅助Canvas上绘制移动中的菱形，并返回移动后的数据
   */
  drawMoveGeometry(startPoint: IPoint, targetPoint: IPoint): IActionData | null;
  drawMoveGeometry(startPoint?: IPoint, targetPoint?: IPoint): IActionData | null | void {
    if (!this.context || !this.data) return;

    // 无参数版本
    if (!startPoint || !targetPoint) {
      DiamondDrawAction.draw(
        this.context.getAssistCtx() as CanvasRenderingContext2D,
        this.data as IDiamondData,
      );
      return;
    }

    // 带参数版本
    // 深拷贝原始数据
    const srcData = JSON.parse(JSON.stringify(this.data.data as IDiamondData));
    srcData.data = {
      ...srcData.data,
      leftTopPoint: {
        ...srcData.data.leftTopPoint,
      },
    };

    // 计算偏移量
    const offsetX = targetPoint.x - startPoint.x;
    const offsetY = targetPoint.y - startPoint.y;

    if (srcData.data && srcData.data.leftTopPoint) {
      // 移动左上角点
      srcData.data.leftTopPoint.x += offsetX;
      srcData.data.leftTopPoint.y += offsetY;

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
      DiamondDrawAction.draw(this.context.getAssistCtx() as CanvasRenderingContext2D, srcData);
    }

    return srcData;
  }

  /**
   * 销毁Action
   * @description 清理资源，重置起始索引
   */
  destroy(): void {
    this.startIndex = -1;
    super.destroy();
  }
}

export default DiamondModifyAction;
