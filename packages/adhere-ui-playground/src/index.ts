import AnchorNavigation from './AnchorNavigation';
import { AnchorNavigationContext } from './AnchorNavigationContext';
import CodeBoxPanel from './CodeBoxPanel';
import CodePanel from './CodePanel';
import CodeTabPanel from './CodeTabPanel';
import FunctionProps from './FunctionProps';
import PlayGround from './PlayGround';
import PlayGroundMulti from './PlayGroundMulti';
import PlayGroundPage from './PlayGroundPage';
import { PlayGroundPageContext } from './PlayGroundPage/Context';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundTabMobile from './PlayGroundTabMobile';
import Props from './Props';

/**
 * PlayGround组件库
 * @module PlayGround
 * @description 提供完整的代码展示和文档生成功能，包括各种类型的代码展示组件、属性说明组件等
 * @example
 * ```tsx
 * import PlayGround from '@baifendian/adhere-ui-playground';
 * 
 * // 使用基础代码展示组件
 * <PlayGround.PlayGround codeText="console.log('Hello World')">
 *   <div>代码演示内容</div>
 * </PlayGround.PlayGround>
 * 
 * // 使用属性说明组件
 * <PlayGround.Props 
 *   data={[
 *     { params: 'name', desc: '组件名称', type: 'string', defaultVal: '-' }
 *   ]}
 * />
 * ```
 */
export default {
  /** 属性说明组件 */
  Props,
  /** 代码面板组件 */
  CodePanel,
  /** 代码标签面板组件 */
  CodeTabPanel,
  /** 代码盒子面板组件 */
  CodeBoxPanel,
  /** 基础代码展示组件 */
  PlayGround,
  /** 标签页代码展示组件 */
  PlayGroundTab,
  /** 多配置代码展示组件 */
  PlayGroundMulti,
  /** 移动端标签页代码展示组件 */
  PlayGroundTabMobile,
  /** 代码展示页面组件 */
  PlayGroundPage,
  /** 函数属性说明组件 */
  FunctionProps,
  /** 锚点导航组件 */
  AnchorNavigation,
  /** 锚点导航上下文 */
  AnchorNavigationContext,
  /** 代码展示页面上下文 */
  PlayGroundPageContext,
};
