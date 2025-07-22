import { Image, List } from 'antd-mobile';
import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [value, setValue] = useState([]);

  // const DictComponentName = `SystemTreeACFlat${FieldGeneratorToDict.ComponentNames.MobileTreeSelectAC.Standard}`;
  // const DictComponent = FieldGeneratorToDict.Components[DictComponentName];
  const DictComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemTreeACFlat,
        FieldGeneratorToDict.ComponentNames.MobileTreeSelectAC.Standard,
      )
    ];

  return (
    <DictComponent
      value={value}
      onChange={(_value) => {
        setValue(_value);
      }}
      treeSelectProps={{
        treeDataSimpleMode: true,
      }}
      style={{ height: '100%' }}
      renderResultItem={(record) => {
        return (
          <List>
            <List.Item
              prefix={
                <Image
                  src="https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={40}
                  height={40}
                />
              }
              description={record.title}
            >
              {record.t}
            </List.Item>
          </List>
        );
      }}
    />
  );
};
