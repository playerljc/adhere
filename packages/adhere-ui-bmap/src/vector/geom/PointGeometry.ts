import ImageCache from '../ImageCache';
import GeometryStyle from '../style/GeometryStyle';
import {
  GeometryType,
  ICoordinate,
  IGeometryStyle,
  IPixel,
  IPointGeometry,
  IPointGeometryStyle,
  VectorActions,
} from '../types';
import CircleGeometry from './CircleGeometry';
import Geometry from './Geometry';
import LeafGeometry from './LeafGeometry';
import RadiusRectGeometry from './RadiusRectGeometry';
import RectGeometry from './RectGeometry';
import RegularPolygonGeometry from './RegularPolygonGeometry';
import SectorGeometry from './SectorGeometry';
import StartGeometry from './StartGeometry';

/**
 * PointGeometry
 * @class PointGeometry
 * @classdesc PointGeometry - 点
 */
class PointGeometry extends Geometry implements IPointGeometry {
  coordinates: ICoordinate;

  static drawMapping = new Map([
    ['circle', PointGeometry.drawCirclePoint],
    ['image', PointGeometry.drawImagePoint],
    ['regularPolygon', PointGeometry.drawRegularPolygon],
    ['start', PointGeometry.drawStart],
    ['sector', PointGeometry.drawSector],
    ['rect', PointGeometry.drawRect],
    ['radiusRect', PointGeometry.drawRadiusRect],
    ['leaf', PointGeometry.drawLeaf],
  ]);

  static isPixelInGeometryMapping = new Map<string, Function>([
    ['circle', CircleGeometry.isPixelInGeometry],
    ['image', RectGeometry.isPixelInGeometry],
    ['regularPolygon', RegularPolygonGeometry.isPixelInGeometry],
    ['start', StartGeometry.isPixelInGeometry],
    ['sector', SectorGeometry.isPixelInGeometry],
    ['rect', RectGeometry.isPixelInGeometry],
    ['radiusRect', RadiusRectGeometry.isPixelInGeometry],
    ['leaf', LeafGeometry.isPixelInGeometry],
  ]);

  static centerCoordinateMapping = new Map<string, Function>([
    [
      'circle',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        CircleGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          coordinates: {
            center: coordinates,
            // @ts-ignore
            radius: style.radius,
          },
        }),
    ],
    [
      'image',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        RectGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            leftTop: coordinates,
            ...style.img,
          },
        }),
    ],
    [
      'regularPolygon',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        RegularPolygonGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            center: coordinates,
            ...style.regularPolygon,
          },
        }),
    ],
    [
      'start',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        StartGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            center: coordinates,
            ...style.start,
          },
        }),
    ],
    [
      'sector',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        SectorGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            center: coordinates,
            ...style.sector,
          },
        }),
    ],
    [
      'rect',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        RectGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            leftTop: coordinates,
            ...style.rect,
          },
        }),
    ],
    [
      'radiusRect',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        RadiusRectGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            leftTop: coordinates,
            ...style.radiusRect,
          },
        }),
    ],
    [
      'leaf',
      ({
        ctx,
        coordinates,
        map,
        style,
        isScale,
      }: {
        ctx: CanvasRenderingContext2D;
        coordinates: ICoordinate;
        map: any;
        style: IPointGeometryStyle;
        isScale: boolean;
      }) =>
        LeafGeometry.getCenterCoordinate({
          ctx,
          map,
          style,
          isScale,
          // @ts-ignore
          coordinates: {
            center: coordinates,
            ...style.leaf,
          },
        }),
    ],
  ]);

  static pointTypeToCoordinatesMapping = new Map<string, Function>([
    [
      'circle',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        center: coordinates,
        radius: style.radius,
      }),
    ],
    [
      'image',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        leftTop: coordinates,
        // @ts-ignore
        width: style.img.width,
        // @ts-ignore
        height: style.img.height,
      }),
    ],
    [
      'regularPolygon',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        center: coordinates,
        ...style.regularPolygon,
      }),
    ],
    [
      'start',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        center: coordinates,
        ...style.start,
      }),
    ],
    [
      'sector',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        center: coordinates,
        ...style.sector,
      }),
    ],
    [
      'rect',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        leftTop: coordinates,
        ...style.rect,
      }),
    ],
    [
      'radiusRect',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        leftTop: coordinates,
        ...style.radiusRect,
      }),
    ],
    [
      'leaf',
      (coordinates: ICoordinate, style: IPointGeometryStyle) => ({
        center: coordinates,
        ...style.leaf,
      }),
    ],
  ]);

  constructor(coordinates: ICoordinate) {
    super();

    this.coordinates = coordinates;
  }

  setCoordinates(coordinates: ICoordinate) {
    this.coordinates = coordinates;
    this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
  }

  getCoordinates(): ICoordinate {
    return { ...this.coordinates };
  }

  getType(): GeometryType {
    return GeometryType.Point;
  }

  static getCenterCoordinate({
    ctx,
    coordinates,
    map,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    coordinates: ICoordinate;
    map: any;
    style: IPointGeometryStyle;
    isScale: boolean;
  }): IPixel {
    // @ts-ignore
    return PointGeometry.centerCoordinateMapping.get(style.pointType)({
      ctx,
      coordinates,
      map,
      style,
      isScale,
    });
  }

  // @ts-ignore
  getCenterCoordinate({
    ctx,
    style,
    isScale,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    isScale: boolean;
  }): IPixel {
    return PointGeometry.getCenterCoordinate({
      coordinates: this.coordinates,
      ctx,
      map: this.getMap(),
      style,
      isScale: false,
    });
  }

  /**
   * drawCirclePoint - 绘制圆的点
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawCirclePoint({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    CircleGeometry.drawCircle({
      ctx,
      style,
      // @ts-ignore
      coordinates: { radius: style.radius, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawImagePoint - 绘制图片的点
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawImagePoint({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    // @ts-ignore
    const pixel = map.pointToPixel(new BMap.Point(coordinates.lng, coordinates.lat));

    let image = ImageCache.get({
      src: style?.img?.src || '',
      width: style?.img?.width || 0,
      height: style?.img?.height || 0,
    });

    if (!image) {
      // @ts-ignore
      const image = new Image(style.img.width, style.img.height);

      image.onload = () => {
        ImageCache.add(
          {
            src: style?.img?.src || '',
            width: style?.img?.width || 0,
            height: style?.img?.height || 0,
          },
          image,
        );
        // @ts-ignore
        ctx.drawImage(image, pixel.x, pixel.y, style.img.width, style.img.height);
      };

      // @ts-ignore
      image.src = style.img.src;
    } else {
      // @ts-ignore
      ctx.drawImage(image, pixel.x, pixel.y, style.img.width, style.img.height);
    }
  }

  /**
   * drawRegularPolygon
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawRegularPolygon({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    RegularPolygonGeometry.drawRegularPolygon({
      ctx,
      style,
      // @ts-ignore
      coordinates: { ...style.regularPolygon, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawStart
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawStart({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    StartGeometry.drawStart({
      ctx,
      style,
      // @ts-ignore
      coordinates: { ...style.start, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawSector
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawSector({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    SectorGeometry.drawSector({
      ctx,
      style,
      // @ts-ignore
      coordinates: { ...style.sector, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawRect
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawRect({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    RectGeometry.drawRect({
      ctx,
      style,
      // @ts-ignore
      coordinates: { ...style.rect, leftTop: coordinates },
      map,
      isScale: false,
    });
  }

  static drawRadiusRect({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    RadiusRectGeometry.drawRadiusRect({
      ctx,
      style,
      // @ts-ignore
      coordinates: { ...style.radiusRect, leftTop: coordinates },
      map,
      isScale: false,
    });
  }

  static drawLeaf({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IPointGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    LeafGeometry.drawLeaf({
      ctx,
      style,
      // @ts-ignore
      coordinates: { ...style.leaf, center: coordinates },
      map,
      isScale: false,
    });
  }

  /**
   * drawPoint
   * @param ctx
   * @param style
   * @param coordinates
   * @param map
   */
  static drawPoint({
    ctx,
    style,
    coordinates,
    map,
  }: {
    ctx: CanvasRenderingContext2D;
    style: IGeometryStyle;
    coordinates: ICoordinate;
    map: any;
  }) {
    const targetStyle: IPointGeometryStyle = {
      ...GeometryStyle,
      radius: 5,
      pointType: 'circle',
      ...(style ?? {}),
    };

    // @ts-ignore
    PointGeometry.drawMapping.get((targetStyle as IPointGeometryStyle)?.pointType)({
      ctx,
      style: targetStyle,
      coordinates,
      map,
    });
  }

  /**
   * draw
   * @param ctx
   * @param style
   */
  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    PointGeometry.drawPoint({
      ctx,
      style,
      coordinates: this.coordinates,
      map: this.getMap(),
    });
  }

  static isPixelInGeometry({
    coordinates,
    map,
    pixel,
    style,
  }: {
    coordinates: ICoordinate;
    pixel: IPixel;
    map: any;
    style: IGeometryStyle;
  }): boolean {
    // @ts-ignore
    return PointGeometry.isPixelInGeometryMapping.get((style as IPointGeometryStyle)?.pointType)({
      // @ts-ignore
      coordinates: PointGeometry.pointTypeToCoordinatesMapping.get(
        (style as IPointGeometryStyle)?.pointType,
      )(coordinates, style),
      isScale: false,
      map,
      style,
      pixel,
    });
  }

  /**
   * isPixelInGeometry
   * @param pixel
   * @param style
   * @return boolean
   */
  isPixelInGeometry(pixel: IPixel, style: IGeometryStyle): boolean {
    return PointGeometry.isPixelInGeometry({
      coordinates: this.coordinates,
      pixel,
      map: this.getMap(),
      style,
    });
  }
}

export default PointGeometry;
