import React from 'react';
import type { SignatureCoreHandle, SignatureCoreProps } from '../types';
/**
 * 移动端签名核心组件
 * @description 提供移动端适配的签名编辑功能，包含工具栏和绘制区域
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 移动端签名核心组件实例
 */
declare const Signature: React.NamedExoticComponent<SignatureCoreProps & React.RefAttributes<SignatureCoreHandle>>;
export default Signature;
