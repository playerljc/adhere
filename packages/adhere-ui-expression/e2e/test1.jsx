import { Button, Dropdown, Space } from 'antd';
import React, { useMemo, useRef, useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import FlexLayout from '@baifendian/adhere-ui-flexlayout';

import Expression from '../src/index';

import '../src/index.less';
import './index.less';

export default (props) => {
  const expressionRef = useRef(null);

  const handleMenuClick = (e) => {
    const key = e.key;
    const item = items.find((item) => item.key === key);
    expressionRef.current.onOperatorsClick(item.label, 'unary');
  };

  const items = useMemo(
    () => [
      {
        label: '申请人姓名',
        key: '1',
      },
      {
        label: '申请编号',
        key: '2',
      },
      {
        label: '下载签证链接',
        key: '3',
      },
      {
        label: '签证到期时间',
        key: '4',
      },
      {
        label: '签证申请审核意见',
        key: '5',
      },
      {
        label: '签证延期审核意见',
        key: '6',
      },
      {
        label: '账户',
        key: '7',
      },
      {
        label: '激活链接',
        key: '8',
      },
      {
        label: '登录链接',
        key: '9',
      },
      {
        label: '签证号',
        key: '10',
      },
      {
        label: '账户注册申请审核意见',
        key: '11',
      },
    ],
    [],
  );

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const [value, setValue] = useState('');

  return (
    <FlexLayout direction="horizontal" gutter={[0, 20]}>
      <FlexLayout.Fixed>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              添加变量
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </FlexLayout.Fixed>

      <FlexLayout.Auto>
        <Expression
          ref={expressionRef}
          {...props}
          isUseTriggerCharCode={false}
          disableQuickTip
          value={value}
        />

        <button
          onClick={() => {
            setValue(
              `<span class=\\"text\\">2</span><span class=\\"operator\\" contenteditable=\\"false\\">{userName}</span><span class=\\"text\\">­</span>`,
            );
          }}
        >
          111
        </button>
      </FlexLayout.Auto>
    </FlexLayout>
  );
};
