import merge from 'lodash.merge';
import React from 'react';

import FormDesign from '../../src';

import '../../src/index.less';
import './index.less';

const { Design, Dict, Plugins, Layout, Advanced } = FormDesign;

const antd = Plugins.installAntd();
const layout = Layout.install();
const advanced = Advanced.install();

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
            'ant-input',
            'ant-checkbox',
            'ant-color-picker',
            'ant-date-picker',
            'ant-date-dange-picker',
            'ant-input-number',
            'ant-input-otp',
            'ant-input-search',
            'ant-input-password',
            'ant-radio',
            'ant-rate',
            'ant-slider',
            'ant-switch',
            'ant-textarea',
            'ant-time-picker',
            'ant-time-range-picker',
          ].includes(type),
        ),
        columns: 2,
      },
      {
        items: [...antd.toolBox].filter(({ type }) =>
          [
            'ant-cascader',
            'ant-checkbox-group',
            'ant-radio-group',
            'ant-segmented',
            'ant-select',
            'ant-transfer',
            'ant-file-upload',
            'ant-image-upload',
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
        items: [...antd.toolBox, ...advanced.toolBox].filter(({ type }) =>
          [
            'ant-editor-table',
            'ant-table-selection',
            'ant-tree-selection',
            'ant-rich-editor',
            'ant-qrcode',
            'ant-signature-pad',
            'image-captcha',
            'phone-with-area-code',
            'send-sms',
          ].includes(type),
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
      items={[...layout.designItems, ...antd.designItems, ...advanced.designItems]}
    />
  );
};
