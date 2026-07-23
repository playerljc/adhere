import { Button } from 'antd';
import React from 'react';

import Popup from '../src/index';

export default () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          const popup = Popup.create({
            onCreate: () => {
              console.log('onCreate');
            },
            onBeforeShow: () => {
              console.log('onBeforeShow');
            },
            onAfterShow: () => {
              console.log('onAfterShow');
            },
            onBeforeClose: () => {
              console.log('onBeforeClose');
              return Promise.resolve();
            },
            onAfterClose: () => {
              console.log('onAfterClose');
              Popup.destroy(popup);
            },
            onDestroy: () => {
              console.log('onDestroy');
            },
            children: (
              <div style={{ padding: 16, background: '#fff', minHeight: 200 }}>
                <div style={{ marginBottom: 12 }}>Popup.create / show / close</div>
                <Button
                  onClick={() => {
                    Popup.close(popup);
                  }}
                >
                  Close
                </Button>
              </div>
            ),
            zIndex: 9999,
          });

          Popup.show(popup);
        }}
      >
        Open Popup
      </Button>
    </div>
  );
};
