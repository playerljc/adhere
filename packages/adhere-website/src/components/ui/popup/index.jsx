import React from 'react';
import { Button } from 'antd';
import { Popup } from '@baifendian/adhere';

import PlayGroundPage, {
  Section,
  PropsSection,
  CodeBoxSection,
  FunctionPropsSection,
} from '@/lib/PlaygroundPage';

import PopupInner from './popup';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `打开`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '打开',
            info: '打开',
          },
        },
        codeText: `
  import React from 'react';
  import { Button } from 'antd';
  import { Popup } from '@baifendian/adhere';

  import PopupInner from './popup';

  <Button
    type="primary"
    onClick={() => {
      const ref = React.createRef();

      const popup = Popup.create({
        onCreate: () => {},
        onBeforeShow: () => {},
        onAfterShow: () => {},
        onBeforeClose: () => {
          return new Promise((resolve) => {
            resolve();
          });
        },
        onAfterClose: () => {
          Popup.destroy(popup);
        },
        onDestroy: () => {},
        children: <PopupInner ref={ref} />,
        zIndex: 9999,
      });

      ref.current.setPopup(popup);

      popup.show();
    }}
  >
    Open Popup
  </Button>

  /*-----------popup.jsx---------*/

  import React, { useImperativeHandle, useRef, useState } from 'react';
  import { Popup } from '@baifendian/adhere';

  import styles from './index.less';

  function openPopup() {
    const ref = React.createRef();

    const popup = Popup.create({
      onCreate: () => {},
      onBeforeShow: () => {},
      onAfterShow: () => {},
      onBeforeClose: () => {
        return new Promise((resolve) => {
          resolve();
        });
      },
      onAfterClose: () => {
        Popup.destroy(popup);
      },
      onDestroy: () => {},
      children: <PopupInner ref={ref} />,
      zIndex: 9999,
    });

    ref.current.setPopup(popup);

    popup.show();
  }

  const PopupInner = React.forwardRef((props, ref) => {
    const popupRef = useRef();

    const [id, setId] = useState('');

    useImperativeHandle(ref, () => ({
      setPopup: (popup) => {
        popupRef.current = popup;
        setId(popup.getId());
      },
    }));

    return (
      <div className={styles.Wrap}>
        <div className={styles.Fixed}>
          <a
            onClick={() => {
              openPopup();
            }}
          >
            OpenNewPopup
          </a>
          <div>Popup{id} Title</div>
          <a
            onClick={() => {
              Popup.close(popupRef.current);
            }}
          >
            Close
          </a>
        </div>

        <div className={styles.Auto}>
          <div className="block">
            <p className="">
              Here comes popup. You can put here anything, even independent view with its own
              navigation. Also not, that by default popup looks a bit different on iPhone/iPod and
              iPad, on iPhone it is fullscreen.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus mauris
              leo, eu bibendum neque congue non. Ut leo mauris, eleifend eu commodo a, egestas ac
              urna. Maecenas in lacus faucibus, viverra ipsum pulvinar, molestie arcu. Etiam lacinia
              venenatis dignissim. Suspendisse non nisl semper tellus malesuada suscipit eu et eros.
              Nulla eu enim quis quam elementum vulputate. Mauris ornare consequat nunc viverra
              pellentesque. Aenean semper eu massa sit amet aliquam. Integer et neque sed libero
              mollis elementum at vitae ligula. Vestibulum pharetra sed libero sed porttitor.
              Suspendisse a faucibus lectus.
            </p>
            <p>
              Duis ut mauris sollicitudin, venenatis nisi sed, luctus ligula. Phasellus blandit nisl
              ut lorem semper pharetra. Nullam tortor nibh, suscipit in consequat vel, feugiat sed
              quam. Nam risus libero, auctor vel tristique ac, malesuada ut ante. Sed molestie, est in
              eleifend sagittis, leo tortor ullamcorper erat, at vulputate eros sapien nec libero.
              Mauris dapibus laoreet nibh quis bibendum. Fusce dolor sem, suscipit in iaculis id,
              pharetra at urna. Pellentesque tempor congue massa quis faucibus. Vestibulum nunc eros,
              convallis blandit dui sit amet, gravida adipiscing libero.
            </p>
          </div>
        </div>
      </div>
    );
  });

  export default PopupInner;


  /*-----------index.less---------*/

  .Wrap {
    display: flex;
    flex-direction: column;

    > .Fixed {
      flex-shrink: 0;
      height: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    > .Auto {
      font-size: 14px;
      flex-grow: 1;
      min-height: 0;
      overflow-y: auto;
      padding: 1rem;
      box-sizing: border-box;
      line-height: 21px;
    }
  }

    `,
        type: 'PlayGround',
        renderChildren: () => (
          <Button
            type="primary"
            onClick={() => {
              const ref = React.createRef();

              const popup = Popup.create({
                onCreate: () => {},
                onBeforeShow: () => {},
                onAfterShow: () => {},
                onBeforeClose: () => {
                  return new Promise((resolve) => {
                    resolve();
                  });
                },
                onAfterClose: () => {
                  Popup.destroy(popup);
                },
                onDestroy: () => {},
                children: <PopupInner ref={ref} />,
                zIndex: 9999,
              });

              ref.current.setPopup(popup);

              popup.show();
            }}
          >
            Open Popup
          </Button>
        ),
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
