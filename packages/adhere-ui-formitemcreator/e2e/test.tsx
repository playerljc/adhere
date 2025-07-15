import { Button, Form } from 'antd';
import React from 'react';

import FormItemCreator from '../src/index';

import '../src/index.less';

/**
 * 表单提交成功回调
 * @param values - 表单值
 */
const onFinish = (values: Record<string, any>) => {
  console.log('表单提交成功:', values);
};

/**
 * 表单提交失败回调
 * @param errorInfo - 错误信息
 */
const onFinishFailed = (errorInfo: any) => {
  console.log('表单提交失败:', errorInfo);
};

/**
 * 表单布局配置
 */
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

/**
 * FormItemCreator 组件测试示例
 * @description 展示各种表单项类型的使用方法
 */
export default () => (
  <Form name="formItemCreatorDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
    <FormItemCreator
      columns={[
        // 只读文本
        {
          label: '只读文本',
          name: 'readonlyText',
          initialValue: '这是一个只读文本示例',
          type: FormItemCreator.TEXT,
        },
        // 输入框
        {
          label: '用户名',
          name: 'username',
          type: FormItemCreator.INPUT,
          contentProps: {
            placeholder: '请输入用户名',
            maxLength: 20,
          },
        },
        // 密码输入框
        {
          label: '密码',
          name: 'password',
          type: FormItemCreator.PASSWORD,
          contentProps: {
            placeholder: '请输入密码',
          },
        },
        // 多行文本
        {
          label: '描述',
          name: 'description',
          type: FormItemCreator.TEXTAREA,
          contentProps: {
            placeholder: '请输入描述信息',
            rows: 4,
          },
        },
        // 数字输入框
        {
          label: '年龄',
          name: 'age',
          type: FormItemCreator.NUMBER,
          contentProps: {
            placeholder: '请输入年龄',
            min: 0,
            max: 150,
          },
        },
        // 单选框组
        {
          label: '性别',
          name: 'gender',
          type: FormItemCreator.RADIO,
          contentProps: {
            options: [
              { label: '男', value: 'male' },
              { label: '女', value: 'female' },
              { label: '其他', value: 'other' },
            ],
          },
        },
        // 复选框组
        {
          label: '兴趣爱好',
          name: 'hobbies',
          type: FormItemCreator.CHECKBOX,
          contentProps: {
            options: [
              { label: '阅读', value: 'reading' },
              { label: '音乐', value: 'music' },
              { label: '运动', value: 'sports' },
              { label: '旅行', value: 'travel' },
            ],
          },
        },
        // 下拉选择器
        {
          label: '城市',
          name: 'city',
          type: FormItemCreator.SELECT,
          contentProps: {
            placeholder: '请选择城市',
            options: [
              { label: '北京', value: 'beijing' },
              { label: '上海', value: 'shanghai' },
              { label: '广州', value: 'guangzhou' },
              { label: '深圳', value: 'shenzhen' },
            ],
            showSearch: true,
          },
        },
        // 自动完成下拉选择器
        {
          label: '标签',
          name: 'tags',
          type: FormItemCreator.SELECT,
          contentProps: {
            autoComplete: true,
            placeholder: '请输入或选择标签',
            options: [
              { label: '技术', value: 'tech' },
              { label: '设计', value: 'design' },
              { label: '产品', value: 'product' },
              { label: '运营', value: 'operation' },
            ],
            showSearch: true,
          },
        },
        // 日期选择器
        {
          label: '生日',
          name: 'birthday',
          type: FormItemCreator.DATEPICKER,
          contentProps: {
            placeholder: '请选择生日',
          },
        },
        // 日期范围选择器
        {
          label: '工作期间',
          name: 'workPeriod',
          type: FormItemCreator.RANGEPICKER,
          contentProps: {
            placeholder: ['开始日期', '结束日期'],
          },
        },
        // 时间选择器
        {
          label: '工作时间',
          name: 'workTime',
          type: FormItemCreator.TIMEPICKER,
          contentProps: {
            placeholder: '请选择时间',
          },
        },
        // 开关
        {
          label: '是否启用',
          name: 'enabled',
          type: FormItemCreator.SWITCH,
          contentProps: {
            checkedChildren: '启用',
            unCheckedChildren: '禁用',
          },
        },
        // 滑动条
        {
          label: '满意度',
          name: 'satisfaction',
          type: FormItemCreator.SLIDER,
          contentProps: {
            min: 0,
            max: 100,
            marks: {
              0: '不满意',
              50: '一般',
              100: '非常满意',
            },
          },
        },
        // 评分
        {
          label: '评分',
          name: 'rating',
          type: FormItemCreator.RATE,
          contentProps: {
            count: 5,
          },
        },
        // 可编辑标签
        {
          label: '技能标签',
          name: 'skills',
          type: FormItemCreator.TAG,
          initialValue: ['JavaScript', 'React'],
          contentProps: {
            disabled: false,
            longLimit: 15,
            addTagInner: '+ 添加技能',
          },
        },
        // 只读标签
        {
          label: '只读标签',
          name: 'readonlyTags',
          type: FormItemCreator.TAG,
          initialValue: ['篮球', '足球', '网球'],
          contentProps: {
            disabled: true,
          },
        },
      ]}
      layout={layout}
    />
    <Form.Item wrapperCol={{ offset: 4 }}>
      <Button type="primary" htmlType="submit">
        提交表单
      </Button>
    </Form.Item>
  </Form>
); 