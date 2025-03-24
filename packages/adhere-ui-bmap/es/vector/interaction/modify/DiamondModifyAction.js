import MathUtil from '@baifendian/adhere-util';
import * as turf from '@turf/turf';
import defaultMoveGemStyle from '../DefaultMoveGemStyle';
import DiamondDrawAction from '../draw/DiamondDrawAction';
import { SelectType } from '../types';
import ModifyAction from './ModifyAction';
/**
 * DiamondModifyAction
 * @class DiamondModifyAction
 * @classdesc - 菱形修改
 * @remark:
 */
class DiamondModifyAction extends ModifyAction {
    setCursor() {
        throw new Error('Method not implemented.');
    }
    rectangleAnchorPoints = [];
    indexToModifyHandlerMapping = new Map([
        [0, this.modifyDataByLeftTop],
        [1, this.modifyDataByCenterTop],
        [2, this.modifyDataByRightTop],
        [3, this.modifyDataByRightCenter],
        [4, this.modifyDataByRightBottom],
        [5, this.modifyDataByCenterBottom],
        [6, this.modifyDataByLeftBottom],
        [7, this.modifyDataByLeftCenter],
    ]);
    ResizeCursorMapping = new Map([
        [0, 'nwse-resize'],
        [1, 'ns-resize'],
        [2, 'nesw-resize'],
        [3, 'ew-resize'],
        [4, 'nwse-resize'],
        [5, 'ns-resize'],
        [6, 'nesw-resize'],
        [7, 'ew-resize'],
    ]);
    constructor(data) {
        super(data);
    }
    /**
     * drawAnchors
     * circle有4个anchor，上，下，左，右
     */
    drawAnchors() {
        if (!this.context)
            return;
        const ctx = this.context.getCtx();
        if (!ctx)
            return;
        const { leftTopPoint, width, height } = DiamondDrawAction.transformOriginToReal(this.context, this?.data?.data?.data);
        const widthHalf = width / 2;
        const heightHalf = height / 2;
        this.rectangleAnchorPoints = [
            {
                ...leftTopPoint,
            },
            {
                x: leftTopPoint.x + widthHalf,
                y: leftTopPoint.y,
            },
            {
                x: leftTopPoint.x + width,
                y: leftTopPoint.y,
            },
            {
                x: leftTopPoint.x + width,
                y: leftTopPoint.y + heightHalf,
            },
            {
                x: leftTopPoint.x + width,
                y: leftTopPoint.y + height,
            },
            {
                x: leftTopPoint.x + widthHalf,
                y: leftTopPoint.y + height,
            },
            {
                x: leftTopPoint.x,
                y: leftTopPoint.y + height,
            },
            {
                x: leftTopPoint.x,
                y: leftTopPoint.y + heightHalf,
            },
        ];
        // 4个角,4条边中心点 顺时针绘制
        for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
            const point = this.rectangleAnchorPoints[i];
            ctx.beginPath();
            this.setAnchorCircleStyle();
            ctx.ellipse(point.x, point.y, this.anchorRadius, this.anchorRadius, (45 * Math.PI) / 180, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
        // 矩形绘制
        ctx.beginPath();
        this.setAnchorLineStyle();
        ctx.moveTo(leftTopPoint.x, leftTopPoint.y);
        ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y);
        ctx.lineTo(leftTopPoint.x + width, leftTopPoint.y + height);
        ctx.lineTo(leftTopPoint.x, leftTopPoint.y + height);
        ctx.lineTo(leftTopPoint.x, leftTopPoint.y);
        ctx.stroke();
    }
    /**
     * getPointInAnchor
     * @param targetPoint
     * @return IPoint | null
     */
    getPointInAnchor(targetPoint) {
        if (!this.data)
            return null;
        let point = null;
        let index = -1;
        for (let i = 0; i < this.rectangleAnchorPoints.length; i++) {
            const center = this.rectangleAnchorPoints[i];
            const radius = this.anchorRadius + this.anchorLineWidth;
            if (MathUtil.isPointInCircle(targetPoint, { center, radius })) {
                point = center;
                index = i;
                break;
            }
        }
        if (point && index !== -1) {
            return {
                point,
                index,
            };
        }
        return null;
    }
    /**
     * setResizeCursorByIndex
     * @param index
     */
    setResizeCursorByIndex(index) {
        if (!this.context)
            return;
        const canvasEl = this.context.getCanvasEl();
        const assistCanvasEl = this.context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.style.cursor = assistCanvasEl.style.cursor = this.ResizeCursorMapping.get(index);
    }
    /**
     * drawModify
     * @param targetPoint
     */
    drawModify(targetPoint) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return;
        // 判断index 0 1 2 3 4 5 6 7的情况下各自怎么修改leftTopPoint,width,height
        const handler = this.indexToModifyHandlerMapping.get(this.startIndex);
        if (!handler)
            return;
        const result = handler.call(this, targetPoint);
        if (!result)
            return;
        this.data.data = {
            ...data,
        };
        context.clearDraw();
        context.drawHistoryData();
        this.drawAnchors();
    }
    /**
     * drawMove
     * @param startPixel
     * @param targetPixel
     */
    drawMove(startPixel, targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data)
            return;
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return;
        const startPoint = context.pixelToPoint(startPixel);
        const targetPoint = context.pixelToPoint(targetPixel);
        const offsetX = targetPoint.x - startPoint.x;
        const offsetY = targetPoint.y - startPoint.y;
        data.data.leftTopPoint.x += offsetX;
        data.data.leftTopPoint.y += offsetY;
        this.data.data = {
            ...data,
        };
        context.clearDraw();
        context.drawHistoryData();
        this.drawAnchors();
    }
    /**
     * getSelectType
     */
    getSelectType() {
        return SelectType.Diamond;
    }
    /**
     * getBox
     */
    getBox() {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data)
            return null;
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return null;
        const { leftTopPoint, width, height } = DiamondDrawAction.transformOriginToReal(context, data.data);
        return {
            leftTop: { ...leftTopPoint },
            rightTop: { x: leftTopPoint.x + width, y: leftTopPoint.y },
            rightBottom: { x: leftTopPoint.x + width, y: leftTopPoint.y + height },
            leftBottom: { x: leftTopPoint.x, y: leftTopPoint.y + height },
        };
    }
    /**
     *
     * @param targetPixel
     */
    modifyDataByLeftTop(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.x > box.rightTop.x || targetPixel.y > box.rightBottom.y)
            return false;
        // 修改
        data.data.leftTopPoint = context.pixelToPoint(targetPixel);
        data.data.width = context.distanceToActual(box.rightTop.x - targetPixel.x);
        data.data.height = context.distanceToActual(box.rightBottom.y - targetPixel.y);
        return true;
    }
    /**
     * modifyDataByCenterTop
     * @param targetPixel
     */
    modifyDataByCenterTop(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        // const { width } = data.data;
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.y > box.leftBottom.y)
            return false;
        // 修改
        data.data.leftTopPoint = context.pixelToPoint({
            x: box.leftTop.x,
            y: targetPixel.y,
        });
        // data.data.width = context.distanceToActual(width);
        data.data.height = context.distanceToActual(box.rightBottom.y - targetPixel.y);
        return true;
    }
    /**
     * modifyDataByRightTop
     * @param targetPixel
     */
    modifyDataByRightTop(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.x < box.leftTop.x || targetPixel.y > box.leftBottom.y)
            return false;
        // 修改
        data.data.leftTopPoint = context.pixelToPoint({
            x: box.leftTop.x,
            y: targetPixel.y,
        });
        data.data.width = context.distanceToActual(targetPixel.x - box.leftTop.x);
        data.data.height = context.distanceToActual(box.rightBottom.y - targetPixel.y);
        return true;
    }
    /**
     * modifyDataByRightCenter
     * @param targetPixel
     */
    modifyDataByRightCenter(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        // const { leftTopPoint, height } = data.data;
        // 计算出四个角的坐标
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.x < box.leftTop.x)
            return false;
        // 修改
        // data.data.leftTopPoint = { ...leftTopPoint };
        data.data.width = context.distanceToActual(targetPixel.x - box.leftTop.x);
        // data.data.height = height;
        return true;
    }
    /**
     * modifyDataByRightBottom
     * @param targetPixel
     */
    modifyDataByRightBottom(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        // const { leftTopPoint } = data.data;
        // 计算出四个角的坐标
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.x < box.leftTop.x || targetPixel.y < box.leftTop.y)
            return false;
        // 修改
        // data.data.leftTopPoint = { ...leftTopPoint };
        data.data.width = context.distanceToActual(targetPixel.x - box.leftTop.x);
        data.data.height = context.distanceToActual(targetPixel.y - box.leftTop.y);
        return true;
    }
    /**
     * modifyDataByCenterBottom
     * @param targetPixel
     */
    modifyDataByCenterBottom(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        // const { leftTopPoint, width } = data.data;
        // 计算出四个角的坐标
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.y < box.leftTop.y)
            return false;
        // 修改
        // data.data.leftTopPoint = { ...leftTopPoint };
        // data.data.width = width;
        data.data.height = context.distanceToActual(targetPixel.y - box.leftTop.y);
        return true;
    }
    /**
     * modifyDataByLeftBottom
     * @param targetPixel
     */
    modifyDataByLeftBottom(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        const { leftTopPoint } = data.data;
        const leftTopPixel = context.pointToPixel(leftTopPoint);
        // 计算出四个角的坐标
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.x > box.rightBottom.x || targetPixel.y < box.rightTop.y)
            return false;
        // 修改
        data.data.leftTopPoint = context.pixelToPoint({
            x: targetPixel.x,
            y: leftTopPixel.y,
        });
        data.data.width = context.distanceToActual(box.rightBottom.x - targetPixel.x);
        data.data.height = context.distanceToActual(targetPixel.y - box.rightTop.y);
        return true;
    }
    /**
     * modifyDataByLeftCenter
     * @param targetPixel
     */
    modifyDataByLeftCenter(targetPixel) {
        const { context } = this;
        const ctx = context?.getCtx();
        if (!context || !ctx || !this.data || !this.startPoint)
            return false;
        // canvasHistory需要修改 需要修改半径
        const data = context.getHistoryDataById(this.data.data.id);
        if (!data)
            return false;
        const { leftTopPoint /*height*/ } = data.data;
        const leftTopPixel = context.pointToPixel(leftTopPoint);
        // 计算出四个角的坐标
        // 计算出四个角的坐标
        const box = this.getBox();
        if (!box)
            return false;
        // 范围限制
        if (targetPixel.x > box.rightBottom.x)
            return false;
        // 修改
        data.data.leftTopPoint = context.pixelToPoint({
            x: targetPixel.x,
            y: leftTopPixel.y,
        });
        data.data.width = context.distanceToActual(box.rightBottom.x - targetPixel.x);
        // data.data.height = height;
        return true;
    }
    /**
     * isCanMove
     * @param targetPixel
     */
    isCanMove(targetPixel) {
        if (!this.data)
            return false;
        const { leftTopPoint, width, height } = DiamondDrawAction.transformOriginToReal(this.context, this?.data?.data?.data);
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const pt = turf.point([targetPixel.x, targetPixel.y]);
        const poly = turf.polygon([
            [
                [leftTopPoint.x, leftTopPoint.y + halfHeight],
                [leftTopPoint.x + halfWidth, leftTopPoint.y],
                [leftTopPoint.x + width, leftTopPoint.y + halfHeight],
                [leftTopPoint.x + halfWidth, leftTopPoint.y + height],
                [leftTopPoint.x, leftTopPoint.y + halfHeight],
            ],
        ]);
        return turf.booleanPointInPolygon(pt, poly) && !this.getPointInAnchor(targetPixel);
    }
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     */
    // @ts-ignore
    drawMoveGeometry() {
        if (!this.context || !this.data)
            return;
        DiamondDrawAction.draw(this.context, this.context.getAssistCtx(), this.data);
    }
    /**
     * drawMoveGeometry
     * @description 绘制移动时的几何图形
     * @param startPixel
     * @param targetPixel
     */
    // @ts-ignore
    drawMoveGeometry(startPixel, targetPixel) {
        if (!this.context || !this.data || !startPixel || !targetPixel)
            return;
        const srcData = { ...this.data.data };
        srcData.data = {
            ...srcData.data,
            leftTopPoint: {
                ...srcData.data.leftTopPoint,
            },
        };
        const startPoint = this.context.pixelToPoint(startPixel);
        const targetPoint = this.context.pixelToPoint(targetPixel);
        const offsetX = targetPoint.x - startPoint.x;
        const offsetY = targetPoint.y - startPoint.y;
        if (srcData.data && srcData.data.leftTopPoint) {
            srcData.data.leftTopPoint.x += offsetX;
            srcData.data.leftTopPoint.y += offsetY;
            if (srcData.style) {
                srcData.style.globalAlpha = defaultMoveGemStyle.globalAlpha;
                srcData.style.strokeStyle = defaultMoveGemStyle.strokeStyle;
                srcData.style.lineWidth = defaultMoveGemStyle.lineWidth;
                srcData.style.lineDash = defaultMoveGemStyle.lineDash;
                srcData.style.lineDashOffset = defaultMoveGemStyle.lineDashOffset;
            }
            DiamondDrawAction.draw(this.context, this.context.getAssistCtx(), srcData);
        }
    }
    destroy() {
        this.startIndex = -1;
        super.destroy();
    }
}
export default DiamondModifyAction;
