import React, { useMemo } from 'react';
import type { ReactNode } from 'react';

import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import DroppableContainer from '../../../Design/DesignEditor/DroppableContainer';
import type { DesignValue } from '../../../types';
import { styleCodeStringToCSSProperties } from '../../../utils/styleCodeStringToCSSProperties';
import DesignFieldWrapper from '../../DesignFieldWrapper';
import InternalTableGridLayout from './InternalTableGridLayout';

/**
 * renderDesign
 * @param props
 */
export function renderDesign({
  value: {
    id,
    props: { fieldProps, children, styleProps },
  },
}: {
  value: DesignValue;
}): ReactNode {
  const style = useMemo(() => styleCodeStringToCSSProperties(styleProps ?? ''), [styleProps]);

  return (
    <DesignFieldWrapper id={id}>
      <DroppableContainer id={id}>
        <InternalTableGridLayout
          {...(fieldProps as TableGridLayoutProps)}
          style={style ?? {}}
          children={children}
        />
      </DroppableContainer>
    </DesignFieldWrapper>
  );
}
