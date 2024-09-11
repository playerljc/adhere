import AdapterScreen from '@baifendian/adhere-util-adapterscreen';

import Mobile from './mobile';
import PC from './pc';
import { isUseMedia } from './util';

if (isUseMedia()) {
  AdapterScreen.flexible();
}

export default {
  PC,
  Mobile,
};
