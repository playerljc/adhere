import { Toast } from 'antd-mobile';

import type { GlobalIndicator } from './type';

const GlobalIndicatorComponent: GlobalIndicator = {
  show(parent = document.body, text = '') {
    return Toast.show({
      content: text,
      maskClickable: false,
      icon: 'loading',
      getContainer: parent ?? document.body,
      duration: 0,
    });
  },
  hide(handler) {
    handler.close();
  },
  hideAll() {
    Toast.clear();
  },
};

export default GlobalIndicatorComponent;
