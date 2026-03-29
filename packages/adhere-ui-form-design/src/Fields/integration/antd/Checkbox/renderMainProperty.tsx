import React from 'react';

import { Form } from '@baifendian/adhere-ui-anthoc';
import type { DataItemRow } from '@baifendian/adhere-ui-tablegridlayout/es/types';
import Intl from '@baifendian/adhere-util-intl';

import { WhetherRadioHorizontalDict } from '../../../../components';
import { Label, Value } from '../../../../components/TableGridLayout';
import {
  createMainProperty,
  renderMainPropertyWithCreate,
} from '../../../../utils';
import type { DesignValueProps } from '../../../../types';

const MainProperty = createMainProperty({
  formName: 'antCheckboxMainProperty',
  getDefaultFormItems: (): DataItemRow[] => [
    {
      key: 'disabled',
      require: false,
      label: <Label>{Intl.get('disabled')}：</Label>,
      value: (
        <Value>
          <Form.Item name="disabled">
            <WhetherRadioHorizontalDict placeholder={Intl.get('disabled')} />
          </Form.Item>
        </Value>
      ),
    },
    {
      key: 'indeterminate',
      require: false,
      label: <Label>{Intl.get('checkbox_indeterminate')}：</Label>,
      value: (
        <Value>
          <Form.Item name="indeterminate">
            <WhetherRadioHorizontalDict placeholder={Intl.get('checkbox_indeterminate')} />
          </Form.Item>
        </Value>
      ),
    },
  ],
  autoFill: true,
});

export function renderMainProperty(props: DesignValueProps) {
  return renderMainPropertyWithCreate(MainProperty, props);
}
