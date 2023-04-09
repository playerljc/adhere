const path = require('path');
const fs = require('fs');

const fields = [
  'Select',
  'MultipleSelect',
  'TreeSelect',
  'AutoComplete',
  'DatePicker',
  'RangePicker',
  'TimePicker',
  'Cascader',
  'Upload',
  'Modal',
  'Input',
  'TextArea',
  'InputNumberDecimal1',
  'InputNumberDecimal2',
  'InputNumberInteger',
  'SubmitButton',
];

const antdFields = [
  'Affix',
  'Alert',
  'Anchor',
  'Avatar',
  'BackTop',
  'Badge',
  'Breadcrumb',
  'Button',
  'Calendar',
  'Card',
  'Carousel',
  'Checkbox',
  'Col',
  'Collapse',
  'ConfigProvider',
  'Descriptions',
  'Divider',
  'Drawer',
  'Dropdown',
  'Empty',
  'FloatButton',
  'Form',
  'Grid',
  'Image',
  'Layout',
  'List',
  'Mentions',
  'Menu',
  'Pagination',
  'Popconfirm',
  'Popover',
  'Progress',
  'QRCode',
  'Radio',
  'Rate',
  'Result',
  'Row',
  'Segmented',
  'Skeleton',
  'Slider',
  'Space',
  'Spin',
  'Statistic',
  'Steps',
  'Switch',
  'Table',
  'Tabs',
  'Tag',
  'Timeline',
  'Tooltip',
  'Tour',
  'Transfer',
  'Tree',
  'Typography',
  'Watermark',
];

const srcPath = path.join(__dirname, '../', 'src');

function createFieldsDir() {
  fields.forEach((field) => {
    const fieldPath = path.join(srcPath, field);
    if (fs.existsSync(fieldPath)) return;

    fs.mkdirSync(fieldPath);
    fs.writeFileSync(
      path.join(fieldPath, 'index.ts'),
      `
        import { Select } from 'antd';

        import { createFactory } from '../util';
        
        export default createFactory(Select, {
        
        });
        `,
      'utf8',
    );
  });
}

function createAntdFieldsDir() {
  antdFields.forEach((field) => {
    const fieldPath = path.join(srcPath, field);
    if (fs.existsSync(fieldPath)) return;

    fs.mkdirSync(fieldPath);
    fs.writeFileSync(
      path.join(fieldPath, 'index.ts'),
      `
        import { ${field} } from 'antd';

        import { createFactory } from '../util';
        
        export default createFactory(${field}, {});
        `,
      'utf8',
    );
  });
}

createFieldsDir();
createAntdFieldsDir();
