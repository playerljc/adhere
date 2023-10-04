import { GeometryType, IGeometryStyle, IRadiusRectGeometryData } from '../types';
import MultiRectGeometry from './MultiRectGeometry';
import RadiusRectGeometry from './RadiusRectGeometry';

/**
 * MultiRadiusRectGeometry
 * @class MultiRadiusRectGeometry
 * @classdesc MultiRadiusRectGeometry - 多个圆角矩形
 */
class MultiRadiusRectGeometry extends MultiRectGeometry {
  coordinates: IRadiusRectGeometryData[];

  constructor(coordinates: IRadiusRectGeometryData[]) {
    super(coordinates);

    this.coordinates = coordinates;
  }

  getType(): GeometryType {
    return GeometryType.MultiRadiusRect;
  }

  draw(ctx: CanvasRenderingContext2D, style: IGeometryStyle): void {
    const { coordinates } = this;

    const map = this.getMap();

    coordinates.forEach((coordinates: IRadiusRectGeometryData) => {
      RadiusRectGeometry.drawRadiusRect({ ctx, style, coordinates, map, isScale: true });
    });
  }
}

export default MultiRadiusRectGeometry;
