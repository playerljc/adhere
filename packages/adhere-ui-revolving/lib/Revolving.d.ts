import type { RevolvingComponent } from './types';
/**
 * Revolving 轮播图组件
 *
 * @example
 * ```tsx
 * import Revolving from '@baifendian/adhere-ui-revolving';
 *
 * const MyComponent = () => {
 *   const revolvingRef = useRef<RevolvingRefHandle>(null);
 *
 *   const items = [
 *     { key: '1', children: <div>Slide 1</div> },
 *     { key: '2', children: <div>Slide 2</div> },
 *   ];
 *
 *   return (
 *     <Revolving
 *       ref={revolvingRef}
 *       items={items}
 *       direction="top"
 *       speed={1000}
 *       delay={2000}
 *       loop={true}
 *     />
 *   );
 * };
 * ```
 */
declare const Revolving: RevolvingComponent;
export default Revolving;
