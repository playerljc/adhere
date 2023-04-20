import { Modal } from 'antd';

// import Resource from '@baifendian/adhere-util-resource';
import { createFactory } from '../util';

export default createFactory(Modal, {
  closable: true,
  centered: true,
  maskClosable: true,
  destroyOnClose: true,
  zIndex: 999 /*Resource.Dict.value.ResourceNormalMaxZIndex.value*/,
});
