import { Button } from 'antd-mobile';
import React, { useState } from 'react';

import { Modal } from '@baifendian/adhere-mobile-ui-anthoc';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemUser,
        FieldGeneratorToDict.ComponentNames.MobileCheckListDynamic.CheckAll,
      )
    ];

  return (
    <Modal.TriggerPrompt
      value={value}
      onChange={setValue}
      title="人员选择"
      submitAction={{
        key: 'submit',
        primary: true,
        // onClick: () => {
        //   const value = filterCheckAllCheckListRef.current.getValue();
        //   return Promise.resolve(value);
        // },
        onClick: (cb) => {
          return Promise.resolve();
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
