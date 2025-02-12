import { NamedExoticComponent } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import CodeBoxSection from './PlayGroundPage/CodeBoxSection';
import FunctionPropsSection from './PlayGroundPage/FunctionPropsSection';
import PropsSection from './PlayGroundPage/PropsSection';
import Section from './PlayGroundPage/Section';
import TabPanel from './SimpleTabs/TabPanel';
/**
 * CardProps
 */
export interface CardProps {
    className?: string;
    style?: CSSProperties;
    headerClassName?: string;
    headerStyle?: CSSProperties;
    bodyClassName?: string;
    bodyStyle?: CSSProperties;
    actionClassName?: string;
    actionStyle?: CSSProperties;
    title?: ReactNode | string;
    extra?: ReactNode;
    description?: {
        title: string | ReactNode;
        info: string | ReactNode;
    };
    actions?: ReactNode[];
    children?: any;
}
/**
 * TableColumn
 */
export interface TableColumn {
    key: string;
    dataIndex: string;
    title: ReactNode | string;
    width: string;
    align?: 'left' | 'right' | 'center';
    valign?: 'top' | 'middle' | 'bottom';
    render?: (text: any, record: object, rowIndex: number, columnIndex: number) => void;
    className?: string;
    style?: CSSProperties;
}
/**
 * TableProps
 */
export interface TableProps {
    className?: string;
    style?: CSSProperties;
    tableClassName?: string;
    tableStyle?: CSSProperties;
    columns: TableColumn[];
    dataSource: object[];
    rowKey?: string;
}
export interface CodePanelProps {
    codeText: string;
    theme?: string;
}
/**
 * PlayGroundProps
 * @interface PlayGroundProps
 */
export interface PlayGroundProps extends CodePanelProps {
    id?: string;
    cardProps: CardProps;
    isActive: boolean;
    expand?: boolean;
    title?: any;
    active?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
/**
 * PlayGroundMultiProps
 */
export interface PlayGroundMultiProps extends PlayGroundProps {
    config?: PlayGroundProps[];
}
export interface PlayGroundMultiState extends PlayGroundState {
    config?: PlayGroundProps[];
}
/**
 * PlayGroundState
 * @interface PlayGroundState
 */
export interface PlayGroundState {
    expand?: boolean;
    config?: PlayGroundProps[];
    activeKey?: string;
}
/**
 * PropsProps
 */
export interface PropsProps extends CollapseProps {
    data: Array<{
        params: string | ReactNode;
        desc: string | ReactNode;
        type: string | ReactNode;
        defaultVal: string | ReactNode;
    }>;
}
/**
 * FunctionProps
 */
export interface FunctionProps extends CollapseProps {
    data: Array<{
        name: string | ReactNode;
        desc: string | ReactNode;
        modifier: 'static' | 'public' | 'private' | 'protected';
        params: Array<{
            name: string | ReactNode;
            desc: string | ReactNode;
            type: string | ReactNode;
            defaultVal: string | ReactNode;
            required: string | boolean;
        }>;
        returnType: string | ReactNode;
        returnDesc: string | ReactNode;
    }>;
}
export interface CollapseProps {
    headerClassName?: string;
    headerStyle?: CSSProperties;
    bodyClassName?: string;
    bodyStyle?: CSSProperties;
    title?: ReactNode | string;
    extra?: ReactNode | string;
    defaultCollapse?: boolean;
    border?: boolean;
    scrollY?: boolean;
    fixedHeaderScrollBody?: boolean;
    children?: ReactNode;
}
export interface CodeBoxPlayGroundProps extends PlayGroundProps {
    type: 'PlayGround';
    renderWrap?: (columnIndex: number, index: number, config: PlayGroundProps, children: ReactNode) => ReactNode;
    renderChildren?: (columnIndex: number, index: number, config: Array<CodeBoxPlayGroundProps>) => ReactNode;
}
export interface CodeBoxPlayGroundMultiProps extends PlayGroundMultiProps {
    type: 'PlayGroundMulti';
    renderWrap?: (columnIndex: number, index: number, config: Array<CodeBoxPlayGroundMultiProps>, children: ReactNode) => ReactNode;
    renderChildren?: (columnIndex: number, index: number, config: Array<CodeBoxPlayGroundMultiProps>) => ReactNode;
}
export interface CodeBoxPlayGroundTabProps extends PlayGroundTabProps {
    type: 'PlayGroundTab';
    renderWrap?: (columnIndex: number, index: number, config: PlayGroundTabProps, children: ReactNode) => ReactNode;
    renderChildren?: (columnIndex: number, index: number, config: Array<PlayGroundTabProps>) => ReactNode;
}
export interface CodeBoxPlayGroundMobileTabProps extends PlayGroundTabMobileProps {
    type: 'PlayGroundTabMobile';
    renderWrap?: (columnIndex: number, index: number, config: PlayGroundTabMobileProps, children: ReactNode) => ReactNode;
}
export interface CodeBoxProps {
    title?: string | ReactNode;
    extra?: ReactNode;
    isShowExpandAllBtn: boolean;
    columnCount: number;
    expandAll: boolean;
    config: Array<CodeBoxPlayGroundProps | CodeBoxPlayGroundMultiProps | CodeBoxPlayGroundTabProps | CodeBoxPlayGroundMobileTabProps>;
}
export interface CollapseState {
    collapse: boolean;
}
export interface CodeTabPanelItemProps extends CodePanelProps {
    key?: string;
    title: string | ReactNode;
    className?: string;
    style?: CSSProperties;
}
export interface CodeTabPanelProps {
    active?: string;
    config?: CodeTabPanelItemProps[];
    onChange?: (activeKey: string) => void;
}
export interface PlayGroundTabProps extends CodeTabPanelProps, PlayGroundProps {
}
export interface PlayGroundTabMobileProps extends PlayGroundTabProps {
    url: string;
    bodyClassName?: string;
    bodyStyle?: CSSProperties;
    displayClassName?: string;
    displayBodyStyle?: CSSProperties;
}
export interface PlayGroundTabState extends PlayGroundState {
    activeKey?: string;
}
export interface PlayGroundTabMobileState extends PlayGroundTabState {
    iframeCount?: number;
    qrcode?: string;
}
export interface CodeBoxContextValue {
    activeAnchor: string;
}
export interface AnchorNavigationContextValue {
    scrollEl: HTMLElement | null;
}
export interface AnchorNavigationProps {
    className?: string;
    style?: CSSProperties;
    autoClassName?: string;
    autoStyle?: CSSProperties;
    fixedClassName?: string;
    fixedStyle?: CSSProperties;
    activeAnchor?: string;
    anchors?: Array<{
        anchor: string;
        name: string;
    }>;
    anchorPosition: {
        top: number;
        width: number;
    };
    children?: any;
}
export interface TabContextValue {
    activeKey: string;
}
export interface TabPanelProps {
    className?: string;
    style?: CSSProperties;
    index?: number | string;
    children?: any;
}
export type SimpleTabsComponent = NamedExoticComponent<SimpleTabsProps> & {
    TabPanel: typeof TabPanel;
};
export interface SimpleTabsProps {
    activeKey?: string;
    className?: string;
    onChange: (activeKey?: string) => void;
    children?: any;
}
export interface SectionProps {
    className?: string;
    style?: CSSProperties;
    title?: ReactNode | string;
    extra?: ReactNode;
    children?: any;
}
export interface PropsSectionProps extends SectionProps {
    config: Array<PropsProps>;
}
export interface FunctionPropsSectionProps extends SectionProps {
    config: Array<FunctionProps>;
}
export interface PlayGroundPageContextValue {
    scrollEl?: HTMLElement | null;
}
export type PlayGroundPageComponent = NamedExoticComponent<PlayGroundPageProps> & {
    Section: typeof Section;
    CodeBoxSection: typeof CodeBoxSection;
    PropsSection: typeof PropsSection;
    FunctionPropsSection: typeof FunctionPropsSection;
};
export interface PlayGroundPageProps {
    className?: string;
    style?: CSSProperties;
    anchorNavigationClassName?: string;
    anchorNavigationStyle?: CSSProperties;
    anchorNavigationAutoClassName?: string;
    anchorNavigationAutoStyle?: CSSProperties;
    anchorNavigationFixedClassName?: string;
    anchorNavigationFixedStyle?: CSSProperties;
    anchorPosition: {
        top: number;
        width: number;
    };
    children?: any;
}
