import Util from '@baifendian/adhere-util';

import type {
  BasicShape,
  CalculateClipParams,
  CalculateElementsParams,
  CircleShape,
  ComputeClipData,
  ComputeElementsInfoData,
  EllipseShape,
  LengthValue,
} from './types';

/**
 * 计算新的元素信息
 * @param params - 计算参数
 * @returns 新的元素信息数组
 */
export function calculateNewElementsInfo(
  params: CalculateElementsParams,
): ComputeElementsInfoData {
  const { elementsInfo, widthOrigin, heightOrigin, widthNew, heightNew } = params;

  return Util.calculateNewElementsInfo({
    elementsInfo,
    widthOrigin,
    heightOrigin,
    widthNew,
    heightNew,
  }).map(({ newX, newY, newWidth, newHeight }, index) => ({
    x: newX,
    y: newY,
    width: newWidth,
    height: newHeight,
    attrs: elementsInfo?.[index]?.attrs,
  }));
}

/**
 * 缩放长度值
 * @param value - 原始长度值
 * @param scale - 缩放比例
 * @returns 缩放后的长度值
 */
export function scaleLengthValue(value: LengthValue, scale: number): LengthValue {
  // 如果是数字，直接按比例缩放
  if (typeof value === 'number') {
    return value * scale;
  }

  // 如果是字符串，需要解析
  const strValue = value.trim();

  // 百分比值保持不变
  if (strValue.endsWith('%')) {
    return value;
  }

  // 处理像素值
  if (strValue.endsWith('px')) {
    const numValue = parseFloat(strValue);
    return `${numValue * scale}px`;
  }

  // 处理纯数字字符串
  const numValue = parseFloat(strValue);
  if (!isNaN(numValue) && strValue === numValue.toString()) {
    return numValue * scale;
  }

  // 其他单位（em, rem, vw, vh等）保持不变
  return value;
}

/**
 * 缩放SVG路径数据
 * @param pathData - SVG路径字符串
 * @param scaleX - X轴缩放比例
 * @param scaleY - Y轴缩放比例
 * @returns 缩放后的SVG路径字符串
 */
export function scaleSvgPath(pathData: string, scaleX: number, scaleY: number): string {
  // SVG路径命令的正则表达式
  const commandRegex = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;

  let result = '';
  let match: RegExpExecArray | null;

  while ((match = commandRegex.exec(pathData)) !== null) {
    const command = match[1];
    const params = match[2].trim();

    if (!params || command === 'Z' || command === 'z') {
      // Z/z 命令没有参数，直接添加
      result += command;
      continue;
    }

    // 解析参数（数字序列）
    const numbers = params.match(/-?[\d.]+(?:e[-+]?\d+)?/gi)?.map(parseFloat) || [];

    if (numbers.length === 0) {
      result += command;
      continue;
    }

    result += command;

    // 根据命令类型缩放参数
    switch (command) {
      case 'M': // moveto (absolute)
      case 'L': // lineto (absolute)
      case 'T': // smooth quadratic Bézier curveto (absolute)
        // x, y 坐标对
        for (let i = 0; i < numbers.length; i += 2) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
        }
        break;

      case 'm': // moveto (relative)
      case 'l': // lineto (relative)
      case 't': // smooth quadratic Bézier curveto (relative)
        // 相对坐标也需要缩放
        for (let i = 0; i < numbers.length; i += 2) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
        }
        break;

      case 'H': // horizontal lineto (absolute)
        // 只有 x 坐标
        for (let i = 0; i < numbers.length; i++) {
          result += `${numbers[i] * scaleX} `;
        }
        break;

      case 'h': // horizontal lineto (relative)
        for (let i = 0; i < numbers.length; i++) {
          result += `${numbers[i] * scaleX} `;
        }
        break;

      case 'V': // vertical lineto (absolute)
        // 只有 y 坐标
        for (let i = 0; i < numbers.length; i++) {
          result += `${numbers[i] * scaleY} `;
        }
        break;

      case 'v': // vertical lineto (relative)
        for (let i = 0; i < numbers.length; i++) {
          result += `${numbers[i] * scaleY} `;
        }
        break;

      case 'C': // curveto (absolute)
        // x1, y1, x2, y2, x, y
        for (let i = 0; i < numbers.length; i += 6) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
          result += `${numbers[i + 2] * scaleX},${numbers[i + 3] * scaleY} `;
          result += `${numbers[i + 4] * scaleX},${numbers[i + 5] * scaleY} `;
        }
        break;

      case 'c': // curveto (relative)
        for (let i = 0; i < numbers.length; i += 6) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
          result += `${numbers[i + 2] * scaleX},${numbers[i + 3] * scaleY} `;
          result += `${numbers[i + 4] * scaleX},${numbers[i + 5] * scaleY} `;
        }
        break;

      case 'S': // smooth curveto (absolute)
      case 'Q': // quadratic Bézier curveto (absolute)
        // x1, y1, x, y
        for (let i = 0; i < numbers.length; i += 4) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
          result += `${numbers[i + 2] * scaleX},${numbers[i + 3] * scaleY} `;
        }
        break;

      case 's': // smooth curveto (relative)
      case 'q': // quadratic Bézier curveto (relative)
        for (let i = 0; i < numbers.length; i += 4) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
          result += `${numbers[i + 2] * scaleX},${numbers[i + 3] * scaleY} `;
        }
        break;

      case 'A': // elliptical arc (absolute)
        // rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y
        for (let i = 0; i < numbers.length; i += 7) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
          result += `${numbers[i + 2]} `; // rotation angle不缩放
          result += `${numbers[i + 3]},${numbers[i + 4]} `; // flags不缩放
          result += `${numbers[i + 5] * scaleX},${numbers[i + 6] * scaleY} `;
        }
        break;

      case 'a': // elliptical arc (relative)
        for (let i = 0; i < numbers.length; i += 7) {
          result += `${numbers[i] * scaleX},${numbers[i + 1] * scaleY} `;
          result += `${numbers[i + 2]} `;
          result += `${numbers[i + 3]},${numbers[i + 4]} `;
          result += `${numbers[i + 5] * scaleX},${numbers[i + 6] * scaleY} `;
        }
        break;

      default:
        // 未知命令，保持原样
        result += params;
    }
  }

  return result.trim();
}

/**
 * 缩放基础形状
 * @param shape - 原始形状
 * @param scaleX - X轴缩放比例
 * @param scaleY - Y轴缩放比例
 * @returns 缩放后的形状
 */
export function scaleBasicShape(
  shape: BasicShape,
  scaleX: number,
  scaleY: number,
): BasicShape {
  switch (shape.type) {
    case 'inset': {
      return {
        ...shape,
        top: scaleLengthValue(shape.top, scaleY),
        right: shape.right !== undefined ? scaleLengthValue(shape.right, scaleX) : undefined,
        bottom: shape.bottom !== undefined ? scaleLengthValue(shape.bottom, scaleY) : undefined,
        left: shape.left !== undefined ? scaleLengthValue(shape.left, scaleX) : undefined,
      };
    }

    case 'circle': {
      const newShape: CircleShape = { ...shape };
      if (
        shape.radius !== undefined &&
        shape.radius !== 'closest-side' &&
        shape.radius !== 'farthest-side'
      ) {
        // 圆形使用较小的缩放比例以保持比例
        const scale = Math.min(scaleX, scaleY);
        newShape.radius = scaleLengthValue(shape.radius, scale);
      }
      return newShape;
    }

    case 'ellipse': {
      const newShape: EllipseShape = { ...shape };
      if (
        shape.radiusX !== undefined &&
        shape.radiusX !== 'closest-side' &&
        shape.radiusX !== 'farthest-side'
      ) {
        newShape.radiusX = scaleLengthValue(shape.radiusX, scaleX);
      }
      if (
        shape.radiusY !== undefined &&
        shape.radiusY !== 'closest-side' &&
        shape.radiusY !== 'farthest-side'
      ) {
        newShape.radiusY = scaleLengthValue(shape.radiusY, scaleY);
      }
      return newShape;
    }

    case 'polygon': {
      return {
        ...shape,
        points: shape.points.map((point) => ({
          x: scaleLengthValue(point.x, scaleX),
          y: scaleLengthValue(point.y, scaleY),
        })),
      };
    }

    case 'path': {
      // 缩放SVG路径数据
      const scaledPath = scaleSvgPath(shape.d, scaleX, scaleY);
      return {
        ...shape,
        d: scaledPath,
      };
    }

    default:
      return shape;
  }
}

/**
 * 计算新的裁剪路径信息
 * @param params - 计算参数
 * @returns 新的裁剪路径配置
 */
export function calculateNewClip(params: CalculateClipParams): ComputeClipData {
  const { clip, widthOrigin, heightOrigin, widthNew, heightNew } = params;

  // 如果没有裁剪或类型为 none，直接返回
  if (!clip || clip.type === 'none') {
    return clip;
  }

  // URL 引用和几何盒子类型不需要缩放
  if (clip.type === 'url' || clip.type === 'geometry-box') {
    return clip;
  }

  // 计算缩放比例
  const scaleX = widthNew / widthOrigin;
  const scaleY = heightNew / heightOrigin;

  // 处理包含基础形状的裁剪类型
  if (clip.type === 'basic-shape') {
    return {
      ...clip,
      shape: scaleBasicShape(clip.shape, scaleX, scaleY),
    };
  }

  if (clip.type === 'basic-shape-and-geometry-box') {
    return {
      ...clip,
      shape: scaleBasicShape(clip.shape, scaleX, scaleY),
    };
  }

  return clip;
}

