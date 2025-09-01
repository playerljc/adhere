/**
 * 忽略缩放的元素配置接口
 */
export interface IIgnoreElement {
    /** 元素选择器或DOM元素 */
    el?: string | HTMLElement;
    /** DOM元素（兼容性属性） */
    dom?: string | HTMLElement;
    /** 缩放比例，默认为 1/currScale */
    scale?: number;
    /** 字体大小，默认为 'autofit' */
    fontSize?: number | string;
    /** 宽度，默认为 'autofit' */
    width?: number | string;
    /** 高度，默认为 'autofit' */
    height?: number | string;
}
/**
 * 初始化选项接口
 */
export interface IInitOptions {
    /** 渲染的元素选择器，默认是 "#app" */
    el?: string;
    /** 设计稿的宽度，默认是 1920 */
    dw?: number;
    /** 设计稿的高度，默认是 929，如果项目以全屏展示，则可以设置为1080 */
    dh?: number;
    /** 是否监听resize事件，默认是 true */
    resize?: boolean;
    /** 忽略缩放的元素（该元素将反向缩放） */
    ignore?: IIgnoreElement[];
    /** 过渡时间，默认是 0 */
    transition?: number | string;
    /** 延迟，默认是 0 */
    delay?: number;
}
/**
 * 最小尺寸配置接口
 */
export interface IMinSize {
    /** 最小宽度 */
    minWidth: number;
    /** 最小高度 */
    minHeight: number;
    /** 可用宽度，默认为 window.screen.availWidth */
    availWidth?: number;
}
/**
 * 适配屏幕接口
 */
export interface IAdapterScreen {
    /**
     * 初始化屏幕适配
     * @param options - 配置选项或元素选择器字符串
     * @param isShowInitTip - 是否显示初始化提示，默认为 true
     */
    init(options?: IInitOptions | string, isShowInitTip?: boolean): void;
    /**
     * 关闭autofit.js造成的影响
     * @param id - 元素选择器，默认为 '#app'
     */
    off(id?: string): void;
    /**
     * 元素修正
     * @param el - 元素选择器
     * @param level - 修正级别，默认为 1
     */
    elRectification(el: string, level?: number): void;
    /**
     * 弹性布局适配
     * @param minSize - 最小尺寸配置
     * @param isUseMediaQuery - 是否使用媒体查询，默认为 false
     */
    flexible(minSize?: IMinSize, isUseMediaQuery?: boolean): void;
    /**
     * 设置页面最小尺寸到CSS
     * @param el - 目标元素，默认为 document.body
     */
    setPageMinSizeToCSS(el?: HTMLElement): () => void;
    /**
     * 检测浏览器缩放
     */
    detectZoom(): void;
}
