import type { DialogConfirmProps } from 'antd-mobile';
import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
/**
 * 删除确认组件的属性接口
 * 继承自 antd-mobile 的 DialogConfirmProps，并添加了额外的样式和子元素支持
 */
export interface DelConfirmProps extends DialogConfirmProps {
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 子元素内容 */
    children?: ReactNode;
}
/**
 * 删除确认组件类型
 * 包含组件本身和静态方法 open
 */
export type DelConfirmComponent = NamedExoticComponent<DelConfirmProps> & {
    /**
     * 静态方法：打开删除确认对话框
     * @param props - 对话框配置属性
     * @returns Promise<boolean> - 用户确认结果，true表示确认删除，false表示取消
     */
    open: (props?: DialogConfirmProps) => Promise<boolean>;
};
