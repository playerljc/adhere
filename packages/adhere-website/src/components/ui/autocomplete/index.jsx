import DataCodeText from '!!raw-loader!./data';
import CheckableTableTreeAutoCompleteCodeText from '!!raw-loader!./examples/CheckableTableTreeAutoComplete';
import CheckableTreeSelectAutoCompleteCodeText from '!!raw-loader!./examples/CheckableTreeSelectAutoComplete';
import FlatTreeSelectAutoCompleteCodeText from '!!raw-loader!./examples/FlatTreeSelectAutoComplete';
import MultiTreeSelectAutoCompleteCodeText from '!!raw-loader!./examples/MultiTreeSelectAutoComplete';
import SelectAutoCompleteCodeText from '!!raw-loader!./examples/SelectAutoComplete';
import TableAutoCompleteCodeText from '!!raw-loader!./examples/TableAutoComplete';
import TablePaginMultipleAutoCompleteCodeText from '!!raw-loader!./examples/TablePaginMultipleAutoComplete';
import TablePaginRadioAutoCompleteCodeText from '!!raw-loader!./examples/TablePaginRadioAutoComplete';
import TableTreeAutoCompleteCodeText from '!!raw-loader!./examples/TableTreeAutoComplete';
import TreeSelectAutoCompleteCodeText from '!!raw-loader!./examples/TreeSelectAutoComplete';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import CheckableTableTreeAutoComplete from './examples/CheckableTableTreeAutoComplete';
import CheckableTreeSelectAutoComplete from './examples/CheckableTreeSelectAutoComplete';
import FlatTreeSelectAutoComplete from './examples/FlatTreeSelectAutoComplete';
import MultiTreeSelectAutoComplete from './examples/MultiTreeSelectAutoComplete';
import SelectAutoComplete from './examples/SelectAutoComplete';
import TableAutoComplete from './examples/TableAutoComplete';
import TablePaginMultipleAutoComplete from './examples/TablePaginMultipleAutoComplete';
import TablePaginRadioAutoComplete from './examples/TablePaginRadioAutoComplete';
import TableTreeAutoComplete from './examples/TableTreeAutoComplete';
import TreeSelectAutoComplete from './examples/TreeSelectAutoComplete';

export default () => {
  return (
    <PlayGroundPage>
      <Section title="AutoComplete">
        <p>自动补全</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p1`,
            name: `Select的自动补全`,
            cardProps: {
              description: {
                title: 'Select的自动补全',
                info: 'Select的自动补全',
              },
            },
            active: 'SelectAutoComplete.jsx',
            config: [
              {
                key: 'SelectAutoComplete.jsx',
                title: 'SelectAutoComplete.jsx',
                codeText: SelectAutoCompleteCodeText,
              },
              {
                key: 'data.js',
                title: 'data.js',
                codeText: DataCodeText,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <SelectAutoComplete />,
          },
          {
            id: `p2`,
            name: `Table的自动补全`,
            cardProps: {
              description: {
                title: 'Table的自动补全',
                info: 'Table的自动补全',
              },
            },
            active: 'TableAutoComplete.jsx',
            config: [
              {
                key: 'TableAutoComplete.jsx',
                title: 'TableAutoComplete.jsx',
                codeText: TableAutoCompleteCodeText,
              },
              {
                key: 'data.js',
                title: 'data.js',
                codeText: DataCodeText,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <TableAutoComplete />,
          },
          {
            id: `p3`,
            name: `Table的单选分页自动补全`,
            cardProps: {
              description: {
                title: 'Table的单选分页自动补全',
                info: 'Table的单选分页自动补全',
              },
            },
            active: 'TablePaginRadioAutoComplete.jsx',
            config: [
              {
                key: 'TablePaginRadioAutoComplete.jsx',
                title: 'TablePaginRadioAutoComplete.jsx',
                codeText: TablePaginRadioAutoCompleteCodeText,
              },
              {
                key: 'data.js',
                title: 'data.js',
                codeText: DataCodeText,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <TablePaginRadioAutoComplete />,
          },
          {
            id: `p4`,
            name: `Table的多选分页自动补全`,
            cardProps: {
              description: {
                title: 'Table的多选分页自动补全',
                info: 'Table的多选分页自动补全',
              },
            },
            active: 'TablePaginMultipleAutoComplete.jsx',
            config: [
              {
                key: 'TablePaginMultipleAutoComplete.jsx',
                title: 'TablePaginMultipleAutoComplete.jsx',
                codeText: TablePaginMultipleAutoCompleteCodeText,
              },
              {
                key: 'data.js',
                title: 'data.js',
                codeText: DataCodeText,
              },
            ],
            type: 'PlayGroundTab',
            renderChildren: () => <TablePaginMultipleAutoComplete />,
          },
          {
            id: 'p5',
            name: 'TreeSelect的AutoComplete',
            cardProps: {
              description: {
                title: 'TreeSelect的AutoComplete',
                info: 'TreeSelect的AutoComplete',
              },
            },
            codeText: TreeSelectAutoCompleteCodeText,
            type: 'PlayGround',
            renderChildren: () => <TreeSelectAutoComplete />,
          },
          {
            id: 'p6',
            name: 'TreeSelect的AutoComplete拉平的数据',
            cardProps: {
              description: {
                title: 'TreeSelect的AutoComplete拉平的数据',
                info: 'TreeSelect的AutoComplete拉平的数据',
              },
            },
            codeText: FlatTreeSelectAutoCompleteCodeText,
            type: 'PlayGround',
            renderChildren: () => <FlatTreeSelectAutoComplete />,
          },
          {
            id: 'p7',
            name: 'TreeSelect的AutoComplete多选',
            cardProps: {
              description: {
                title: 'TreeSelect的AutoComplete多选',
                info: 'TreeSelect的AutoComplete多选',
              },
            },
            codeText: MultiTreeSelectAutoCompleteCodeText,
            type: 'PlayGround',
            renderChildren: () => <MultiTreeSelectAutoComplete />,
          },
          {
            id: 'p8',
            name: 'TreeSelect的AutoComplete支持checkable',
            cardProps: {
              description: {
                title: 'TreeSelect的AutoComplete支持checkable',
                info: 'TreeSelect的AutoComplete支持checkable',
              },
            },
            codeText: CheckableTreeSelectAutoCompleteCodeText,
            type: 'PlayGround',
            renderChildren: () => <CheckableTreeSelectAutoComplete />,
          },
          {
            id: 'p9',
            name: 'TreeSelect的AutoComplete自定义TableTree渲染',
            cardProps: {
              description: {
                title: 'TreeSelect的AutoComplete自定义TableTree渲染',
                info: 'TreeSelect的AutoComplete自定义TableTree渲染',
              },
            },
            codeText: TableTreeAutoCompleteCodeText,
            type: 'PlayGround',
            renderChildren: () => <TableTreeAutoComplete />,
          },
          {
            id: 'p10',
            name: 'TreeSelect的AutoComplete自定义TableTree渲染支持checkable',
            cardProps: {
              description: {
                title: 'TreeSelect的AutoComplete自定义TableTree渲染支持checkable',
                info: 'TreeSelect的AutoComplete自定义TableTree渲染支持checkable',
              },
            },
            codeText: CheckableTableTreeAutoCompleteCodeText,
            type: 'PlayGround',
            renderChildren: () => <CheckableTableTreeAutoComplete />,
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
                params: 'classNameWrap',
                desc: '附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'styleWrap',
                desc: '附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'renderLoading',
                desc: '自定义loading',
                type: '() => React.ReactNode',
                defaultVal: '',
              },
              {
                params: 'debounceTimeout',
                desc: '防抖的时间',
                type: 'number',
                defaultVal: '300',
              },
              {
                params: 'loadData',
                desc: '异步加载数据',
                type: '(kw?: string) => Promise<void>',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '自动补全的UI',
                type: `
                  (arg: {
                    originNode?: React.ReactElement;
                    value?: SelectProps['value'];
                    onChange?: SelectProps['onChange'];
                    options?: SelectProps['options'];
                  }) => React.ReactElement
                `,
                defaultVal: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
