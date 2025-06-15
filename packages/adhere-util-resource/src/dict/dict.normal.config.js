import Dict from '@baifendian/adhere-util-dict';
import Intl from '@baifendian/adhere-util-intl';

export default {
  initStatic() {
    // 最大层级
    Dict.handlers.ResourceNormalMaxZIndex = () => 19999;

    // 分页数量
    Dict.handlers.ResourceNormalPageSize = () => 10;

    // 罗马文数字和阿拉伯数字的对应
    Dict.handlers.ResourceNormalRomanNumeralsMap = () =>
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

    // 是/否Options
    Dict.handlers.ResourceNormalWhether = () => [
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

    // 是/否
    Dict.handlers.ResourceNormalWhetherMap = () =>
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

    // 有无Options
    Dict.handlers.ResourceNormalIsThere = () => [
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

    // 有无
    Dict.handlers.ResourceNormalIsThereMap = () =>
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

    // 男女Options
    Dict.handlers.ResourceNormalSex = () => [
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

    // 男女
    Dict.handlers.ResourceNormalSexMap = () =>
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
