import React from 'react';
import ReactDOM from 'react-dom';

import Intl from '@baifendian/adhere-util-intl';

import PlayGround from './PlayGround';
import PlayGroundMulit from './PlayGroundMulit';
import Props from './Props';
import FunctionProps from './FunctionProps';

import './index.less';

// 初始化国际化
Intl.init({
  currentLocale: 'zh_CN',
}).then(() => {
  ReactDOM.render(
    <>
      <div style={{ padding: 30 }}>
        <PlayGround codeText={`123`}>
          <div>111</div>
        </PlayGround>
      </div>
      <div style={{ padding: 30 }}>
        <PlayGroundMulit
          config={[
            {
              title: '1.js',
              codeText: `123`,
            },
            {
              title: '2.js',
              codeText: `123`,
            },
          ]}
        >
          <div>111</div>
        </PlayGroundMulit>
      </div>
      <div style={{ padding: 30 }}>
        <Props
          data={[
            {
              params: 'columns',
              desc: '表格的列',
              type: 'Array<Object>',
              defaultVal: '',
            },
            {
              params: 'dataSource',
              desc: '表格的数据',
              type: 'Array<Object>',
              defaultVal: '[]',
            },
            {
              params: 'columns',
              desc: '表格的列',
              type: 'Array<Object>',
              defaultVal: 'null',
            },
          ]}
        />
      </div>
      <div style={{ padding: 30 }}>
        <FunctionProps
          data={[
            {
              name: 'on',
              desc: '注册事件',
              modifier: 'public',
              params: [
                {
                  name: 'el',
                  desc: '元素',
                  type: 'HtmlElement',
                  defaultVal: '-',
                  required: true,
                },
                {
                  name: 'tag',
                  desc: '标签分组',
                  type: 'string ',
                  defaultVal: '-',
                  required: true,
                },
                {
                  name: 'type',
                  desc: '事件类型',
                  type: 'string ',
                  defaultVal: '-',
                  required: true,
                },
                {
                  name: 'handler',
                  desc: '事件句柄',
                  type: 'Function ',
                  defaultVal: '-',
                  required: true,
                },
                {
                  name: 'capture',
                  desc: '是否是捕获',
                  type: 'Function ',
                  defaultVal: '-',
                  required: false,
                },
              ],
              returnType: 'Function',
              returnDesc: '返回句柄',
            },
            {
              name: 'on',
              desc: '注册事件',
              modifier: 'public',
              params: [
                {
                  name: 'el',
                  desc: '元素',
                  type: 'HtmlElement',
                  defaultVal: '-',
                  required: true,
                },
              ],
              returnType: 'Function',
              returnDesc: '返回句柄',
            },
          ]}
        />
      </div>
    </>,
    document.getElementById('app'),
  );
});
