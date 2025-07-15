import PolygonSelection from './PolygonSelection';
import Util from './Util';
import DefaultAnchorStyle from './defaultAnchorStyle';
import DefaultMoveGemStyle from './defaultMoveGemStyle';
import DefaultStyle from './defaultStyle';
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
/**
 * 多边形选择组件主模块
 * @description 提供多边形选择功能的核心组件和相关工具
 */
declare const PolygonSelectionModule: {
    /** 多边形选择主组件 */
    PolygonSelection: typeof PolygonSelection;
    /** 圆形绘制Action */
    CircleDrawAction: typeof CircleDrawAction;
    /** 菱形绘制Action */
    DiamondDrawAction: typeof DiamondDrawAction;
    /** 绘制Action基类 */
    DrawAction: typeof DrawAction;
    /** 自由绘制Action */
    FreeDrawAction: typeof FreeDrawAction;
    /** 多边形绘制Action */
    PolygonDrawAction: typeof PolygonDrawAction;
    /** 矩形绘制Action */
    RectangleDrawAction: typeof RectangleDrawAction;
    /** 星形绘制Action */
    StartDrawAction: typeof StartDrawAction;
    /** 三角形绘制Action */
    TriangleDrawAction: typeof TriangleDrawAction;
    /** 圆形修改Action */
    CircleModifyAction: typeof CircleModifyAction;
    /** 菱形修改Action */
    DiamondModifyAction: typeof DiamondModifyAction;
    /** 修改Action基类 */
    ModifyAction: typeof ModifyAction;
    /** 多边形修改Action */
    PolygonModifyAction: typeof PolygonModifyAction;
    /** 矩形修改Action */
    RectangleModifyAction: typeof RectangleModifyAction;
    /** 星形修改Action */
    StartModifyAction: typeof StartModifyAction;
    /** 三角形修改Action */
    TriangleModifyAction: typeof TriangleModifyAction;
    /** 默认锚点样式 */
    DefaultAnchorStyle: Types.IStyle;
    /** 默认移动几何图形样式 */
    DefaultMoveGemStyle: Types.IStyle;
    /** 默认样式 */
    DefaultStyle: Types.IStyle;
    /** 工具类 */
    Util: typeof Util;
    /** 类型定义 */
    Types: typeof Types;
};
export default PolygonSelectionModule;
export * from './types';
export { PolygonSelection, CircleDrawAction, DiamondDrawAction, DrawAction, FreeDrawAction, PolygonDrawAction, RectangleDrawAction, StartDrawAction, TriangleDrawAction, CircleModifyAction, DiamondModifyAction, ModifyAction, PolygonModifyAction, RectangleModifyAction, StartModifyAction, TriangleModifyAction, DefaultAnchorStyle, DefaultMoveGemStyle, DefaultStyle, Util, };
