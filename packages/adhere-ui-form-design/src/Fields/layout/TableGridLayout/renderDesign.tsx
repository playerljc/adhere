import React, { useMemo } from 'react';
import type { ReactNode } from 'react';

import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignContextType, DesignValue } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils';
import { TableGridLayoutContext } from './Context';
import InternalTableGridLayout from './InternalTableGridLayout';

function TableGridLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps },
  } = value;

  const style = useMemo(
    () => styleCodeStringToCSSProperties(styleProps?.styles ?? ''),
    [styleProps],
  );

  return (
    <DesignFieldWrapper id={id}>
      <DroppableContainer id={id} value={value}>
        <TableGridLayoutContext.Provider
          value={{
            fieldProps: fieldProps as TableGridLayoutProps,
          }}
        >
          <InternalTableGridLayout
            {...(fieldProps as TableGridLayoutProps)}
            id={id}
            style={style ?? {}}
            children={children}
          />
        </TableGridLayoutContext.Provider>
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
