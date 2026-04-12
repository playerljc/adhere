import type { CollapseProps } from 'antd';
import type { CSSProperties, FC } from 'react';
import type { CollapsePanelSettingItem } from '../../../components/CollapsePanelSettingFormItem';
import type { DesignValue, StyleProps } from '../../../types';
export type { CollapsePanelSettingItem };
export type InternalCollapseLayoutProps = CollapseProps & {
    id?: string;
    className?: string;
    style?: CSSProperties;
    styleProps?: StyleProps;
    children?: DesignValue[];
    /** 面板配置，与 children 按下标一一对应 */
    panelItems?: CollapsePanelSettingItem[];
    /** 已构建好的 antd Collapse items（优先级高于 children + panelItems） */
    items?: CollapseProps['items'];
};
/**
 * InternalCollapse
 * @description 设计器中的 Collapse 容器，属性对齐 antd Collapse（见 https://ant.design/components/collapse-cn ）
 */
declare const InternalCollapse: FC<InternalCollapseLayoutProps>;
export default InternalCollapse;
