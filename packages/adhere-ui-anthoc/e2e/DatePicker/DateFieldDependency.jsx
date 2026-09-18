import { Button, Divider, Form, Typography } from 'antd';
import React from 'react';

import { DatePicker } from '../../src';

const { DateFieldDependencyProvider } = DatePicker;
const { Paragraph, Title } = Typography;

/**
 * DateRangePair
 * @description 一组开始/结束日期，fieldKey 通过 prefix 隔离，多实例互不影响
 */
function DateRangePair({ prefix, startLabel, endLabel }) {
  const startKey = `${prefix}StartDate`;
  const endKey = `${prefix}EndDate`;

  return (
    <>
      <Form.Item name={startKey} label={startLabel}>
        <DatePicker
          fieldKey={startKey}
          dependencies={[endKey]}
          style={{ width: '100%' }}
          placeholder={`请选择${startLabel}`}
        />
      </Form.Item>

      <Form.Item name={endKey} label={endLabel}>
        <DatePicker
          fieldKey={endKey}
          dependencies={[startKey]}
          style={{ width: '100%' }}
          placeholder={`请选择${endLabel}`}
        />
      </Form.Item>
    </>
  );
}

/**
 * DateFieldDependency
 * @description DatePicker fieldKey + dependencies 多实例相互制约示例（Form 场景）
 */
export default () => {
  const [form] = Form.useForm();

  return (
    <div style={{ padding: 24, maxWidth: 520 }}>
      <Title level={4}>DatePicker 日期相互制约（多实例）</Title>
      <Paragraph type="secondary">
        同一 Form 内配置多组开始/结束日期，每组通过不同的 fieldKey 隔离。
        组内相互制约，组间互不影响。
      </Paragraph>

      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => {
          console.log('submit:', values);
        }}
      >
        <DateFieldDependencyProvider form={form}>
          <Divider orientation="left">合同期限</Divider>
          <DateRangePair prefix="contract" startLabel="合同开始日期" endLabel="合同结束日期" />

          <Divider orientation="left">项目周期</Divider>
          <DateRangePair prefix="project" startLabel="项目开始日期" endLabel="项目结束日期" />

          <Divider orientation="left">请假时间</Divider>
          <DateRangePair prefix="leave" startLabel="请假开始日期" endLabel="请假结束日期" />
        </DateFieldDependencyProvider>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
