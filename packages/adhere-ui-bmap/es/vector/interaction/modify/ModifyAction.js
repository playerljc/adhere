import MathUtil from '@baifendian/adhere-util';
import Emitter from '@baifendian/adhere-util-emitter';
import defaultAnchorStyle from '../DefaultAnchorStyle';
import { ActionEvents, ActionStatus, ActionType, } from '../types';
/**
 * ModifyAction
 * @class ModifyAction
 * @classdesc ModifyAction
 */
class ModifyAction extends Emitter.Events {
    // 上下文对象
    context = null;
    // 数据
    data = null;
    // 当前状态
    status = ActionStatus.UnStart;
    // EmitActions
    EmitActions = {
        CONTEXT: 'CONTEXT',
    };
    // anchor的半径
    anchorRadius = 5;
    // anchorWidth
    anchorLineWidth = 2;
    // 起始点
    startPoint = null;
    // 起始点的索引
    startIndex = -1;
    // 移动的以第一个点
    moveStartPoint = null;
    // 是否可以移动
    canMove = true;
    // 是都已经移动
    isMoved = false;
    /**
     * constructor
     * @param data
     */
    constructor(data) {
        super();
        this.data = data;
        this.onContext = this.onContext.bind(this);
        // 修改相关的
        this.onCanvasMousedown = this.onCanvasMousedown.bind(this);
        this.onCanvasMousemove = this.onCanvasMousemove.bind(this);
        this.onCanvasMouseup = this.onCanvasMouseup.bind(this);
        // 是否可以修改的移动
        this.onCanvasIsModifyMousemove = this.onCanvasIsModifyMousemove.bind(this);
        // move的相关事件
        this.onMoveMousedown = this.onMoveMousedown.bind(this);
        this.onMoveMousemove = this.onMoveMousemove.bind(this);
        this.onMoveMouseup = this.onMoveMouseup.bind(this);
        this.on(this.EmitActions.CONTEXT, this.onContext);
    }
    /**
     * setAnchorCircleStyle
     */
    setAnchorCircleStyle() {
        if (!this.context)
            return;
        const ctx = this.context.getCtx();
        if (!ctx)
            return;
        // anchor上下文
        ctx.strokeStyle = defaultAnchorStyle.strokeStyle;
        ctx.fillStyle = defaultAnchorStyle.fillStyle;
        ctx.lineWidth = defaultAnchorStyle.lineWidth;
    }
    /**
     * setAnchorLineStyle
     */
    setAnchorLineStyle() {
        if (!this.context)
            return;
        const ctx = this.context.getCtx();
        if (!ctx)
            return;
        // anchor上下文
        ctx.strokeStyle = defaultAnchorStyle.strokeStyle;
        ctx.lineWidth = defaultAnchorStyle.lineWidth;
        ctx.setLineDash(defaultAnchorStyle.lineDash);
        ctx.lineDashOffset = defaultAnchorStyle.lineDashOffset;
    }
    /**
     * onContext
     */
    onContext() {
        this.drawAnchors();
    }
    /**
     * onCanvasMousedown
     * @param e
     */
    onCanvasMousedown(e) {
        // console.log('onCanvasMousedown');
        if (!this.context)
            return;
        const canvasEl = this.context.getCanvasEl();
        if (!canvasEl)
            return;
        const ctx = this.context.getCtx();
        if (!ctx)
            return;
        const pixel = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl?.getBoundingClientRect(),
        });
        // 判断按下的startPoint是否为anchor点
        // 用isPointInPath判断只能判断出point在路径中，但是不能获取anchor的中心点
        // 需要判断point在那个anchor里才可以，这样可以获取命中的圆形中心点
        const fontPixel = this.getPointInAnchor(pixel);
        // 没有点击到anchor则返回
        if (!fontPixel)
            return;
        // this.startPoint需要赋值为anchor圆形的中心点
        this.startPoint = fontPixel.point;
        this.startIndex = fontPixel.index;
        canvasEl.addEventListener('mousemove', this.onCanvasMousemove);
        canvasEl.addEventListener('mouseup', this.onCanvasMouseup);
        e.stopPropagation();
    }
    /**
     * onCanvasMousemove
     * @param e
     */
    onCanvasMousemove(e) {
        // console.log('onCanvasMousemove');
        if (!this.context)
            return;
        const canvasEl = this.context.getCanvasEl();
        if (!canvasEl)
            return;
        const ctx = this.context.getCtx();
        if (!ctx)
            return;
        if (!this.startPoint)
            return;
        // target点
        const targetPixel = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl?.getBoundingClientRect(),
        });
        this.drawModify(targetPixel);
        e.stopPropagation();
    }
    /**
     * onCanvasMouseup
     * @param e
     */
    onCanvasMouseup(e) {
        // console.log('onCanvasMouseup');
        this.end(e);
        e.stopPropagation();
    }
    /**
     * onCanvasIsModifyMousemove
     * @description 这个事件主要是用来控制移动到anchor点上的时候鼠标指针显示为可以修改的形状
     * ew-resize
       ns-resize
       nesw-resize
       nwse-resize
     * @param e
     */
    onCanvasIsModifyMousemove(e) {
        if (!this.context)
            return;
        const canvasEl = this.context.getCanvasEl();
        const assistCanvasEl = this.context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        // 如果已经进入了修改模式则不执行其他操作
        if (this.startPoint || this.moveStartPoint)
            return;
        const pixel = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl?.getBoundingClientRect(),
        });
        // 判断按下的startPoint是否为anchor点
        // 用isPointInPath判断只能判断出point在路径中，但是不能获取anchor的中心点
        // 需要判断point在那个anchor里才可以，这样可以获取命中的圆形中心点
        const findInAnchorPixel = this.getPointInAnchor(pixel);
        // 移动到了anchor上
        if (findInAnchorPixel) {
            this.canMove = false;
            this.setResizeCursorByIndex(findInAnchorPixel.index);
        }
        else {
            // 查看是否可以移动从而改变光标的样式，查看targetPoint是否在Anchors的多边形区域中，不包括anchor的控制点
            this.canMove = this.isCanMove(pixel);
            // 可以移动
            if (this.canMove) {
                canvasEl.style.cursor = assistCanvasEl.style.cursor = 'move';
            }
            else {
                canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
            }
        }
        e.stopPropagation();
    }
    /**
     * initMoveEvents
     * @description 注册移动相关的事件
     */
    initMoveEvents() {
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.addEventListener('mousedown', this.onMoveMousedown);
    }
    /**
     * clearMoveEvents
     * @description - 清除移动相关的事件
     */
    clearMoveEvents() {
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.removeEventListener('mousedown', this.onMoveMousedown);
        canvasEl.removeEventListener('mousemove', this.onMoveMousemove);
        assistCanvasEl.removeEventListener('mousemove', this.onMoveMousemove);
        assistCanvasEl.removeEventListener('mouseup', this.onMoveMouseup);
    }
    /**
     * onMoveMouseup
     * @description
     * @param e
     */
    onMoveMousedown(e) {
        // console.log('onMoveMousedown');
        if (!e)
            return;
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        if (!this.canMove)
            return;
        // assistCanvas置顶
        context.setFrontCanvas(assistCanvasEl);
        // 开始移动的点
        this.moveStartPoint = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl.getBoundingClientRect(),
        });
        // TODO: 绘制一个移动的图形
        this.drawMoveGeometry();
        canvasEl.addEventListener('mousemove', this.onMoveMousemove);
        assistCanvasEl.addEventListener('mousemove', this.onMoveMousemove);
        assistCanvasEl.addEventListener('mouseup', this.onMoveMouseup);
        e?.stopPropagation();
    }
    /**
     * onMoveMousedown
     * @description
     * @param e
     */
    onMoveMousemove(e) {
        // console.log('onMoveMousemove');
        if (!e)
            return;
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        const targetPixel = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl.getBoundingClientRect(),
        });
        // 开始移动了
        if (this.moveStartPoint) {
            this.isMoved = true;
            // TODO: 移动移动的图形
            context.clearAssistDraw();
            this.drawMoveGeometry(this.moveStartPoint, targetPixel);
            e?.stopPropagation();
            return;
        }
        e?.stopPropagation();
    }
    /**
     * onMoveMousemove
     * @description
     * @param e
     */
    onMoveMouseup(e) {
        // console.log('onMoveMouseup');
        this.endMove(e);
    }
    /**
     * start
     */
    start() {
        // console.log('start');
        if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status))
            return;
        const { context } = this;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        // 触发开始之前事件
        this.trigger(ActionEvents.BeforeStart, {
            selectType: this.getSelectType(),
            actionType: ActionType.Modify,
        });
        // 注册按下事件
        canvasEl.addEventListener('mousedown', this.onCanvasMousedown);
        // 注册监控是否可以修改的移动事件
        canvasEl.addEventListener('mousemove', this.onCanvasIsModifyMousemove);
        this.initMoveEvents();
        // 修改状态
        this.status = ActionStatus.Running;
        // 触发开始事件
        this.trigger(ActionEvents.Start, {
            selectType: this.getSelectType(),
            actionType: ActionType.Modify,
        });
    }
    /**
     * end
     * @param e
     */
    end(e) {
        if (!e)
            return;
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
        canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
        canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
        canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);
        this.clearMoveEvents();
        const targetPixel = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl?.getBoundingClientRect(),
        });
        this.drawModify(targetPixel);
        this.status = ActionStatus.End;
        this.startPoint = null;
        this.startPoint = null;
        this.startIndex = -1;
        this.moveStartPoint = null;
        this.canMove = true;
        this.isMoved = false;
        this.trigger(ActionEvents.End, {
            selectType: this.getSelectType(),
            actionType: ActionType.Modify,
            data: targetPixel,
        });
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        this?.context?.enableMap();
    }
    /**
     * endMove
     * @param e
     */
    endMove(e) {
        // console.log('onMoveMouseup');
        if (!e)
            return;
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        // TODO: 移动真正的图形，擦除移动的图形
        const targetPixel = MathUtil.clientToCtxPoint({
            event: e,
            rect: canvasEl.getBoundingClientRect(),
        });
        if (!this.canMove || !this.isMoved || !this.moveStartPoint) {
            // assistCanvas置部
            context.setBackCanvas(assistCanvasEl);
            this.canMove = true;
            this.isMoved = false;
            this.moveStartPoint = null;
            this.startPoint = null;
            this.startIndex = -1;
            canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
            canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
            canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
            canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);
            this.clearMoveEvents();
            this.status = ActionStatus.End;
            this.trigger(ActionEvents.End, {
                selectType: this.getSelectType(),
                actionType: ActionType.Modify,
                data: targetPixel,
            });
            return;
        }
        // assistCanvas置部
        context.setBackCanvas(assistCanvasEl);
        context.clearAssistDraw();
        this.drawMove(this.moveStartPoint, targetPixel);
        this.canMove = true;
        this.isMoved = false;
        this.moveStartPoint = null;
        this.startPoint = null;
        this.startIndex = -1;
        canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
        canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
        canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
        canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);
        this.clearMoveEvents();
        this.status = ActionStatus.End;
        this.trigger(ActionEvents.End, {
            selectType: this.getSelectType(),
            actionType: ActionType.Modify,
            data: targetPixel,
        });
        this?.context?.enableMap();
    }
    /**
     * destroy
     */
    destroy() {
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        this.remove(this.EmitActions.CONTEXT, this.onContext);
        canvasEl.removeEventListener('mousedown', this.onCanvasMousedown);
        canvasEl.removeEventListener('mousemove', this.onCanvasMousemove);
        canvasEl.removeEventListener('mouseup', this.onCanvasMouseup);
        canvasEl.removeEventListener('mousemove', this.onCanvasIsModifyMousemove);
        this.clearMoveEvents();
        context.clearDraw();
        context.drawHistoryData();
        this.status = ActionStatus.Destroy;
        this.startPoint = null;
        this.startIndex = -1;
        this.moveStartPoint = null;
        this.canMove = true;
        this.isMoved = false;
        this.trigger(ActionEvents.Destroy, {
            selectType: this.getSelectType(),
            actionType: ActionType.Modify,
        });
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        this?.context?.enableMap();
    }
    /**
     * setContext
     * @param context
     */
    setContext(context) {
        this.context = context;
        this.trigger(this.EmitActions.CONTEXT);
    }
    /**
     * getStatus - 获取状态
     */
    getStatus() {
        return this.status;
    }
}
export default ModifyAction;
