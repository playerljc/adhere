import React, { useRef } from 'react';
import { Button } from 'antd';

import { Surnames, Space } from '@baifendian/adhere';
import Props from '@/lib/Props';
import FunctionProps from '@/lib/FunctionProps';
import Playground from '@/lib/Playground';

import './index.less';

function getIndexesProps() {
  const startCharCode = 'A'.charCodeAt();
  const endCharCode = 'Z'.charCodeAt();

  const indexes = [];

  const count = [];
  count.length = 10;
  count.fill(1);

  for (let i = startCharCode; i <= endCharCode; i++) {
    indexes.push({
      index: String.fromCharCode(i),
      renderIndex: (index) => index.index,
      renderTitle: (record) => record.index,
      renderContent: (record) => (
        <ul key={record.index}>
          {count.map((t, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index + 1}>{`${record.index}${index + 1}`}</li>
          ))}
        </ul>
      ),
    });
  }

  return indexes;
}

function getDataSource() {
  const startCharCode = 'A'.charCodeAt();
  const endCharCode = 'Z'.charCodeAt();

  const dataSource = [];

  for (let i = startCharCode; i <= endCharCode; i++) {
    dataSource.push({
      index: String.fromCharCode(i),
      data: [],
    });
  }

  return dataSource;
}

export default () => {
  const ref1 = useRef();

  return (
    <div className="Page Surnames">
      <h1>Surnames</h1>
      <p>姓名面板</p>

      <h3>Surnames</h3>
      <Props
        data={[
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
          {
            params: 'position',
            desc: "显示的位置 'top', 'right', 'bottom', 'left'",
            type: 'string',
            defaultVal: 'right',
          },
          {
            params: 'indexes',
            desc: '索引的信息',
            type: 'Array',
            defaultVal: '[]',
          },
          {
            params: 'dataSource',
            desc: '数据',
            type: 'Array',
            defaultVal: '[]',
          },
          {
            params: 'onBeforeScroll',
            desc: '滚动之前的钩子',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'onScroll',
            desc: '滚动',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <h2>indexes</h2>
      <Props
        data={[
          {
            params: 'index',
            desc: '索引值',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'renderIndex',
            desc: '渲染索引的方法',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'renderTitle',
            desc: '渲染title的方法',
            type: 'Function',
            defaultVal: '',
          },
          {
            params: 'renderContent',
            desc: '渲染Content的方法',
            type: 'Function',
            defaultVal: '',
          },
        ]}
      />

      <h2>dataSource</h2>
      <Props
        data={[
          {
            params: 'index',
            desc: '索引值',
            type: 'string',
            defaultVal: '',
          },
          {
            params: 'data',
            desc: '数据',
            type: 'Array<Object>',
            defaultVal: '',
          },
        ]}
      />

      <h2>方法</h2>
      <FunctionProps
        data={[
          {
            name: 'scrollToAnimation',
            desc: '动画的滚动到指定所引处',
            modifier: 'public',
            params: [
              {
                name: 'name',
                desc: '索引名称',
                type: 'string',
                defaultVal: '',
                required: 'true',
              },
              {
                name: 'duration',
                desc: '动画的完成时间',
                type: 'number',
                defaultVal: '100',
                required: 'false',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
          {
            name: 'scrollTo',
            desc: '滚动到指定所引处',
            modifier: 'public',
            params: [
              {
                name: 'name',
                desc: '索引名称',
                type: 'string',
                defaultVal: '',
                required: 'true',
              },
            ],
            returnType: '',
            returnDesc: '',
          },
        ]}
      />

      <Playground
        mode="code"
        expand
        scope={{ React }}
        codeText={`
  function getIndexesProps() {
    const startCharCode = 'A'.charCodeAt();
    const endCharCode = 'Z'.charCodeAt();
  
    const indexes = [];
  
    const count = [];
    count.length = 10;
    count.fill(1);
  
    for (let i = startCharCode; i <= endCharCode; i++) {
      indexes.push({
        index: String.fromCharCode(i),
        renderIndex: (index) => index.index,
        renderTitle: (record) => record.index,
        renderContent: (record) => (
          <ul key={record.index}>
            {count.map((t, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index + 1}>{record + 1}-{index + 1}</li>
            ))}
          </ul>
        ),
      });
    }
  
    return indexes;
  }
  
  function getDataSource() {
    const startCharCode = 'A'.charCodeAt();
    const endCharCode = 'Z'.charCodeAt();
  
    const dataSource = [];
  
    for (let i = startCharCode; i <= endCharCode; i++) {
      dataSource.push({
        index: String.fromCharCode(i),
        data: [],
      });
    }
  
    return dataSource;
  }
        `}
      />

      <h2>基本使用</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { Surnames, Space } from '@baifendian/adhere';
  
  <div style={{ display: 'flex' }}>
    <Space.Group direction="horizontal">
      <div style={{ width: 300 }}>
        <Surnames
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>

      <div style={{ width: 300 }}>
        <Surnames
          position="left"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </Space.Group>
  </div>
      `}
      >
        <div style={{ display: 'flex' }}>
          <Space.Group direction="horizontal">
            <div style={{ width: 300 }}>
              <Surnames
                style={{ border: '1px solid #ccc' }}
                indexes={getIndexesProps()}
                dataSource={getDataSource()}
              />
            </div>

            <div style={{ width: 300 }}>
              <Surnames
                position="left"
                style={{ border: '1px solid #ccc' }}
                indexes={getIndexesProps()}
                dataSource={getDataSource()}
              />
            </div>
          </Space.Group>
        </div>
      </Playground>

      <h2>上下结构</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { Surnames, Space } from '@baifendian/adhere';
  
  <div style={{ display: 'flex' }}>
    <Space.Group direction="horizontal">
      <div style={{ height: 516 }}>
        <Surnames
          position="top"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>

      <div style={{ height: 516 }}>
        <Surnames
          position="bottom"
          style={{ border: '1px solid #ccc' }}
          indexes={getIndexesProps()}
          dataSource={getDataSource()}
        />
      </div>
    </Space.Group>
  </div>
      `}
      >
        <div style={{ display: 'flex' }}>
          <Space.Group direction="horizontal">
            <div style={{ height: 516 }}>
              <Surnames
                position="top"
                style={{ border: '1px solid #ccc' }}
                indexes={getIndexesProps()}
                dataSource={getDataSource()}
              />
            </div>

            <div style={{ height: 516 }}>
              <Surnames
                position="bottom"
                style={{ border: '1px solid #ccc' }}
                indexes={getIndexesProps()}
                dataSource={getDataSource()}
              />
            </div>
          </Space.Group>
        </div>
      </Playground>

      <h2>使用api</h2>
      <Playground
        mode="code"
        scope={{ React }}
        codeText={`
  import { Surnames, Space } from '@baifendian/adhere';
  
  const ref1 = useRef();

  <Space.Group direction="horizontal">
    <Button
      type="primary"
      onClick={() => {
        ref1.current.scrollToAnimation('Z');
      }}
    >
      滚动到底部
    </Button>
    <Button
      onClick={() => {
        ref1.current.scrollToAnimation('A');
      }}
    >
      滚动到顶部
    </Button>
  </Space.Group>

  <Space />
  
  <div style={{ width: 300 }}>
    <Surnames
      ref={ref1}
      style={{ border: '1px solid #ccc' }}
      indexes={getIndexesProps()}
      dataSource={getDataSource()}
    />
  </div>
      `}
      >
        <Space.Group direction="horizontal">
          <Button
            type="primary"
            onClick={() => {
              ref1.current.scrollToAnimation('Z');
            }}
          >
            滚动到底部
          </Button>
          <Button
            onClick={() => {
              ref1.current.scrollToAnimation('A');
            }}
          >
            滚动到顶部
          </Button>
        </Space.Group>

        <Space />

        <div style={{ width: 300 }}>
          <Surnames
            ref={ref1}
            style={{ border: '1px solid #ccc' }}
            indexes={getIndexesProps()}
            dataSource={getDataSource()}
          />
        </div>
      </Playground>
    </div>
  );
};
