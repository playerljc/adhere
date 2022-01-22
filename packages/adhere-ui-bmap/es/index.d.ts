import BMap from './bmap';
import BMapAirPressureLayer from './airpressurelayer';
import HeatMapLayer from './heatmaplayer';
import BMapWindLayer from './windlayer';
import * as Vector from './vector';
declare const _default: {
    BMap: typeof BMap;
    BMapWindLayer: typeof BMapWindLayer;
    BMapAirPressureLayer: typeof BMapAirPressureLayer;
    HeatMapLayer: typeof HeatMapLayer;
    Vector: typeof Vector;
    Util: {
        flyToChina(map: any): void;
        fillCityBoundary(cityName: any, style: {
            fillColor: "rgba(0,0,0,.1)";
            fillOpacity: 0.7;
            strokeWeight: 1;
            strokeOpacity: 0.2;
            strokeColor: "#ddd";
        }, map: any): Promise<any>;
        fit(map: any, points: any[], config: any): Promise<any>;
        pixelToPoint(map: any, pixel: {
            x: number;
            y: number;
        }): any;
        pointToPixel(map: any, point: {
            lng: number;
            lat: number;
        }): any;
        getBound(map: any): {
            leftTopLon: number;
            leftTopLat: number;
            rightBottomLon: number;
            rightBottomLat: number;
        };
        getScale(map: any): number;
        getUnitPixelToM(zoom: any): number;
        getArrowPoints({ from, to, scale, width, theta }: {
            from: any;
            to: any;
            scale?: number | undefined;
            width?: number | undefined;
            theta?: number | undefined;
        }): {
            A: {
                x: number;
                y: number;
            };
            B: {
                x: number;
                y: number;
            };
            C: {
                x: number;
                y: number;
            };
        };
        clientToCtxPointToEl({ event, rect, offsetEl, }: {
            event: MouseEvent;
            rect: DOMRect;
            offsetEl: HTMLElement;
        }): Vector.Types.IPixel;
        clientToCtxPoint({ event, rect, offsetLeft, offsetTop, }: {
            event: MouseEvent;
            rect: DOMRect;
            offsetLeft: number;
            offsetTop: number;
        }): Vector.Types.IPixel;
    };
};
export default _default;
