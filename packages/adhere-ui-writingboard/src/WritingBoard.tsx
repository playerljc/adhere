import classNames from 'classnames';
import debounce from 'lodash.debounce';
import React, {
  type PropsWithoutRef,
  type RefAttributes,
  forwardRef,
  memo,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react';

import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import Util from '@baifendian/adhere-util';
import { ResizeObserver } from '@juggle/resize-observer';

import Signature from './signature';
import MobileSignature from './signature/mobile';
import {
  Mode,
  type Point,
  type WritingBoardComponent,
  type WritingBoardHandle,
  type WritingBoardProps,
} from './types';

const selectorPrefix = 'adhere-ui-writing-board';

const { useTheme } = ConfigProvider;

/**
 * 画板组件
 * @description 提供多种绘制模式的画板功能，支持自由绘制、直线、矩形、圆形、三角形等图形绘制
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 画板组件实例
 */
const InternalWritingBoard = memo<
  PropsWithoutRef<WritingBoardProps> & RefAttributes<WritingBoardHandle>
>(
  forwardRef<WritingBoardHandle, WritingBoardProps>((props, ref) => {
    const {
      defaultMode = Mode.FREE,
      defaultLineWidth = 2,
      defaultStrokeStyle = '#000',
      resizeTime = 300,
    } = props;

    const containerRef = useRef<HTMLDivElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctx = useRef<CanvasRenderingContext2D | null>(null);
    const ro = useRef<ResizeObserver | null>(null);

    const startPoint = useRef<Point | null>(null);
    const prePoint = useRef<Point | null>(null);
    const curShape = useRef<Mode>(defaultMode);
    const lineWidth = useRef<number>(defaultLineWidth);
    const strokeStyle = useRef<string>(defaultStrokeStyle);
    
    // 定义绘制栈项的类型
    type StackItem = {
      shape: Mode;
      sourcePoint?: Point;
      targetPoint?: Point;
      lineWidth?: number;
      strokeStyle?: string;
      x?: number;
      y?: number;
      width?: number;
      height?: number;
      radiusX?: number;
      radiusY?: number;
      rotation?: number;
      startAngle?: number;
      endAngle?: number;
      points?: Point[];
    };
    
    const stack = useRef<StackItem[]>([]);
    const stackIndex = useRef<number>(0);

    // 定义绘制配置的类型
    type DrawConfig = {
      draw: (params: { sourcePoint?: Point; targetPoint: Point }) => void;
      drawStack: (item: StackItem) => void;
      mouseup: (point: Point) => void;
    };

    const config = useRef<Map<Mode, DrawConfig>>(
      new Map([
        // 自由模式
        [
          Mode.FREE,
          {
            draw({ sourcePoint, targetPoint }) {
              if (!ctx.current || !sourcePoint) return;
              
              ctx.current.beginPath();
              ctx.current.moveTo(sourcePoint.x, sourcePoint.y);
              ctx.current.lineTo(targetPoint.x, targetPoint.y);

              stack.current.push({
                shape: curShape.current,
                sourcePoint,
                targetPoint,
              });

              style({
                lineWidth: lineWidth.current,
                strokeStyle: strokeStyle.current,
              });

              ctx.current.stroke();
            },
            drawStack(item) {
              if (!ctx.current || !item.sourcePoint || !item.targetPoint) return;
              
              ctx.current.beginPath();
              ctx.current.moveTo(item.sourcePoint.x, item.sourcePoint.y);
              ctx.current.lineTo(item.targetPoint.x, item.targetPoint.y);

              style({
                lineWidth: item.lineWidth || 2,
                strokeStyle: (item.strokeStyle as string) || '#000',
              });

              ctx.current.stroke();
            },
            mouseup(point) {
              if (prePoint.current) {
                draw({ sourcePoint: prePoint.current, targetPoint: point });
              }
            },
          },
        ],
        // 直线
        [
          Mode.LINE,
          {
            draw({ targetPoint }) {
              if (!ctx.current || !canvasRef.current || !startPoint.current) return;
              
              ctx.current.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height,
              );
              drawStack();
              ctx.current.beginPath();
              ctx.current.moveTo(startPoint.current.x, startPoint.current.y);
              ctx.current.lineTo(targetPoint.x, targetPoint.y);

              style({
                lineWidth: lineWidth.current,
                strokeStyle: strokeStyle.current,
              });

              ctx.current.stroke();
            },
            drawStack(item) {
              if (!ctx.current || !item.sourcePoint || !item.targetPoint) return;
              
              ctx.current.beginPath();
              ctx.current.moveTo(item.sourcePoint.x, item.sourcePoint.y);
              ctx.current.lineTo(item.targetPoint.x, item.targetPoint.y);

              style({
                lineWidth: item.lineWidth || 2,
                strokeStyle: (item.strokeStyle as string) || '#000',
              });

              ctx.current.stroke();
            },
            mouseup(point) {
              if (!startPoint.current) return;
              
              stack.current.push({
                shape: curShape.current,
                lineWidth: ctx.current?.lineWidth || 2,
                strokeStyle: (ctx.current?.strokeStyle as string) || '#000',
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
              if (!ctx.current || !canvasRef.current || !startPoint.current) return;
              
              ctx.current.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height,
              );
              drawStack();
              ctx.current.beginPath();

              const rectStart = getPoint({ startPoint: startPoint.current, targetPoint });
              ctx.current.rect(
                rectStart.x,
                rectStart.y,
                Math.abs(targetPoint.x - startPoint.current.x),
                Math.abs(targetPoint.y - startPoint.current.y),
              );

              style({
                lineWidth: lineWidth.current,
                strokeStyle: strokeStyle.current,
              });

              ctx.current.stroke();
            },
            drawStack(item) {
              if (!ctx.current) return;
              
              ctx.current.beginPath();
              ctx.current.rect(
                item.x || 0,
                item.y || 0,
                item.width || 0,
                item.height || 0,
              );

              style({
                lineWidth: item.lineWidth || 2,
                strokeStyle: (item.strokeStyle as string) || '#000',
              });

              ctx.current.stroke();
            },
            mouseup(point) {
              if (!startPoint.current) return;
              
              const rectStart = getPoint({ startPoint: startPoint.current, targetPoint: point });

              stack.current.push({
                shape: curShape.current,
                lineWidth: ctx.current?.lineWidth || 2,
                strokeStyle: (ctx.current?.strokeStyle as string) || '#000',
                x: rectStart.x,
                y: rectStart.y,
                width: Math.abs(point.x - startPoint.current.x),
                height: Math.abs(point.y - startPoint.current.y),
              });
            },
          },
        ],
        // 圆形
        [
          Mode.CIRCLE,
          {
            draw({ targetPoint }) {
              if (!ctx.current || !canvasRef.current || !startPoint.current) return;
              
              ctx.current.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height,
              );
              drawStack();

              ctx.current.beginPath();
              const center = getPoint({ startPoint: startPoint.current, targetPoint });
              const radius = getDistanceByBetweenPoint({
                p2: targetPoint,
                p1: startPoint.current,
              });
              ctx.current.ellipse(
                center.x,
                center.y,
                radius,
                radius,
                (45 * Math.PI) / 180,
                0,
                2 * Math.PI,
              );

              style({
                lineWidth: lineWidth.current,
                strokeStyle: strokeStyle.current,
              });

              ctx.current.stroke();
            },
            drawStack(item) {
              if (!ctx.current) return;
              
              ctx.current.beginPath();
              ctx.current.ellipse(
                item.x || 0,
                item.y || 0,
                item.radiusX || 0,
                item.radiusY || 0,
                item.rotation || 0,
                item.startAngle || 0,
                item.endAngle || 2 * Math.PI,
              );

              style({
                lineWidth: item.lineWidth || 2,
                strokeStyle: (item.strokeStyle as string) || '#000',
              });

              ctx.current.stroke();
            },
            mouseup(point) {
              if (!startPoint.current) return;
              
              const center = getPoint({ startPoint: startPoint.current, targetPoint: point });
              const radius = getDistanceByBetweenPoint({ p2: point, p1: startPoint.current });
              
              stack.current.push({
                shape: curShape.current,
                lineWidth: ctx.current?.lineWidth || 2,
                strokeStyle: (ctx.current?.strokeStyle as string) || '#000',
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
              if (!ctx.current || !canvasRef.current || !startPoint.current) return;
              
              ctx.current.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height,
              );
              drawStack();
              ctx.current.beginPath();

              const points = triangle({ startPoint: startPoint.current, targetPoint });
              ctx.current.moveTo(points[0].x, points[0].y);
              ctx.current.lineTo(points[1].x, points[1].y);
              ctx.current.lineTo(points[2].x, points[2].y);
              ctx.current.closePath();

              style({
                lineWidth: lineWidth.current,
                strokeStyle: strokeStyle.current,
              });

              ctx.current.stroke();
            },
            drawStack(item) {
              if (!ctx.current || !item.points) return;
              
              ctx.current.beginPath();
              ctx.current.moveTo(item.points[0].x, item.points[0].y);
              ctx.current.lineTo(item.points[1].x, item.points[1].y);
              ctx.current.lineTo(item.points[2].x, item.points[2].y);
              ctx.current.closePath();

              style({
                lineWidth: item.lineWidth || 2,
                strokeStyle: (item.strokeStyle as string) || '#000',
              });

              ctx.current.stroke();
            },
            mouseup(point) {
              if (!startPoint.current) return;
              
              const points = triangle({ startPoint: startPoint.current, targetPoint: point });

              stack.current.push({
                shape: curShape.current,
                lineWidth: ctx.current?.lineWidth || 2,
                strokeStyle: (ctx.current?.strokeStyle as string) || '#000',
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
              if (!ctx.current || !sourcePoint) return;
              
              ctx.current.beginPath();
              ctx.current.moveTo(sourcePoint.x, sourcePoint.y);
              ctx.current.lineTo(targetPoint.x, targetPoint.y);

              stack.current.push({
                shape: curShape.current,
                sourcePoint,
                targetPoint,
              });

              (ctx.current as CanvasRenderingContext2D).lineWidth = 15;
              (ctx.current as CanvasRenderingContext2D).strokeStyle = '#fff';
              (ctx.current as CanvasRenderingContext2D).lineCap = 'round';
              (ctx.current as CanvasRenderingContext2D).lineJoin = 'round';
              ctx.current.stroke();
            },
            drawStack(item) {
              if (!ctx.current || !item.sourcePoint || !item.targetPoint) return;
              
              ctx.current.beginPath();
              ctx.current.moveTo(item.sourcePoint.x, item.sourcePoint.y);
              ctx.current.lineTo(item.targetPoint.x, item.targetPoint.y);

              (ctx.current as CanvasRenderingContext2D).lineWidth = 15;
              (ctx.current as CanvasRenderingContext2D).strokeStyle = '#fff';
              (ctx.current as CanvasRenderingContext2D).lineCap = 'round';
              (ctx.current as CanvasRenderingContext2D).lineJoin = 'round';
              ctx.current.stroke();
            },
            mouseup(point) {
              if (prePoint.current) {
                draw({ sourcePoint: prePoint.current, targetPoint: point });
              }
            },
          },
        ],
      ]),
    );

    useTheme<HTMLElement>({
      elRef: containerRef,
      group: 'normal',
      displayName: 'WritingBoard',
    });

    /**
     * 设置画布样式
     * @param lineWidth - 线条宽度
     * @param strokeStyle - 线条颜色
     */
    function style({ lineWidth, strokeStyle }: { lineWidth: number; strokeStyle: string }) {
      if (!ctx.current) return;
      
      ctx.current.lineWidth = lineWidth;
      ctx.current.strokeStyle = strokeStyle;
      ctx.current.lineCap = 'round';
      ctx.current.lineJoin = 'round';
    }

    /**
     * 获取三角形的三个点坐标
     * @param startPoint - 起始点
     * @param targetPoint - 目标点
     * @returns 三角形的三个顶点
     */
    function triangle({ startPoint, targetPoint }: { startPoint: Point; targetPoint: Point }): Point[] {
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
     * 将设备坐标转换为画布坐标
     * @param clientX - 客户端X坐标
     * @param clientY - 客户端Y坐标
     * @returns 画布坐标点
     */
    function devicePointToCanvasPoint({
      clientX,
      clientY,
    }: {
      clientX: number;
      clientY: number;
    }): Point {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return { x: 0, y: 0 };

      return {
        x: clientX - rect.x,
        y: clientY - rect.y,
      };
    }

    /**
     * 获取两点间的距离
     * @param p1 - 第一个点
     * @param p2 - 第二个点
     * @returns 两点间的距离
     */
    function getDistanceByBetweenPoint({ p1, p2 }: { p1: Point; p2: Point }): number {
      const { x: Ax1, y: Ay1 } = p1;
      const { x: Ax2, y: Ay2 } = p2;
      return Math.sqrt(Math.pow(Ax2 - Ax1, 2) + Math.pow(Ay2 - Ay1, 2));
    }

    /**
     * 重绘画布栈
     */
    function drawStack() {
      for (let i = 0; i < stack.current.length; i++) {
        const item = stack.current[i];
        const configItem = config.current.get(item.shape);
        if (configItem) {
          configItem.drawStack(item);
        }
      }
    }

    /**
     * 获取矩形的起始点坐标
     * @param startPoint - 起始点
     * @param targetPoint - 目标点
     * @returns 矩形的起始点坐标
     */
    function getPoint({ startPoint, targetPoint }: { startPoint: Point; targetPoint: Point }): Point {
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
      } else {
        // rightBottom
        return startPoint;
      }
    }

    /**
     * 执行绘制操作
     * @param sourcePoint - 起始点
     * @param targetPoint - 目标点
     */
    function draw({ sourcePoint, targetPoint }: { sourcePoint?: Point; targetPoint: Point }) {
      const entry = config.current.get(curShape.current);
      if (entry) {
        entry.draw({ sourcePoint, targetPoint });
      }
    }

    // 注册事件
    function onMousemove(e: MouseEvent) {
      move(e);
    }

    function onTouchmove(e: TouchEvent) {
      move({
        ...e,
        clientX: e.targetTouches[0].clientX,
        clientY: e.targetTouches[0].clientY,
      });
    }

    function onMouseup(e: MouseEvent) {
      end(e);
    }

    function onTouchend(e: TouchEvent) {
      end({
        ...e,
        clientX: e.changedTouches[0].clientX,
        clientY: e.changedTouches[0].clientY,
      });
    }

    /**
     * 开始绘制
     * @param e - 事件对象
     */
    function start(e: { clientX: number; clientY: number }) {
      const { clientX, clientY } = e;

      startPoint.current = prePoint.current = devicePointToCanvasPoint({ clientX, clientY });

      containerRef.current?.addEventListener('mousemove', onMousemove);
      containerRef.current?.addEventListener('mouseup', onMouseup);
      containerRef.current?.addEventListener('touchmove', onTouchmove);
      containerRef.current?.addEventListener('touchend', onTouchend);
    }

    /**
     * 移动绘制
     * @param e - 事件对象
     */
    function move(e: { clientX: number; clientY: number }) {
      const { clientX, clientY } = e;

      const point = devicePointToCanvasPoint({ clientX, clientY });
      if (prePoint.current) {
        draw({ sourcePoint: prePoint.current, targetPoint: point });
      }
      prePoint.current = point;
    }

    /**
     * 结束绘制
     * @param e - 事件对象
     */
    function end(e: { clientX: number; clientY: number }) {
      const { clientX, clientY } = e;

      const point = devicePointToCanvasPoint({ clientX, clientY });

      const entry = config.current.get(curShape.current);
      if (entry) {
        entry.mouseup(point);
      }

      startPoint.current = null;
      prePoint.current = null;

      containerRef.current?.removeEventListener('mousemove', onMousemove);
      containerRef.current?.removeEventListener('mouseup', onMouseup);
      containerRef.current?.removeEventListener('touchmove', onTouchmove);
      containerRef.current?.removeEventListener('touchend', onTouchend);
    }

    /**
     * 清除画布
     */
    function clear() {
      if (!ctx.current || !canvasRef.current) return;
      
      ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      prePoint.current = startPoint.current = null;

      stack.current = [];

      stackIndex.current = 0;
    }

    /**
     * 导出画布为DataURL
     * @param backgroundColor - 背景颜色
     * @param type - 图片类型
     * @param quality - 图片质量
     * @returns base64字符串
     */
    function toDataURL(backgroundColor?: string, type?: string, quality?: number): string | undefined {
      if (!canvasRef.current) return;

      if (backgroundColor) {
        const [R, G, B] = Util.colorToRgb(backgroundColor);

        const fillsIndex: number[] = [];

        // 先设置背景
        let imageData = ctx.current?.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        );
        
        if (!imageData) return;

        for (let i = 0; i < imageData.data.length; i += 4) {
          // 当该像素是透明的，则设置成backgroundColor
          if (imageData.data[i + 3] === 0) {
            imageData.data[i] = R; // R
            imageData.data[i + 1] = G; // G
            imageData.data[i + 2] = B; // B
            imageData.data[i + 3] = 255;

            fillsIndex.push(i);
            fillsIndex.push(i + 1);
            fillsIndex.push(i + 2);
            fillsIndex.push(i + 3);
          }
        }

        ctx.current?.putImageData(imageData, 0, 0);

        // 生成base64字符串
        const base64 = canvasRef.current.toDataURL(type || 'image/png', quality);

        // 删除背景
        imageData = ctx.current?.getImageData(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height,
        );
        
        if (imageData) {
          fillsIndex.forEach((index) => {
            imageData.data[index] = 0;
          });
          ctx.current?.putImageData(imageData, 0, 0);
        }

        return base64;
      }

      return canvasRef.current.toDataURL(type || 'image/png', quality);
    }

    /**
     * 检查画布是否为空
     * @returns 是否为空
     */
    function isEmpty(): boolean {
      if (!ctx.current || !canvasRef.current) return true;
      
      // 先设置背景
      let imageData = ctx.current.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height,
      );

      if (!imageData.data.length) return true;

      return !imageData.data.some((v) => v !== imageData.data[0]);
    }

    useImperativeHandle(ref, () => ({
      /**
       * 设置绘制模式
       * @param mode - 绘制模式
       */
      setMode: (mode: Mode) => {
        curShape.current = mode;
      },
      /**
       * 设置线条颜色
       * @param style - 线条颜色
       */
      setStrokeStyle: (style: string) => {
        strokeStyle.current = style;
      },
      /**
       * 设置线条宽度
       * @param width - 线条宽度
       */
      setLineWidth: (width: number) => {
        lineWidth.current = width;
      },
      /**
       * 清除画布
       */
      clear,
      /**
       * 导出画布为DataURL
       * @param backgroundColor - 背景颜色
       * @param type - 图片类型
       * @param quality - 图片质量
       */
      toDataURL,
      /**
       * 检查画布是否为空
       */
      isEmpty,
    }));

    useLayoutEffect(() => {
      if (!canvasRef.current) return;
      
      ctx.current = canvasRef.current.getContext('2d');

      const onResize = debounce(() => {
        if (!canvasRef.current || !containerRef.current) return;
        
        canvasRef.current.width = containerRef.current.offsetWidth;
        canvasRef.current.height = containerRef.current.offsetHeight;

        ctx.current?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        drawStack();
      }, resizeTime);

      ro.current = new ResizeObserver(onResize);

      ro.current?.observe(document.body);

      return () => ro.current?.disconnect();
    }, [resizeTime]);

    useLayoutEffect(() => {
      function onMousedown(e: MouseEvent) {
        start(e);
      }

      function onTouchstart(e: TouchEvent) {
        start({ 
          clientX: e.targetTouches[0].clientX, 
          clientY: e.targetTouches[0].clientY 
        });
      }

      containerRef.current?.addEventListener('mousedown', onMousedown);
      containerRef.current?.addEventListener('touchstart', onTouchstart);

      return () => {
        containerRef.current?.removeEventListener('mousedown', onMousedown);
        containerRef.current?.removeEventListener('touchstart', onTouchstart);
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className={classNames(selectorPrefix, props.className ?? '')}
        style={props.style ?? {}}
      >
        <canvas ref={canvasRef} />
      </div>
    );
  }),
);

const WritingBoard = InternalWritingBoard as WritingBoardComponent;

WritingBoard.displayName = 'WritingBoard';

WritingBoard.Signature = Signature;
WritingBoard.MobileSignature = MobileSignature;

export default WritingBoard;
