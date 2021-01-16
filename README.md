# 概述

&ensp;&ensp;这个工程中包含很多个 npm 包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有 UI 相关、功能相关、GIS 相关,使用的是 React 技术，有的可能是对 ant-design(还有其他第三方的库)的二次封装

# 兼容要求

- 支持 react16.x
- 支持 antd3.x 和 4.x
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)
- 支持 ie10 以上

# 分支要求
- develop是不支持IE的分支
  - 使用React17.x
  - antd使用4.x
  - tsconfig的target可以给出es6
  - 不支持ie的版本号应该
  - vx.x.x
- feature是支持IE的分支
  - 使用React16.x
  - antd使用3.x  
  - tsconfig的target只能给出es5
  - vx.x.x-polyfill
  
# 组件列表

- [@baifendian/adhere-util-communication-ajax](#@baifendian/adhere-util-communication-ajax)
- [@baifendian/adhere-ui-suspense](#@baifendian/adhere-ui-suspense)
- [@baifendian/adhere-ui-olmap](#@baifendian/adhere-ui-olmap)
- [@baifendian/adhere-ui-hooks](#@baifendian/adhere-ui-hooks)
- [@baifendian/adhere-util-regex](#@baifendian/adhere-util-regex)
- [@baifendian/adhere-util-moment](#@baifendian/adhere-util-moment)
- [@baifendian/adhere-ui-form](#@baifendian/adhere-ui-form)
- [@baifendian/adhere-ui-imageviwer](#@baifendian/adhere-ui-imageviwer)

- [@baifendian/adhere-system-lint](#@baifendian/adhere-system-lint)
- [@baifendian/adhere-util-communication-sse](#@baifendian/adhere-util-communication-sse)
- [@baifendian/adhere-util-communication-websocket](#@baifendian/adhere-util-communication-websocket)
- [@baifendian/adhere-util-communication-postmessage](#@baifendian/adhere-util-communication-postmessage)
- [@baifendian/adhere-util-clientdetection](#@baifendian/adhere-util-clientdetection)
- [@baifendian/adhere-util-errorcatch](#@baifendian/adhere-util-errorcatch)
- [@baidendian/adhere-util-adapterscreen](#@baidendian/adhere-util-adapterscreen)
- [@baifendian/adhere-ui-table](#@baifendian/adhere-ui-table)
- [@baifendian/adhere-ui-tableheadsearch](#@baifendian/adhere-ui-tableheadsearch)
- [@baifendian/adhere-ui-searchtable](#@baifendian/adhere-ui-searchtable)
- [@baifendian/adhere-ui-tooltip](#@baifendian/adhere-ui-tooltip)
- [@baifendian/adhere-ui-icon](#@baifendian/adhere-ui-icon)
- [@baifendian/adhere-ui-imgclip](#@baifendian/adhere-ui-imgclip)
- [@baifendian/adhere-ui-echarts](#@baifendian/adhere-ui-echarts)
- [@baidendian/adhere-ui-kvinfo](#@baidendian/adhere-ui-kvinfo)
- [@baifendian/adhere-ui-datepicker](#@baifendian/adhere-ui-datepicker)
- [@baifendian/adhere-ui-media](#@baifendian/adhere-ui-media)
- [@baifendian/adhere-ui-adaptivelayout](#baifendian/adhere-ui-adaptivelayout)

- [@baifendian/adhere-util-dict](#@baifendian/adhere-util-dict) - ok
- [@baifendian/adhere-util-emitter](#@baifendian/adhere-util-emitter) - ok
- [@baifendian/adhere-util-intl](#@baifendian/adhere-util-intl) - ok
- [@baifendian/adhere-util-notnull](#@baifendian/adhere-util-notnull) - ok
- [@baifendian/adhere-util-preferences](#@baifendian/adhere-ui-preferences) - ok
- [@baifendian/adhere-util-resource](#@baifendian/adhere-util-resource) - ok
- [@baifendian/adhere-util](#@baifendian/adhere-util) - ok
- [@baifendian/adhere-ui-globalindicator](#@baifendian/adhere-ui-globalindicator) - ok
- [@baifendian/adhere-ui-historyback](#@baifendian/adhere-ui-historyback) - ok
- [@baifendian/adhere-ui-permission](#@baifendian/adhere-ui-permission) - ok
- [@baifendian/adhere-ui-prompt-successprompt](#@baifendian/adhere-ui-prompt-successprompt) - ok
- [@baifendian/adhere-ui-prompt-errorprompt](#@baifendian/adhere-ui-prompt-errorprompt) - ok
- [@baifendian/adhere-ui-prompt-warnprompt](#@baifendian/adhere-ui-prompt-warnprompt) - ok
- [@baifendian/adhere-ui-space](#baifendian/adhere-ui-space) - ok
- [@baifendian/adhere-ui-split](#baifendian/adhere-ui-split) - ok
- [@baifendian/adhere-ui-spin](#baifendian/adhere-ui-spin) - ok
- [@baifendian/adhere-ui-conditionalrender](#baifendian/adhere-ui-conditionalrender) - ok
- [@baifendian/adhere-ui-imagelazy](#baifendian/adhere-ui-imagelazy) - ok
- [@baifendian/adhere-ui-messagedialog](#@baifendian/adhere-ui-messagedialog) - ok
- [@baifendian/adhere-ui-confirm-delconfirm](#@baifendian/adhere-ui-confirm-delconfirm) - ok
- [@baifendian/adhere-ui-confirm-importantconfirm](#@baifendian/adhere-ui-confirm-importantconfirm) - ok
- [@baifendian/adhere-ui-css](#@baifendian/adhere-ui-css) - ok
- [@baifendian/adhere-ui-decorators](#@baifendian/adhere-util-decorators) - ok

## @baifendian/adhere-system-lint

eslint 相关，我们定义的规范中看哪些能做成 eslint 的规则

## @baifendian/adhere-util-communication-ajax

Ajax 通信

- 对不同的 methods 进行封装
- 封装公共前缀
- 支持 mock 数据
- 支持超时处理(cancal 掉)
- 支持 loading 操作
- 支持系统管理 404、402 等的截获操作，可以有默认操作，也可以自动以操作
- 支持提示信息的国际化
- 支持自定义和提供缺省功能的返回值数据属性的定义(如：code、data 和 message)
- 提供相应的 all 操作

## @baifendian/adhere-util-communication-sse

服务器端推送

- 支持服务器端的推送
- 支持浏览器能力监测(如果浏览器不支持给出有好的提示，或者降级处理)
- 支持结构化数据

## @baifendian/adhere-util-communication-websocket

websocket

- 支持纯文本传输
- 支持结构化数据传输
- 支持链接、断开和心跳等常规操作

## @baifendian/adhere-util-communication-postmessage

跨文档消息传递

## @baifendian/adhere-ui-decorators

装饰器

- ReactErrorBoundaries(React 边界处理，防止白屏操作)
  - class 组件使用@方式使用
  - 函数组件使用高阶函数方式使用
  - 可以自定义错误的 UI
- 其他的装饰器还没想好

## @baifendian/adhere-ui-confirm-delconfirm

删除确认提示

- 删除的时候弹出提示，确认后在执行操作

## @baifendian/adhere-ui-confirm-importantconfirm

重要操作确认提示

- 进行重要操作的时候弹出，确认后在执行操作

## @baifendian/adhere-util-dict

字典

## @baifendian/adhere-util-emitter

观察者模式

- 发布
- 订阅
- 解除订阅

## @baifendian/adhere-ui-globalindicator

全局的遮罩

- 可以遮罩任意元素
- 遮罩是无侵入的
- 可以自定义 loading 文本和透明度
- 可以取消

## @baifendian/adhere-ui-historyback

历史记录返回操作

- 如果历史栈中没有记录则返回主页，或者可以自定义
- 如果可以返回则进行返回

## @baifendian/adhere-ui-hooks

常用的 hooks 功能，可以整合阿里的[ahooks](https://ahooks.js.org/zh-CN)

- use-first
- use-previous

## @baifendian/adhere-util-intl

基于 react-intl-universal 的国际化组件

- 支持 react-intl-universal 所有的方法
- 支持按中文获取国际化词条
- 支持自动生成词条的 key

## @baifendian/adhere-ui-messagedialog

对 ant-design 的<Model>进行封装

- 支持使用 open 方式打开
- 支持 Modal 原始方法
- 支持预定义 Alert、Confirm
- 不与变量进行绑定，开箱即用的功能

## @baifendian/adhere-util-notnull

一个永远都不为空的操作

- 包裹对象后在使用对象的链式调用永远都不会 null

## @baifendian/adhere-ui-olmap

对 openlayers 的封装

- 包括常用的形状绘制
- 支持 React 相关的组件
- 还一些常用方法

## @baifendian/adhere-ui-permission

权限的组件

- 设置所有权限
- 传入权限(支持多个)
- 可以自定义无权限的 UI

## @baifendian/adhere-ui-preferences

对 sessionStore 和 localStore 进行的封装

- 支持字符串的写入和拿出
- 支持对象的写入和拿出

## @baifendian/adhere-ui-prompt-successprompt

成功的提示(就是为了全局统一)

## @baifendian/adhere-ui-prompt-errorprompt

错误的提示(就是为了全局统一)

## @baifendian/adhere-ui-prompt-warnprompt

警告的提示(就是为了全局统一)

## @baifendian/adhere-ui-table

基于 antd-design 的 Table 进行的封装

- 序号自动生成(全局和本页)
- 提示信息

## @baifendian/adhere-ui-tableheadsearch

基于 antd-design 的 Table 的列头筛选

## @baifendian/adhere-ui-searchtable

一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)

- 提供渲染查询的 UI
- 暴露最小集的事件让子类进行重写

## @baifendian/adhere-ui-suspense

数据加载单元(如第一次是骷髅骨架，其他是 loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是 loading

## @baifendian/adhere-util-clientdetection

客户端监测，一般都是浏览器的能力监测和浏览器嗅探

## @baifendian/adhere-util-regex

实用的正则校验

## @baifendian/adhere-util-errorcatch

统一的错误机制处理(关键位置的异常捕获，可以进行异常的封装)

- 不能让无属性，未定义这种错误在前段出现，关键代码的错误校验

## @baifendian/adhere-ui-tooltip

目的在于统一可以自由的进行切换

## @baifendian/adhere-ui-form

- 表单配置（通过 JSON 形式配置常用的表单功能）
- 表单封装（4.0 之前和 4.0 两个版本）
- 能完美和表单结合的动态表单，让其成为单一的表单项
- 表单的 rule

## @baifendian/adhere-ui-icon

图标组件

## @baifendian/adhere-util-moment

对 moment 的封装

## @baifendian/adhere-ui-imgclip

图像剪裁组件

## @baifendian/adhere-util-resource

常用资源管理

- 常用字典，如男女，是否等

## @baifendian/adhere-ui-echarts

echarts 常用图表的封装

## @baifendian/adhere-util

所有库的公共方法

- 如对象操作等最公用的东西，类似于 lodash 库中的内容或 qs 的内容

## @baidendian/adhere-util-adapterscreen

对屏幕的缩放进行适配的操作

## @baidendian/adhere-ui-kvinfo

基于 key/value 形式的详情显示

## @baifendian/adhere-ui-datepicker

基于 ant-design 的 DatePicker 控件进行指定情况的封装

- 如只能选择到什么时间范围
- 提供当天、上一周、上一月，全年等 UI

## @baifendian/adhere-ui-media

媒体播放

- http 的 vlc 的播放
- rtmp 的播放

## @baifendian/adhere-ui-imageviwer

图片浏览器，点击图片后的方法效果，图片方法操作，还支持下载等

## @baifendian/adhere-ui-adaptivelayout

一个自适应高度和宽度的布局

## @baifendian/adhere-ui-css

提供很多公共的样式

- 普通样式的重置
- ant-design 样式的重置
- 分辨率的控制
- 常用的样式做成函数和混入

## @baifendian/adhere-ui-space

无侵入性的上下留白和左右留白

## @baifendian/adhere-ui-split

无侵入性的竖线和横线分割

## @baifendian/adhere-ui-spin

无侵入的loading

## @baifendian/adhere-ui-conditionalrender

条件渲染

## @baifendian/adhere-ui-imagelazy

图片懒加载
