import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { IPoint, IWritingBoardProps, Mode } from './types';

const selectorPrefix = 'adhere-ui-writingboard';

/**
 * WritingBoard
 * @param props
 * @param ref
 * @constructor
 */
function WritingBoard(props: IWritingBoardProps, ref) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const rect = useRef<DOMRect | null>(null);

  const startPoint = useRef<IPoint | null>(null);
  const prePoint = useRef<IPoint | null>(null);
  const curShape = useRef<Mode>(props.mode);
  const stack = useRef<any>([]);
  const stackIndex = useRef<number>(0);

  const config = useRef<Map<Mode, any>>(
    new Map([
      // 自由模式
      [
        Mode.FREE,
        {
          draw({ sourcePoint, targetPoint }) {
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(sourcePoint.x, sourcePoint.y);
            ctx?.current?.lineTo(targetPoint.x, targetPoint.y);

            stack.current.push({
              shape: curShape.current,
              sourcePoint,
              targetPoint,
            });

            style({
              lineWidth: props.lineWidth,
              strokeStyle: props.strokeStyle,
            });

            // 描边
            ctx?.current?.stroke();
          },
          drawStack(item) {
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx?.current?.lineTo(item.targetPoint.x, item.targetPoint.y);

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.current?.stroke();
          },
          mouseup(point) {
            draw({ sourcePoint: prePoint.current, targetPoint: point });
          },
        },
      ],
      // 直线
      [
        Mode.LINE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.current?.clearRect(0, 0, canvasRef?.current?.width!, canvasRef?.current?.height!);
            drawStack();
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(startPoint?.current?.x!, startPoint?.current?.y!);
            ctx?.current?.lineTo(targetPoint.x, targetPoint.y);

            style({
              lineWidth: props.lineWidth,
              strokeStyle: props.strokeStyle,
            });

            // 描边
            ctx?.current?.stroke();
          },
          drawStack(item) {
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx?.current?.lineTo(item.targetPoint.x, item.targetPoint.y);

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.current?.stroke();
          },
          mouseup(point) {
            stack.current.push({
              shape: curShape.current,
              lineWidth: ctx?.current?.lineWidth,
              strokeStyle: ctx?.current?.strokeStyle,
              sourcePoint: startPoint.current,
              targetPoint: point,
            });
          },
        },
      ],
      // 矩形
      [
        Mode.RECTANGLE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.current?.clearRect(0, 0, canvasRef?.current?.width!, canvasRef?.current?.height!);
            drawStack();
            ctx?.current?.beginPath();

            // 判断target在start的四个方向
            const rectStart = getPoint({ startPoint: startPoint.current, targetPoint });
            ctx?.current?.rect(
              rectStart.x,
              rectStart.y,
              Math.abs(targetPoint.x - startPoint?.current?.x!),
              Math.abs(targetPoint.y - startPoint?.current?.y!),
            );

            style({
              lineWidth: props.lineWidth,
              strokeStyle: props.strokeStyle,
            });

            // 描边
            ctx?.current?.stroke();
          },
          drawStack(item) {
            ctx?.current?.beginPath();
            ctx?.current?.rect(item.x, item.y, item.width, item.height);

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.current?.stroke();
          },
          mouseup(point) {
            const rectStart = getPoint({ startPoint: startPoint.current, targetPoint: point });

            stack.current.push({
              shape: curShape.current,
              lineWidth: ctx?.current?.lineWidth,
              strokeStyle: ctx?.current?.strokeStyle,
              x: rectStart.x,
              y: rectStart.y,
              width: Math.abs(point.x - startPoint?.current?.x!),
              height: Math.abs(point.y - startPoint?.current?.y!),
            });
          },
        },
      ],
      // 圆形
      [
        Mode.CIRCLE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.current?.clearRect(0, 0, canvasRef?.current?.width!, canvasRef?.current?.height!);
            drawStack();

            ctx?.current?.beginPath();
            // 判断target在start的四个方向
            const rectStart = getPoint({ startPoint: startPoint.current, targetPoint });
            const radius = getDistanceByBetweenPoint({ p2: targetPoint, p1: startPoint.current });
            ctx?.current?.ellipse(
              rectStart.x,
              rectStart.y,
              radius,
              radius,
              (45 * Math.PI) / 180,
              0,
              2 * Math.PI,
            );

            style({
              lineWidth: props.lineWidth,
              strokeStyle: props.strokeStyle,
            });

            // 描边
            ctx?.current?.stroke();
          },
          drawStack(item) {
            ctx?.current?.beginPath();
            ctx?.current?.ellipse(
              item.x,
              item.y,
              item.radiusX,
              item.radiusY,
              item.rotation,
              item.startAngle,
              item.endAngle,
            );

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.current?.stroke();
          },
          mouseup(point) {
            const center = getPoint({ startPoint: startPoint.current, targetPoint: point });
            const radius = getDistanceByBetweenPoint({ p2: point, p1: startPoint?.current });
            stack.current.push({
              shape: curShape.current,
              lineWidth: ctx?.current?.lineWidth,
              strokeStyle: ctx?.current?.strokeStyle,
              x: center.x,
              y: center.y,
              radiusX: radius,
              radiusY: radius,
              rotation: (45 * Math.PI) / 180,
              startAngle: 0,
              endAngle: 2 * Math.PI,
            });
          },
        },
      ],
      // 三角形(多边形)
      [
        Mode.TRIANGLE,
        {
          draw({ targetPoint }) {
            // 清除画布
            ctx?.current?.clearRect(0, 0, canvasRef?.current?.width!, canvasRef?.current?.height!);
            drawStack();
            ctx?.current?.beginPath();

            const points = triangle({ startPoint: startPoint.current, targetPoint });
            ctx?.current?.moveTo(points[0].x, points[0].y);
            ctx?.current?.lineTo(points[1].x, points[1].y);
            ctx?.current?.lineTo(points[2].x, points[2].y);
            ctx?.current?.closePath();

            style({
              lineWidth: props.lineWidth,
              strokeStyle: props.strokeStyle,
            });

            // 描边
            ctx?.current?.stroke();
          },
          drawStack(item) {
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(item.points[0].x, item.points[0].y);
            ctx?.current?.lineTo(item.points[1].x, item.points[1].y);
            ctx?.current?.lineTo(item.points[2].x, item.points[2].y);
            ctx?.current?.closePath();

            style({
              lineWidth: item.lineWidth,
              strokeStyle: item.strokeStyle,
            });

            ctx?.current?.stroke();
          },
          mouseup(point) {
            const points = triangle({ startPoint: startPoint.current, targetPoint: point });

            stack.current.push({
              shape: curShape.current,
              lineWidth: ctx?.current?.lineWidth,
              strokeStyle: ctx?.current?.strokeStyle,
              points,
            });
          },
        },
      ],
      // 橡皮
      [
        Mode.RUBBER,
        {
          draw({ sourcePoint, targetPoint }) {
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(sourcePoint.x, sourcePoint.y);
            ctx?.current?.lineTo(targetPoint.x, targetPoint.y);

            stack.current.push({
              shape: curShape.current,
              sourcePoint,
              targetPoint,
            });

            (ctx.current as CanvasRenderingContext2D).lineWidth = 15;
            (ctx.current as CanvasRenderingContext2D).strokeStyle = '#fff';
            (ctx.current as CanvasRenderingContext2D).lineCap = 'round';
            (ctx.current as CanvasRenderingContext2D).lineJoin = 'round';
            ctx?.current?.stroke();
          },
          drawStack(item) {
            ctx?.current?.beginPath();
            ctx?.current?.moveTo(item.sourcePoint.x, item.sourcePoint.y);
            ctx?.current?.lineTo(item.targetPoint.x, item.targetPoint.y);

            (ctx.current as CanvasRenderingContext2D).lineWidth = 15;
            (ctx.current as CanvasRenderingContext2D).strokeStyle = '#fff';
            (ctx.current as CanvasRenderingContext2D).lineCap = 'round';
            (ctx.current as CanvasRenderingContext2D).lineJoin = 'round';
            ctx?.current?.stroke();
          },
          mouseup(point) {
            draw({ sourcePoint: prePoint.current, targetPoint: point });
          },
        },
      ],
    ]),
  );

  /**
   * style
   * @param lineWidth
   * @param strokeStyle
   */
  function style({ lineWidth, strokeStyle }) {
    (ctx.current as CanvasRenderingContext2D).lineWidth = lineWidth;
    (ctx.current as CanvasRenderingContext2D).strokeStyle = strokeStyle;
    (ctx.current as CanvasRenderingContext2D).lineCap = 'round';
    (ctx.current as CanvasRenderingContext2D).lineJoin = 'round';
  }

  /**
   * triangle - 获取三角形的三个点坐标
   * @param startPoint
   * @param targetPoint
   */
  function triangle({ startPoint, targetPoint }) {
    const s = getPoint({ startPoint, targetPoint });

    const w = Math.abs(targetPoint.x - startPoint.x);
    const h = Math.abs(targetPoint.y - startPoint.y);

    const point1 = {
      x: s.x,
      y: s.y + h,
    };

    const point2 = {
      x: s.x + w / 2,
      y: s.y,
    };

    const point3 = {
      x: s.x + w,
      y: s.y + h,
    };
    return [point1, point2, point3];
  }

  /**
   * devicePointToCanvasPoint
   * @param pageX
   * @param pageY
   */
  function devicePointToCanvasPoint({ pageX, pageY }): IPoint {
    const { x, y } = rect.current!;

    return {
      x: pageX - x,
      y: pageY - y,
    };
  }

  /**
   * getDistanceByBetweenPoint
   * @description 获取p1,p2两点间的距离
   * @param p1
   * @param p2
   */
  function getDistanceByBetweenPoint({ p1, p2 }) {
    const { x: Ax1, y: Ay1 } = p1;
    const { x: Ax2, y: Ay2 } = p2;
    return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2)); // 计算A1A2的长度
  }

  /**
   * drawStack
   */
  function drawStack() {
    for (let i = 0; i < stack.current.length; i++) {
      const item = stack.current[i];
      config.current.get(item.shape).drawStack(item);
    }
  }

  /**
   * getPoint
   * @param startPoint
   * @param targetPoint
   */
  function getPoint({ startPoint, targetPoint }) {
    if (targetPoint.x <= startPoint.x && targetPoint.y <= startPoint.y) {
      // leftTop
      return targetPoint;
    } else if (targetPoint.x <= startPoint.x && targetPoint.y >= startPoint.y) {
      // leftBottom
      return {
        x: targetPoint.x,
        y: startPoint.y,
      };
    } else if (targetPoint.x >= startPoint.x && targetPoint.y <= startPoint.y) {
      // rightTop
      return {
        x: startPoint.x,
        y: targetPoint.y,
      };
    } else if (targetPoint.x >= startPoint.x && targetPoint.y >= startPoint.y) {
      // rightBottom
      return startPoint;
    }
  }

  /**
   * draw
   * @param sourcePoint
   * @param targetPoint
   */
  function draw({ sourcePoint, targetPoint }) {
    const entry = config?.current?.get(curShape.current);
    entry.draw({ sourcePoint, targetPoint });
  }

  // 注册事件
  function onMousemove(e) {
    move(e);
  }

  function onTouchmove(e) {
    move({
      ...e,
      pageX: e.targetTouches[0].pageX,
      pageY: e.targetTouches[0].pageY,
    });
  }

  function onMouseup(e) {
    end(e);
  }

  function onTouchend(e) {
    end({
      ...e,
      pageX: e.changedTouches[0].pageX,
      pageY: e.changedTouches[0].pageY,
    });
  }

  /**
   * start
   * @param e
   */
  function start(e) {
    // 屏幕坐标转换成canvas坐标
    const { pageX, pageY } = e;

    startPoint.current = prePoint.current = devicePointToCanvasPoint({ pageX, pageY });

    containerRef?.current?.addEventListener('mousemove', onMousemove);
    containerRef?.current?.addEventListener('mouseup', onMouseup);
    containerRef?.current?.addEventListener('touchmove', onTouchmove);
    containerRef?.current?.addEventListener('touchend', onTouchend);
  }

  /**
   * move
   * @param e
   */
  function move(e) {
    const { pageX, pageY } = e;

    const point = devicePointToCanvasPoint({ pageX, pageY });
    draw({ sourcePoint: prePoint.current, targetPoint: point });
    prePoint.current = point;
  }

  /**
   * end
   * @param e
   */
  function end(e) {
    const { pageX, pageY } = e;

    const point = devicePointToCanvasPoint({ pageX, pageY });

    config?.current.get(curShape.current)?.mouseup(point);

    startPoint.current = null;
    prePoint.current = null;

    containerRef?.current?.removeEventListener('mousemove', onMousemove);
    containerRef?.current?.removeEventListener('mouseup', onMouseup);
    containerRef?.current?.removeEventListener('touchmove', onTouchmove);
    containerRef?.current?.removeEventListener('touchend', onTouchend);
  }

  useImperativeHandle(ref, () => ({
    /**
     * clear
     * @description 清除画布
     */
    clear: () => {
      ctx?.current?.clearRect(0, 0, canvasRef?.current?.width!, canvasRef?.current?.height!);

      prePoint.current = startPoint.current = null;

      stack.current = [];

      stackIndex.current = 0;
    },
    /**
     * toDataURL
     * @description 获取base64
     */
    toDataURL: () => canvasRef?.current?.toDataURL('image/png', 1.0),
  }));

  useLayoutEffect(() => {
    ctx.current = canvasRef?.current?.getContext('2d')!;
    rect.current = canvasRef?.current?.getBoundingClientRect()!;
    (canvasRef.current as HTMLCanvasElement).width = containerRef?.current?.offsetWidth!;
    (canvasRef.current as HTMLCanvasElement).height = containerRef?.current?.offsetHeight!;
  }, []);

  useLayoutEffect(() => {
    function onMousedown(e) {
      start(e);
    }

    function onTouchstart(e) {
      start({ ...e, pageX: e.targetTouches[0].pageX, pageY: e.targetTouches[0].pageY });
    }

    containerRef?.current?.addEventListener('mousedown', onMousedown);
    containerRef?.current?.addEventListener('touchstart', onTouchstart);

    return () => {
      containerRef?.current?.removeEventListener('mousedown', onMousedown);
      containerRef?.current?.removeEventListener('touchstart', onTouchstart);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={classNames(selectorPrefix, props.className || '')}
      style={props.style || {}}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

const Wrap = forwardRef(WritingBoard);

Wrap.defaultProps = {
  className: '',
  style: {},
  mode: Mode.FREE,
  strokeStyle: '#000',
  lineWidth: 2,
};

Wrap.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  // @ts-ignore
  mode: PropTypes.string,
  // @ts-ignore
  strokeStyle: PropTypes.string,
  // @ts-ignore
  lineWidth: PropTypes.number,
};

export default Wrap;