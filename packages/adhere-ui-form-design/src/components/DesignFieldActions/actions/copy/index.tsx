import React, { useContext } from 'react';
import clone from 'rfdc';

import { CopyOutlined } from '@ant-design/icons';
import { Intl, Util } from '@baifendian/adhere';

import { DesignContext } from '../../../../Design/Context';
import type { DesignValue } from '../../../../types';
import { findDesignValueById, findParentIdById, genNewName } from '../../../../utils';

export const Copy = ({ id }: { id: string }) => {
  const { addChildrenById, getDesignValue } = useContext(DesignContext);

  const designValue = getDesignValue() as DesignValue;

  const itemValue = findDesignValueById(id, designValue);

  const originName = itemValue?.props.formItemProps?.name;

  const targetName = genNewName(originName, designValue);

  const targetValue = clone()(itemValue) as DesignValue;
  targetValue.id = Util.uuid();
  if (targetValue?.props?.formItemProps) {
    targetValue.props.formItemProps.name = targetName;
  }

  const parentId = findParentIdById(id, designValue) as string;

  return (
    <span
      key={config.key}
      title={config.label}
      onClick={() => {
        addChildrenById(parentId, targetValue);
      }}
    >
      {config.icon}
    </span>
  );
};

const config = {
  key: 'copy',
  label: Intl.get('copy'),
  icon: <CopyOutlined />,
  render: (id: string) => <Copy id={id} />,
};

export default config;
