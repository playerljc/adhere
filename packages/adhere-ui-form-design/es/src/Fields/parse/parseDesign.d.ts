import { type FC, type ReactNode } from 'react';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import type { DesignContextType, DesignValue } from '../../types';
export type ParseDesignArgs = {
    parentId?: string;
    value: DesignValue;
    context: DesignContextType;
};
export type ParseDesignResult = DataItemRow | ReactNode;
/**
 * parseDesign
 * @description 对designValue进行解析
 */
export declare function parseDesign({ parentId, value, context, }: ParseDesignArgs): ParseDesignResult;
/**
 * 按 DesignValue 引用缓存 parseDesign 结果。
 * context 引用变化时清空（选中、切终端、数据源配置等需要整画布感知的变化）。
 */
export declare function useParseDesignCached(): (args: ParseDesignArgs) => ParseDesignResult;
/**
 * 布局节点按 value 引用跳过重渲染；context 变化时仍会更新（useContext）。
 */
export declare function memoDesignNode<P extends {
    value: DesignValue;
}>(Component: FC<P>): import("react").NamedExoticComponent<P>;
