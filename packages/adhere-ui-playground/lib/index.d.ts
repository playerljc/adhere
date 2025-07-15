import PlayGround from './PlayGround';
import PlayGroundMulti from './PlayGroundMulti';
import PlayGroundTab from './PlayGroundTab';
import PlayGroundTabMobile from './PlayGroundTabMobile';
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
declare const _default: {
    /** 属性说明组件 */
    Props: import("react").NamedExoticComponent<import("./types").PropsProps>;
    /** 代码面板组件 */
    CodePanel: import("react").NamedExoticComponent<import("./types").CodePanelProps>;
    /** 代码标签面板组件 */
    CodeTabPanel: import("react").NamedExoticComponent<import("./types").CodeTabPanelProps>;
    /** 代码盒子面板组件 */
    CodeBoxPanel: import("react").NamedExoticComponent<import("./types").CodeBoxProps>;
    /** 基础代码展示组件 */
    PlayGround: typeof PlayGround;
    /** 标签页代码展示组件 */
    PlayGroundTab: typeof PlayGroundTab;
    /** 多配置代码展示组件 */
    PlayGroundMulti: typeof PlayGroundMulti;
    /** 移动端标签页代码展示组件 */
    PlayGroundTabMobile: typeof PlayGroundTabMobile;
    /** 代码展示页面组件 */
    PlayGroundPage: import("./types").PlayGroundPageComponent;
    /** 函数属性说明组件 */
    FunctionProps: import("react").NamedExoticComponent<import("./types").FunctionProps>;
    /** 锚点导航组件 */
    AnchorNavigation: import("react").NamedExoticComponent<import("./types").AnchorNavigationProps>;
    /** 锚点导航上下文 */
    AnchorNavigationContext: import("react").Context<import("./types").AnchorNavigationContextValue>;
    /** 代码展示页面上下文 */
    PlayGroundPageContext: import("react").Context<import("./types").PlayGroundPageContextValue>;
};
export default _default;
