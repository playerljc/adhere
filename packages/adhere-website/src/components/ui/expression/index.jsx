import debounce from 'lodash.debounce';
import React, { useState } from 'react';

import { Expression } from '@baifendian/adhere';
import ElasticSearch from '@baifendian/adhere-ui-expression/es/operators/ElasticSearch';
import Math from '@baifendian/adhere-ui-expression/es/operators/Math';
import Sql from '@baifendian/adhere-ui-expression/es/operators/Sql';

import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';

import styles from './index.less';

export default () => {
  const [quickTipDataSource, setQuickTipDataSource] = useState([]);

  const onContinuousTextChange = debounce((text) => {
    const kws = ['java', 'c++', 'javascript', 'react', 'vue', 'spring'];

    if (!text) {
      setQuickTipDataSource([]);
    } else {
      setQuickTipDataSource(
        kws
          .filter((kw) => kw.includes(text))
          .map((t) => ({
            label: t,
            value: t,
          })),
      );
    }
  }, 150);

  return (
    <PlayGroundPage>
      <Section title="Expression">
        <p>表达式</p>
      </Section>

      <CodeBoxSection
        title="代码演示"
        config={[
          {
            id: `p2`,
            name: `数学表达式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '数学表达式',
                info: '数学表达式',
              },
            },
            codeText: `
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <Expression operators={Math} />
              </div>
            ),
          },
          {
            id: `p2`,
            name: `ElasticSearch查询表达式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'ElasticSearch查询表达式',
                info: 'ElasticSearch查询表达式',
              },
            },
            codeText: `
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <Expression operators={ElasticSearch} />
              </div>
            ),
          },
          {
            id: `p3`,
            name: `Sql查询表达式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: 'Sql查询表达式',
                info: 'Sql查询表达式',
              },
            },
            codeText: `
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <Expression operators={Sql} />
              </div>
            ),
          },
          {
            id: `p4`,
            name: `自定义表达式的运算符`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '自定义表达式的运算符',
                info: '支持html code',
              },
            },
            codeText: `
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <Expression
                  operators={[
                    { label: '===', value: '===', type: 'binary' },
                    { label: '++', value: '++', type: 'binary' },
                    { label: '--', value: '--', type: 'binary' },
                    { label: '&#43;', value: '&#43;', type: 'binary' },
                    { label: '+=', value: '+=', type: 'binary' },
                    { label: '[]', value: '[]', type: 'brackets' },
                    { label: '{}', value: '{}', type: 'brackets' },
                  ]}
                />
              </div>
            ),
          },
          {
            id: `p5`,
            name: `自定义运算符和文本的样式`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '自定义运算符和文本的样式',
                info: '自定义运算符和文本的样式',
              },
            },
            codeText: `
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <Expression
                  placeholder="请输入表达式"
                  operators={Sql}
                  operatorClassName={styles.operatorClassName}
                  textClassName={styles.textClassName}
                />
              </div>
            ),
          },
          {
            id: `p6`,
            name: `补全输入信息`,
            mode: 'code',
            scope: { React },
            cardProps: {
              description: {
                title: '补全输入信息',
                info: '补全输入信息',
              },
            },
            codeText: `
      `,
            type: 'PlayGround',
            renderChildren: () => (
              <div>
                <Expression
                  placeholder="请输入表达式"
                  operators={Sql}
                  allowClear
                  onContinuousTextChange={onContinuousTextChange}
                  quickTipDataSource={quickTipDataSource}
                />
              </div>
            ),
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
                params: 'editorClassName',
                desc: 'editor附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'editorStyle',
                desc: 'editor附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'operatorWrapClassName',
                desc: '运算符Wrap附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'operatorWrapStyle',
                desc: '运算符Wrap附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'quickTipWrapClassName',
                desc: 'quickTipWrap附加的样式表',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'quickTipWrapStyle',
                desc: 'quickTipWrap附加的样式',
                type: 'React.CSSProperties',
                defaultVal: '',
              },
              {
                params: 'textClassName',
                desc: '文字的附加样式',
                type: '((text: string) => string) | string',
                defaultVal: '',
              },
              {
                params: 'operatorClassName',
                desc: '运算符的附加样式',
                type: '((text: string) => string) | string',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '值',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'operators',
                desc: '运算符列表',
                type: 'Operators',
                defaultVal: 'ElasticSearchOperators',
              },
              {
                params: 'triggerCharCode',
                desc: '触发弹出操作符layer的charCode',
                type: 'number',
                defaultVal: '32',
              },
              {
                params: 'placeholder',
                desc: 'placeholder',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'quickTipDataSource',
                desc: '快速查询的数据',
                type: 'string',
                defaultVal: 'Array<T extends { label: string; value: string }>',
              },
              {
                params: 'quickTipProp',
                desc: 'quickTip数据中哪个属性的值参与计算',
                type: 'string',
                defaultVal: 'value',
              },
              {
                params: 'disableQuickTip',
                desc: '是否禁止使用quickTip',
                type: 'boolean',
                defaultVal: 'false',
              },
              {
                params: 'allowClear',
                desc: '清空内容按钮',
                type: 'boolean',
                defaultVal: 'true',
              },
              {
                params: 'onChange',
                desc: 'input改变',
                type: '(value?: string) => void',
                defaultVal: '',
              },
              {
                params: 'onContinuousTextChange',
                desc: '连续输入字符的回调',
                type: '(continuousText: string) => void',
                defaultVal: '',
              },
              {
                params: 'onEditorInputEnd',
                desc: 'input输入',
                type: '(html: string, continuousText: string) => void',
                defaultVal: '',
              },
              {
                params: 'onEditorBlurEnd',
                desc: 'blur',
                type: '(e) => void',
                defaultVal: '',
              },
              {
                params: 'onEditorKeyDownEnd',
                desc: 'EditorKeyDownEnd',
                type: '(e) => void',
                defaultVal: '',
              },
              {
                params: 'onEditorPasteEnd',
                desc: 'EditorPasteEnd',
                type: '(e) => void',
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'Operators',
            data: [
              {
                params: '',
                desc: '运算符集合',
                type: `
                  Array<OperatorItem>
                `,
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'OperatorItem',
            data: [
              {
                params: '',
                desc: '运算符',
                type: `
                  {
                    // 运算符显示的内容
                    label: string;
                    // 运算符的值
                    value: string;
                    // 运算符的类型
                    type: OperatorType;
                  }
                `,
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
            title: 'Editor方法',
            data: [
              {
                name: 'setValue',
                desc: '设置editor的值',
                modifier: 'public',
                params: [
                  {
                    name: 'html',
                    desc: '值',
                    type: 'string',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'getValue',
                desc: '获取editor的值',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
              {
                name: 'isEditorEmpty',
                desc: '判断editor是否为null',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'showQuickTip',
                desc: '显示quickTip',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'showOperators',
                desc: '显示operators',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'hideQuickTip',
                desc: '隐藏quickTip',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'hideOperators',
                desc: '隐藏operators',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'clear',
                desc: '清空editor',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
