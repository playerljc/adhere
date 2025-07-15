import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';
import type { FormConfigDict, FormValidationRule, FormPopupContainer } from '../types';

/**
 * 表单配置字典
 * 提供表单验证规则和弹窗容器配置
 */
const FormConfig: FormConfigDict = {
  /**
   * 初始化静态表单配置
   * 设置表单验证规则和弹窗容器函数
   */
  initStatic(): void {
    /**
     * 数字输入验证规则
     * 验证范围：1-200
     */
    Dict.handlers.FormInputNumberRule = (): FormValidationRule => ({
      type: 'number',
      message: Intl.get('input_range_1_200'),
      min: 1,
      max: 200,
    });

    /**
     * 空白字符验证规则
     * 不允许输入空白字符
     */
    Dict.handlers.FormWhitespaceRule = (): FormValidationRule => ({
      message: Intl.get('input_no_spaces'),
      whitespace: true,
    });

    /**
     * 字符串输入验证规则
     * 验证范围：1-100字符
     */
    Dict.handlers.FormInputStringRule = (): FormValidationRule => ({
      type: 'string',
      message: Intl.get('input_limit_100_chars'),
      min: 1,
      max: 100,
    });

    /**
     * 表单弹窗容器配置
     * 返回父元素作为弹窗容器
     */
    Dict.handlers.FormPopupContainer = (): FormPopupContainer => (el: HTMLElement): HTMLElement | null => el.parentElement;
  },
};

export default FormConfig;
