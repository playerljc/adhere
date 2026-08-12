import { Space, Typography } from 'antd';
import React, { useState } from 'react';

import FieldGeneratorToDict from '../../src/index';
import { names } from '../dict/dict/dict.test.config';

export default () => {
  const [leafTargetKeys, setLeafTargetKeys] = useState(['0-0-1']);
  const [cascadeTargetKeys, setCascadeTargetKeys] = useState([]);
  const [flatTargetKeys, setFlatTargetKeys] = useState([]);

  const LeafComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeLeaf,
      )
    ];

  const CascadeComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrg,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeCascade,
      )
    ];

  const FlatComponent =
    FieldGeneratorToDict.Components[
      FieldGeneratorToDict.genDictComponentName(
        // @ts-ignore
        names.SystemOrgFlat,
        FieldGeneratorToDict.ComponentNames.Transfer.TreeFlat,
      )
    ];

  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <div>
        <Typography.Title level={5}>只选叶子节点（TreeLeaf）</Typography.Title>
        <LeafComponent
          style={{ width: 600 }}
          titles={['Source', 'Target']}
          targetKeys={leafTargetKeys}
          onChange={setLeafTargetKeys}
          showSearch
        />
      </div>

      <div>
        <Typography.Title level={5}>级联选择（TreeCascade）</Typography.Title>
        <CascadeComponent
          style={{ width: 600 }}
          titles={['Source', 'Target']}
          targetKeys={cascadeTargetKeys}
          onChange={setCascadeTargetKeys}
          showSearch
        />
      </div>

      <div>
        <Typography.Title level={5}>简单数据（TreeFlat）</Typography.Title>
        <FlatComponent
          style={{ width: 600 }}
          titles={['Source', 'Target']}
          targetKeys={flatTargetKeys}
          onChange={setFlatTargetKeys}
          showSearch
        />
      </div>
    </Space>
  );
};
