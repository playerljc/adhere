// Segmented 形状
import Intl from '@baifendian/adhere-util-intl';

export const SegmentedShape = {
  handler: () => {
    return [
      { label: Intl.get('default'), value: 'default' },
      { label: Intl.get('segmented_shape_round'), value: 'round' },
    ];
  },
};
