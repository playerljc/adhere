import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';
import type { NormalConfigDict, Option, RomanNumeralsMap, WhetherMap } from '../types';

/**
 * 通用配置字典
 * 提供常用的配置选项和映射
 */
const NormalConfig: NormalConfigDict = {
  /**
   * 初始化静态通用配置
   * 设置最大层级、分页数量、罗马数字映射等
   */
  initStatic(): void {
    /**
     * 最大层级
     * 用于控制组件的最大层级深度
     */
    Dict.handlers.ResourceNormalMaxZIndex = (): number => 19999;

    /**
     * 分页数量
     * 默认每页显示的记录数
     */
    Dict.handlers.ResourceNormalPageSize = (): number => 10;

    /**
     * 罗马文数字和阿拉伯数字的对应映射
     * 用于数字到罗马数字的转换
     */
    Dict.handlers.ResourceNormalRomanNumeralsMap = (): RomanNumeralsMap =>
      new Map([
        [1, 'Ⅰ'],
        [2, 'Ⅱ'],
        [3, 'Ⅲ'],
        [4, 'Ⅳ'],
        [5, 'Ⅴ'],
        [6, 'Ⅵ'],
        [7, 'Ⅶ'],
        [8, 'Ⅷ'],
        [9, 'Ⅸ'],
        [10, 'Ⅹ'],
      ]);

    /**
     * 是/否选项列表
     * 包含全部、是、否三个选项
     */
    Dict.handlers.ResourceNormalWhether = (): Option[] => [
      {
        label: Intl.get('all'),
        value: '',
      },
      {
        label: Intl.get('yes'),
        value: '1',
      },
      {
        label: Intl.get('no'),
        value: '0',
      },
    ];

    /**
     * 是/否映射
     * 用于快速查找是/否选项
     */
    Dict.handlers.ResourceNormalWhetherMap = (): WhetherMap =>
      new Map([
        [
          '',
          {
            label: Intl.get('all'),
            value: '',
          },
        ],
        [
          '1',
          {
            label: Intl.get('yes'),
            value: '1',
          },
        ],
        [
          '0',
          {
            label: Intl.get('no'),
            value: '0',
          },
        ],
      ]);

    /**
     * 有无选项列表
     * 包含全部、存在、不存在三个选项
     */
    Dict.handlers.ResourceNormalIsThere = (): Option[] => [
      {
        label: Intl.get('all'),
        value: '',
      },
      {
        label: Intl.get('exist'),
        value: '1',
      },
      {
        label: Intl.get('none'),
        value: '0',
      },
    ];

    /**
     * 有无映射
     * 用于快速查找有无选项
     */
    Dict.handlers.ResourceNormalIsThereMap = (): WhetherMap =>
      new Map([
        [
          '',
          {
            label: Intl.get('all'),
            value: '',
          },
        ],
        [
          '1',
          {
            label: Intl.get('exist'),
            value: '1',
          },
        ],
        [
          '0',
          {
            label: Intl.get('none'),
            value: '0',
          },
        ],
      ]);

    /**
     * 男女选项列表
     * 包含全部、男、女三个选项
     */
    Dict.handlers.ResourceNormalSex = (): Option[] => [
      {
        label: Intl.get('all'),
        value: '',
      },
      {
        label: Intl.get('male'),
        value: '1',
      },
      {
        label: Intl.get('female'),
        value: '0',
      },
    ];

    /**
     * 男女映射
     * 用于快速查找男女选项
     */
    Dict.handlers.ResourceNormalSexMap = (): WhetherMap =>
      new Map([
        [
          '',
          {
            label: Intl.get('all'),
            value: '',
          },
        ],
        [
          '1',
          {
            label: Intl.get('male'),
            value: '1',
          },
        ],
        [
          '0',
          {
            label: Intl.get('female'),
            value: '0',
          },
        ],
      ]);
  },
};

export default NormalConfig;
