import { CSSProperties, MutableRefObject, ReactElement, ReactNode } from 'react';
export interface Item {
    key: string;
    className?: string;
    style?: CSSProperties;
    children?: (params: ElementInfo) => ReactNode;
}
export interface ElementInfo {
    x: number;
    y: number;
    width: number;
    height: number;
    attrs?: Record<string, string>;
}
export interface MetaData {
    elementsInfo: ElementInfo[];
    originWidth: number;
    originHeight: number;
}
export type ComputeData = ElementInfo[];
/**
 * MagicPanelProps
 * @interface MagicPanelProps
 */
export interface MagicPanelProps {
    className?: string;
    style?: CSSProperties;
    metaData?: MetaData;
    renderBody: (ref: MutableRefObject<HTMLElement | null>) => ReactElement;
    children?: (bodyElement: ReactElement, newElements: ComputeData, items?: ReactElement[]) => ReactNode;
    items?: Item[];
    onChange?: (e: ComputeData) => void;
}
