# 简介
&ensp;&ensp;这个工程中包含很多个npm包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有UI相关、工具相关、GIS相关,使用的是React技术，有的可能是对ant-design(还有其他第三方的库)的二次封装

# ✨ 特性
- 支持 react(17.x)
- 支持 ant-design(4.x)
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)

# 🖥 兼容环境
- 现代浏览器，不支持IE

# 分支要求
- develop 是不支持 IE 的分支
  - 使用 React17.x
  - antd 使用 4.x
  - tsconfig 的 target 可以给出 es6
  - 不支持 ie 的版本号应该
  - vx.x.x
- feature 是支持 IE 的分支
  - 使用 React16.x
  - antd 使用 3.x
  - tsconfig 的 target 只能给出 es5
  - vx.x.x-polyfill
  
# 📦 安装
```javascript
npm install @baifendian/adhere --save
``` 

```javascript
yarn add @baifendian/adhere
``` 

# 线上地址(临时)
[http://49.232.163.126:8083/](http://49.232.163.126:8083/)
