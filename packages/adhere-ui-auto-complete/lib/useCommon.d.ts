import type { UseCommon } from './types';
/**
 * 通用 Hook，提供 AutoComplete 和 TreeAutoComplete 组件的共享逻辑
 *
 * @param params - Hook 参数对象
 * @param params.renderLoading - 自定义加载状态渲染函数
 * @param params.emptyContent - 空状态内容
 * @param params.loadData - 数据加载函数
 * @returns 返回包含状态和方法的对象
 *
 * @example
 * ```tsx
 * const {
 *   fetching,
 *   open,
 *   setOpen,
 *   onClear,
 *   onInputMemo
 * } = useCommon({
 *   renderLoading: () => <CustomLoading />,
 *   emptyContent: <CustomEmpty />,
 *   loadData: async (keyword) => {
 *     // 加载数据逻辑
 *   }
 * });
 * ```
 */
declare const useCommonInternal: UseCommon;
export default useCommonInternal;
