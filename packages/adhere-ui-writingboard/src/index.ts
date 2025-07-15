/**
 * 画板组件库
 * @description 提供多种绘制模式的画板功能，支持自由绘制、直线、矩形、圆形、三角形等图形绘制
 * @example
 * ```tsx
 * import WritingBoard from '@baifendian/adhere-ui-writingboard';
 * 
 * // 基础用法
 * <WritingBoard 
 *   defaultMode={Mode.FREE}
 *   defaultLineWidth={2}
 *   defaultStrokeStyle="#000"
 * />
 * 
 * // 签名组件
 * <WritingBoard.Signature 
 *   value={signatureValue}
 *   onChange={setSignatureValue}
 * />
 * 
 * // 移动端签名组件
 * <WritingBoard.MobileSignature 
 *   value={signatureValue}
 *   onChange={setSignatureValue}
 * />
 * ```
 */
import WritingBoard from './WritingBoard';

export default WritingBoard;

// 导出类型定义
export type {
  WritingBoardProps,
  WritingBoardHandle,
  SignatureProps,
  SignatureHandle,
  SignatureCoreProps,
  SignatureCoreHandle,
  Point,
} from './types';

// 导出枚举
export { Mode } from './types';
