import React, { useState } from 'react';
import { Form, Button } from 'antd';

import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

import { FormItemCreator } from '@baifendian/adhere';

// { label: '爱好',
//       name: 'hobby',
//       type: 'checkbox',
//       contentProps: {
//         data: [{ label: '篮球', value: 1 }, { label: '足球', value: 2 }, { label: '其他', value: 2 }]
//       },
//     },
export default () => {
  const [skip, setSkip] = useState(true);
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
  };

  const onFinish = (values) => {
    console.log('success', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('failed', errorInfo);
  };

  return (
    <div className="Page">
      <h1>FormItemCreator</h1>
      <p>表单配置</p>

      <h2>属性</h2>
      <Props
        data={[
          {
            params: 'columns',
            desc: '配置数组',
            type: 'array',
            defaultVal: '',
          },
          {
            params: 'layout',
            desc:
              '{labelCol, wrapperCol} 配置布局会应用到每一个item中，如果需要单独特殊配置，columns里面会覆盖此配置',
            type: 'object',
            defaultVal: '',
          },
        ]}
      />

      <h2>columns属性</h2>
      <p>表单中每一项的配置</p>
      <Props
        data={[
          {
            params: 'type',
            desc:
              '表单项类型, 可选【input, password, textarea, number, radio, checkbox, select, \n switch, slider, rate, datepicker, rangepicker, timepicker, define】',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'skip',
            desc: '是否跳过此项，如果为true，则不渲染此项内容',
            type: 'boolean',
            defaultVal: 'false',
          },
          {
            params: 'content',
            desc: 'type为define时需配置此项，自定义Form.item中包裹的组件 ',
            type: 'ReactNode',
            defaultVal: '',
          },
          {
            params: 'contentProps',
            desc:
              '传入被Form.Item包裹的组件的属性，\n 例如type为input则是antd中Input支持的属性，以此类推',
            type: 'ReactNode',
            defaultVal: '',
          },
          {
            params: '......',
            desc: (
              <div>
                支持antd中Form.Item的属性
                <a href="https://ant.design/components/form-cn/#Form.Item" target="_blank">
                  https://ant.design/components/form-cn/#Form.Item
                </a>
              </div>
            ),
            type: '',
            defaultVal: '',
          },
        ]}
      />

      <h2>基本使用</h2>
      <h3>【type=text】</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="textDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            { label: '就是一个查看', name: 'name', initialValue: '我就是一个查看', type: 'text' }
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
        `}
      >
        <Form name="textDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              { label: '就是一个查看', name: 'name', initialValue: '我就是一个查看', type: 'text' },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>

      <h3>【type=input | password | textarea | number】</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="inputDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            {
              label: '输入框',
              name: 'name',
              type: 'input',
              rules: [{ required: true, message: '请输入'}],
              contentProps: { placeholder: '请输入关键词' },
            },
            {
              label: '密码框',
              name: 'password',
              type: 'password',
              rules: [{ required: true, message: '请输入'}],
              contentProps: { placeholder: '请输入密码' },
            },
            {
              label: '文本域',
              name: 'des',
              type: 'textarea',
              contentProps: { rows: 8 },
            },
            {
              label: '数值输入框',
              name: 'number',
              type: 'number',
              contentProps: { min: 10 },
            }
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
  
        `}
      >
        <Form name="inputDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              {
                label: '输入框',
                name: 'name',
                type: 'input',
                rules: [{ required: true, message: '请输入' }],
                contentProps: { placeholder: '请输入关键词' },
              },
              {
                label: '密码框',
                name: 'password',
                type: 'password',
                rules: [{ required: true, message: '请输入' }],
                contentProps: { placeholder: '请输入密码' },
              },
              {
                label: '文本域',
                name: 'des',
                type: 'textarea',
                contentProps: { rows: 8 },
              },
              {
                label: '数值输入框',
                name: 'number',
                type: 'number',
                contentProps: { min: 10 },
              },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>

      <h3>【type=radio | checkbox | select】</h3>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>均是通过contentProps.options: [&lt;'label', 'value'&gt;]来配置选择项</p>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="selectDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            {
              label: '单选框1',
              name: 'radio1',
              type: 'radio',
              contentProps: {
                options: [{ label: '单选1', value: 1 }, { label: '单选2', value: 2}]
              },
            },
            {
              label: '单选框2-按钮形式',
              name: 'radio2',
              type: 'radio',
              contentProps: {
                optionType: 'button',
                options: [{ label: '单选1', value: 1 }, { label: '单选2', value: 2}]
              },
            },
            {
              label: '复选框',
              name: 'checkbox1',
              type: 'checkbox',
              contentProps: {
                options: [{ label: '复选1', value: 1 }, { label: '复选2', value: 2}]
              },
            },
            {
              label: '下拉',
              name: 'select1',
              type: 'select',
              contentProps: {
                options: [{ label: '下拉1', value: 1 }, { label: '下拉2', value: 2}]
              },
            },
            {
              label: '多选下拉',
              name: 'select2',
              type: 'select',
              contentProps: {
                mode: 'multiple',
                options: [{ label: '下拉1', value: 1 }, { label: '下拉2', value: 2}]
              },
            }
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
  
        `}
      >
        <Form name="selectDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              {
                label: '单选框1',
                name: 'radio1',
                type: 'radio',
                contentProps: {
                  options: [
                    { label: '单选1', value: 1 },
                    { label: '单选2', value: 2 },
                  ],
                },
              },
              {
                label: '单选框2-按钮形式',
                name: 'radio2',
                type: 'radio',
                contentProps: {
                  optionType: 'button',
                  options: [
                    { label: '单选1', value: 1 },
                    { label: '单选2', value: 2 },
                  ],
                },
              },
              {
                label: '复选框',
                name: 'checkbox1',
                type: 'checkbox',
                contentProps: {
                  options: [
                    { label: '复选1', value: 1 },
                    { label: '复选2', value: 2 },
                  ],
                },
              },
              {
                label: '下拉',
                name: 'select1',
                type: 'select',
                contentProps: {
                  options: [
                    { label: '下拉1', value: 1 },
                    { label: '下拉2', value: 2 },
                  ],
                },
              },
              {
                label: '多选下拉',
                name: 'select2',
                type: 'select',
                contentProps: {
                  mode: 'multiple',
                  options: [
                    { label: '下拉1', value: 1 },
                    { label: '下拉2', value: 2 },
                  ],
                },
              },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>

      <h3>【type=switch | slider | Rate】</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="switchDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            {
              label: '开关',
              name: 'switch',
              type: 'switch',
              contentProps: {
                // antd switch支持的属性
                checkedChildren: '开启',
              },
            },
            {
              label: '滑动条',
              name: 'slider',
              type: 'slider',
              contentProps: {
                // antd slider支持的属性
                range: true,
              },
            },
            {
              label: '评分',
              name: 'rate',
              type: 'rate',
              contentProps: {
                // antd rate支持的属性
                allowHalf: true,
              },
            },
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
  
        `}
      >
        <Form name="switchDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              {
                label: '开关',
                name: 'switch',
                type: 'switch',
                contentProps: {
                  // antd switch支持的属性
                  checkedChildren: '开启',
                },
              },
              {
                label: '滑动条',
                name: 'slider',
                type: 'slider',
                contentProps: {
                  // antd slider支持的属性
                  range: true,
                },
              },
              {
                label: '评分',
                name: 'rate',
                type: 'rate',
                contentProps: {
                  // antd rate支持的属性
                  allowHalf: true,
                },
              },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>

      <h3>【type=datepicker | rangepicker | timepicker</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="pickerDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            {
              label: '选择日期',
              name: 'date',
              type: 'datepicker',
              contentProps: {
                // antd DatePicker支持的属性
              },
            },
            {
              label: '选择年份',
              name: 'year',
              type: 'datepicker',
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'year',
              },
            },
            {
              label: '选择月份',
              name: 'month',
              type: 'datepicker',
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'month',
              },
            },
            {
              label: '选择季度',
              name: 'quarter',
              type: 'datepicker',
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'quarter',
              },
            },
            {
              label: '选择周',
              name: 'week',
              type: 'datepicker',
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'week',
              },
            },
            {
              label: '选择日期范围',
              name: 'rangedate',
              type: 'rangepicker',
              contentProps: {
                // antd DatePicker.RangePicker支持的属性
              },
            },
            {
              label: '选择时间',
              name: 'time',
              type: 'timepicker',
              contentProps: {
                // antd TimePicker支持的属性
              },
            },
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
  
        `}
      >
        <Form name="pickerDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              {
                label: '选择日期',
                name: 'date',
                type: 'datepicker',
                contentProps: {
                  // antd DatePicker支持的属性
                },
              },
              {
                label: '选择年份',
                name: 'year',
                type: 'datepicker',
                contentProps: {
                  // antd DatePicker支持的属性
                  picker: 'year',
                },
              },
              {
                label: '选择月份',
                name: 'month',
                type: 'datepicker',
                contentProps: {
                  // antd DatePicker支持的属性
                  picker: 'month',
                },
              },
              {
                label: '选择季度',
                name: 'quarter',
                type: 'datepicker',
                contentProps: {
                  // antd DatePicker支持的属性
                  picker: 'quarter',
                },
              },
              {
                label: '选择周',
                name: 'week',
                type: 'datepicker',
                contentProps: {
                  // antd DatePicker支持的属性
                  picker: 'week',
                },
              },
              {
                label: '选择日期范围',
                name: 'rangedate',
                type: 'rangepicker',
                contentProps: {
                  // antd DatePicker.RangePicker支持的属性
                },
              },
              {
                label: '选择时间',
                name: 'time',
                type: 'timepicker',
                contentProps: {
                  // antd TimePicker支持的属性
                },
              },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>

      <h3>【type=upload | define】</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="uploadDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            {
              label: '上传头像',
              name: 'image',
              type: 'upload',
              contentProps: {
                // antd Upload支持的属性
                // children 是upload组件包括的组件
                children: <Button>Upload</Button>
              },
            },
            {
              label: '自己定义的表单项',
              name: 'my',
              type: 'define',
              content: <div>我就是自定义的</div>,
              contentProps: {
                // 传给content的属性
              },
            },
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
  
        `}
      >
        <Form name="uploadDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              {
                label: '上传头像',
                name: 'image',
                type: 'upload',
                contentProps: {
                  // antd Upload支持的属性
                  // children 是upload组件包括的组件
                  children: <Button>Upload</Button>,
                },
              },
              {
                label: '自己定义的表单项',
                name: 'my',
                type: 'define',
                content: <div>我就是自定义的</div>,
                contentProps: {
                  // 传给content的属性
                },
              },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>

      <h3>【Skip使用例子】</h3>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import React, { useState } from 'react';
  import { Form, Button } from 'antd';
  import { FormItemCreator } from '@baifendian/adhere';
  
  export default () => {
    const [skip, setSkip] = useState(true);
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 12 },
    };
  
    const onFinish = (values) => {
      console.log('success', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('failed', errorInfo);
    };

    return (
      <Form name="textDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>  
        <FormItemCreator
          columns={[
            {
              label: '是否显示下拉',
              name: 'showSelect',
              type: 'radio',
              contentProps: {
                options: [{ label: '是', value: 1 }, { label: '否', value: 2 }],
                onChange: e => setSkip(e.target.value === 2),
              }
            },
            {
              label: '下拉',
              name: 'isSelect',
              type: 'select',
              skip: skip,
              contentProps: {
                options: [{ label: '下拉1', value: 1 }, { label: '下拉2', value: 2 }]
              }
            }
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
  
        `}
      >
        <Form name="skipDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <FormItemCreator
            columns={[
              {
                label: '是否显示下拉',
                name: 'showSelect',
                type: 'radio',
                contentProps: {
                  options: [
                    { label: '是', value: 1 },
                    { label: '否', value: 2 },
                  ],
                  onChange: (e) => setSkip(e.target.value === 2),
                },
              },
              {
                label: '下拉',
                name: 'isSelect',
                type: 'select',
                skip,
                contentProps: {
                  options: [
                    { label: '下拉1', value: 1 },
                    { label: '下拉2', value: 2 },
                  ],
                },
              },
            ]}
            layout={layout}
          />
          <Form.Item wrapperCol={{ offset: 4 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Playground>
    </div>
  );
};
