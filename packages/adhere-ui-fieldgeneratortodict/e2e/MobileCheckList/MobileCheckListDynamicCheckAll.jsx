import { Button } from 'antd-mobile';
import React, { useState } from 'react';

import { Modal } from '@baifendian/adhere-mobile-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';

export default () => {
  const [value, setValue] = useState();

  const DictComponentName = `SystemUser${FieldGeneratorToDict.ComponentNames.MobileCheckListDynamic.CheckAll}`;
  const DictComponent = FieldGeneratorToDict.Components[DictComponentName];

  return (
    <Modal.TriggerPrompt
      title="人员选择"
      submitAction={{
        key: 'submit',
        primary: true,
        // onClick: () => {
        //   const value = filterCheckAllCheckListRef.current.getValue();
        //   return Promise.resolve(value);
        // },
        onClick: (cb) => {
          cb();
        },
      }}
      popoverTriggerProps={{
        renderTrigger: (changeValue) => {
          return (
            <Button color="primary" size="mini">
              人员选择({changeValue?.length})
            </Button>
          );
        },
      }}
    >
      <DictComponent
        value={value}
        onChange={setValue}
        onCheckAllChange={setValue}
        checkAllLabel={(_value) => (
          <div>
            <span>{!!_value.length ? `(${_value.length})` : null}</span>
            <span>全选</span>
          </div>
        )}
      />
    </Modal.TriggerPrompt>
  );
};
