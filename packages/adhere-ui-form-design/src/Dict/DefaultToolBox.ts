// 缺省的Toolbox
import Intl from '@baifendian/adhere-util-intl';

export const DefaultToolBox = {
  handler: () => {
    return [
      {
        id: 'general',
        label: Intl.get('general_controls'),
        tooltip: Intl.get('general_controls'),
        items: [],
      },
      {
        id: 'base',
        label: Intl.get('base_controls'),
        tooltip: Intl.get('base_controls'),
        items: [],
      },
      {
        id: 'dataSource',
        label: Intl.get('data_source_controls'),
        tooltip: Intl.get('data_source_controls'),
        items: [],
      },
      {
        id: 'container',
        label: Intl.get('container_controls'),
        tooltip: Intl.get('container_controls'),
        items: [],
      },
      {
        id: 'layout',
        label: Intl.get('layout'),
        tooltip: Intl.get('layout'),
        items: [],
      },
      {
        id: 'advanced',
        label: Intl.get('advanced'),
        tooltip: Intl.get('advanced'),
        items: [],
      },
    ];
  },
};
