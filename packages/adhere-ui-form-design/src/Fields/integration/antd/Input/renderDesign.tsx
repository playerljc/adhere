import { Input, type InputProps } from 'antd';
import React, { useContext, useMemo } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';

import type { DesignValue } from '../../../../types';
import { actionsCodeStringToEvents } from '../../../../utils/actionsCodeStringToEvents';
import { formItemToProps } from '../../../../utils/formItemToProps';
import { getLabel } from '../../../../utils/getLabel';
import { styleCodeStringToCSSProperties } from '../../../../utils/styleCodeStringToCSSProperties';
import DesignFieldWrapper from '../../../DesignFieldWrapper';

const { Label, Value } = TableGridLayout;

/**
 * renderDesign
 * @param props
 */
export function renderDesign({
  value: {
    id,
    props: { formItemProps, fieldProps, styleProps, actionsProps },
  },
}: {
  value: DesignValue;
}): DataItemRow {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const lang = ConfigProviderContext.intl.lang!;

  const style = useMemo(() => styleCodeStringToCSSProperties(styleProps ?? ''), [styleProps]);
  const actions = useMemo(() => actionsCodeStringToEvents(actionsProps ?? []), [actionsProps]);
  const formProps = useMemo(() => formItemToProps(formItemProps ?? {}, lang), [formItemProps]);
  const label = useMemo(() => getLabel(formItemProps ?? {}, lang), [formItemProps]);

  return {
    key: id,
    require: true,
    label: <Label>{label}</Label>,
    value: (
      <Value>
        <DesignFieldWrapper id={id}>
          <Form.Item {...formProps}>
            <Input {...(fieldProps as InputProps)} style={style ?? {}} {...actions} />
          </Form.Item>
        </DesignFieldWrapper>
      </Value>
    ),
  };
}
