import type { AlertArgv, ConfirmArgv, PromptArgv, ModalArgv } from './types';
declare const MessageDialogFactory: {
    /**
     * Confirm
     * @param title {String | ReactNode}
     * @param text {String | ReactNode}
     * @param width {number}
     * @param zIndex {number}
     * @param icon {React.ReactElement}
     * @param {Function} - onSuccess
     */
    Confirm({ title, text, width, zIndex, local, icon, onSuccess, }: ConfirmArgv): void;
    /**
     * Alert
     * @param title - {String | ReactNode}
     * @param text - {String | ReactNode}
     * @param width - {number}
     * @param local
     * @param zIndex
     * @param icon - {React.ReactElement | null}
     */
    Alert({ title, text, width, zIndex, local, icon }: AlertArgv): void;
    /**
     * Prompt
     * @param title
     * @param config
     * @param layout
     * @param width
     * @param zIndex
     * @param local
     * @param onSuccess
     * @constructor
     */
    Prompt({ title, config, layout, width, zIndex, local, onSuccess, }: PromptArgv): void;
    InputPrompt({ config, ...params }: PromptArgv): void;
    TextAreaPrompt({ config, ...params }: {
        [x: string]: any;
        config: any;
    }): void;
    PassWordPrompt({ config, ...params }: {
        [x: string]: any;
        config: any;
    }): void;
    NumberPrompt({ config, ...params }: {
        [x: string]: any;
        config: any;
    }): void;
    /**
     *  Modal
     *  @param {Object} - config
     *  @param {String | ReactElement} - title
     *  @param {Boolean} - maskClosable 是否点击遮罩关闭 默认是false
     *  @param {Number} - zIndex 层级大小
     *  @param {String} - className 容器类名
     *  @param {String} - wrapClassName 包裹容器类名
     *  @param {Boolean} - centered 垂直居中展示 Modal 默认false
     *  @param {String | Number} - width 宽度
     *  @param {Boolean} - closable 是否显示关闭 默认true
     *  @param {Array<ReactNode>} - footer
     *  @param {ReactNode} - children
     *  @param defaultCloseBtn
     */
    Modal({ config, children, defaultCloseBtn, local, }: ModalArgv): {
        el: HTMLDivElement;
        close: () => void;
    };
    /**
     * close
     * @param el
     */
    close(el: HTMLElement): void;
};
export default MessageDialogFactory;
