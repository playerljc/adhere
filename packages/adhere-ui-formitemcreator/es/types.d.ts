import type { ColProps, ColSize } from 'antd/lib/col';
import type { FormItemProps } from 'antd/lib/form/FormItem';
import type { RowProps } from 'antd/lib/row';
import type { NamedExoticComponent } from 'react';
import type { ReactElement } from 'react';
/**
 * 表单项目创建器属性接口
 * @interface FormItemCreatorProps
 * @description 用于配置表单项目创建器的核心属性
 */
export interface FormItemCreatorProps {
    /** 表单列配置数组 */
    columns: ColumnItemProps[];
    /** 表单布局配置 */
    layout?: FormItemLayoutProps;
    /** 行布局配置 */
    row?: RowProps;
}
/**
 * 表单列项目属性接口
 * @interface ColumnItemProps
 * @description 扩展自 FormItemProps，用于定义单个表单项目的配置
 */
export interface ColumnItemProps extends FormItemProps {
    /** 表单字段名称 */
    name?: string | number | (string | number)[];
    /** 表单组件类型 */
    type?: symbol;
    /** 表单组件的内容属性 */
    contentProps?: Record<string, any>;
    /** 是否跳过渲染此项目 */
    skip?: boolean;
    /** 自定义内容组件 */
    content?: ReactElement;
    /** 列布局配置 */
    col?: ColProps;
}
/**
 * 表单项目布局属性接口
 * @interface FormItemLayoutProps
 * @description 定义表单标签和包装器的列布局
 */
export interface FormItemLayoutProps {
    /** 标签列配置 */
    labelCol?: ColSize;
    /** 包装器列配置 */
    wrapperCol?: ColSize;
}
/**
 * 标签项目属性接口
 * @interface TagItemProps
 * @description 用于配置标签组件的属性
 */
export interface TagItemProps {
    /** 标签值数组 */
    value?: string[];
    /** 值变化回调函数 */
    onChange?: (tags: string[]) => void;
    /** 是否禁用 */
    disabled?: boolean;
    /** 长标签显示限制长度 */
    longLimit?: number;
    /** 添加标签的显示内容 */
    addTagInner?: string | ReactElement;
}
/**
 * 表单项目创建器组件类型
 * @type FormItemCreatorComponent
 * @description 包含所有表单组件类型的符号定义
 */
export type FormItemCreatorComponent = NamedExoticComponent<FormItemCreatorProps> & {
    /** 只读文本类型 */
    TEXT: symbol;
    /** 输入框类型 */
    INPUT: symbol;
    /** 搜索框类型 */
    SEARCH: symbol;
    /** 密码输入框类型 */
    PASSWORD: symbol;
    /** 多行文本输入框类型 */
    TEXTAREA: symbol;
    /** 数字输入框类型 */
    NUMBER: symbol;
    /** 单选框类型 */
    RADIO: symbol;
    /** 复选框类型 */
    CHECKBOX: symbol;
    /** 日期选择器类型 */
    DATEPICKER: symbol;
    /** 日期范围选择器类型 */
    RANGEPICKER: symbol;
    /** 时间选择器类型 */
    TIMEPICKER: symbol;
    /** 开关类型 */
    SWITCH: symbol;
    /** 下拉选择器类型 */
    SELECT: symbol;
    /** 滑动条类型 */
    SLIDER: symbol;
    /** 评分类型 */
    RATE: symbol;
    /** 文件上传类型 */
    UPLOAD: symbol;
    /** 标签类型 */
    TAG: symbol;
    /** 自定义定义类型 */
    DEFINE: symbol;
};
