import React, { useContext, useMemo } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import type { TableGridLayoutProps } from '@baifendian/adhere-ui-tablegridlayout/es/types';

import { DesignContext } from '../../../Design/Context';
import DesignFieldWrapper from '../../../components/DesignFieldWrapper';
import DroppableContainer from '../../../components/DroppableContainer';
import type { DesignValue } from '../../../types';
import { normalizeDesignChildren, styleCodeStringToCSSProperties } from '../../../utils';
import { TableGridLayoutContext } from './Context';
import InternalTableGridLayout from './InternalTableGridLayout';
import { resolveFieldPropsForDesignEditor } from './resolveFieldPropsForDesignEditor';

function TableGridLayoutDesign({ value }: { value: DesignValue }) {
  const { id, props } = value;
  const { children, styleProps, flexProps, fieldActionTypes } = props;

  const designContext = useContext(DesignContext);
  const terminal = designContext.getTerminal();
  const fieldProps = useMemo(
    () => resolveFieldPropsForDesignEditor(props, terminal),
    [props, terminal],
  );

  const normalizedChildren = useMemo<DesignValue[] | undefined>(() => {
    return normalizeDesignChildren(children, { returnUndefinedIfEmpty: true });
  }, [children]);

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
    <DesignFieldWrapper id={id} fieldActionTypes={fieldActionTypes} style={targetFlexStyle}>
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
            children={normalizedChildren}
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
