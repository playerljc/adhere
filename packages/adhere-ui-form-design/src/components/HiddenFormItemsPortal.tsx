import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { Form } from '@baifendian/adhere-ui-anthoc';

import type { DesignValue } from '../types';

function collectHiddenFormItems(root?: DesignValue): DesignValue[] {
  if (!root) return [];

  const result: DesignValue[] = [];

  const walk = (node?: DesignValue) => {
    if (!node) return;

    const formItemProps = node.props?.formItemProps;
    const isHidden = !!formItemProps?.hidden;
    const hasName = !!formItemProps?.name;

    if (isHidden && hasName) {
      result.push(node);
    }

    (node.props?.children ?? []).forEach(walk);
  };

  walk(root);

  return result;
}

const HiddenFormItemsPortal: React.FC<{ value?: DesignValue }> = ({ value }) => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainer(document.getElementById('editorHidden'));
  }, []);

  const hiddenItems = useMemo(() => collectHiddenFormItems(value), [value]);

  if (!container || hiddenItems.length === 0) return null;

  return createPortal(
    <>
      {hiddenItems.map((item) => {
        const formItemProps = item.props?.formItemProps;
        if (!formItemProps?.name) return null;
        return <Form.Item key={item.id} name={formItemProps.name as any} hidden />;
      })}
    </>,
    container,
  );
};

export default HiddenFormItemsPortal;
