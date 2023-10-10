import React from 'react';
import type { AlertArgv, ConfirmArgv, ModalArgv, PromptArgv } from './types';
declare const MessageDialogFactory: {
    /**
     * setAntdConfigProviderProps
     * @description 设置ConfigProvider的props
     * @param params
     */
    setAntdConfigProviderProps(params: any): void;
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
    Alert({ title, text, width, zIndex, local, icon, }: AlertArgv): void;
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
    /**
     * InputPrompt
     * @param config
     * @param params
     * @constructor
     */
    InputPrompt({ config, ...params }: PromptArgv): void;
    /**
     * TextAreaPrompt
     * @param config
     * @param params
     * @constructor
     */
    TextAreaPrompt({ config, ...params }: {
        [x: string]: any;
        config: any;
    }): void;
    /**
     * PassWordPrompt
     * @param config
     * @param params
     * @constructor
     */
    PassWordPrompt({ config, ...params }: {
        [x: string]: any;
        config: any;
    }): void;
    /**
     * NumberPrompt
     * @param config
     * @param params
     * @constructor
     */
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
     * MaximizeModal
     * @param config
     * @param children
     * @param defaultCloseBtn
     * @param local
     * @constructor
     */
    MaximizeModal({ config, children, defaultCloseBtn, local, }: ModalArgv): {
        el: HTMLDivElement;
        close: () => void;
    };
    /**
     * close
     * @param el
     */
    close(el: HTMLElement): void;
    /**
     * Trigger
     */
    Trigger: React.FC<import("./types").TriggerProps>;
    /**
     * TriggerPrompt
     */
    TriggerPrompt: React.FC<import("./types").TriggerPromptProps>;
};
export default MessageDialogFactory;
