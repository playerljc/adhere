import { ComponentProps } from './CommonTypes';
import type { DLayoutWidget, DWidget } from './WidgetTypes';

export interface FormDesignRefHandle {
  /**
   * getDataSource
   * @description 获取FormDesign的数据
   */
  getDataSource(): Array<DWidget | DLayoutWidget>;
}

export interface FormDesignProps extends ComponentProps {
  dataSource: Array<DWidget | DLayoutWidget>;
}

/**
 * IFormDesignProvider
 * @description FormDesignProvider提供的方法
 */
export interface IFormDesignProvider {
  /**
   * setDataSource
   * @description 重新设置dataSource
   * @param {(dataSource: Array<DWidget | DLayoutWidget>) => Array<DWidget | DLayoutWidget>} reduce
   * @return {Promise<void>}
   */
  setDataSource(
    reduce: (dataSource: Array<DWidget | DLayoutWidget>) => Array<DWidget | DLayoutWidget>,
  ): Promise<unknown>;
  /**
   * setWidgetActiveKey
   * @description 设置widget的激活状态
   * @param {string} id
   * @return {Promise<void>}
   */
  setWidgetActiveKey(id: string): Promise<unknown>;
  /**
   * getWidgetActiveKey
   * @description
   * @return {string}
   */
  getWidgetActiveKey(): string;
}
