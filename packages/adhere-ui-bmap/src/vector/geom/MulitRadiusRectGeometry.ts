import { GeometryType, IGeometryStyle, IRadiusRectGeometryData } from '../types';
import MulitRectGeometry from './MulitRectGeometry';
import RadiusRectGeometry from './RadiusRectGeometry';

/**
 * MulitRadiusRectGeometry
 * @class MulitRadiusRectGeometry
 * @classdesc MulitRadiusRectGeometry - 多个圆角矩形
 */
class MulitRadiusRectGeometry extends MulitRectGeometry {
  coordinates: IRadiusRectGeometryData[];

  constructor(coordinates: IRadiusRectGeometryData[]) {
    super(coordinates);

    this.coordinates = coordinates;
  }

  getType(): GeometryType {
    return GeometryType.MulitRadiusRect;
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinates: IRadiusRectGeometryData) => {
      RadiusRectGeometry.drawRadiusRect({ ctx, style, coordinates, map, isScale: true });
    });
  }
}

export default MulitRadiusRectGeometry;
