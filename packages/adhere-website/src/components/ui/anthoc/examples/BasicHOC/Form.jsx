import React from 'react';

import { Space } from '@baifendian/adhere';
import { Form, Input } from '@baifendian/adhere-ui-anthoc';

export default () => (
  <div>
    <p>
      对Form的Rules进行增强(
      <a target="_blank" href="/adhere/component/util/validator">
        使用adhere-util-validator
      </a>
      )
    </p>

    <Form labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
      <ul>
        <Space.Group direction="vertical">
          <li>
            <Form.Item
              name="email"
              label="email"
              rules={[Form.ValidatorRules.isEmail({ invalidMessage: 'email格式错误' })]}
            >
              <Input placeholder="email" />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="mime"
              label="mime"
              rules={[
                Form.ValidatorRules.isMimeType({
                  invalidMessage: 'MimeType格式错误',
                }),
              ]}
            >
              <Input placeholder="mime" />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="hex"
              label="hex"
              rules={[
                Form.ValidatorRules.isHexColor({
                  invalidMessage: 'hex值格式错误',
                }),
              ]}
            >
              <Input placeholder="hex" />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="ip"
              label="ip"
              rules={[
                Form.ValidatorRules.isIP({
                  invalidMessage: 'ip地址格式错误',
                }),
              ]}
            >
              <Input placeholder="ip" />
            </Form.Item>
          </li>
          <li>
            <Form.Item
              name="chinaPhoneNumber"
              label="手机卡 + 数据卡 + 上网卡"
              rules={[
                Form.ValidatorRules.isAllChinaPhoneNumber({
                  invalidMessage: '手机卡或数据卡或上网卡格式错误',
                }),
              ]}
            >
              <Input placeholder="手机卡 + 数据卡 + 上网卡" />
            </Form.Item>
          </li>
        </Space.Group>
      </ul>
    </Form>
  </div>
);
