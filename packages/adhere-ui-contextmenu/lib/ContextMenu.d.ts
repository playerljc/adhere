import { IData, IConfig } from './types';
declare const ContextMenu: {
    /**
     * config
     * {
     *   name - {String} 名字
     *   icon - {String} 图标
     *   id - {String} 唯一的id
     *   disabled - {Boolean} 不可用
     *   separation - {Bolean} 分割线
     *   attribute - {Object} 自定义属性
     *   children - {Array<Object> 孩子
     * }
     *{
     *   width - {Number} 宽度
     *   x - {Number} 显示的x坐标 相对于body
     *   y - {Number} 现实的y坐标 相对于body
     *   maskClosable - {Boolean} 点击其他位置是否关闭菜单
     *   handler - {Function} 点击的事件句柄
     * }
     * @return {HTMLDivElement}
     * @param data
     * @param config
     */
    open(data: IData, config: IConfig): HTMLDivElement;
    close(el: any): void;
};
export default ContextMenu;
