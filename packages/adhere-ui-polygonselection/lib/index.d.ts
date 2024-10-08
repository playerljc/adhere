import PolygonSelection from './PolygonSelection';
import CircleDrawAction from './draw/CircleDrawAction';
import DiamondDrawAction from './draw/DiamondDrawAction';
import DrawAction from './draw/DrawAction';
import FreeDrawAction from './draw/FreeDrawAction';
import PolygonDrawAction from './draw/PolygonDrawAction';
import RectangleDrawAction from './draw/RectangleDrawAction';
import StartDrawAction from './draw/StartDrawAction';
import TriangleDrawAction from './draw/TriangleDrawAction';
import CircleModifyAction from './modify/CircleModifyAction';
import DiamondModifyAction from './modify/DiamondModifyAction';
import ModifyAction from './modify/ModifyAction';
import PolygonModifyAction from './modify/PolygonModifyAction';
import RectangleModifyAction from './modify/RectangleModifyAction';
import StartModifyAction from './modify/StartModifyAction';
import TriangleModifyAction from './modify/TriangleModifyAction';
import * as Types from './types';
declare const _default: {
    PolygonSelection: typeof PolygonSelection;
    CircleDrawAction: typeof CircleDrawAction;
    DiamondDrawAction: typeof DiamondDrawAction;
    DrawAction: typeof DrawAction;
    FreeDrawAction: typeof FreeDrawAction;
    PolygonDrawAction: typeof PolygonDrawAction;
    RectangleDrawAction: typeof RectangleDrawAction;
    StartDrawAction: typeof StartDrawAction;
    TriangleDrawAction: typeof TriangleDrawAction;
    CircleModifyAction: typeof CircleModifyAction;
    DiamondModifyAction: typeof DiamondModifyAction;
    ModifyAction: typeof ModifyAction;
    PolygonModifyAction: typeof PolygonModifyAction;
    RectangleModifyAction: typeof RectangleModifyAction;
    StartModifyAction: typeof StartModifyAction;
    TriangleModifyAction: typeof TriangleModifyAction;
    DefaultAnchorStyle: {
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        lineCap: CanvasLineCap;
        lineJoin: CanvasLineJoin;
        lineDash: number[];
        lineDashOffset: number;
        globalAlpha: number;
    };
    DefaultMoveGemStyle: {
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        lineDash: number[];
        lineDashOffset: number;
        lineCap: CanvasLineCap;
        lineJoin: CanvasLineJoin;
        globalAlpha: number;
    };
    DefaultStyle: {
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        lineCap: CanvasLineCap;
        lineJoin: CanvasLineJoin;
        lineDash: never[];
        lineDashOffset: number;
        globalAlpha: number;
    };
    Util: {
        getRectLeftTopPoint({ startPoint, targetPoint }: {
            startPoint: any;
            targetPoint: any;
        }): Types.IPoint | null;
        triangle({ startPoint, targetPoint }: {
            startPoint: any;
            targetPoint: any;
        }): Types.IPoint[];
    };
    Types: typeof Types;
};
export default _default;
