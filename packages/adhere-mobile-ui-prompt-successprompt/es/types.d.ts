import type { ModalShowProps, ToastShowProps } from 'antd-mobile';
import type { ModalShowHandler } from 'antd-mobile/es/components/modal/show';
import type { ToastHandler } from 'antd-mobile/es/components/toast/methods';
/**
 * 持续时间类型
 * 可以是数字（毫秒）或空函数
 */
export type Duration = number | (() => void);
/**
 * 成功对话框属性接口
 * 继承自ModalShowProps并添加自定义属性
 */
export interface SuccessDialogProps extends ModalShowProps {
    /**
     * 自动关闭的持续时间（毫秒）
     * 如果为0或false，则不会自动关闭
     * 如果为函数，则调用该函数来关闭对话框
     * @default 3000
     */
    duration?: Duration;
    /**
     * 对话框内容
     * 如果不提供，将使用默认的成功消息
     */
    content?: React.ReactNode;
}
/**
 * 成功对话框函数类型
 * 接收SuccessDialogProps参数，返回ModalShowHandler
 */
export type SuccessDialog = (props: SuccessDialogProps) => ModalShowHandler;
/**
 * 成功提示组件接口
 * 包含消息提示和对话框两种展示方式
 */
export interface SuccessDialogComponent {
    /**
     * 打开成功消息提示（Toast形式）
     * @param props - Toast配置属性
     * @returns Toast处理器，可用于手动关闭
     */
    openSuccessMessage: (props?: ToastShowProps) => ToastHandler;
    /**
     * 打开成功对话框（Modal形式）
     * @param props - 对话框配置属性
     * @returns Modal处理器，可用于手动关闭
     */
    openSuccessDialog: SuccessDialog;
}
