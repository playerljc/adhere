import merge from 'lodash.merge';
import React from 'react';

import FormDesign from '../../src';

import '../../src/index.less';
import './index.less';

const { Design, Dict, Plugins, Layout } = FormDesign;

const antd = Plugins.installAntd();
const layout = Layout.install();

export default () => {
  const toolBox = merge(
    [...Dict.values.DefaultToolBox.value],
    [
      {
        items: [...antd.toolBox].filter(({ type }) =>
          ['ant-text', 'ant-button', 'ant-alert', 'ant-link', 'ant-submit-button'].includes(type),
        ),
        columns: 2,
      },
      {
        items: [...antd.toolBox].filter(({ type }) =>
          [
            'collapse-layout',
            'steps-layout',
            'tabs-layout',
            'antd-input',
            'antd-checkbox',
            'ant-color-picker',
            'ant-date-picker',
            'ant-date-dange-picker',
            'antd-input-number',
            'antd-input-otp',
            'antd-input-search',
            'antd-input-password',
            'antd-radio',
            'antd-rate',
            'antd-slider',
            'antd-switch',
            'antd-textarea',
            'ant-time-picker',
            'ant-time-range-picker',
          ].includes(type),
        ),
        columns: 2,
      },
      {
        items: [...antd.toolBox].filter(({ type }) =>
          [
            'antd-cascader',
            'antd-checkbox-group',
            'antd-radio-group',
            'antd-segmented',
            'ant-select',
            'ant-transfer',
            'ant-tree-select',
          ].includes(type),
        ),
        columns: 2,
      },
      {
        items: [...layout.toolBox].filter(({ type }) =>
          ['collapse-layout', 'steps-layout', 'tabs-layout'].includes(type),
        ),
        columns: 2,
      },
      {
        items: [
          ...[...layout.toolBox].filter(({ type }) =>
            ['card-layout', 'flex-layout', 'table-grid-layout'].includes(type),
          ),
          antd.toolBox.find(({ type: fieldType }) => fieldType === 'ant-divider'),
        ],
        columns: 2,
      },
      {
        items: [...antd.toolBox].filter(({ type }) =>
          ['antd-editor-table', 'antd-qrcode', 'antd-signature-pad'].includes(type),
        ),
        columns: 2,
      },
    ],
  );

  return (
    <Design
      className="Design"
      terminal="desktop"
      toolBox={toolBox}
      items={[...layout.designItems, ...antd.designItems]}
    />
  );
};
