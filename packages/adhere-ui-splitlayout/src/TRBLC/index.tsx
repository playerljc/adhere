/**
 * TRBLC 布局组件集合
 * 
 * @description
 * 该模块包含了所有基于TRBLC（Top-Right-Bottom-Left-Center）布局模式的分割布局组件。
 * 每个组件都支持可拖拽的分割线，提供灵活的布局配置。
 * 
 * 布局组件命名规则：
 * - T: Top (顶部)
 * - R: Right (右侧) 
 * - B: Bottom (底部)
 * - L: Left (左侧)
 * - C: Center (中心)
 * 
 * 例如：TLRCLayout 表示 顶部-左侧-右侧-中心 布局
 * 
 * 所有组件都支持以下特性：
 * - 可拖拽的分割线
 * - 最小/最大尺寸限制
 * - 拖拽事件回调
 * - 自定义样式和类名
 * - 响应式布局
 */

// 导入所有TRBLC布局组件
import CBSplitLayout from './CBLayout';
import CBRSplitLayout from './CBRLayout';
import CRBSplitLayout from './CRBLayout';
import CRSplitLayout from './CRLayout';
import LBCSplitLayout from './LBCLayout';
import LCBSplitLayout from './LCBLayout';
import LCSplitLayout from './LCLayout';
import LCRBSplitLayout from './LCRBLayout';
import LCRSplitLayout from './LCRLayout';
import LRTCBSplitLayout from './LRTCBLayout';
import LTCBSplitLayout from './LTCBLayout';
import LTCSplitLayout from './LTCLayout';
import TBLCRSplitLayout from './TBLCRLayout';
import TCBSplitLayout from './TCBLayout';
import TCBRSplitLayout from './TCBRLayout';
import TCSplitLayout from './TCLayout';
import TCRSplitLayout from './TCRLayout';
import TLCSplitLayout from './TLCLayout';
import TLRCSplitLayout from './TLRCLayout';
import TRCSplitLayout from './TRCLayout';

/**
 * TRBLC 布局组件导出
 * 
 * @description
 * 导出所有TRBLC布局组件，每个组件都提供不同的布局组合：
 * 
 * 两区域布局：
 * - CBSplitLayout: 中心-底部布局
 * - CRSplitLayout: 中心-右侧布局  
 * - LCSplitLayout: 左侧-中心布局
 * - TCSplitLayout: 顶部-中心布局
 * 
 * 三区域布局：
 * - CBRSplitLayout: 中心-底部-右侧布局
 * - CRBSplitLayout: 中心-右侧-底部布局
 * - LBCSplitLayout: 左侧-底部-中心布局
 * - LCBSplitLayout: 左侧-中心-底部布局
 * - LCRSplitLayout: 左侧-中心-右侧布局
 * - LTCSplitLayout: 左侧-顶部-中心布局
 * - TCBSplitLayout: 顶部-中心-底部布局
 * - TCRSplitLayout: 顶部-中心-右侧布局
 * - TLCSplitLayout: 顶部-左侧-中心布局
 * - TRCSplitLayout: 顶部-右侧-中心布局
 * 
 * 四区域布局：
 * - LCRBSplitLayout: 左侧-中心-右侧-底部布局
 * - LTCBSplitLayout: 左侧-顶部-中心-底部布局
 * - TCBRSplitLayout: 顶部-中心-底部-右侧布局
 * - TLRCSplitLayout: 顶部-左侧-右侧-中心布局
 * 
 * 五区域布局：
 * - LRTCBSplitLayout: 左侧-右侧-顶部-中心-底部布局
 * - TBLCRSplitLayout: 顶部-底部-左侧-中心-右侧布局
 */
export {
  // 中心-底部布局
  CBSplitLayout,
  // 中心-底部-右侧布局
  CBRSplitLayout,
  // 中心-右侧-底部布局
  CRBSplitLayout,
  // 中心-右侧布局
  CRSplitLayout,
  // 左侧-底部-中心布局
  LBCSplitLayout,
  // 左侧-中心-底部布局
  LCBSplitLayout,
  // 左侧-中心布局
  LCSplitLayout,
  // 左侧-中心-右侧-底部布局
  LCRBSplitLayout,
  // 左侧-右侧-顶部-中心-底部布局
  LRTCBSplitLayout,
  // 左侧-顶部-中心-底部布局
  LTCBSplitLayout,
  // 左侧-顶部-中心布局
  LTCSplitLayout,
  // 左侧-中心-右侧布局
  LCRSplitLayout,
  // 顶部-底部-左侧-中心-右侧布局
  TBLCRSplitLayout,
  // 顶部-中心-底部-右侧布局
  TCBRSplitLayout,
  // 顶部-中心布局
  TCSplitLayout,
  // 顶部-中心-右侧布局
  TCRSplitLayout,
  // 顶部-左侧-中心布局
  TLCSplitLayout,
  // 顶部-左侧-右侧-中心布局
  TLRCSplitLayout,
  // 顶部-右侧-中心布局
  TRCSplitLayout,
  // 顶部-中心-底部布局
  TCBSplitLayout,
};
