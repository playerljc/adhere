import React from 'react';

import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';
import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

const { Fixed, Auto } = FlexLayout;

export default () => (
  <div className="Page">
    <h1>SplitLayout</h1>
    <p>实现分割窗体的布局，可以拉动调整大小</p>
    <p>需要配合FlexLayout一起使用</p>

    <h2>属性</h2>
    <h3>SplitLayout</h3>
    <Props
      data={[
        {
          params: 'maxSize',
          desc: '最大距离，可以使数值或是字符串的百分比',
          type: 'string | number',
          defaultVal: '100%',
        },
        {
          params: 'minSize',
          desc: '最小距离，可以使数值或是字符串的百分比',
          type: 'string | number',
          defaultVal: '10',
        },
        {
          params: 'onCanDrag',
          desc: '是否可以拖动',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onDragStarted',
          desc: '多动开始',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onDragFinished',
          desc: '拖动结束',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onOut',
          desc: '移出拖动范围',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'onChange',
          desc: '拖动变化',
          type: 'Function',
          defaultVal: '',
        },
        {
          params: 'className',
          desc: '附加的样式表',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'style',
          desc: '附加的样式',
          type: 'React.CSSProperties',
          defaultVal: '',
        },
      ]}
    />

    <h2>基本使用</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';
  
  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Auto />
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Auto />
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `}
    >
      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ width: 30 }} />
        <SplitLayout />
        <Auto />
      </FlexLayout>

      <Space size={30} />

      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Auto />
        <SplitLayout />
        <Fixed style={{ width: 30 }} />
      </FlexLayout>

      <Space size={30} />

      <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ height: 30 }} />
        <SplitLayout style={{ width: 'auto' }} />
        <Auto />
      </FlexLayout>

      <Space size={30} />

      <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
        <Auto />
        <SplitLayout style={{ width: 'auto' }} />
        <Fixed style={{ height: 30 }} />
      </FlexLayout>
    </Playground>

    <h2>多个分割点</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';
  
  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto />
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto />
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `}
    >
      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ width: 30 }} />
        <SplitLayout />
        <Auto />
        <SplitLayout />
        <Fixed style={{ width: 30 }} />
      </FlexLayout>

      <Space size={30} />

      <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ height: 30 }} />
        <SplitLayout style={{ width: 'auto' }} />
        <Auto />
        <SplitLayout style={{ width: 'auto' }} />
        <Fixed style={{ height: 30 }} />
      </FlexLayout>
    </Playground>

    <h2>嵌套</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';
  
  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout />
    <Auto>
      <FlexLayout>
        <Fixed style={{ height: 30 }} />
        <SplitLayout style={{ width: 'auto' }} />
        <Auto />
        <SplitLayout style={{ width: 'auto' }} />
        <Fixed style={{ height: 30 }} />
      </FlexLayout>
    </Auto>
    <SplitLayout />
    <Fixed style={{ width: 30 }} />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout style={{ width: 'auto' }} />
    <Auto>
      <FlexLayout direction="horizontal">
        <Fixed style={{ width: 30 }} />
        <SplitLayout />
        <Auto />
        <SplitLayout />
        <Fixed style={{ width: 30 }} />
      </FlexLayout>
    </Auto>
    <SplitLayout style={{ width: 'auto' }} />
    <Fixed style={{ height: 30 }} />
  </FlexLayout>
      `}
    >
      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ width: 30 }} />
        <SplitLayout />
        <Auto>
          <FlexLayout>
            <Fixed style={{ height: 30 }} />
            <SplitLayout style={{ width: 'auto' }} />
            <Auto />
            <SplitLayout style={{ width: 'auto' }} />
            <Fixed style={{ height: 30 }} />
          </FlexLayout>
        </Auto>
        <SplitLayout />
        <Fixed style={{ width: 30 }} />
      </FlexLayout>

      <Space size={30} />

      <FlexLayout style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ height: 30 }} />
        <SplitLayout style={{ width: 'auto' }} />
        <Auto>
          <FlexLayout direction="horizontal">
            <Fixed style={{ width: 30 }} />
            <SplitLayout />
            <Auto />
            <SplitLayout />
            <Fixed style={{ width: 30 }} />
          </FlexLayout>
        </Auto>
        <SplitLayout style={{ width: 'auto' }} />
        <Fixed style={{ height: 30 }} />
      </FlexLayout>
    </Playground>

    <h2>使用minSize和maxSize控制拖放范围</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import { FlexLayout, SplitLayout, Space } from '@baifendian/adhere';
  
  <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
    <Fixed style={{ width: 30 }} />
    <SplitLayout minSize="20%" maxSize="50%" />
    <Auto />
  </FlexLayout>

  <Space size={30} />

  <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
    <Fixed style={{ height: 30 }} />
    <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
    <Auto />
  </FlexLayout>
      `}
    >
      <FlexLayout direction="horizontal" style={{ height: 200, border: '1px solid #ccc' }}>
        <Fixed style={{ width: 30 }} />
        <SplitLayout minSize="20%" maxSize="50%" />
        <Auto />
      </FlexLayout>

      <Space size={30} />

      <FlexLayout style={{ height: 400, border: '1px solid #ccc' }}>
        <Fixed style={{ height: 30 }} />
        <SplitLayout minSize="20%" maxSize="50%" style={{ width: 'auto' }} />
        <Auto />
      </FlexLayout>
    </Playground>
  </div>
);
