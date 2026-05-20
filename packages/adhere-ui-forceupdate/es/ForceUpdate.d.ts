import type { ForceUpdateProps, ForceUpdateRefHandle } from './types';
/**
 * ForceUpdate 组件
 * @description 通过改变子组件的 key 属性来强制重新挂载子组件
 * @template T - 子组件的属性类型
 * @param props - 组件属性
 * @param ref - 转发引用
 * @returns 包装后的子组件
 *
 * @example
 * ```tsx
 * import ForceUpdate from '@baifendian/adhere-ui-forceupdate';
 *
 * const MyComponent = () => {
 *   const forceUpdateRef = useRef<ForceUpdateRefHandle>(null);
 *
 *   const handleForceUpdate = async () => {
 *     await forceUpdateRef.current?.reMount();
 *   };
 *
 *   return (
 *     <div>
 *       <button onClick={handleForceUpdate}>强制更新</button>
 *       <ForceUpdate ref={forceUpdateRef}>
 *         <ExpensiveComponent />
 *       </ForceUpdate>
 *     </div>
 *   );
 * };
 * ```
 */
declare const ForceUpdate: import("react").ForwardRefExoticComponent<ForceUpdateProps & import("react").RefAttributes<ForceUpdateRefHandle>>;
export default ForceUpdate;
