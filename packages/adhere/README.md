# 概述

&ensp;&ensp;这个工程中包含很多个 npm 包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有 UI 相关、功能相关、GIS 相关,使用的是 React 技术，有的可能是对 ant-design(还有其他第三方的库)的二次封装

# 兼容要求

- 支持 react16.x
- 支持 antd3.x 和 4.x
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)

# 安装
```javascript
npm i @baifendian/adhere --save
```
# 动态引入
需要在webpack构建中加入如下配置,如果进行了动态引入，则不就需要要单独引入
```javascript
@baifendian/adhere/lib/index.less
```
和
```javascript
antd/dist/antd.less
```
如果没有进行动态引入则需要单独引入
```javascript
@baifendian/adhere/lib/index.less
```
和
```javascript
antd/dist/antd.less
```

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
  ]
```
  
# 线上地址(临时)
[http://www.hongyf.cn:8081/](http://www.hongyf.cn:8081/)  
