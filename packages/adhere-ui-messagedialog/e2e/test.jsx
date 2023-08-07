import React from 'react';

import MessageDialog from '../src/index';

import '../src/index.less';

export default () => {
  const openModal = () => {
    const dialog = MessageDialog.Modal({
      config: {
        title: '查看',
        width: '50%',
        maskClosable: false,
      },
      children: <div>222</div>,
    });
  };

  const openMaximizeModal = () => {
    const dialog = MessageDialog.MaximizeModal({
      config: {
        title: '查看',
        width: '50%',
        maskClosable: false,
      },
      children: <div>222</div>,
    });
  };

  return (
    <div>
      <div
        onClick={() => {
          openModal();
        }}
      >
        openModal
      </div>

      <div
        onClick={() => {
          openMaximizeModal();
        }}
      >
        openMaximizeModal
      </div>
    </div>
  );
};
