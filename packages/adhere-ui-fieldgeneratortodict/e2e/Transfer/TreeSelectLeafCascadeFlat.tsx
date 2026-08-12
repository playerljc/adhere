import { Space, Typography } from 'antd';
import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [leafValue, setLeafValue] = useState(['0-0-1']);
  const [cascadeValue, setCascadeValue] = useState([]);
  const [flatValue, setFlatValue] = useState([]);

  const LeafComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeSelectLeaf,
      )
    ];

  const CascadeComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeSelectCascade,
      )
    ];

  const FlatComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrgFlat,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeSelectFlat,
      )
    ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Typography.Title level={5}>只选叶子节点（TreeSelectLeaf）</Typography.Title>
        <LeafComponent
          placeholder="TreeTransferSelect Leaf"
          style={{ width: 410 }}
          value={leafValue}
          onChange={setLeafValue}
          transferProps={{
            titles: ['可选', '已选'],
            showSearch: true,
          }}
        />
      </div>

      <div>
        <Typography.Title level={5}>级联选择（TreeSelectCascade）</Typography.Title>
        <CascadeComponent
          placeholder="TreeTransferSelect Cascade"
          style={{ width: 410 }}
          value={cascadeValue}
          onChange={setCascadeValue}
          transferProps={{
            titles: ['可选', '已选'],
            showSearch: true,
          }}
        />
      </div>

      <div>
        <Typography.Title level={5}>简单数据（TreeSelectFlat）</Typography.Title>
        <FlatComponent
          placeholder="TreeTransferSelect Flat"
          style={{ width: 410 }}
          value={flatValue}
          onChange={setFlatValue}
          transferProps={{
            titles: ['可选', '已选'],
            showSearch: true,
          }}
        />
      </div>
    </Space>
  );
};
