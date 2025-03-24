import Emitter from '@baifendian/adhere-util-emitter';
import DefaultStyle from '../DefaultStyle';
import { ActionStatus } from '../types';
/**
 * DrawAction
 * @class DrawAction
 * @classdesc DrawAction
 */
class DrawAction extends Emitter.Events {
    // 上下文对象
    context = null;
    // 样式对象
    // @ts-ignore
    style = {
        ...DefaultStyle,
    };
    // 当前状态
    status = ActionStatus.UnStart;
    /**
     * destroy
     */
    destroy() {
        if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status))
            return;
        const { context } = this;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        this.context.enableMap();
    }
    /**
     * end
     * @param e
     */
    end(e) {
        if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status))
            return;
        const { context } = this;
        const canvasEl = context.getCanvasEl();
        const assistCanvasEl = context.getAssistCanvasEl();
        if (!canvasEl || !assistCanvasEl)
            return;
        canvasEl.style.cursor = assistCanvasEl.style.cursor = 'default';
        this.context.enableMap();
    }
    /**
     * start
     * @param style
     */
    start(style) {
        if (!this.context || [ActionStatus.Running, ActionStatus.Destroy].includes(this.status))
            return;
        this.setCursor();
    }
    /**
     * setCursor
     */
    setCursor() {
        const { context } = this;
        if (!context)
            return;
        const canvasEl = context.getCanvasEl();
        if (!canvasEl)
            return;
        canvasEl.style.cursor = `url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjI3OTEzNjM1NDc3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQzMDgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi4wMDIgODg3QzMwNC44OTIgODg3IDEzNyA3MTkuMTA4IDEzNyA1MTIuMDAyIDEzNyAzMDQuODkyIDMwNC44OTIgMTM3IDUxMi4wMDIgMTM3IDcxOS4xMDggMTM3IDg4NyAzMDQuODkyIDg4NyA1MTIuMDAyIDg4NyA3MTkuMTA4IDcxOS4xMDggODg3IDUxMi4wMDIgODg3ek01MTIgNzg3YzE1MS44NzggMCAyNzUtMTIzLjEyMiAyNzUtMjc1UzY2My44NzggMjM3IDUxMiAyMzcgMjM3IDM2MC4xMjIgMjM3IDUxMnMxMjMuMTIyIDI3NSAyNzUgMjc1eiIgZmlsbD0iIzFBQTVGRiIgcC1pZD0iNDMwOSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0yMjUgMGEyMjUgMjI1IDAgMSAwIDQ1MCAwIDIyNSAyMjUgMCAxIDAtNDUwIDBaIiBmaWxsPSIjMUFBNUZGIiBwLWlkPSI0MzEwIj48L3BhdGg+PC9zdmc+), auto`;
    }
    /**
     * setContext
     * @param context
     */
    setContext(context) {
        this.context = context;
    }
    /**
     * getStatus - 获取状态
     */
    getStatus() {
        return this.status;
    }
}
export default DrawAction;
