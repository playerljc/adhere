declare const _default: {
    /**
     * show - 显示一个遮罩
     * @param {HTMLElement} parent
     * @param {string} text
     * @param {number} zIndex
     * @return {HTMLElement}
     */
    show(parent?: HTMLElement, text?: string, zIndex?: number): HTMLElement;
    /**
     * hide - 取消一个遮罩
     * @param {HTMLElement} indicatorDom
     */
    hide(indicatorDom: HTMLElement): void;
    /**
     * hideAll - 隐藏所有遮罩
     */
    hideAll(): void;
};
export default _default;
