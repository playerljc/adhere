import React, { useMemo } from 'react';
import type { ReactNode } from 'react';

import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils';
import InternalTableGridLayout from './InternalTableGridLayout';

function TableGridLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps },
  } = value;

  const style = useMemo(() => styleCodeStringToCSSProperties(styleProps ?? ''), [styleProps]);

  console.log('fieldProps', fieldProps);

  return (
    <DesignFieldWrapper id={id}>
      <DroppableContainer id={id} value={value}>
        <InternalTableGridLayout
          {...(fieldProps as TableGridLayoutProps)}
          style={style ?? {}}
          children={children}
        />
      </DroppableContainer>
    </DesignFieldWrapper>
  );
}

/**
 * renderDesign
 * @param props
 */
export function renderDesign({ value }: { value: DesignValue }): ReactNode {
  return <TableGridLayoutDesign value={value} />;
}
