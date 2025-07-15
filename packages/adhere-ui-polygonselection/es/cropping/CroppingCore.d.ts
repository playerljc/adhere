import React from 'react';
import type { CroppingCoreHandle, CroppingCoreProps } from '../types';
/**
 * 裁剪核心组件
 * @param props - 组件属性
 * @param ref - 组件引用
 * @returns 裁剪核心组件
 * @description 提供图片裁剪功能的核心组件，支持多种几何图形的绘制和修改
 */
declare const CroppingCore: React.ForwardRefExoticComponent<CroppingCoreProps & React.RefAttributes<CroppingCoreHandle>>;
export default CroppingCore;
