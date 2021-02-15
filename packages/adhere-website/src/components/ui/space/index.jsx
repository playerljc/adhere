import React from 'react';

import { Space } from '@baifendian/adhere';

import Props from '@/lib/Props';
import Playground from '@/lib/Playground';

export default () => (
  <div className="Page">
    <h1>Space</h1>
    <p>无侵入性的上下留白和左右留白</p>
    <h2>属性</h2>
    <h3>Space</h3>
    <Props
      data={[
        {
          params: 'direction',
          desc: '方向',
          type: "string - ['vertical' | 'horizontal']",
          defaultVal: 'vertical',
        },
        {
          params: 'size',
          desc: '宽度或这高度',
          type: 'string | number',
          defaultVal: '20',
        },
        {
          params: 'className',
          desc: '附加的样式',
          type: 'string',
          defaultVal: '',
        },
      ]}
    />
    <h3>Space.Group</h3>
    <Props
      data={[
        {
          params: 'direction',
          desc: '方向',
          type: "string - ['vertical' | 'horizontal']",
          defaultVal: 'vertical',
        },
        {
          params: 'size',
          desc: '宽度或这高度',
          type: 'string | number',
          defaultVal: '20',
        },
        {
          params: 'className',
          desc: '附加的样式',
          type: 'string',
          defaultVal: '',
        },
      ]}
    />

    {/* <Playground
      docClass={Space}
      codeText={componentExample()}
      collapsableCode={true}
      initiallyExpanded={true}
      es6Console={true}
      propDescriptionMap={{
        direction: "方向 - {string} - ['vertical' | 'horizontal'] - 缺省vertical",
        size: '宽度或这高度 - {string | number} - 缺省20',
        className: '附加的样式 - {string}',
      }}
      scope={{ React: React, Button: Button }}
    /> */}

    <h2>横向</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { Space } from '@baifendian/adhere';
  
  <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
    <a>编辑</a>
    <Space direction="horizontal" />
    <a>查看</a>
    <Space direction="horizontal" />
    <a>删除</a>
  </div>
      `}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
        <a>编辑</a>
        <Space direction="horizontal" />
        <a>查看</a>
        <Space direction="horizontal" />
        <a>删除</a>
      </div>
    </Playground>

    <h2>纵向</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { Space } from '@baifendian/adhere';
  
  <div>
    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Space direction="vertical" />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
      `}
    >
      <div>
        <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
        <Space direction="vertical" />
        <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
      </div>
    </Playground>

    <h2>间距</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { Space } from '@baifendian/adhere';
  
  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <a>编辑</a>
      <Space direction="horizontal" size={10} />
      <a>查看</a>
      <Space direction="horizontal" size={10} />
      <a>删除</a>
    </div>
  
    <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
    <Space direction="vertical" size={10} />
    <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
  </div>
      `}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
          <a>编辑</a>
          <Space direction="horizontal" size={10} />
          <a>查看</a>
          <Space direction="horizontal" size={10} />
          <a>删除</a>
        </div>

        <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
        <Space direction="vertical" size={10} />
        <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
      </div>
    </Playground>

    <h2>SpaceGroup</h2>
    <Playground
      mode="code"
      scope={{ React }}
      codeText={`
  import React from 'react';
  import { Space } from '@baifendian/adhere';
  
  <div>
    <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
      <Space.Group direction="horizontal" >
        <a>编辑</a>
        <a>查看</a>
        <a>删除</a>
      </Space.Group>
    </div>
  
    <Space.Group direction="vertical">
      <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
      <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
    </Space.Group>
  </div>
      `}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', height: 15 }}>
          <Space.Group direction="horizontal">
            <a>编辑</a>
            <a>查看</a>
            <a>删除</a>
          </Space.Group>
        </div>

        <Space.Group direction="vertical">
          <p>段落1段落1段落1段落1段落1段落1段落1段落1</p>
          <p>段落2段落2段落2段落2段落2段落2段落2段落2</p>
        </Space.Group>
      </div>
    </Playground>
  </div>
);
