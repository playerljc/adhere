import ImageCache from '../ImageCache';
import GeometryStyle from '../style/GeometryStyle';
import { GeometryType, VectorActions, } from '../types';
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
class PointGeometry extends Geometry {
    coordinates;
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
    static isPixelInGeometryMapping = new Map([
        ['circle', CircleGeometry.isPixelInGeometry],
        ['image', RectGeometry.isPixelInGeometry],
        ['regularPolygon', RegularPolygonGeometry.isPixelInGeometry],
        ['start', StartGeometry.isPixelInGeometry],
        ['sector', SectorGeometry.isPixelInGeometry],
        ['rect', RectGeometry.isPixelInGeometry],
        ['radiusRect', RadiusRectGeometry.isPixelInGeometry],
        ['leaf', LeafGeometry.isPixelInGeometry],
    ]);
    static centerCoordinateMapping = new Map([
        [
            'circle',
            ({ ctx, coordinates, map, style, isScale, }) => CircleGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => RectGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => RegularPolygonGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => StartGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => SectorGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => RectGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => RadiusRectGeometry.getCenterCoordinate({
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
            ({ ctx, coordinates, map, style, isScale, }) => LeafGeometry.getCenterCoordinate({
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
    static pointTypeToCoordinatesMapping = new Map([
        [
            'circle',
            (coordinates, style) => ({
                center: coordinates,
                radius: style.radius,
            }),
        ],
        [
            'image',
            (coordinates, style) => ({
                leftTop: coordinates,
                // @ts-ignore
                width: style.img.width,
                // @ts-ignore
                height: style.img.height,
            }),
        ],
        [
            'regularPolygon',
            (coordinates, style) => ({
                center: coordinates,
                ...style.regularPolygon,
            }),
        ],
        [
            'start',
            (coordinates, style) => ({
                center: coordinates,
                ...style.start,
            }),
        ],
        [
            'sector',
            (coordinates, style) => ({
                center: coordinates,
                ...style.sector,
            }),
        ],
        [
            'rect',
            (coordinates, style) => ({
                leftTop: coordinates,
                ...style.rect,
            }),
        ],
        [
            'radiusRect',
            (coordinates, style) => ({
                leftTop: coordinates,
                ...style.radiusRect,
            }),
        ],
        [
            'leaf',
            (coordinates, style) => ({
                center: coordinates,
                ...style.leaf,
            }),
        ],
    ]);
    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
    setCoordinates(coordinates) {
        this.coordinates = coordinates;
        this?.getLayer()?.getEmitter().trigger(VectorActions.UPDATE);
    }
    getCoordinates() {
        return { ...this.coordinates };
    }
    getType() {
        return GeometryType.Point;
    }
    static getCenterCoordinate({ ctx, coordinates, map, style, isScale, }) {
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
    getCenterCoordinate({ ctx, style, isScale, }) {
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
    static drawCirclePoint({ ctx, style, coordinates, map, }) {
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
    static drawImagePoint({ ctx, style, coordinates, map, }) {
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
                ImageCache.add({
                    src: style?.img?.src || '',
                    width: style?.img?.width || 0,
                    height: style?.img?.height || 0,
                }, image);
                // @ts-ignore
                ctx.drawImage(image, pixel.x, pixel.y, style.img.width, style.img.height);
            };
            // @ts-ignore
            image.src = style.img.src;
        }
        else {
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
    static drawRegularPolygon({ ctx, style, coordinates, map, }) {
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
    static drawStart({ ctx, style, coordinates, map, }) {
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
    static drawSector({ ctx, style, coordinates, map, }) {
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
    static drawRect({ ctx, style, coordinates, map, }) {
        RectGeometry.drawRect({
            ctx,
            style,
            // @ts-ignore
            coordinates: { ...style.rect, leftTop: coordinates },
            map,
            isScale: false,
        });
    }
    static drawRadiusRect({ ctx, style, coordinates, map, }) {
        RadiusRectGeometry.drawRadiusRect({
            ctx,
            style,
            // @ts-ignore
            coordinates: { ...style.radiusRect, leftTop: coordinates },
            map,
            isScale: false,
        });
    }
    static drawLeaf({ ctx, style, coordinates, map, }) {
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
    static drawPoint({ ctx, style, coordinates, map, }) {
        const targetStyle = {
            ...GeometryStyle,
            radius: 5,
            pointType: 'circle',
            ...(style ?? {}),
        };
        // @ts-ignore
        PointGeometry.drawMapping.get(targetStyle?.pointType)({
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
    draw(ctx, style) {
        PointGeometry.drawPoint({
            ctx,
            style,
            coordinates: this.coordinates,
            map: this.getMap(),
        });
    }
    static isPixelInGeometry({ coordinates, map, pixel, style, }) {
        // @ts-ignore
        return PointGeometry.isPixelInGeometryMapping.get(style?.pointType)({
            // @ts-ignore
            coordinates: PointGeometry.pointTypeToCoordinatesMapping.get(style?.pointType)(coordinates, style),
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
    isPixelInGeometry(pixel, style) {
        return PointGeometry.isPixelInGeometry({
            coordinates: this.coordinates,
            pixel,
            map: this.getMap(),
            style,
        });
    }
}
export default PointGeometry;
