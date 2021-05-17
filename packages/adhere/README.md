# 概述

&ensp;&ensp;这个工程中包含很多个 npm 包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有 UI 相关、功能相关、GIS 相关,使用的是 React 技术，有的可能是对 ant-design(还有其他第三方的库)的二次封装

# 兼容性

- 支持 react16.x 和 17.x
- 支持 antd4.x
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)

# 安装

```javascript
npm i @baifendian/adhere --save
```

# 动态引入

需要在 webpack 构建中加入如下配置

```javascript
[
  'import',
  {
    libraryName: '@baifendian/adhere',
    transformToDefaultImport: true,
    style: true,
  },
  'adhere',
],
  [
    'import',
    {
      libraryName: 'antd',
      style: true,
    },
    'ant',
  ];
```

如果没有进行动态引入则需要单独引入样式文件

```javascript
@baifendian/adhere/lib/index.less
```

和

```javascript
antd / dist / antd.less;
```

# 线上地址(临时)

[http://49.232.163.126:8083/](http://49.232.163.126:8083/)
