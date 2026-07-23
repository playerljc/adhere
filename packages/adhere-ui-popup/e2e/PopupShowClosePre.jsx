import { Button } from 'antd';
import React from 'react';

import Popup from '../src/index';

function PopupPanel({ getPopup, title }) {
  return (
    <div style={{ padding: 16, background: '#fff', minHeight: 220 }}>
      <div style={{ marginBottom: 12 }}>{title}</div>
      <Button
        type="primary"
        onClick={() => {
          const popup = Popup.create({
            onAfterClose: () => Popup.destroy(popup),
            children: (
              <PopupPanel
                getPopup={() => popup}
                title={`Opened with showClosePrePopup ${popup.getId()}`}
              />
            ),
            zIndex: 10000,
          });

          Popup.showClosePrePopup(popup);
        }}
      >
        Open Next (close previous)
      </Button>
      <Button
        style={{ marginLeft: 8 }}
        onClick={() => {
          Popup.close(getPopup());
        }}
      >
        Close
      </Button>
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
            children: (
              <PopupPanel getPopup={() => popup} title={`Root Popup ${popup.getId()}`} />
            ),
            zIndex: 9999,
          });

          Popup.show(popup);
        }}
      >
        Open Popup (showClosePrePopup)
      </Button>
    </div>
  );
};
