import PropTypes from 'prop-types';
import React, { forwardRef, useImperativeHandle } from 'react';

import { Intl, TableGridLayout } from '@baifendian/adhere';
import { Form, Input } from '@baifendian/adhere-ui-anthoc';

const { Label, Value } = TableGridLayout;

/**
 * SaveOrUpdate
 * @param props
 * @param ref
 * @return {JSX.Element}
 * @constructor
 */
function SaveOrUpdate(props, ref) {
  const [form] = Form.useForm();

  useImperativeHandle(ref, () => ({
    validateAndGetValues: () => {
      return form.validateFields();
    },
  }));

  return (
    <Form name="userForm" form={form}>
      <TableGridLayout
        data={[
          {
            name: 'g1',
            width: '100%',
            columnCount: 1,
            colgroup: [200, 'auto'],
            data: [
              {
                key: 'phone',
                require: true,
                label: <Label>电话：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: '请输入电话',
                        },
                        Form.ValidatorRules.isSIMCard({
                          invalidMessage: '请输入正确的电话号码',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入电话" />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'idCard',
                require: true,
                label: <Label>身份证号：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="idCard"
                      rules={[
                        {
                          required: true,
                          message: '请输入身份证号',
                        },
                        Form.ValidatorRules.isIdentityCard({
                          invalidMessage: '请输入正确的身份证',
                          params: ['zh-CN'],
                        }),
                      ]}
                    >
                      <Input placeholder="身份证号" />
                    </Form.Item>
                  </Value>
                ),
              },
              {
                key: 'email',
                require: true,
                label: <Label>邮箱：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: '请输入邮箱',
                        },
                        {
                          type: 'email',
                          message: '请输入正确的邮箱',
                        },
                      ]}
                    >
                      <Input placeholder="请输入邮箱" />
                    </Form.Item>
                  </Value>
                ),
              },
              // ipv4
              {
                key: 'ipv4',
                require: true,
                label: <Label>ipv4：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="ipv4"
                      rules={[
                        {
                          required: true,
                          message: '请输入ipv4',
                        },
                        Form.ValidatorRules.isIP({
                          params: [4],
                          invalidMessage: '请输入正确的ipv4',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入ipv4" />
                    </Form.Item>
                  </Value>
                ),
              },
              // ipv6
              {
                key: 'ipv6',
                require: true,
                label: <Label>ipv6：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="ipv6"
                      rules={[
                        {
                          required: true,
                          message: '请输入ipv6',
                        },
                        Form.ValidatorRules.isIP({
                          params: [6],
                          invalidMessage: '请输入正确的ipv6',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入ipv6" />
                    </Form.Item>
                  </Value>
                ),
              },
              // 版本号(SemVer)
              {
                key: 'SemVer',
                require: true,
                label: <Label>版本号(SemVer)：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="semVer"
                      rules={[
                        {
                          required: true,
                          message: '请输入版本号',
                        },
                        Form.ValidatorRules.isSemVer({
                          params: [6],
                          invalidMessage: '请输入正确的版本号',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入版本号" />
                    </Form.Item>
                  </Value>
                ),
              },
              // URL
              {
                key: 'URL',
                require: true,
                label: <Label>URL：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="URL"
                      rules={[
                        {
                          required: true,
                          message: '请输入URL',
                        },
                        Form.ValidatorRules.isURL({
                          invalidMessage: '请输入正确的URL',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入URL" />
                    </Form.Item>
                  </Value>
                ),
              },
              // 税号
              {
                key: 'taxID',
                require: true,
                label: <Label>税号：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="taxID"
                      rules={[
                        {
                          required: true,
                          message: '请输入税号',
                        },
                        Form.ValidatorRules.isTaxID({
                          invalidMessage: '请输入正确的税号',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入税号" />
                    </Form.Item>
                  </Value>
                ),
              },
              // 邮政编码
              {
                key: 'postalCode',
                require: true,
                label: <Label>邮政编码：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="postalCode"
                      rules={[
                        {
                          required: true,
                          message: '请输入邮政编码',
                        },
                        Form.ValidatorRules.isPostalCode({
                          params: ['CN'],
                          invalidMessage: '请输入正确的邮政编码',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入邮政编码" />
                    </Form.Item>
                  </Value>
                ),
              },
              // 护照
              {
                key: 'passportNumber',
                require: true,
                label: <Label>护照号：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="passportNumber"
                      rules={[
                        {
                          required: true,
                          message: '请输入护照号',
                        },
                        Form.ValidatorRules.isPassportNumber({
                          params: ['CN'],
                          invalidMessage: '请输入正确的护照号',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入护照号" />
                    </Form.Item>
                  </Value>
                ),
              },
              // 车牌
              {
                key: 'licensePlate',
                require: true,
                label: <Label>车牌：</Label>,
                value: (
                  <Value>
                    <Form.Item
                      name="licensePlate"
                      rules={[
                        {
                          required: true,
                          message: '请输入车牌',
                        },
                        Form.ValidatorRules.isLicensePlate({
                          params: ['any'],
                          invalidMessage: '请输入正确的车牌',
                        }),
                      ]}
                    >
                      <Input placeholder="请输入车牌" />
                    </Form.Item>
                  </Value>
                ),
              },
            ],
          },
        ]}
      />
    </Form>
  );
}

SaveOrUpdate.defaultProps = {
  defaultData: {},
};

SaveOrUpdate.propTypes = {
  defaultData: PropTypes.shape({}),
};

export default forwardRef(SaveOrUpdate);
