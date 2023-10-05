import { Toast } from 'antd-mobile';

export default {
  show(parent: HTMLElement = document.body, text: string = '') {
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
