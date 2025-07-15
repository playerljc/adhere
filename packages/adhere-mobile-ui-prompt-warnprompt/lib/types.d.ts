import type { ToastShowProps } from 'antd-mobile';
import type { ModalShowProps } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
/**
 * 持续时间类型
 * - number: 毫秒数
 * - VoidFunction: 清除函数
 */
export type Duration = number | VoidFunction;
/**
 * 警告对话框属性接口
 * 继承自ModalShowProps，添加自定义的duration属性
 */
export interface WarnDialogProps extends ModalShowProps {
    /**
     * 对话框自动关闭的持续时间（毫秒）
     * 如果为0或未设置，则不会自动关闭
     * 如果为函数，则调用该函数清除定时器
     */
    duration?: Duration;
}
/**
 * 警告对话框函数类型
 * 接收WarnDialogProps参数，返回ModalShowHandler
 */
export interface WarnDialog {
    (props: WarnDialogProps): ModalShowHandler;
}
/**
 * 警告提示组件接口
 * 包含两个主要方法：openWarnMessage和openWarnDialog
 */
export interface WarnPromptComponent {
    /**
     * 显示警告消息（Toast形式）
     * @param props - Toast显示属性
     * @returns Toast处理器
     */
    openWarnMessage: (props?: ToastShowProps) => ToastHandler;
    /**
     * 显示警告对话框（Modal形式）
     * @param props - 对话框属性
     * @returns Modal处理器
     */
    openWarnDialog: WarnDialog;
}
/**
 * 警告提示配置选项
 */
export interface WarnPromptConfig {
    /**
     * 默认持续时间（毫秒）
     * @default 3000
     */
    defaultDuration?: number;
    /**
     * 默认图标颜色
     * @default '#faad14'
     */
    defaultIconColor?: string;
    /**
     * 默认图标大小
     * @default 22
     */
    defaultIconSize?: number;
}
