import DataCodeText from '!!raw-loader!./data';
import SelectAutoCompleteCodeText from '!!raw-loader!./examples/SelectAutoComplete';
import TableAutoCompleteCodeText from '!!raw-loader!./examples/TableAutoComplete';
import TablePaginMultipleAutoCompleteCodeText from '!!raw-loader!./examples/TablePaginMultipleAutoComplete';
import TablePaginRadioAutoCompleteCodeText from '!!raw-loader!./examples/TablePaginRadioAutoComplete';

import React from 'react';

import PlayGroundPage, { CodeBoxSection, PropsSection, Section } from '@/lib/PlaygroundPage';

import SelectAutoComplete from './examples/SelectAutoComplete';
import TableAutoComplete from './examples/TableAutoComplete';
import TablePaginMultipleAutoComplete from './examples/TablePaginMultipleAutoComplete';
import TablePaginRadioAutoComplete from './examples/TablePaginRadioAutoComplete';

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
