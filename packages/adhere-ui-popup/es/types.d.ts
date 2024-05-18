import { ButtonProps as AntdButtonProps } from 'antd';
import { ButtonProps as AntdMobileButtonProps } from 'antd-mobile';
import { CSSProperties, ReactNode } from 'react';
/**
 * IConfig
 * @interface IConfig
 */
export interface IConfig {
    onCreate?: (arg?: any) => any;
    onBeforeShow?: (arg?: any) => any;
    onAfterShow?: (arg?: any) => any;
    onUpdate?: () => any;
    onBeforeClose?: () => Promise<void>;
    onAfterClose?: (arg?: any) => any;
    onDestroy?: (arg?: any) => any;
    children?: any;
    zIndex?: number;
}
/**
 * TriggerProps
 */
export interface TriggerProps {
    className?: string;
    style?: CSSProperties;
    children?: any;
    value?: any;
    onChange?: (params?: any) => void;
    renderTrigger?: () => ReactNode;
    title?: ReactNode;
    closeIcon?: ReactNode;
    extra?: ReactNode;
    disabled?: boolean;
    isShowCloseAction?: boolean;
    closeActionPosition?: 'start' | 'end';
    actions?: Omit<AntdButtonProps | AntdMobileButtonProps, 'onClick'> & {
        key: any;
        onClick?: () => Promise<any>;
    }[];
    popupConfig?: Omit<IConfig, 'children'>;
}
/**
 * TriggerPromptProps
 */
export type TriggerPromptProps = Omit<TriggerProps, 'actions'> & {
    isShowCloseAction?: boolean;
    onSubmit?: () => Promise<any>;
    okText?: string;
};
/**
 * SubmitButtonProps
 */
export type SubmitButtonProps = Omit<AntdMobileButtonProps, 'onClick'> & {
    onClick: (e?: any) => Promise<void>;
};
