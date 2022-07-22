import React, { useState } from 'react';
import { Form, Button } from 'antd';

import { FormItemCreator } from '@baifendian/adhere';

import PlayGroundPage, { Section, PropsSection, CodeBoxSection } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '基本使用',
            info: '【type=FormItemCreator.TEXT】',
          },
        },
        codeText: `
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
            { label: '就是一个查看', name: 'name', initialValue: '我就是一个查看', type: FormItemCreator.TEXT }
          ]}
          layout={layout}
        />
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="textDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '就是一个查看',
                  name: 'name',
                  initialValue: '我就是一个查看',
                  type: FormItemCreator.TEXT,
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
        ),
      },
      {
        id: `p2`,
        name: `文本框`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '文本框',
            info: `
              【type=FormItemCreator.TEXT | FormItemCreator.PASSWORD | FormItemCreator.TEXTAREA |
        FormItemCreator.NUMBER】
            `,
          },
        },
        codeText: `
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
              type: FormItemCreator.INPUT,
              rules: [{ required: true, message: '请输入'}],
              contentProps: { placeholder: '请输入关键词' },
            },
            {
              label: '密码框',
              name: 'password',
              type: FormItemCreator.PASSWORD,
              rules: [{ required: true, message: '请输入'}],
              contentProps: { placeholder: '请输入密码' },
            },
            {
              label: '文本域',
              name: 'des',
              type: FormItemCreator.TEXTAREA,
              contentProps: { rows: 8 },
            },
            {
              label: '数值输入框',
              name: 'number',
              type: FormItemCreator.NUMBER,
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
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="inputDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '输入框',
                  name: 'name',
                  type: FormItemCreator.INPUT,
                  rules: [{ required: true, message: '请输入' }],
                  contentProps: { placeholder: '请输入关键词' },
                },
                {
                  label: '密码框',
                  name: 'password',
                  type: FormItemCreator.PASSWORD,
                  rules: [{ required: true, message: '请输入' }],
                  contentProps: { placeholder: '请输入密码' },
                },
                {
                  label: '文本域',
                  name: 'des',
                  type: FormItemCreator.TEXTAREA,
                  contentProps: { rows: 8 },
                },
                {
                  label: '数值输入框',
                  name: 'number',
                  type: FormItemCreator.NUMBER,
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
        ),
      },
      {
        id: `p3`,
        name: `选择控件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '选择控件',
            info: `
              【type=radio | checkbox | select】\r\n
              均是通过contentProps.options: [&lt;'label', 'value'&gt;]来配置选择项
            `,
          },
        },
        codeText: `
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
              type: FormItemCreator.RADIO,
              contentProps: {
                options: [{ label: '单选1', value: 1 }, { label: '单选2', value: 2}]
              },
            },
            {
              label: '单选框2-按钮形式',
              name: 'radio2',
              type: FormItemCreator.RADIO,
              contentProps: {
                optionType: 'button',
                options: [{ label: '单选1', value: 1 }, { label: '单选2', value: 2}]
              },
            },
            {
              label: '复选框',
              name: 'checkbox1',
              type: FormItemCreator.CHECKBOX,
              contentProps: {
                options: [{ label: '复选1', value: 1 }, { label: '复选2', value: 2}]
              },
            },
            {
              label: '下拉',
              name: 'select1',
              type: FormItemCreator.SELECT,
              contentProps: {
                options: [{ label: '下拉1', value: 1 }, { label: '下拉2', value: 2}]
              },
            },
            {
              label: '多选下拉',
              name: 'select2',
              type: FormItemCreator.SELECT,
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
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="selectDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '单选框1',
                  name: 'radio1',
                  type: FormItemCreator.RADIO,
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
                  type: FormItemCreator.RADIO,
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
                  type: FormItemCreator.CHECKBOX,
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
                  type: FormItemCreator.SELECT,
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
                  type: FormItemCreator.SELECT,
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
        ),
      },
      {
        id: `p4`,
        name: `滑动控件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '滑动控件',
            info: `
              【type=switch | slider | Rate】
            `,
          },
        },
        codeText: `
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
              type: FormItemCreator.SWITCH,
              contentProps: {
                // antd switch支持的属性
                checkedChildren: '开启',
              },
            },
            {
              label: '滑动条',
              name: 'slider',
              type: FormItemCreator.SLIDER,
              contentProps: {
                // antd slider支持的属性
                range: true,
              },
            },
            {
              label: '评分',
              name: 'rate',
              type: FormItemCreator.RATE,
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
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="switchDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '开关',
                  name: 'switch',
                  type: FormItemCreator.SWITCH,
                  contentProps: {
                    // antd switch支持的属性
                    checkedChildren: '开启',
                  },
                },
                {
                  label: '滑动条',
                  name: 'slider',
                  type: FormItemCreator.SLIDER,
                  contentProps: {
                    // antd slider支持的属性
                    range: true,
                  },
                },
                {
                  label: '评分',
                  name: 'rate',
                  type: FormItemCreator.RATE,
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
        ),
      },
      {
        id: `p5`,
        name: `时间控件`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '时间控件',
            info: `
              【type=FormItemCreator.DATEPICKER | FormItemCreator.RANGEPICKER | FormItemCreator.TIMEPICKER
            `,
          },
        },
        codeText: `
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
              type: FormItemCreator.DATEPICKER,
              contentProps: {
                // antd DatePicker支持的属性
              },
            },
            {
              label: '选择年份',
              name: 'year',
              type: FormItemCreator.DATEPICKER,
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'year',
              },
            },
            {
              label: '选择月份',
              name: 'month',
              type: FormItemCreator.DATEPICKER,
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'month',
              },
            },
            {
              label: '选择季度',
              name: 'quarter',
              type: FormItemCreator.DATEPICKER,
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'quarter',
              },
            },
            {
              label: '选择周',
              name: 'week',
              type: FormItemCreator.DATEPICKER,
              contentProps: {
                // antd DatePicker支持的属性
                picker: 'week',
              },
            },
            {
              label: '选择日期范围',
              name: 'rangedate',
              type: FormItemCreator.RANGEPICKER,
              contentProps: {
                // antd DatePicker.RangePicker支持的属性
              },
            },
            {
              label: '选择时间',
              name: 'time',
              type: FormItemCreator.TIMEPICKER,
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
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="pickerDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '选择日期',
                  name: 'date',
                  type: FormItemCreator.DATEPICKER,
                  contentProps: {
                    // antd DatePicker支持的属性
                  },
                },
                {
                  label: '选择年份',
                  name: 'year',
                  type: FormItemCreator.DATEPICKER,
                  contentProps: {
                    // antd DatePicker支持的属性
                    picker: 'year',
                  },
                },
                {
                  label: '选择月份',
                  name: 'month',
                  type: FormItemCreator.DATEPICKER,
                  contentProps: {
                    // antd DatePicker支持的属性
                    picker: 'month',
                  },
                },
                {
                  label: '选择季度',
                  name: 'quarter',
                  type: FormItemCreator.DATEPICKER,
                  contentProps: {
                    // antd DatePicker支持的属性
                    picker: 'quarter',
                  },
                },
                {
                  label: '选择周',
                  name: 'week',
                  type: FormItemCreator.DATEPICKER,
                  contentProps: {
                    // antd DatePicker支持的属性
                    picker: 'week',
                  },
                },
                {
                  label: '选择日期范围',
                  name: 'rangedate',
                  type: FormItemCreator.RANGEPICKER,
                  contentProps: {
                    // antd DatePicker.RangePicker支持的属性
                  },
                },
                {
                  label: '选择时间',
                  name: 'time',
                  type: FormItemCreator.TIMEPICKER,
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
        ),
      },
      {
        id: `p6`,
        name: `上传`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '上传',
            info: `
              【type=FormItemCreator.UPLOAD | FormItemCreator.DEFINE】
            `,
          },
        },
        codeText: `
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
              type: FormItemCreator.UPLOAD,
              contentProps: {
                // antd Upload支持的属性
                // children 是upload组件包括的组件
                children: <Button>Upload</Button>
              },
            },
            {
              label: '自己定义的表单项',
              name: 'my',
              type: FormItemCreator.DEFINE,
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
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="uploadDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '上传头像',
                  name: 'image',
                  type: FormItemCreator.UPLOAD,
                  contentProps: {
                    // antd Upload支持的属性
                    // children 是upload组件包括的组件
                    children: <Button>Upload</Button>,
                  },
                },
                {
                  label: '自己定义的表单项',
                  name: 'my',
                  type: FormItemCreator.DEFINE,
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
        ),
      },
      {
        id: `p7`,
        name: `Skip`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: 'Skip',
            info: `
              【Skip使用例子】
            `,
          },
        },
        codeText: `
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
              type: FormItemCreator.RADIO,
              contentProps: {
                options: [{ label: '是', value: 1 }, { label: '否', value: 2 }],
                onChange: e => setSkip(e.target.value === 2),
              }
            },
            {
              label: '下拉',
              name: 'isSelect',
              type: FormItemCreator.SELECT,
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
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <Form name="skipDemo" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <FormItemCreator
              columns={[
                {
                  label: '是否显示下拉',
                  name: 'showSelect',
                  type: FormItemCreator.RADIO,
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
                  type: FormItemCreator.SELECT,
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
        ),
      },
    ];
  }

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
    <PlayGroundPage>
      <Section title="FormItemCreator">
        <p>表单配置</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
              {
                params: 'columns',
                desc: '配置数组',
                type: 'array',
                defaultVal: '',
              },
              {
                params: 'layout',
                desc: '{labelCol, wrapperCol} 配置布局会应用到每一个item中，如果需要单独特殊配置，columns里面会覆盖此配置',
                type: 'object',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: '表单中每一项的配置',
            data: [
              {
                params: 'type',
                desc: `表单项类型, 可选【\n
              FormItemCreator.INPUT, FormItemCreator.PASSWORD, FormItemCreator.TEXTAREA, FormItemCreator.NUMBER, FormItemCreator.RADIO, FormItemCreator.CHECKBOX, FormItemCreator.SELECT, \n
              FormItemCreator.SWITCH, FormItemCreator.SLIDER, FormItemCreator.RATE, FormItemCreator.DATEPICKER, FormItemCreator.RANGEPICKER, FormItemCreator.TIMEPICKER, FormItemCreator.DEFINE \n
            】`,
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
                desc: 'type为FormItemCreator.DEFINE时需配置此项，自定义Form.item中包裹的组件 ',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'contentProps',
                desc: '传入被Form.Item包裹的组件的属性，\n 例如type为input则是antd中Input支持的属性，以此类推',
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
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
