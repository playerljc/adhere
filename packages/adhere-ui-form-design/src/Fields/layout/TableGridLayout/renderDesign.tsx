import React, { useMemo } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils';
import { TableGridLayoutContext } from './Context';
import InternalTableGridLayout from './InternalTableGridLayout';

function TableGridLayoutDesign({ value }: { value: DesignValue }) {
  const {
    id,
    props: { children, styleProps, fieldProps, flexProps },
  } = value;

  const style = useMemo(
    () => styleCodeStringToCSSProperties(styleProps?.styles ?? ''),
    [styleProps],
  );

  const targetFlexStyle = useMemo<CSSProperties>(() => {
    const { minSize, scroll, ..._flexProps } = flexProps ?? {};

    return {
      ..._flexProps,
      minWidth: minSize ? 0 : 'initial',
      minHeight: minSize ? 0 : 'initial',
    };
  }, [flexProps]);

  const targetContainerStyle = useMemo(() => {
    const { scroll } = flexProps ?? {};

    return {
      overflow: scroll ? 'auto' : 'hidden',
    };
  }, [flexProps]);

  return (
    <DesignFieldWrapper id={id} style={targetFlexStyle}>
      <DroppableContainer id={id} value={value} style={targetContainerStyle}>
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
