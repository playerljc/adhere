import type { DesignValue } from '../types';
/**
 * 将 props.children 规范为一维 DesignValue[]。
 * 类型为 DesignValue[]；旧版 JSON 中偶发出现的「子项为数组」会在运行时拍平（legacy）。
 */
export default function normalizeDesignChildren(children: DesignValue[] | undefined, options?: {
    /**
     * 为 true 时：children 为空/不存在则返回 undefined
     * 为 false 时：children 为空/不存在则返回 []
     */
    returnUndefinedIfEmpty?: boolean;
}): DesignValue[] | undefined;
