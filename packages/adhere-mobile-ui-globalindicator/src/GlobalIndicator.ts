import { Toast } from 'antd-mobile';

import type { GlobalIndicator, GlobalIndicatorOptions } from './type';

/**
 * 全局指示器组件实现
 * 基于 antd-mobile 的 Toast 组件，提供全局加载指示器功能
 */
const GlobalIndicatorComponent: GlobalIndicator = {
  /**
   * 显示全局加载指示器
   * @param parent - 指示器的父容器元素，默认为 document.body
   * @param text - 显示的文本内容，默认为空字符串
   * @returns ToastHandler - 返回 Toast 处理器，用于后续隐藏操作
   * @throws {Error} 当 parent 参数不是有效的 HTMLElement 时抛出错误
   */
  show(parent = document.body, text = '') {
    // 验证 parent 参数
    if (parent && !(parent instanceof HTMLElement)) {
      throw new Error('parent 参数必须是有效的 HTMLElement');
    }

    // 确保 parent 不为 null
    const container = parent ?? document.body;

    return Toast.show({
      content: text,
      maskClickable: false,
      icon: 'loading',
      getContainer: () => container,
      duration: 0,
    });
  },

  /**
   * 隐藏指定的全局指示器
   * @param handler - Toast 处理器，由 show 方法返回
   * @throws {Error} 当 handler 参数无效时抛出错误
   */
  hide(handler) {
    if (!handler || typeof handler.close !== 'function') {
      throw new Error('handler 参数必须是有效的 ToastHandler');
    }
    
    try {
      handler.close();
    } catch (error) {
      console.warn('隐藏全局指示器时发生错误:', error);
    }
  },

  /**
   * 隐藏所有全局指示器
   * 清除当前页面上的所有 Toast 提示
   */
  hideAll() {
    try {
      Toast.clear();
    } catch (error) {
      console.warn('清除所有全局指示器时发生错误:', error);
    }
  },
};

/**
 * 创建全局指示器的工厂函数
 * @param options - 全局指示器配置选项
 * @returns GlobalIndicator - 全局指示器实例
 */
export function createGlobalIndicator(options: GlobalIndicatorOptions = {}): GlobalIndicator {
  const {
    text = '',
    parent = document.body,
    maskClickable = false,
    icon = 'loading',
    duration = 0,
  } = options;

  return {
    show(customParent = parent, customText = text) {
      if (customParent && !(customParent instanceof HTMLElement)) {
        throw new Error('parent 参数必须是有效的 HTMLElement');
      }

      const container = customParent ?? document.body;

      return Toast.show({
        content: customText,
        maskClickable,
        icon,
        getContainer: () => container,
        duration,
      });
    },

    hide(handler) {
      if (!handler || typeof handler.close !== 'function') {
        throw new Error('handler 参数必须是有效的 ToastHandler');
      }
      
      try {
        handler.close();
      } catch (error) {
        console.warn('隐藏全局指示器时发生错误:', error);
      }
    },

    hideAll() {
      try {
        Toast.clear();
      } catch (error) {
        console.warn('清除所有全局指示器时发生错误:', error);
      }
    },
  };
}

export default GlobalIndicatorComponent;
