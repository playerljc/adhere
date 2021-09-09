// @ts-ignore
import MathUtil from '@baifendian/adhere-util/lib/math.js';
// @ts-ignore
import Intl from '@baifendian/adhere-util-intl';

import { IInteractionLayer, IPoint, SelectType } from '../types';
import { IGeometryStyle } from '../../types';
import PolygonDrawAction from './PolygonDrawAction';
import DistancePointStyle from '../../style/DistancePointStyle';
import RadiusRectGeometry from '../../geom/RadiusRectGeometry';
import GeometryStyle from '../../style/GeometryStyle';

/**
 * DistanceDrawAction
 * @class DistanceDrawAction
 * @classdesc 测距离
 */
class DistanceDrawAction extends PolygonDrawAction {
  constructor() {
    super();

    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
    this.onCanvasDbClick = this.onCanvasDbClick.bind(this);

    this.onCursorMouseMove = this.onCursorMouseMove.bind(this);
  }

  /**
   * onCursorMouseMove
   * @description - 监控光标移动的事件
   * @param e
   */
  protected onCursorMouseMove(e): void {
    const { context, pointStack } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    // 当前点
    const targetPixel = MathUtil.clientToCtxPoint({
      event: e,
      rect: canvasEl?.getBoundingClientRect() as DOMRect,
    });

    // 计算距离
    let distance = 0;

    // 1 2 3
    if (!pointStack.length) return;

    for (let i = 0; i < pointStack.length - 1; i++) {
      const fFromPixel = pointStack[i];
      const tToPixel = pointStack[i + 1];
      const itemDistance = MathUtil.getDistanceByBetweenPoint({ p1: fFromPixel, p2: tToPixel });

      distance += itemDistance;
    }

    const moveDistance = MathUtil.getDistanceByBetweenPoint({
      p1: pointStack[pointStack.length - 1],
      p2: targetPixel,
    });

    // 转换成实际距离
    distance = context.distanceToActual(distance + moveDistance);

    const ctx = context.getCtx() as CanvasRenderingContext2D;
    const width = 120;
    const height = 50;
    const radius = 2;

    const toolTipPixel = {
      x: targetPixel.x + 10,
      y: targetPixel.y - height / 2,
    };

    const toolTipPoint = context.pixelToPoint(toolTipPixel);

    RadiusRectGeometry.drawRadiusRect({
      ctx: ctx,
      style: {
        ...GeometryStyle,
        lineWidth: 1,
        strokeStyle: 'red',
        fillStyle: '#fff',
      },
      coordinates: {
        leftTop: {
          lng: toolTipPoint.x,
          lat: toolTipPoint.y,
        },
        width,
        height,
        radius,
      },
      map: context.getMap(),
      isScale: false,
    });

    let distanceText = '';
    if (distance < 1000) {
      distanceText = `${distance.toFixed(2)}${Intl.v('米')}`;
    } else {
      // @ts-ignore
      distanceText = `${MathUtil.distance(distance, 'kilometer').toFixed(2)}${Intl.v('公里')}`;
    }

    ctx.save();
    ctx.beginPath();
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#000';
    ctx.fillText(
      `总长：${distanceText}`,
      toolTipPixel.x + width / 2,
      toolTipPixel.y + (height / 4) * 2,
      ctx.measureText(`${Intl.v('总长')}：${distanceText}`).width,
    );
    ctx.fillText(
      '单击确定地点，双击结束',
      toolTipPixel.x + width / 2,
      toolTipPixel.y + (height / 4) * 3,
      ctx.measureText(`${Intl.v('单击确定地点，双击结束')}：${distanceText}`).width,
    );
    ctx.restore();
  }

  /**
   * drawHistoryPath - 绘制历史数据
   * @param context
   * @param ctx
   * @param data
   */
  static drawHistoryPath(
    context: IInteractionLayer,
    ctx: CanvasRenderingContext2D,
    data: IPoint[] = [],
  ): void {
    ctx.save();
    ctx.beginPath();

    const realData = PolygonDrawAction.transformOriginToReal(context, data);

    (realData || []).forEach((pixel: IPoint, index: number) => {
      if (index === 0) {
        ctx.moveTo(pixel.x, pixel.y);
      } else {
        ctx.lineTo(pixel.x, pixel.y);
      }
    });

    // 描边
    ctx.stroke();
    ctx.restore();

    data.forEach((point: IPoint) => {
      this.drawStartPoint({
        context,
        ctx,
        style: DistancePointStyle,
        pointStack: data,
        toPoint: point,
      });
    });
  }

  /**
   * drawStartPoint
   * @param context
   * @param ctx
   * @param style
   * @param pointStack
   * @param toPoint
   */
  static drawStartPoint({
    context,
    ctx,
    style,
    pointStack,
    toPoint,
  }: {
    context: IInteractionLayer;
    pointStack: IPoint[];
    toPoint: IPoint;
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
  }): void {
    const toPixel = context.pointToPixel(toPoint);

    // 绘制toolTip的文字
    const pointIndex = pointStack.findIndex((point) => {
      const itemPointStr = JSON.stringify(point);
      const toPointStr = JSON.stringify(toPoint);
      return itemPointStr === toPointStr;
    });

    {
      const circleRadius = 6;

      // 绘制圆圈
      ctx.save();
      ctx.beginPath();

      ctx.fillStyle = style.fillStyle;
      ctx.strokeStyle = style.strokeStyle;
      ctx.lineWidth = style.lineWidth;

      // 需要转换
      ctx.ellipse(
        toPixel.x,
        toPixel.y,
        circleRadius,
        circleRadius,
        (45 * Math.PI) / 180,
        0,
        2 * Math.PI,
      );

      ctx.stroke();
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.font = '9px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'blue';
      ctx.fillText(`${pointIndex + 1}`, toPixel.x, toPixel.y);
      ctx.restore();
    }

    /*------------------------------------------------------------------------------------------*/

    {
      // 绘制tooltip
      const width = 50;
      const height = 20;
      const radius = 2;

      const toolTipPixel = {
        x: toPixel.x + 10,
        y: toPixel.y - height / 2,
      };

      const toolTipPoint = context.pixelToPoint(toolTipPixel);

      // 绘制toolTip的框
      RadiusRectGeometry.drawRadiusRect({
        ctx,
        style: {
          ...GeometryStyle,
          lineWidth: 1,
          strokeStyle: '#000',
          fillStyle: '#fff',
        },
        coordinates: {
          leftTop: {
            lng: toolTipPoint.x,
            lat: toolTipPoint.y,
          },
          width,
          height,
          radius,
        },
        map: context.getMap(),
        isScale: false,
      });

      let toolTip = '';

      if (pointIndex === 0) {
        toolTip = Intl.v('起点');
      } else {
        // 计算距离
        let distance = 0;

        for (let i = 0; i < pointIndex; i++) {
          const fFromPixel = context.pointToPixel(pointStack[i]);
          const tToPixel = context.pointToPixel(pointStack[i + 1]);
          const itemDistance = MathUtil.getDistanceByBetweenPoint({ p1: fFromPixel, p2: tToPixel });

          distance += itemDistance;
        }

        // 转换成实际距离
        distance = context.distanceToActual(distance);

        if (distance < 1000) {
          toolTip = `${distance.toFixed(2)}${Intl.v('米')}`;
        } else {
          // @ts-ignore
          toolTip = `${MathUtil.distance(distance, 'kilometer').toFixed(2)}${Intl.v('公里')}`;
        }
      }

      // 绘制到中心点上
      ctx.save();
      ctx.beginPath();
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000';
      ctx.fillText(toolTip, toolTipPixel.x + width / 2, toolTipPixel.y + height / 2);
      ctx.restore();
    }
  }

  /**
   * drawStartPoint
   * @description - 绘制开始点和点的提示框
   */
  protected drawStartPoint(): void {
    const { context, startPoint } = this;

    if (!context) return;

    const ctx = context.getCtx();

    if (!ctx) return;

    const { pointStack } = this;

    DistanceDrawAction.drawStartPoint({
      context,
      ctx,
      style: DistancePointStyle,
      pointStack: PolygonDrawAction.transformRealToOrigin(context, [...pointStack]),
      toPoint: context.pixelToPoint(startPoint as IPoint),
    });
  }

  /**
   * fill
   * @override
   */
  protected fill(): void {
    const { context } = this;

    if (!context) return;

    const { pointStack } = this;

    const ctx = context.getCtx();

    if (!ctx) return;

    if (pointStack.length <= 1) {
      if (pointStack.length === 1) {
        DistanceDrawAction.drawStartPoint({
          context,
          ctx: context.getCtx() as CanvasRenderingContext2D,
          style: DistancePointStyle,
          pointStack: PolygonDrawAction.transformRealToOrigin(context, pointStack),
          toPoint: context.pixelToPoint(pointStack[0]),
        });
      }

      return;
    }

    ctx.fillStyle = this.style.fillStyle;

    ctx.save();
    ctx.beginPath();

    for (let i = 0; i < pointStack.length; i++) {
      const point = pointStack[i];

      if (i === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    }

    ctx.stroke();
    ctx.restore();

    const originData = PolygonDrawAction.transformRealToOrigin(context, pointStack);

    originData.forEach((point: IPoint, index: number) => {
      DistanceDrawAction.drawStartPoint({
        context,
        ctx,
        style: DistancePointStyle,
        pointStack: originData,
        toPoint: originData[index],
      });
    });
  }

  /**
   * drawStack
   * @override
   */
  protected drawStack(): void {
    const { pointStack, context } = this;

    if (!context) return;

    if (pointStack.length <= 1) {
      if (pointStack.length === 1) {
        DistanceDrawAction.drawStartPoint({
          context,
          ctx: context.getCtx() as CanvasRenderingContext2D,
          style: DistancePointStyle,
          pointStack: PolygonDrawAction.transformRealToOrigin(context, pointStack),
          toPoint: context.pixelToPoint(pointStack[0]),
        });
      }

      return;
    }

    let index = 0;

    do {
      if (index !== pointStack.length - 1) {
        this.drawLine(pointStack[index], pointStack[index + 1]);
      }

      DistanceDrawAction.drawStartPoint({
        context,
        ctx: context.getCtx() as CanvasRenderingContext2D,
        style: DistancePointStyle,
        pointStack: PolygonDrawAction.transformRealToOrigin(context, pointStack),
        toPoint: context.pixelToPoint(pointStack[index]),
      });

      index++;
    } while (index < pointStack.length);
  }

  /**
   * getCanvasClick
   * @override
   */
  protected getCanvasClick() {
    return this.onCanvasClick;
  }

  /**
   * getCanvasMousemove
   * @override
   */
  protected getCanvasMousemove() {
    return this.onCanvasMousemove;
  }

  /**
   * getCanvasDbClick
   * @override
   */
  protected getCanvasDbClick() {
    return this.onCanvasDbClick;
  }

  /**
   * onCanvasClick
   * @override
   * @param e
   */
  protected onCanvasClick(e): void {
    if (e.detail >= 2) {
      return;
    }

    super.onCanvasClick(e);

    // 画点
    this.drawStartPoint();

    // super.end();
  }

  /**
   * onCanvasMousemove
   * @override
   * @param e
   */
  protected onCanvasMousemove(e): void {
    super.onCanvasMousemove(e);
    this.onCursorMouseMove(e);
  }

  /**
   * onCanvasDbClick
   * @override
   * @param e
   */
  protected onCanvasDbClick(e): void {
    super.onCanvasDbClick(e);
  }

  getSelectType(): SelectType {
    return SelectType.Distance;
  }

  /**
   * end
   * @override
   */
  end() {
    super.end();
  }

  /**
   * destroy
   * @override
   */
  destroy(): void {
    super.destroy();
  }

  /**
   * setCursor
   * @override
   * @description 设置光标
   */
  setCursor() {
    const { context } = this;

    if (!context) return;

    const canvasEl = context.getCanvasEl();

    if (!canvasEl) return;

    canvasEl.style.cursor = `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjMxMDY4ODUyOTU4IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5ODAiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQxNiA4MjQuNkwyMjUuMSA2NjguNyA3MTYgOTYuMSA5MDYuOSAyNTJ6IiBmaWxsPSIjZDgxZTA2IiBwLWlkPSIyOTgxIj48L3BhdGg+PHBhdGggZD0iTTc4NiA5MjcuM2MtNC41IDAtOC44LTEuNi0xMi4yLTQuNEw1MjQuNSA3MTMuOGMtOC4xLTYuOC05LjEtMTguOC0yLjQtMjYuOCA2LjgtOCAxOC44LTkuMSAyNi44LTIuNGwyMzQuNyAxOTYuOEw5MTUgNzI0LjggNjc0LjYgNTIzLjJjLTguMS02LjgtOS4xLTE4LjgtMi40LTI2LjggNi44LTggMTguOC05LjEgMjYuOC0yLjRsMjU1IDIxMy45YzguMSA2LjggOS4xIDE4LjggMi40IDI2LjhMODAwLjYgOTIwLjVjLTMuMyAzLjktNy45IDYuMy0xMi45IDYuNy0wLjYgMC4xLTEuMiAwLjEtMS43IDAuMXpNMzQwLjIgNTUzLjVjLTQuMyAwLTguNi0xLjUtMTIuMi00LjRMNzEgMzMzLjZjLTguMS02LjgtOS4xLTE4LjgtMi40LTI2LjhMMjI0LjQgMTIxYzYuOC04IDE4LjgtOS4xIDI2LjgtMi40bDI1My41IDIxMi42YzguMSA2LjggOS4xIDE4LjggMi40IDI2LjgtNi44IDguMS0xOC43IDkuMS0yNi44IDIuNEwyNDEuNCAxNjAgMTEwLjEgMzE2LjZsMjQyLjMgMjAzLjJjOC4xIDYuOCA5LjEgMTguOCAyLjQgMjYuOC0zLjggNC42LTkuMiA2LjktMTQuNiA2Ljl6IiBmaWxsPSIjZDgxZTA2IiBwLWlkPSIyOTgyIj48L3BhdGg+PHBhdGggZD0iTTIzOC44IDMxOC4yYy00LjMgMC04LjYtMS41LTEyLjItNC40LTguMS02LjgtOS4xLTE4LjgtMi40LTI2LjhsNzcuOS05Mi45YzYuOC04IDE4LjgtOS4xIDI2LjgtMi40IDguMSA2LjggOS4xIDE4LjggMi40IDI2LjhsLTc3LjkgOTIuOWMtMy43IDQuNS05LjEgNi44LTE0LjYgNi44ek0zNzkuMyAzNjQuOGMtNC4zIDAtOC42LTEuNS0xMi4yLTQuNC04LjEtNi44LTkuMS0xOC44LTIuNC0yNi44bDQyLjktNTEuMWM2LjgtOC4xIDE4LjgtOS4xIDI2LjgtMi40IDguMSA2LjggOS4xIDE4LjggMi40IDI2LjhMMzkzLjkgMzU4Yy0zLjggNC41LTkuMiA2LjgtMTQuNiA2Ljh6TTgwMC45IDcxOC4zYy00LjMgMC04LjYtMS41LTEyLjItNC40LTguMS02LjgtOS4xLTE4LjgtMi40LTI2LjhsNDIuOS01MS4xYzYuOC04LjEgMTguOC05LjEgMjYuOC0yLjQgOC4xIDYuOCA5LjEgMTguOCAyLjQgMjYuOGwtNDIuOSA1MS4xYy0zLjcgNC41LTkuMSA2LjgtMTQuNiA2Ljh6TTY2MC41IDY3MS43Yy00LjMgMC04LjYtMS41LTEyLjItNC40LTguMS02LjgtOS4xLTE4LjgtMi40LTI2LjhsNzcuOS05Mi45YzYuOC04LjEgMTguOC05LjEgMjYuOC0yLjQgOC4xIDYuOCA5LjEgMTguOCAyLjQgMjYuOGwtNzcuOSA5Mi45Yy0zLjggNC41LTkuMiA2LjgtMTQuNiA2Ljh6TTQxNiA4NDMuNmMtNC4yIDAtOC41LTEuNC0xMi00LjNMMjEzIDY4My41Yy00LTMuMi02LjUtOC02LjktMTMuMS0wLjQtNS4xIDEuMi0xMC4yIDQuNS0xNC4xTDcwMS41IDgzLjdjNi43LTcuOCAxOC41LTguOSAyNi41LTIuNGwxOTAuOSAxNTUuOWM0IDMuMiA2LjUgOCA2LjkgMTMuMSAwLjQgNS4xLTEuMiAxMC4yLTQuNSAxNC4xTDQzMC40IDgzN2MtMy43IDQuNC05LjEgNi42LTE0LjQgNi42ek0yNTIuMiA2NjYuM2wxNjEuNCAxMzEuOCA0NjYuMS01NDMuNy0xNjEuNC0xMzEuOC00NjYuMSA1NDMuN3oiIGZpbGw9IiNkODFlMDYiIHAtaWQ9IjI5ODMiPjwvcGF0aD48cGF0aCBkPSJNMTY4LjEgOTUyLjRjLTQuMyAwLTguNi0xLjUtMTIuMS00LjMtNS4zLTQuMy03LjgtMTEuMS02LjgtMTcuOGw0MC45LTI1MS40YzEuNy0xMC40IDExLjYtMTcuNCAyMS45LTE1LjggMTAuNCAxLjcgMTcuNCAxMS41IDE1LjggMjEuOWwtMzUuNiAyMTguOSAyMDcuMy03OC42YzkuOC0zLjggMjAuOCAxLjIgMjQuNiAxMSAzLjcgOS44LTEuMiAyMC44LTExIDI0LjZMMTc1IDk1MS4yYy0yLjQgMC44LTQuNyAxLjItNi45IDEuMnoiIGZpbGw9IiNkODFlMDYiIHAtaWQ9IjI5ODQiPjwvcGF0aD48L3N2Zz4=), auto`;
  }
}

export default DistanceDrawAction;
