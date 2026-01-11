// 缺省的Toolbox
import Intl from '@baifendian/adhere-util-intl';

export const DefaultToolBox = {
  handler: () => {
    return [
      {
        id: 'base',
        label: Intl.get('base_controls'),
        tooltip: Intl.get('base_controls'),
        items: [],
      },
      {
        id: 'layout',
        label: Intl.get('layout'),
        tooltip: Intl.get('layout'),
        items: [],
      },
    ];
  },
};
