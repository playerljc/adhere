import ServiceRegisterCodeText from '!!raw-loader!./ServiceRegister';
import CardListCodeText from '!!raw-loader!./examples/CardList';
import CustomRenderDataListCodeText from '!!raw-loader!./examples/CustomRenderDataList';
import CustomRenderItemListCodeText from '!!raw-loader!./examples/CustomRenderItemList';
import ExpandableListCodeText from '!!raw-loader!./examples/ExpandableList';
import NormalListCodeText from '!!raw-loader!./examples/NormalList';
import ResourceManagerCodeText from '!!raw-loader!./examples/ResourceManager';
import SelectionListCodeText from '!!raw-loader!./examples/SelectionList';
import VerticalNormalListCodeText from '!!raw-loader!./examples/VerticalNormalList';
import MockCodeText from '!!raw-loader!./mock';
import ModelUserCodeText from '!!raw-loader!./model/user';
import ServiceUserCodeText from '!!raw-loader!./service/user';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import CardList from './examples/CardList';
import CustomRenderDataList from './examples/CustomRenderDataList';
import CustomRenderItemList from './examples/CustomRenderItemList';
import ExpandableList from './examples/ExpandableList';
import NormalList from './examples/NormalList';
import ResourceManager from './examples/ResourceManager';
import SelectionList from './examples/SelectionList';
import VerticalNormalList from './examples/VerticalNormalList';

const CommonConfig = [
  {
    title: 'model/user.js',
    key: 'model/user.js',
    codeText: ModelUserCodeText,
  },
  {
    title: 'service/user.js',
    key: 'service/user.js',
    codeText: ServiceUserCodeText,
  },
  {
    title: 'mock.js',
    key: 'mock.js',
    codeText: MockCodeText,
  },
  {
    title: 'ServiceRegister.js',
    key: 'ServiceRegister.js',
    codeText: ServiceRegisterCodeText,
  },
];

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
            info: '基本使用',
          },
        },
        type: 'PlayGroundTab',
        active: 'NormalList.jsx',
        config: [
          {
            title: 'NormalList.jsx',
            key: 'NormalList.jsx',
            codeText: NormalListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <NormalList />,
      },
      {
        id: `p2`,
        name: `竖排列表`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '竖排列表',
            info: '竖排列表',
          },
        },
        type: 'PlayGroundTab',
        active: 'VerticalNormalList.jsx',
        config: [
          {
            title: 'VerticalNormalList.jsx',
            key: 'VerticalNormalList.jsx',
            codeText: VerticalNormalListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <VerticalNormalList />,
      },
      {
        id: `p3`,
        name: `可选列表`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '可选列表',
            info: '可选列表',
          },
        },
        type: 'PlayGroundTab',
        active: 'SelectionList.jsx',
        config: [
          {
            title: 'SelectionList.jsx',
            key: 'SelectionList.jsx',
            codeText: SelectionListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <SelectionList />,
      },
      {
        id: `p4`,
        name: `卡片列表`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '卡片列表',
            info: '卡片列表',
          },
        },
        type: 'PlayGroundTab',
        active: 'CardList.jsx',
        config: [
          {
            title: 'CardList.jsx',
            key: 'CardList.jsx',
            codeText: CardListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <CardList />,
      },
      {
        id: `p5`,
        name: `可折叠列表`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '可折叠列表',
            info: '可折叠列表',
          },
        },
        type: 'PlayGroundTab',
        active: 'ExpandableList.jsx',
        config: [
          {
            title: 'ExpandableList.jsx',
            key: 'ExpandableList.jsx',
            codeText: ExpandableListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <ExpandableList />,
      },
      {
        id: `p6`,
        name: `自定义render`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义render',
            info: '自定义render',
          },
        },
        type: 'PlayGroundTab',
        active: 'CustomRenderDataList.jsx',
        config: [
          {
            title: 'CustomRenderDataList.jsx',
            key: 'CustomRenderDataList.jsx',
            codeText: CustomRenderDataListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <CustomRenderDataList />,
      },
      {
        id: `p7`,
        name: `自定义renderItem`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '自定义renderItem',
            info: '自定义renderItem',
          },
        },
        type: 'PlayGroundTab',
        active: 'CustomRenderItemList.jsx',
        config: [
          {
            title: 'CustomRenderItemList.jsx',
            key: 'CustomRenderItemList.jsx',
            codeText: CustomRenderItemListCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <CustomRenderItemList />,
      },
      {
        id: `p8`,
        name: `ResourceManager(文件管理器)`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '文件管理器',
            info: '文件管理器',
          },
        },
        type: 'PlayGroundTab',
        active: 'ResourceManager.jsx',
        config: [
          {
            title: 'ResourceManager.jsx',
            key: 'ResourceManager.jsx',
            codeText: ResourceManagerCodeText,
          },
          ...CommonConfig,
        ],
        renderChildren: () => <ResourceManager />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SearchList">
        <p>一种查询列表的通用模式(如果 UI 没有明确给出查询列表的 UI，就可以用这个默认模式)</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: 'SearchList',
            data: [
              {
                name: 'isShowNumber',
                desc: '列表是否显示序号',
                modifier: 'public',
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'getNumberGeneratorRule',
                desc: '获取符号列的生成规则',
                modifier: 'public',
                returnType: 'Symbol',
                returnDesc: `
                   NUMBER_GENERATOR_RULE_ALONE - 单独模式
                   NUMBER_GENERATOR_RULE_CONTINUITY - 连续模式
                  `,
              },
              {
                name: 'getRowKey',
                desc: '获取列表的主键属性',
                modifier: 'public',
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getData',
                desc: '获取列表数据',
                modifier: 'public',
                returnType: 'object[]',
                returnDesc: '',
              },
              {
                name: 'getMetas',
                desc: '列表项配置',
                modifier: 'public',
                returnType: 'Metas<any>',
                returnDesc: '',
              },
              {
                name: 'renderItem',
                desc: '渲染列表的item',
                modifier: 'public',
                params: [
                  {
                    name: 'record',
                    desc: '列表行数据',
                    type: 'any',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'rowIndex',
                    desc: '列表行索引',
                    type: 'number',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'ReactNode',
                returnDesc: '',
              },
              {
                name: 'renderListHeader',
                desc: '渲染列表头部',
                modifier: 'public',
                returnType: 'ReactNode',
                returnDesc: '',
              },
            ],
          },
        ]}
      />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: '属性',
            data: [
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
                params: 'defaultMode',
                desc: '绘制模式',
                type: `
                  {
                    // 直线
                    LINE = 'line',
                    // 矩形
                    RECTANGLE = 'rectangle',
                    // 圆形
                    CIRCLE = 'circle',
                    // 三角形
                    TRIANGLE = 'triangle',
                    // 自由绘制
                    FREE = 'free',
                    // 橡皮
                    RUBBER = 'rubber',
                  }
                `,
                defaultVal: 'line',
              },
              {
                params: 'defaultStrokeStyle',
                desc: '线条颜色',
                type: 'string',
                defaultVal: '#000',
              },
              {
                params: 'defaultLineWidth',
                desc: '线条宽度',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'resizeTime',
                desc: '防抖的事件',
                type: 'number',
                defaultVal: '300',
              },
            ],
          },
          {
            border: true,
            title: '属性',
            data: [
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
                params: 'defaultMode',
                desc: '绘制模式',
                type: `
                  {
                    // 直线
                    LINE = 'line',
                    // 矩形
                    RECTANGLE = 'rectangle',
                    // 圆形
                    CIRCLE = 'circle',
                    // 三角形
                    TRIANGLE = 'triangle',
                    // 自由绘制
                    FREE = 'free',
                    // 橡皮
                    RUBBER = 'rubber',
                  }
                `,
                defaultVal: 'line',
              },
              {
                params: 'defaultStrokeStyle',
                desc: '线条颜色',
                type: 'string',
                defaultVal: '#000',
              },
              {
                params: 'defaultLineWidth',
                desc: '线条宽度',
                type: 'number',
                defaultVal: '1',
              },
              {
                params: 'resizeTime',
                desc: '防抖的事件',
                type: 'number',
                defaultVal: '300',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
