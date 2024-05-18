export interface IAdapterScreen {
    /**
     * 参数列表
     * 对象：
     *
     * @param {Object|String} options
     * - 传入对象，对象中的属性如下：
     * - el（可选）：渲染的元素，默认是 "#app"
     * - dw（可选）：设计稿的宽度，默认是 1920
     * - dh（可选）：设计稿的高度，默认是 929 ，如果项目以全屏展示，则可以设置为1080
     * - resize（可选）：是否监听resize事件，默认是 true
     * - ignore(可选)：忽略缩放的元素（该元素将反向缩放），参数见readme.md
     * - transition（可选）：过渡时间，默认是 0
     * - delay（可选）：延迟，默认是 0
     */
    init(options: {
        el?: string;
        dw?: number;
        dh?: number;
        resize?: boolean;
        ignore?: Array<any>;
        transition?: number;
        delay?: number;
    } | string): void;
    /**
     * @param {String} id
     * 关闭autofit.js造成的影响
     *
     */
    off(id: string): void;
    elRectification(el: string, level: number): void;
    detectZoom: () => void;
}
