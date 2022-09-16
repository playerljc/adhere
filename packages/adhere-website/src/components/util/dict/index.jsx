import React from 'react';

import { Link } from '@ctsj/router';

import PlayGroundPage, { CodeBoxSection, Section } from '@/lib/PlaygroundPage';

export default () => {
  function boxPanelConfig() {
    return [
      {
        id: `p1`,
        name: `字典的定义`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '字典的定义',
            info: '字典的定义',
          },
        },
        codeText: `
  import { Dict } from '@baifendian/adhere';

  /**
   * 使用Dict.handlers.xxx去定义字典信息，注意赋值的是一个函数
   */
  export default {
    /**
     * 定义静态的字典信息
     */
    initStatic() {
      // 系统的字体
      Dict.handlers.SystemFontFamily = () => '"Microsoft YaHei",Arial,Helvetica,sans-serif,"宋体"';

      // 国际化
      Dict.handlers.SystemLocals = () => ({
        zh_CN: 'zh_CN',
        pt_PT: 'pt_PT',
        en_US: 'en_US',
      });

      // antd的国际化资源
      Dict.handlers.SystemAntdLocals = () => ({
        zh_CN: zhCN,
        pt_PT: ptPT,
        en_US: enUS,
      });

      // moment国际化
      Dict.handlers.SystemMomentLocals = () => ({
        zh_CN: () => {
          moment.locale('zh-cn');
        },
        en_US: () => {
          moment.locale('en-ca');
        },
        pt_PT: () => {
          moment.locale('pt');
        },
      });
    },
    /**
     * 定义异步的字典信息
     */
    initRemote() {
      // 用户信息
      Dict.handlers.SystemUserInfo = () => {
        return request
          .get({
            path: require('../../../mock/system').default.SystemUserInfo,
            mock: true,
            loading: {
              show: false,
            },
          })
          .then((data) => {
            return data.data;
          });
      };
    },
  };
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <span>
            在项目指定的目录中(如项目的src/dict)创建dict.业务名称
            .config.js文件，这里介绍的是规范的命名方式，其实也可以任意命名都可以。文件的内容如展开后代码里的内容
          </span>
        ),
      },
      {
        id: `p2`,
        name: `字典的注册`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '字典的注册',
            info: '字典的注册',
          },
        },
        codeText: `
  import { Dict } from '@baifendian/adhere';

  const requireComponent = require.context('./dict', false, /.*\\.(js)$/);

  const dictArr = [];

  requireComponent.keys().forEach((path) => {
    const dict = requireComponent(path).default;
    dictArr.push(dict);
  });

  Dict.init(dictArr);
      `,
        type: 'PlayGround',
        renderChildren: () => (
          <span>
            如上所示，在src/dict目录中会创建很多个dict.业务名称
            .config.js的文件，我们需要去初始化字典，这里用到了webpack提供的required.context函数去自动遍历指定目录下的.js文件
          </span>
        ),
      },
      {
        id: `p3`,
        name: `字典的使用`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '字典的使用',
            info: '字典的使用',
          },
        },
        codeText: `
  import { Dict } from '@baifendian/adhere';

  // 静态字典的使用
  console.log(Dict.value.SystemFontFamily.value);

  // 异步字典的使用
  async function loadSystemUserInfo() {
    return await Dict.value.SystemUserInfo.value;
  }

  loadSystemUserInfo().then(result => {
    console.log(result);
  });

  // 刷新异步字典的值(重新调用接口)
  Dict.value.SystemUserInfo.refresh(/*可以传递参数*/);

  // 再次调用值会更新
  loadSystemUserInfo().then(result => {
    console.log(result);
  });
        `,
        type: 'PlayGround',
        renderChildren: () => <span>字典的使用分为静态字典的使用和异步字典的使用</span>,
      },
      {
        id: `p4`,
        name: `字典返回函数值的memoized操作`,
        mode: 'code',
        scope: { React },
        cardProps: {
          description: {
            title: '字典返回函数值的memoized操作',
            info: '字典返回函数值的memoized操作',
          },
        },
        codeText: `
  import { Dict } from '@baifendian/adhere';

  Dict.handlers.MyFun = () => {
    return function(a,b) {
      return a + b;
    }
  };

  // 调用了两次函数，参数一样，第二次是缓存值，不会调用函数进行计算
  console.log(Dict.value.MyFun(1,2));
  console.log(Dict.value.MyFun(1,2));

  // 函数参数发生了变化，会调用函数进行重新计算
  console.log(Dict.value.MyFun(3,4));
        `,
        type: 'PlayGround',
        renderChildren: () => (
          <span>
            字典返回的是函数，字典会对函数值做memoized的操作,只有当函数的参数个数和参数的值发生改变的时候才会重新调用函数
          </span>
        ),
      },
    ];
  }

  return (
    <PlayGroundPage>
      <Section title="Dict">
        <p>字典</p>
        <ul>
          <li>- 静态字典</li>
          <li>- 异步字典</li>
        </ul>
        <p>
          第一次使用的时候才加载到内存，加载过之后就不在加载，如果字典是函数，也会对函数的值进行memoized处理，可以进行设置是否缓存,函数缓存请参考
          <Link to={`${window.location.origin}/adhere/component/util/watchmemoized`}>
            adhere-util-watchmemoized
          </Link>
        </p>
      </Section>

      <CodeBoxSection title="代码演示" columnCount={1} config={boxPanelConfig()} />
    </PlayGroundPage>
  );
};
