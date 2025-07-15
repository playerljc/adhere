import type { DialogConfirmProps } from 'antd-mobile';
import type { CSSProperties, NamedExoticComponent, ReactNode } from 'react';
/**
 * 重要确认对话框组件的属性接口
 * 继承自 antd-mobile 的 DialogConfirmProps，并添加了额外的样式和子元素支持
 */
export interface ImportantConfirmProps extends DialogConfirmProps {
    /** 自定义CSS类名 */
    className?: string;
    /** 自定义内联样式 */
    style?: CSSProperties;
    /** 子元素内容 */
    children?: ReactNode;
}
/**
 * 重要确认对话框组件类型
 * 包含组件本身和静态方法 open
 */
export type ImportantConfirmComponent = NamedExoticComponent<ImportantConfirmProps> & {
    /**
     * 打开重要确认对话框的静态方法
     * @param props - 对话框配置属性
     * @returns Promise<boolean> - 返回用户的选择结果（true为确认，false为取消）
     */
    open: (props: DialogConfirmProps) => Promise<boolean>;
};
