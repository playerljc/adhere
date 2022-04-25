import { IAlertArgv, IConfirmArgv } from './types';
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
    Confirm({ title, text, width, zIndex, local, icon, onSuccess, }: IConfirmArgv): void;
    /**
     * Alert
     * @param title - {String | ReactNode}
     * @param text - {String | ReactNode}
     * @param width - {number}
     * @param local
     * @param zIndex
     * @param icon - {React.ReactElement | null}
     */
    Alert({ title, text, width, zIndex, local, icon }: IAlertArgv): void;
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
    Prompt({ title, config, layout, width, zIndex, local, onSuccess }: {
        title: any;
        config: any;
        layout?: {
            labelCol: {
                span: number;
            };
            wrapperCol: {
                span: number;
            };
        } | undefined;
        width?: number | undefined;
        zIndex?: number | undefined;
        local: any;
        onSuccess: any;
    }): void;
    InputPrompt({ config, ...params }: {
        [x: string]: any;
        config: any;
    }): void;
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
     *  @param defaultCloneBtn
     */
    Modal({ config, children, defaultCloneBtn, local }: {
        config?: {} | undefined;
        children?: null | undefined;
        defaultCloneBtn?: boolean | undefined;
        local?: string | undefined;
    }): {
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
