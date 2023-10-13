import { Transfer } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

function SelectPerson(props, ref) {
  const [targetKeys, setTargetKeys] = useState(props.value);

  useEffect(() => {
    setTargetKeys(props.value);
  }, [props.value]);

  useImperativeHandle(ref, () => ({
    getValues: () => targetKeys,
  }));

  return (
    <Transfer
      dataSource={mockData}
      targetKeys={targetKeys}
      render={(item) => item.title}
      onChange={(sourceSelectedKeys) => {
        setTargetKeys(sourceSelectedKeys);
      }}
      {...props}
    />
  );
}

export default forwardRef(SelectPerson);
