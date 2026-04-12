import type { TabsProps } from 'antd';
import type { CSSProperties, FC } from 'react';
import type { TabsTabSettingItem } from '../../../components/TabsTabSettingFormItem';
import type { DesignValue, StyleProps } from '../../../types';
export type { TabsTabSettingItem };
export type InternalTabsLayoutProps = TabsProps & {
    id?: string;
    className?: string;
    style?: CSSProperties;
    styleProps?: StyleProps;
    children?: DesignValue[];
    /** 标签页配置，与 children 按下标一一对应 */
    tabItems?: TabsTabSettingItem[];
    /** 已构建好的 antd Tabs items（优先级高于 children + tabItems） */
    centered?: boolean;
    defaultActiveKey?: string;
};
/**
 * InternalTabs
 * @description 设计器中的 Tabs 容器，属性对齐 antd Tabs（见 https://ant.design/components/tabs-cn ）
 */
declare const InternalTabs: FC<InternalTabsLayoutProps>;
export default InternalTabs;
