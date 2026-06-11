// PaginationPosition
import Intl from '@baifendian/adhere-util-intl';

export const PaginationPosition = {
  handler: () => {
    return [
      { label: Intl.get('pagination_position_top_left'), value: 'topLeft' },
      { label: Intl.get('pagination_position_top_center'), value: 'topCenter' },
      { label: Intl.get('pagination_position_top_right'), value: 'topRight' },
      { label: Intl.get('pagination_position_bottom_left'), value: 'bottomLeft' },
      { label: Intl.get('pagination_position_bottom_center'), value: 'bottomCenter' },
      { label: Intl.get('pagination_position_bottom_right'), value: 'bottomRight' },
    ];
  },
};
