import ColumnResizeTableCodeText from '!!raw-loader!./columnResizeTable';
import ColumnSettingTableCodeText from '!!raw-loader!./columnSettingTable';
import EditableCellRenderTriggerStateSearchTableCodeText from '!!raw-loader!./editorCellRenderTriggerStateSearchTable';
import EditorCellStateSearchTableCodeText from '!!raw-loader!./editorCellStateSearchTable';
import EditorCellUseKeepEditStateSearchTableCodeText from '!!raw-loader!./editorCellUseKeepEditStateSearchTable';
import p1CodeText from '!!raw-loader!./examples/p1';
import p2CodeText from '!!raw-loader!./examples/p2';
import p3CodeText from '!!raw-loader!./examples/p3';
import p4CodeText from '!!raw-loader!./examples/p4';
import p5CodeText from '!!raw-loader!./examples/p5';
import p6CodeText from '!!raw-loader!./examples/p6';
import p8CodeText from '!!raw-loader!./examples/p8';
import p9CodeText from '!!raw-loader!./examples/p9';
import p10CodeText from '!!raw-loader!./examples/p10';
import p11CodeText from '!!raw-loader!./examples/p11';
import p12CodeText from '!!raw-loader!./examples/p12';
import p13CodeText from '!!raw-loader!./examples/p13';
import p14CodeText from '!!raw-loader!./examples/p14';
import p15CodeText from '!!raw-loader!./examples/p15';
import p16CodeText from '!!raw-loader!./examples/p16';
import p17CodeText from '!!raw-loader!./examples/p17';
import p18CodeText from '!!raw-loader!./examples/p18';
import p19CodeText from '!!raw-loader!./examples/p19';
import p20CodeText from '!!raw-loader!./examples/p20';
import FixedTableSpaceBetweenTableCodeText from '!!raw-loader!./fixedTableSpaceBetweenTable';
import UserModelCodeText from '!!raw-loader!./model/user';
import ProRowDragSortSearchTableCodeText from '!!raw-loader!./proRowDragSortSearchTable';
import ProSearchStateTableImplCodeText from '!!raw-loader!./proStateSearchTable';
import RenderSearchBetweenTableCodeText from '!!raw-loader!./renderSearchBetweenTable';
import RowEditorStateSearchTableCodeText from '!!raw-loader!./rowEditorStateSearchTable';
import RowSelectedContinuousCodeText from '!!raw-loader!./rowSelectedContinuous';
import RowSelectedNormalCodeText from '!!raw-loader!./rowSelectedNormal';
import UserServiceCodeText from '!!raw-loader!./service/user';
import serviceRegisterCodeText from '!!raw-loader!./serviceRegister';
import StateTableCodeText from '!!raw-loader!./stateTable';
import TableCodeText from '!!raw-loader!./table';
import TableDensitySettingCodeText from '!!raw-loader!./tableDensitySetting';
import TableEditorStateSearchTableCodeText from '!!raw-loader!./tableEditorStateSearchTable';

import React from 'react';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import P1 from './examples/p1';
import P2 from './examples/p2';
import P3 from './examples/p3';
import P4 from './examples/p4';
import P5 from './examples/p5';
import P6 from './examples/p6';
import P8 from './examples/p8';
import P9 from './examples/p9';
import P10 from './examples/p10';
import P11 from './examples/p11';
import P12 from './examples/p12';
import P13 from './examples/p13';
import P14 from './examples/p14';
import P15 from './examples/p15';
import P16 from './examples/p16';
import P17 from './examples/p17';
import P18 from './examples/p18';
import P19 from './examples/p19';
import P20 from './examples/p20';

import FixedTableSpaceBetweenTableLessCodeText from '!!raw-loader!./fixedTableSpaceBetweenTable.less';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `基本使用`,
        cardProps: {
          description: {
            title: '基本使用',
            info: '基本使用',
          },
        },
        active: 'p1.jsx',
        config: [
          {
            title: 'p1.jsx',
            key: 'p1.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p1CodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `表格体可以滚动`,
        cardProps: {
          description: {
            title: '表格体可以滚动',
            info: '表格体可以滚动',
          },
        },
        active: 'p2.jsx',
        config: [
          {
            title: 'p2.jsx',
            key: 'p2.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p2CodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `固定列头`,
        cardProps: {
          description: {
            title: '固定列头',
            info: '固定列头',
          },
        },
        active: 'p3.jsx',
        config: [
          {
            title: 'p3.jsx',
            key: 'p3.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p3CodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P3 />,
      },
      {
        id: `p4`,
        name: `列表两端的渲染`,
        cardProps: {
          description: {
            title: '列表两端的渲染',
            info: '列表两端的渲染',
          },
        },
        active: 'p4.jsx',
        config: [
          {
            title: 'p4.jsx',
            key: 'p4.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p4CodeText,
          },
          {
            title: 'FixedTableSpaceBetweenTable.jsx',
            key: 'FixedTableSpaceBetweenTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: FixedTableSpaceBetweenTableCodeText,
          },
          {
            title: 'FixedTableSpaceBetweenTable.less',
            key: 'FixedTableSpaceBetweenTable.less',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: FixedTableSpaceBetweenTableLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P4 />,
      },
      {
        id: `p5`,
        name: `分页始终居底`,
        cardProps: {
          description: {
            title: '分页始终居底',
            info: '分页始终居底',
          },
        },
        active: 'p5.jsx',
        config: [
          {
            title: 'p5.jsx',
            key: 'p5.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p5CodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P5 />,
      },
      {
        id: `p6`,
        name: `使用@ctsj/state的Table`,
        cardProps: {
          description: {
            title: '使用@ctsj/state的Table',
            info: '使用@ctsj/state的Table',
          },
        },
        active: 'p6.jsx',
        config: [
          {
            title: 'p6.jsx',
            key: 'p6.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p6CodeText,
          },
          {
            title: 'StateTable.jsx',
            key: 'StateTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: StateTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P6 />,
      },
      {
        id: 'p8',
        name: '标准的RowSelected',
        cardProps: {
          description: {
            title: '标准的RowSelected',
            info: '标准的RowSelected',
          },
        },
        active: 'p8.jsx',
        config: [
          {
            title: 'p8.jsx',
            key: 'p8.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p8CodeText,
          },
          {
            title: 'RowSelectedNormal.jsx',
            key: 'RowSelectedNormal.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: RowSelectedNormalCodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P8 />,
      },
      {
        id: 'p9',
        name: '可以跨页选择的RowSelected',
        cardProps: {
          description: {
            title: '可以跨页选择的RowSelected',
            info: '可以跨页选择的RowSelected',
          },
        },
        active: 'p9.jsx',
        config: [
          {
            title: 'p9.jsx',
            key: 'p9.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p9CodeText,
          },
          {
            title: 'RowSelectedContinuous.jsx',
            key: 'RowSelectedContinuous.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: RowSelectedContinuousCodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P9 />,
      },
      {
        id: 'p10',
        name: '可以拖动的列',
        cardProps: {
          description: {
            title: '可以拖动的列',
            info: '可以拖动的列',
          },
        },
        active: 'p10.jsx',
        config: [
          {
            title: 'p10.jsx',
            key: 'p10.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p10CodeText,
          },
          {
            title: 'ColumnResizeTable.jsx',
            key: 'ColumnResizeTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: ColumnResizeTableCodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P10 />,
      },
      {
        id: 'p11',
        name: '列设置',
        cardProps: {
          description: {
            title: '列设置',
            info: '列设置',
          },
        },
        active: 'p11.jsx',
        config: [
          {
            title: 'p11.jsx',
            key: 'p11.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p11CodeText,
          },
          {
            title: 'ColumnSettingTable.jsx',
            key: 'ColumnSettingTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: ColumnSettingTableCodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
          {
            title: 'fixedTableSpaceBetweenTable.less',
            key: 'fixedTableSpaceBetweenTable.less',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: FixedTableSpaceBetweenTableLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P11 />,
      },
      {
        id: 'p12',
        name: '表格密度设置',
        cardProps: {
          description: {
            title: '表格密度设置',
            info: '表格密度设置',
          },
        },
        active: 'p12.jsx',
        config: [
          {
            title: 'p12.jsx',
            key: 'p12.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p12CodeText,
          },
          {
            title: 'TableDensitySetting.jsx',
            key: 'TableDensitySetting.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableDensitySettingCodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
          {
            title: 'fixedTableSpaceBetweenTable.less',
            key: 'fixedTableSpaceBetweenTable.less',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: FixedTableSpaceBetweenTableLessCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P12 />,
      },
      {
        id: 'p13',
        name: '查询面板两端的渲染',
        cardProps: {
          description: {
            title: '查询面板两端的渲染',
            info: '查询面板两端的渲染',
          },
        },
        active: 'p13.jsx',
        config: [
          {
            title: 'p13.jsx',
            key: 'p13.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p13CodeText,
          },
          {
            title: 'RenderSearchBetweenTable.jsx',
            key: 'RenderSearchBetweenTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: RenderSearchBetweenTableCodeText,
          },
          {
            title: 'Table.jsx',
            key: 'Table.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P13 />,
      },
      {
        id: `p14`,
        name: `ProSearchStateTable`,
        cardProps: {
          description: {
            title: 'ProSearchStateTable',
            info: 'ProSearchStateTable',
          },
        },
        active: 'p14.jsx',
        config: [
          {
            title: 'p14.jsx',
            key: 'p14.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p14CodeText,
          },
          {
            title: 'ProSearchStateTableImpl.jsx',
            key: 'ProSearchStateTableImpl.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: ProSearchStateTableImplCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P14 />,
      },
      {
        id: `p15`,
        name: '可编辑的单元格',
        cardProps: {
          description: {
            title: '可编辑的单元格',
            info: '可编辑的单元格',
          },
        },
        active: 'p15.jsx',
        config: [
          {
            title: 'p15.jsx',
            key: 'p15.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p15CodeText,
          },
          {
            title: 'EditorCellStateSearchTable.jsx',
            key: 'EditorCellStateSearchTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: EditorCellStateSearchTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P15 />,
      },
      {
        id: `p16`,
        name: '可编辑的行',
        cardProps: {
          description: {
            title: '可编辑的行',
            info: '可编辑的行',
          },
        },
        active: 'p16.jsx',
        config: [
          {
            title: 'p16.jsx',
            key: 'p16.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p16CodeText,
          },
          {
            title: 'RowEditorStateSearchTable.jsx',
            key: 'RowEditorStateSearchTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: RowEditorStateSearchTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P16 />,
      },
      {
        id: `p17`,
        name: '可编辑的表格',
        cardProps: {
          description: {
            title: '可编辑的表格',
            info: '可编辑的表格',
          },
        },
        active: 'p17.jsx',
        config: [
          {
            title: 'p17.jsx',
            key: 'p17.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p17CodeText,
          },
          {
            title: 'TableEditorStateSearchTable.jsx',
            key: 'TableEditorStateSearchTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: TableEditorStateSearchTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P17 />,
      },
      {
        id: `p18`,
        name: '始终处于编辑状态的可编辑单元格',
        cardProps: {
          description: {
            title: '始终处于编辑状态的可编辑单元格',
            info: '始终处于编辑状态的可编辑单元格',
          },
        },
        active: 'p18.jsx',
        config: [
          {
            title: 'p18.jsx',
            key: 'p18.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p18CodeText,
          },
          {
            title: 'EditorCellUseKeepEditStateSearchTable.jsx',
            key: 'EditorCellUseKeepEditStateSearchTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: EditorCellUseKeepEditStateSearchTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P18 />,
      },
      {
        id: `p19`,
        name: '可编辑的表格自定义trigger',
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '可编辑的表格自定义trigger',
            info: '可编辑的表格自定义trigger',
          },
        },
        active: 'p19.jsx',
        config: [
          {
            title: 'p19.jsx',
            key: 'p19.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p19CodeText,
          },
          {
            title: 'EditableCellRenderTriggerStateSearchTable.jsx',
            key: 'EditableCellRenderTriggerStateSearchTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: EditableCellRenderTriggerStateSearchTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P19 />,
      },
      {
        id: `p20`,
        name: '拖拽排序',
        cardProps: {
          description: {
            title: '拖拽排序',
            info: '拖拽排序',
          },
        },
        active: 'p20.jsx',
        config: [
          {
            title: 'p20.jsx',
            key: 'p20.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: p20CodeText,
          },
          {
            title: 'ProRowDragSortSearchTable.jsx',
            key: 'ProRowDragSortSearchTable.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: ProRowDragSortSearchTableCodeText,
          },
          {
            title: 'serviceRegister.jsx',
            key: 'serviceRegister.jsx',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: serviceRegisterCodeText,
          },
          {
            title: 'model/user.js',
            key: 'model/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserModelCodeText,
          },
          {
            title: 'service/user.js',
            key: 'service/user.js',
            mode: 'code',
            theme: 'eclipse',
            scope: { React },
            codeText: UserServiceCodeText,
          },
        ],
        type: 'PlayGroundTab',
        renderChildren: () => <P20 />,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="SearchTable">
        <p>一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'Table',
            data: [
              {
                params: 'className',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'tableClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'tableStyle',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'searchClassName',
                desc: '附加样式',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'searchStyle',
                desc: '附加样式',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'reset',
                desc: '是否重置',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'firstLoading',
                desc: '是否是第一次加载',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'antdTableProps',
                desc: 'Table的antd配置',
                type: 'object',
                defaultVal: '{}',
              },
              {
                params: 'isShowExpandSearch',
                desc: '是否有展开和收缩的功能',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'defaultExpandSearchCollapse',
                desc: '展开和收缩的默认状态',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fitSearch',
                desc: '撑开search',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fitTable',
                desc: '撑开表格',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'autoFixed',
                desc: '是否是查询固定，表格自适应',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'fixedHeaderAutoTable',
                desc: '锁定列头，表格滚动',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'fixedTableSpaceBetween',
                desc: '两端固定(表格的头始终在上方，分页始终在下方)',
                type: 'boolean',
                defaultVal: 'false',
              },
            ],
          },
          {
            border: true,
            title: 'TableImplement',
            data: [
              {
                params: 'getTableWrapperInstance',
                desc: '',
                type: 'Function',
                defaultVal: '',
              },
            ],
          },
        ]}
      />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '重写的方法',
            data: [
              {
                name: 'isShowNumber',
                desc: '表格是否显示序号',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'getTableNumberColumnWidth',
                desc: '表格序号列的宽度',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '80',
              },
              {
                name: 'getNumberGeneratorRule',
                desc: '获取符号列的生成规则',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc:
                  'NUMBER_GENERATOR_RULE_ALONE(单独模式),NUMBER_GENERATOR_RULE_CONTINUITY(连续模式)',
              },
              {
                name: 'renderTableNumberColumn',
                desc: '渲染序号列',
                modifier: 'public',
                params: [
                  {
                    name: 'number',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'params',
                    desc: '',
                    type: '{ record: object; index: number }',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'React.ReactElement',
                returnDesc: '',
              },
              {
                name: 'renderTableHeader',
                desc: '渲染表格的头',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableFooter',
                desc: '渲染表格的脚',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'getRowKey',
                desc: '获取表格的主键属性',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getData',
                desc: '获取表格数据',
                modifier: 'public',
                params: [],
                returnType: 'Array<Object>',
                returnDesc: '',
              },
              {
                name: 'getColumns',
                desc: '获取表格列的信息',
                modifier: 'public',
                params: [],
                returnType: 'Array<object>',
                returnDesc: '',
              },
              {
                name: 'getRowSelection',
                desc: '获取表格行选择对象',
                modifier: 'public',
                params: [],
                returnType: 'TableRowSelection<object>',
                returnDesc: '',
              },
              {
                name: 'renderSearchForm',
                desc: '渲染查询的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableHeader',
                desc: '渲染表格的头',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableFooter',
                desc: '渲染表格的脚',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderTableNumberColumn',
                desc: '渲染序号列',
                modifier: 'public',
                params: [
                  {
                    name: 'number',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'React.ReactElement',
                returnDesc: '',
              },
              {
                name: 'getTotal',
                desc: '获取表格数据的总数',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getOrderFieldProp',
                desc: '获取表格的排序字段',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderProp',
                desc: '获取表格的排序属性',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'onSubTableChange',
                desc: '获取表格change句柄',
                modifier: 'public',
                params: [
                  {
                    name: 'pagination',
                    desc: '',
                    type: 'TablePaginationConfig',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'filters',
                    desc: '',
                    type: 'Record<string, FilterValue | null>',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'sorter',
                    desc: '',
                    type: 'SorterResult<object> | SorterResult<object>[]',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'extra',
                    desc: '',
                    type: 'TableCurrentDataSource<object>',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清除操作',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'renderSearchFooterItems',
                desc: '渲染SearchFooter的按钮组',
                modifier: 'public',
                params: [],
                returnType: 'Array<React.ReactElement> | null',
                returnDesc: '',
              },
              {
                name: 'onSearch',
                desc: '进行查询',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'searchtableimplement重写的方法',
            data: [
              {
                name: 'getFetchListPropName',
                desc: '获取调用列表接口的函数名',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getFetchListPropNameToFirstUpper',
                desc: '获取调用列表接口的函数名首字母大写',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'onSelectChange',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'property',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'value',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'onInputChange',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'property',
                    desc: '',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'e',
                    desc: '',
                    type: 'object',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'onDateTimeRangeChange',
                desc: '',
                modifier: 'public',
                params: [
                  {
                    name: 'propertys',
                    desc: '',
                    type: 'Array<string>',
                    defaultVal: '',
                    required: '',
                  },
                  {
                    name: 'moments',
                    desc: '',
                    type: 'Array<moment>',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'getParams',
                desc: '获取查询参数对象',
                modifier: 'public',
                params: [],
                returnType: 'Object',
                returnDesc: '',
              },
              {
                name: 'getServiceName',
                desc: '获取接口服务的model名称',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getFetchDataParams',
                desc: '获取调用数据接口的参数',
                modifier: 'public',
                params: [],
                returnType: 'object',
                returnDesc: '',
              },
              {
                name: 'isShowNumber',
                desc: '是否线上序号列',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'getNumberGeneratorRule',
                desc: '表格序号列的生成规则',
                modifier: 'public',
                params: [],
                returnType: 'Symbol',
                returnDesc: '',
              },
              {
                name: 'getTableNumberColumnWidth',
                desc: '表格序号列的宽度',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getRowKey',
                desc: '数据的主键',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getData',
                desc: 'Table的数据(Table的dataSource字段)',
                modifier: 'public',
                params: [],
                returnType: 'Array<object>',
                returnDesc: '',
              },
              {
                name: 'getDataKey',
                desc: '获取数据的key',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getColumns',
                desc: 'Table的列',
                modifier: 'public',
                params: [],
                returnType: 'Array<ColumnType<object>>',
                returnDesc: '',
              },
              {
                name: 'getRowSelection',
                desc: '获取表格行选择对象',
                modifier: 'public',
                params: [],
                returnType: 'TableRowSelection<object>',
                returnDesc: '',
              },
              {
                name: 'renderSearchFormBefore',
                desc: '渲染Table查询的表单之前的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderSearchForm',
                desc: '渲染Table查询的表单',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderSearchFormAfter',
                desc: '渲染Table查询的表单之后的UI',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'renderInner',
                desc: '渲染主体',
                modifier: 'public',
                params: [],
                returnType: 'React.ReactElement | null',
                returnDesc: '',
              },
              {
                name: 'getTotal',
                desc: 'Table数据的总条数',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getTotalKey',
                desc: '获取total的key',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getLimit',
                desc: '获取分页条数',
                modifier: 'public',
                params: [],
                returnType: 'number',
                returnDesc: '',
              },
              {
                name: 'getOrderFieldProp',
                desc: '获取排序字段',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderFieldValue',
                desc: '获取默认排序字段的值',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderProp',
                desc: '获取排序方式',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'getOrderPropValue',
                desc: '获取默认排序方式',
                modifier: 'public',
                params: [],
                returnType: "'descend' | 'ascend'",
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清空查询条件',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'onClear',
                desc: '点击重置按钮',
                modifier: 'public',
                params: [],
                returnType: 'Promise<void>',
                returnDesc: '',
              },
              {
                name: 'renderSearchFooterItems',
                desc: '渲染表格的工具栏',
                modifier: 'public',
                params: [],
                returnType: 'Array<any>',
                returnDesc: '',
              },
              {
                name: 'showLoading',
                desc: '是否显示遮罩',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'fetchData',
                desc: '加载数据',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'fetchDataExecute',
                desc: '真正的执行获取列表数据的接口',
                modifier: 'public',
                params: [
                  {
                    name: 'searchParams',
                    desc: '',
                    type: 'object',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
              {
                name: 'onSearch',
                desc: '点击查询',
                modifier: 'public',
                params: [],
                returnType: 'Promise<any>',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
