import { Button } from 'antd';
import React from 'react';

import Popup from '../src/index';

function PopupPanel({ getPopup, title }) {
  return (
    <div style={{ padding: 16, background: '#fff', minHeight: 220 }}>
      <div style={{ marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button
          type="primary"
          onClick={() => {
            const popup = Popup.create({
              onAfterClose: () => Popup.destroy(popup),
              children: (
                <PopupPanel getPopup={() => popup} title={`Nested Popup ${popup.getId()}`} />
              ),
              zIndex: 10000,
            });

            Popup.show(popup);
          }}
        >
          Open Nested
        </Button>
        <Button
          onClick={() => {
            Popup.close(getPopup());
          }}
        >
          Close Current
        </Button>
        <Button
          danger
          onClick={() => {
            Popup.closeAll();
          }}
        >
          Close All
        </Button>
      </div>
    </div>
  );
}

export default () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          const popup = Popup.create({
            onAfterClose: () => Popup.destroy(popup),
            children: <PopupPanel getPopup={() => popup} title={`Root Popup ${popup.getId()}`} />,
            zIndex: 9999,
          });

          Popup.show(popup);
        }}
      >
        Open Popup (then nest / closeAll)
      </Button>
    </div>
  );
};
