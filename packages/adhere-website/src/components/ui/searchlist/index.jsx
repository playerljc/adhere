import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import CardList from './cardList';
import CustomRenderDataList from './customRenderDataList';
import CustomRenderItemList from './customRenderItemList';
import ExpandableList from './expandableList';
import NormalList from './normalList';
import SelectionList from './selectionList';
import VerticalNormalList from './verticalNormalList';

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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    getRowSelection() {
      return null;
    }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={
        {
          // itemLayout: 'vertical',
          // grid: { gutter: 16, column: 4 },
          // renderItem: () => {
          //   return <div>Custom</div>;
          // },
        }
      }
      {...props}
    />
  );

                    `,
        type: 'PlayGround',
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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    getRowSelection() {
      return null;
    }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={{
        itemLayout: 'vertical',
        // grid: { gutter: 16, column: 4 },
        // renderItem: () => {
        //   return <div>Custom</div>;
        // },
      }}
      {...props}
    />
  );
                    `,
        type: 'PlayGround',
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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    // getRowSelection() {
    //   return null;
    // }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={
        {
          // itemLayout: 'vertical',
          // grid: { gutter: 16, column: 4 },
          // renderItem: () => {
          //   return <div>Custom</div>;
          // },
        }
      }
      {...props}
    />
  );

                    `,
        type: 'PlayGround',
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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    getRowSelection() {
      return null;
    }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={{
        // itemLayout: 'vertical',
        grid: { gutter: 16, column: 3 },
        // renderItem: () => {
        //   return <div>Custom</div>;
        // },
      }}
      {...props}
    />
  );

                    `,
        type: 'PlayGround',
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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    // getRowSelection() {
    //   return null;
    // }

    getExpandable() {
      return {
        expandedRowKeys: this.state.expandedRowKeys,
        onExpandedRowsChange: (_expandedRowKeys) => {
          this.setState({
            expandedRowKeys: _expandedRowKeys,
          });
        },
      };
    }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={{
        itemLayout: 'vertical',
        // grid: { gutter: 16, column: 3 },
        // renderItem: () => {
        //   return <div>Custom</div>;
        // },
      }}
      {...props}
    />
  );

                    `,
        type: 'PlayGround',
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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    getRowSelection() {
      return null;
    }

    getMetas() {
      return {
        title: {
          dataIndex: 'title',
          render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        },
        subTitle: {
          dataIndex: 'subTitle',
          render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        },
        description: {
          dataIndex: 'description',
          render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        },
        avatar: {
          dataIndex: 'avatar',
          render: (val) => <img src={val} alt="" />,
        },
        content: {
          dataIndex: 'content',
          render: (val) => <div style={{ color: 'red' }}>{val}</div>,
        },
        actions: {
          dataIndex: 'actions',
          // cardActionProps: 'extra',
          render: () => [<a>1</a>, <a>2</a>, <a>3</a>],
        },
        extra: {
          dataIndex: 'extra',
          render: () => <div>extra</div>,
        },
      };
    }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={{
        itemLayout: 'vertical',
        // grid: { gutter: 16, column: 4 },
        // renderItem: () => {
        //   return <div>Custom</div>;
        // },
      }}
      {...props}
    />
  );

                    `,
        type: 'PlayGround',
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
        codeText: `
  import React from 'react';

  import { SearchList } from '@baifendian/adhere';

  import './serviceRegister';

  const { ProSearchStateList, SearchListStateImplementFactory } = SearchList;

  const serviceName = 'user';

  /**
   * ProSearchStateListImpl
   * @class ProSearchStateListImpl
   * @classdesc ProSearchStateListImpl
   */
  class ProSearchStateListImpl extends ProSearchStateList {
    constructor(props) {
      super(props);

      this.state = {
        ...this.state,
        expandedRowKeys: [],
      };
    }

    getComponentId() {
      return 'ProSearchStateListImpl';
    }

    getServiceName() {
      return serviceName;
    }

    getFetchListPropName() {
      return 'fetchList';
    }

    getDataKey() {
      return 'list';
    }

    getTotalKey() {
      return 'totalCount';
    }

    getRowSelection() {
      return null;
    }

    getColumns() {
      return [
        {
          dataIndex: 'title',
          key: 'title',
          title: '标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'subTitle',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'input',
          },
        },
        {
          dataIndex: 'content',
          key: 'subTitle',
          title: '副标题',
          $search: {
            visible: true,
            type: 'textArea',
          },
        },
      ];
    }
  }

  ProSearchStateListImpl.propTypes = {};

  const models = [];
  const requireComponent = require.context('./model', false, /.*\\.(js)$/);
  requireComponent.keys().forEach((fileName) => {
    const model = requireComponent(fileName);
    models.push(model.default());
  });

  const Wrap = SearchListStateImplementFactory({
    serviceNames: [serviceName],
    middleWares: [],
    reducer: null,
    models,
  })(ProSearchStateListImpl);

  export default (props) => (
    <Wrap
      bodyStyle={{ padding: '20px 30px' }}
      antdListProps={{
        renderItem: () => {
          return <div>Custom</div>;
        },
      }}
      {...props}
    />
  );

                    `,
        type: 'PlayGround',
        renderChildren: () => <CustomRenderItemList />,
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
        title="Api"
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
