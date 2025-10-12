import type {
  BasicShape,
  CircleShape,
  Clip,
  EllipseShape,
  InsetShape,
  LengthValue,
  PathShape,
  PolygonShape,
} from './types';

/**
 * 裁剪路径转换器基类
 * @abstract
 */
abstract class ShapeConverter<T extends BasicShape = BasicShape> {
  /**
   * 格式化长度值为 CSS 字符串
   * @param value - 长度值
   * @returns CSS 长度字符串
   */
  protected formatLengthValue(value: LengthValue): string {
    if (typeof value === 'number') {
      return `${value}px`;
    }
    return value;
  }

  /**
   * 转换形状为 CSS 字符串
   * @param shape - 基础形状对象
   * @returns CSS 形状字符串
   */
  abstract convert(shape: T): string;
}

/**
 * Inset 矩形裁剪转换器
 */
class InsetConverter extends ShapeConverter<InsetShape> {
  convert(shape: InsetShape): string {
    const top = this.formatLengthValue(shape.top);
    const right = shape.right !== undefined ? this.formatLengthValue(shape.right) : top;
    const bottom = shape.bottom !== undefined ? this.formatLengthValue(shape.bottom) : top;
    const left = shape.left !== undefined ? this.formatLengthValue(shape.left) : right;

    let result = `inset(${top} ${right} ${bottom} ${left}`;
    if (shape.round) {
      result += ` round ${shape.round}`;
    }
    result += ')';
    return result;
  }
}

/**
 * Circle 圆形裁剪转换器
 */
class CircleConverter extends ShapeConverter<CircleShape> {
  convert(shape: CircleShape): string {
    let result = 'circle(';
    
    if (shape.radius !== undefined) {
      const isKeyword =
        typeof shape.radius === 'string' &&
        (shape.radius === 'closest-side' || shape.radius === 'farthest-side');
      result += isKeyword ? shape.radius : this.formatLengthValue(shape.radius);
    }
    
    if (shape.position) {
      result += ` ${shape.position}`;
    }
    
    result += ')';
    return result;
  }
}

/**
 * Ellipse 椭圆裁剪转换器
 */
class EllipseConverter extends ShapeConverter<EllipseShape> {
  convert(shape: EllipseShape): string {
    let result = 'ellipse(';

    const radiusX = this.formatRadius(shape.radiusX);
    const radiusY = this.formatRadius(shape.radiusY);

    result += `${radiusX} ${radiusY}`;

    if (shape.position) {
      result += ` ${shape.position}`;
    }

    result += ')';
    return result;
  }

  /**
   * 格式化半径值
   * @param radius - 半径值
   * @returns 格式化后的半径字符串
   */
  private formatRadius(
    radius: LengthValue | 'closest-side' | 'farthest-side' | undefined,
  ): string {
    if (radius === undefined) {
      return 'closest-side';
    }

    const isKeyword =
      typeof radius === 'string' && (radius === 'closest-side' || radius === 'farthest-side');
    return isKeyword ? radius : this.formatLengthValue(radius);
  }
}

/**
 * Polygon 多边形裁剪转换器
 */
class PolygonConverter extends ShapeConverter<PolygonShape> {
  convert(shape: PolygonShape): string {
    let result = 'polygon(';

    if (shape.fillRule) {
      result += `${shape.fillRule}, `;
    }

    const pointsStr = shape.points
      .map((point) => `${this.formatLengthValue(point.x)} ${this.formatLengthValue(point.y)}`)
      .join(', ');

    result += pointsStr;
    result += ')';
    return result;
  }
}

/**
 * Path SVG路径裁剪转换器
 */
class PathConverter extends ShapeConverter<PathShape> {
  convert(shape: PathShape): string {
    let result = 'path(';

    if (shape.fillRule) {
      result += `${shape.fillRule}, `;
    }

    result += `'${shape.d}')`;
    return result;
  }
}

/**
 * 裁剪路径转换器工厂
 */
class ShapeConverterFactory {
  private static converters: Map<string, ShapeConverter> = new Map<string, ShapeConverter>([
    ['inset', new InsetConverter() as ShapeConverter],
    ['circle', new CircleConverter() as ShapeConverter],
    ['ellipse', new EllipseConverter() as ShapeConverter],
    ['polygon', new PolygonConverter() as ShapeConverter],
    ['path', new PathConverter() as ShapeConverter],
  ]);

  /**
   * 获取对应类型的转换器
   * @param type - 形状类型
   * @returns 形状转换器实例
   */
  static getConverter(type: string): ShapeConverter | undefined {
    return this.converters.get(type);
  }
}

/**
 * 裁剪路径转换器主类
 */
export class ClipPathConverter {
  /**
   * 将 Clip 对象转换为 CSS clip-path 字符串
   * @param clip - 裁剪路径配置
   * @returns CSS clip-path 值
   */
  static toCSS(clip: Clip): string {
    if (clip.type === 'none') {
      return 'none';
    }

    if (clip.type === 'url') {
      return `url(${clip.url})`;
    }

    if (clip.type === 'geometry-box') {
      return clip.geometryBox;
    }

    if (clip.type === 'basic-shape') {
      const shapeStr = this.convertBasicShape(clip.shape);
      return clip.geometryBox ? `${shapeStr} ${clip.geometryBox}` : shapeStr;
    }

    if (clip.type === 'basic-shape-and-geometry-box') {
      const shapeStr = this.convertBasicShape(clip.shape);
      return `${shapeStr} ${clip.geometryBox}`;
    }

    return 'none';
  }

  /**
   * 转换基础形状为 CSS 字符串
   * @param shape - 基础形状对象
   * @returns CSS 形状字符串
   */
  private static convertBasicShape(shape: BasicShape): string {
    const converter = ShapeConverterFactory.getConverter(shape.type);
    
    if (!converter) {
      console.warn(`Unknown shape type: ${shape.type}`);
      return '';
    }

    return converter.convert(shape as any);
  }
}

