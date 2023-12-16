import P1CodeText from '!!raw-loader!./examples/p1';
import P2CodeText from '!!raw-loader!./examples/p2';
import PopupCodeText from '!!raw-loader!./popup';

import React, { useEffect, useState } from 'react';

import Constent from '@/constent';
import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  PropsSection,
  Section,
} from '@/lib/PlaygroundPage';
import Util from '@/util';

import P1 from './examples/p1';
import P2 from './examples/p2';

import IndexLessCodeText from '!!raw-loader!./index.less';

export default () => {
  const [indexCodeText, setIndexCodeText] = useState('');
  const [selectPersonCodeText, setSelectPersonCodeText] = useState('');
  const [taskCodeText, setTaskCodeText] = useState('');
  const [p1CodeText, setP1CodeText] = useState('');
  const [p2CodeText, setP2CodeText] = useState('');
  const [p3CodeText, setP3CodeText] = useState('');
  const [p4CodeText, setP4CodeText] = useState('');

  useEffect(() => {
    Util.getMobileCodeText('popup/index.jsx').then(setIndexCodeText);
    Util.getMobileCodeText('popup/SelectPerson.jsx').then(setSelectPersonCodeText);
    Util.getMobileCodeText('popup/Task.jsx').then(setTaskCodeText);
    Util.getMobileCodeText('popup/examples/p1.jsx').then(setP1CodeText);
    Util.getMobileCodeText('popup/examples/p2.jsx').then(setP2CodeText);
    Util.getMobileCodeText('popup/examples/p3.jsx').then(setP3CodeText);
    Util.getMobileCodeText('popup/examples/p4.jsx').then(setP4CodeText);
  }, []);

  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `打开`,
        cardProps: {
          description: {
            title: '打开',
            info: '打开',
          },
        },
        type: 'PlayGroundTab',
        active: 'index.jsx',
        config: [
          {
            title: 'index.jsx',
            key: 'index.jsx',
            codeText: P1CodeText,
          },
          {
            title: 'popup.jsx',
            key: 'popup.jsx',
            codeText: PopupCodeText,
          },
          {
            title: 'index.less',
            key: 'index.less',
            codeText: IndexLessCodeText,
          },
        ],
        renderChildren: () => <P1 />,
      },
      {
        id: `p2`,
        name: `打开后删除之前的实例`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '打开后删除之前的实例',
            info: '打开后删除之前的实例',
          },
        },
        type: 'PlayGround',
        codeText: P2CodeText,
        renderChildren: () => <P2 />,
      },
      {
        id: `p3`,
        name: `使用TriggerPrompt和Trigger`,
        cardProps: {
          description: {
            title: '使用TriggerPrompt和Trigger',
            info: '使用TriggerPrompt和Trigger',
          },
        },
        active: 'index.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            style: { maxHeight: 500 },
            codeText: indexCodeText,
            theme: 'eclipse',
          },
          {
            key: 'SelectPerson.jsx',
            title: 'SelectPerson.jsx',
            style: { maxHeight: 500 },
            codeText: selectPersonCodeText,
            theme: 'eclipse',
          },
          {
            key: 'Task.jsx',
            title: 'Task.jsx',
            style: { maxHeight: 500 },
            codeText: taskCodeText,
            theme: 'eclipse',
          },
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { maxHeight: 500 },
            codeText: p1CodeText,
            theme: 'eclipse',
          },
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            style: { maxHeight: 500 },
            codeText: p2CodeText,
            theme: 'eclipse',
          },
          {
            key: 'p3.jsx',
            title: 'p3.jsx',
            style: { maxHeight: 500 },
            codeText: p3CodeText,
            theme: 'eclipse',
          },
          {
            key: 'p4.jsx',
            title: 'p4.jsx',
            style: { maxHeight: 500 },
            codeText: p4CodeText,
            theme: 'eclipse',
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/popup`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Popup">
        <ul>
          <li>- 支持使用 show 方式打开</li>
          <li>- 不与变量进行绑定，开箱即用的功能</li>
        </ul>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <PropsSection
        title="Props"
        config={[
          {
            border: true,
            title: 'IConfig',
            data: [
              {
                params: 'onCreate',
                desc: '挂载的hook',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeShow',
                desc: '显示之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterShow',
                desc: '显示之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onBeforeClose',
                desc: '关闭之前',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onAfterClose',
                desc: '关闭之后',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'onDestroy',
                desc: '销毁',
                type: 'Function',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '显示的内容',
                type: 'React.ReactElement',
                defaultVal: '',
              },
              {
                params: 'zIndex',
                desc: '显示的层级',
                type: 'number',
                defaultVal: '11000',
              },
            ],
          },
          {
            border: true,
            title: 'Trigger',
            data: [
              {
                params: 'className',
                desc: '',
                type: 'string',
                defaultVal: '',
              },
              {
                params: 'style',
                desc: '',
                type: 'CSSProperties',
                defaultVal: '',
              },
              {
                params: 'children',
                desc: '',
                type: 'any',
                defaultVal: '',
              },
              {
                params: 'value',
                desc: '',
                type: 'any',
                defaultVal: '',
              },
              {
                params: 'onChange',
                desc: '',
                type: '(params?: any) => void',
                defaultVal: '',
              },
              {
                params: 'renderTrigger',
                desc: '',
                type: '() => ReactNode',
                defaultVal: '',
              },
              {
                params: 'title',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'closeIcon',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'extra',
                desc: '',
                type: 'ReactNode',
                defaultVal: '',
              },
              {
                params: 'actions',
                desc: '',
                type: `
                  Omit<AntdButtonProps | AntdMobileButtonProps, 'onClick'> &
                  {
                    key: any;
                    onClick?: () => Promise<any>;
                  }[]
                `,
                defaultVal: '',
              },
              {
                params: 'popupConfig',
                desc: '',
                type: "Omit<IConfig, 'children'>",
                defaultVal: '',
              },
            ],
          },
          {
            border: true,
            title: 'TriggerPrompt',
            data: [
              {
                params: 'onSubmit',
                desc: '',
                type: '() => Promise<any>',
                defaultVal: '',
              },
              {
                params: 'okText',
                desc: '',
                type: 'string',
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
            title: 'PopupFactory',
            data: [
              {
                name: 'PopupFactory.create',
                desc: '创建Popup',
                modifier: 'static',
                params: [
                  {
                    name: 'config',
                    desc: '配置',
                    type: 'IConfig',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'PopupFactory.show',
                desc: '打开Popup',
                modifier: 'static',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的popup对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'PopupFactory.showClosePrePopup',
                desc: '关闭hi前的Popup在打开Popup',
                modifier: 'static',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的popup对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'PopupFactory.close',
                desc: '关闭一个Popup',
                modifier: 'static',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'PopupFactory.closeAll',
                desc: '关闭所有的popup',
                modifier: 'static',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'PopupFactory.destroy',
                desc: '销毁Popup',
                modifier: 'static',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
            ],
          },
          {
            border: true,
            title: 'Popup',
            data: [
              {
                name: 'Popup.show',
                desc: '打开Popup',
                modifier: 'public',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的popup对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'Popup.showClosePrePopup',
                desc: '关闭hi前的Popup在打开Popup',
                modifier: 'public',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的popup对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'Popup.close',
                desc: '关闭一个Popup',
                modifier: 'public',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: '',
                returnDesc: '',
              },
              {
                name: 'Popup.closeAll',
                desc: '关闭所有的popup',
                modifier: 'public',
                params: [],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'Popup.destroy',
                desc: '销毁Popup',
                modifier: 'public',
                params: [
                  {
                    name: 'popup',
                    desc: '使用create创建的对象',
                    type: 'Popup',
                    defaultVal: '',
                    required: '',
                  },
                ],
                returnType: 'void',
                returnDesc: '',
              },
              {
                name: 'Popup.isDestroy方法',
                desc: '是否销毁Popup',
                modifier: 'public',
                params: [],
                returnType: 'boolean',
                returnDesc: '',
              },
              {
                name: 'Popup.isDestroy方法',
                desc: '获取popup的id',
                modifier: 'public',
                params: [],
                returnType: 'string',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
