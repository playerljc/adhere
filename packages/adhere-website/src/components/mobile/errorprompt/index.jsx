import React, { useContext } from 'react';

import { ConfigProvider, Util } from '@baifendian/adhere';

import { useMobileCodeText } from '@/hooks';
import PlayGroundPage, {
  CodeBoxSection,
  FunctionPropsSection,
  Section,
} from '@/lib/PlaygroundPage';

export default () => {
  const indexCodeText = useMobileCodeText('errorprompt/index.jsx');
  const p1CodeText = useMobileCodeText('errorprompt/examples/p1.jsx');
  const p2CodeText = useMobileCodeText('errorprompt/examples/p2.jsx');

  const { media } = useContext(ConfigProvider.Context);

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
        active: 'index.jsx',
        displayBodyStyle: {
          width: 450,
        },
        config: [
          {
            key: 'index.jsx',
            title: 'index.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: indexCodeText,
          },
          {
            key: 'p1.jsx',
            title: 'p1.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p1CodeText,
          },
          {
            key: 'p2.jsx',
            title: 'p2.jsx',
            style: { maxHeight: Util.pxToRem(500, media.designWidth, media) },
            theme: 'eclipse',
            codeText: p2CodeText,
          },
        ],
        type: 'PlayGroundTabMobile',
        url: `${Constent(CustomEvnVars).mobileOrigin}/#/adhere/component/ui/errorprompt`,
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="MobileErrorPrompt">
        <p>错误的提示(就是为了全局统一)</p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />

      <FunctionPropsSection
        title="Api"
        config={[
          {
            border: true,
            title: '方法',
            data: [
              {
                name: 'openErrorMessage',
                desc: '显示错误提示',
                modifier: 'global',
                params: [
                  {
                    name: 'content',
                    desc: '提示的文本',
                    type: 'JointContent',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'duration',
                    desc: '显示的时间',
                    type: 'number | VoidFunction',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'onClose',
                    desc: '关闭的事件',
                    type: 'VoidFunction',
                    defaultVal: '',
                    required: 'false',
                  },
                ],
                returnType: 'MessageType',
                returnDesc: '',
              },
              {
                name: 'openErrorDialog',
                desc: '显示错误提示',
                modifier: 'global',
                params: [
                  {
                    name: 'title',
                    desc: '提示的标题',
                    type: 'React.ReactNode',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'content',
                    desc: '提示的内容',
                    type: 'React.ReactNode',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'mask',
                    desc: '是否显示遮罩',
                    type: 'boolean',
                    defaultVal: '',
                    required: 'false',
                  },
                  {
                    name: 'maskClosable',
                    desc: '遮罩是否可以点击',
                    type: 'boolean',
                    defaultVal: '',
                    required: 'true',
                  },
                  {
                    name: 'duration',
                    desc: '持续的时间',
                    type: 'number',
                    defaultVal: '3000',
                    required: 'false',
                  },
                ],
                returnType: 'MessageType',
                returnDesc: '',
              },
            ],
          },
        ]}
      />
    </PlayGroundPage>
  );
};
