import type { CSSProperties, FC } from 'react';
import type { TabsProps } from 'antd';
import type { DesignValue, StyleProps } from '../../../types';
import type { TabsTabSettingItem } from '../../../components/TabsTabSettingFormItem';
export type { TabsTabSettingItem };
export interface InternalTabsLayoutProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    children?: DesignValue[];
    /** 标签页配置，与 children 按下标一一对应 */
    tabItems?: TabsTabSettingItem[];
    /** 已构建好的 antd Tabs items（优先级高于 children + tabItems） */
    items?: TabsProps['items'];
    type?: TabsProps['type'];
    size?: TabsProps['size'];
    tabPlacement?: TabsProps['tabPlacement'];
    centered?: boolean;
    defaultActiveKey?: string;
    destroyOnHidden?: TabsProps['destroyOnHidden'];
    tabBarGutter?: TabsProps['tabBarGutter'];
    hideAdd?: TabsProps['hideAdd'];
    animated?: TabsProps['animated'];
    styleProps?: StyleProps;
}
/**
 * InternalTabs
 * @description 设计器中的 Tabs 容器，属性对齐 antd Tabs（见 https://ant.design/components/tabs-cn ）
 */
declare const InternalTabs: FC<InternalTabsLayoutProps>;
export default InternalTabs;
