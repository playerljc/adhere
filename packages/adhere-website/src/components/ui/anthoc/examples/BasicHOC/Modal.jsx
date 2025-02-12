import React, { useState } from 'react';

import { Button, Modal } from '@baifendian/adhere-ui-anthoc';

export default () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};
