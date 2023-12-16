import { Button } from 'antd';
import React, { useRef, useState } from 'react';

import { MessageDialog } from '@baifendian/adhere';

import SelectPerson from '../SelectPerson';

export default () => {
  const [persons, setPersons] = useState([]);
  const personSelectRef = useRef();

  return (
    <MessageDialog.TriggerPrompt
      okText="确认"
      renderTrigger={() => <Button type="primary">选取({persons.length})</Button>}
      modalConfig={{
        config: {
          title: '人员选择',
        },
      }}
      onSubmit={() =>
        new Promise((resolve) => {
          resolve(personSelectRef.current.getValues());
        })
      }
      value={persons}
      onChange={(_values) => {
        setPersons(_values);
      }}
    >
      <SelectPerson ref={personSelectRef} />
    </MessageDialog.TriggerPrompt>
  );
};
