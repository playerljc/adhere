import Intl from '@baifendian/adhere-util-intl';

export const CascaderShowCheckedStrategy = {
  handler: () => {
    return [
      { label: Intl.get('show_parent'), value: 'SHOW_PARENT' },
      { label: Intl.get('show_child'), value: 'SHOW_CHILD' },
    ];
  },
};
