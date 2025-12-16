import { Input, type InputProps } from 'antd';
import React, { useContext } from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import ConfigProvider from '@baifendian/adhere-ui-configprovider';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout';
import TableGridLayout from '@baifendian/adhere-ui-tablegridlayout';

import DesignFieldWrapper from '../../../../components/DesignFieldWrapper';
import type { DesignValue, FormItemProps } from '../../../../types';
import {
  actionsCodeStringToEvents,
  formItemToProps,
  getLabel,
  styleCodeStringToCSSProperties,
} from '../../../../utils';

const { Label, Value } = TableGridLayout;

function LabelDesign({ formItemProps }: { formItemProps?: FormItemProps }) {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const lang = ConfigProviderContext.intl.lang!;

  const label = getLabel(formItemProps ?? {}, lang);

  return <Label>{label}</Label>;
}

function ValueDesign({
  value: {
    id,
    props: { formItemProps, fieldProps, styleProps, actionsProps },
  },
}: {
  value: DesignValue;
}) {
  const ConfigProviderContext = useContext(ConfigProvider.Context);

  const lang = ConfigProviderContext.intl.lang!;

  const style = styleCodeStringToCSSProperties(styleProps ?? '');
  const actions = actionsCodeStringToEvents(actionsProps ?? []);
  const formProps = formItemToProps(formItemProps ?? {}, lang);

  return (
    <Value>
      <DesignFieldWrapper id={id}>
        <Form.Item {...formProps}>
          <Input {...(fieldProps as InputProps)} style={style ?? {}} {...actions} />
        </Form.Item>
      </DesignFieldWrapper>
    </Value>
  );
}

/**
 * renderDesign
 * @param props
 */
export function renderDesign({ value }: { value: DesignValue }): DataItemRow {
  const {
    id,
    props: { formItemProps },
  } = value;

  return {
    key: id,
    require: true,
    label: <LabelDesign formItemProps={formItemProps} />,
    value: <ValueDesign value={value} />,
  };
}
