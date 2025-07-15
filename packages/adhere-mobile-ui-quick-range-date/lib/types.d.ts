import type { CSSProperties } from 'react';
import { ReactNode } from 'react';
import type { CalendarModalProps, CheckboxCheckListProps, ModalTriggerPromptProps } from '@baifendian/adhere-mobile-ui-anthoc/es/types';
import type { QuickRangeDateComponent as AdhereQuickRangeDateComponent, QuickRangeDateProps as AdhereQuickRangeDateProps } from '@baifendian/adhere-ui-quick-range-date/es/types';
import { DateValue, QuickRangeDateChange } from '@baifendian/adhere-ui-quick-range-date/src/types';
/**
 * 移动端快速日期范围选择器属性接口
 * 继承自基础快速日期范围选择器，并添加移动端特有的配置
 */
export interface QuickRangeDateProps extends Omit<AdhereQuickRangeDateProps, 'rangePickerProps' | 'radioGroupProps' | 'className' | 'style' | 'children'> {
    /** 外层容器类名 */
    className?: string;
    /** 外层容器样式 */
    style?: CSSProperties;
    /** 内层容器类名 */
    innerClassName?: string;
    /** 内层容器样式 */
    innerStyle?: CSSProperties;
    /** 日历模态框属性配置 */
    calendarModalProps: CalendarModalProps;
    /** 复选框列表属性配置 */
    checkboxCheckListProps: CheckboxCheckListProps;
    /** 模态框触发器提示属性配置 */
    modalTriggerPromptProps: ModalTriggerPromptProps<string>;
    /** 自定义渲染函数 */
    children?: (params: {
        /** 原始默认元素 */
        originDefaultElement: ReactNode;
        /** 默认元素 */
        defaultElement: ReactNode;
        /** 当前选中的日期值 */
        value?: DateValue;
        /** 日期变化回调函数 */
        onChange?: QuickRangeDateChange;
    }) => ReactNode;
}
/**
 * 移动端快速日期范围选择器组件类型
 * 继承自基础快速日期范围选择器组件类型
 */
export type QuickRangeDateComponent = AdhereQuickRangeDateComponent;
