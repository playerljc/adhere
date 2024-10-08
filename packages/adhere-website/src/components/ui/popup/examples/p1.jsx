import { Button } from 'antd';
import React from 'react';

import { Popup } from '@baifendian/adhere';

import { PopupInner } from '../popup';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        const ref = React.createRef();

        const popup = Popup.create({
          onCreate: () => {},
          onBeforeShow: () => {},
          onAfterShow: () => {},
          onBeforeClose: () => Promise.resolve(),
          onAfterClose: () => Popup.destroy(popup),
          onDestroy: () => {},
          children: <PopupInner ref={ref} getPopup={() => popup} />,
          zIndex: 9999,
        });

        popup.show();
      }}
    >
      Open Popup
    </Button>
  );
};
