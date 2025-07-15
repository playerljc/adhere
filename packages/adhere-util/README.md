# Adhere Util

一个功能丰富的 JavaScript/TypeScript 工具类库，提供常用的工具函数。

## 📦 安装

```bash
npm install @baifendian/adhere-util --save
```

```bash
yarn add @baifendian/adhere-util
```

## ✨ 特性

- 🛠 **全面的工具函数** - 提供基础工具、DOM 操作、数学计算、加密解密等
- 📱 **移动端支持** - 支持触摸事件检测和移动端适配
- 🔒 **加密功能** - 支持多种加密算法（MD5、SHA、AES、DES 等）
- 🌳 **树结构处理** - 提供树结构与数组互转、节点查找等功能
- 🎨 **格式化工具** - JSON、XML、HTML、CSS、SQL 格式化
- 📊 **数学计算** - 几何计算、坐标转换、单位转换等
- 🌍 **地理坐标** - 支持多种地理坐标系转换
- ⚡ **性能优化** - 支持动态引入，按需加载

## 🖥 兼容环境

- 现代浏览器
- IE11+

## 📚 模块说明

### 基础工具 (Base)
- 类型检查：`isEmpty`、`isNumber`、`isString`、`isArray`、`isObject` 等
- 字符串处理：`toCamelCase`、`isKebabCase`、`isPascalCase` 等
- 对象操作：`chainCallAssignment`、`getObjectByChainStr`、`omitObject` 等
- 工具函数：`uuid`、`noop`、`generatorRandom` 等

### DOM 操作 (Dom)
- 元素操作：`createElement`、`addClass`、`removeClass`、`hasClass` 等
- 事件处理：`on`、`off`、`addClickListener` 等
- 位置计算：`getPageRect`、`getCursorPosition`、`getScrollbarWidth` 等
- 响应式：`getProportionalSize`、`getMaximizedViewportSize` 等

### 数学计算 (Math)
- 几何计算：`straightLineIntersection`、`getDistanceByBetweenPoint` 等
- 坐标转换：`clientToCtxPoint`、`getCirclePoint`、`getOvalPoint` 等
- 角度计算：`slopToRadian`、`slopToAngle`、`radianToAngle` 等
- 单位转换：`pxToRem`、`distance` 等

### 加密解密 (Encrypt)
- 哈希加密：`hashEncryptToMD5`、`hashEncryptToSHA256` 等
- 对称加密：`symmetricEncryptToAES`、`symmetricEncryptToDES` 等
- 编码转换：`base64Encode`、`chineseToUTF8`、`chineseToASC2` 等

### 格式化工具 (Format)
- 代码格式化：`prettierJSON`、`prettierXML`、`prettierHTML` 等
- 代码压缩：`compressJSON`、`compressXML`、`compressCSS` 等
- 格式转换：`jsonToXML`、`xmlToJSON` 等

### 树结构处理 (Tree)
- 结构转换：`treeToArray`、`arrayToAntdTree`、`arrayToAntdTreeSelect` 等
- 节点操作：`findNodeByKey`、`getAncestor`、`getDescendants` 等
- 树过滤：`filterTree`、`filterTreeByFlatData` 等
- 层级计算：`getTreeLevel`、`getNodeLevel` 等

### 其他模块
- **Color**: 颜色生成和转换
- **Date**: 日期时间处理
- **Url**: URL 解析和拼接
- **Size**: 文件大小格式化
- **Geometry**: 几何图形绘制
- **Collection**: 集合操作
- **SystemManager**: 系统管理工具
- **ClientDetection**: 客户端检测

## 🚀 使用示例

### 基础使用

```typescript
import Util from '@baifendian/adhere-util';

// 类型检查
Util.isEmpty(null); // true
Util.isNumber(123); // true
Util.isString('hello'); // true

// 字符串处理
Util.toCamelCase('hello-world'); // 'helloWorld'
Util.isKebabCase('my-component'); // true

// 生成 UUID
Util.uuid(); // '550e8400-e29b-41d4-a716-446655440000'
```

### DOM 操作

```typescript
import Util from '@baifendian/adhere-util';

// 创建元素
const el = Util.createElement('<div class="test">Hello</div>');

// 添加事件监听
Util.on(el, 'click', 'click', () => console.log('clicked'));

// 获取元素位置
const rect = Util.getPageRect(el);
```

### 数学计算

```typescript
import Util from '@baifend-util';

// 计算两点距离
const distance = Util.getDistanceByBetweenPoint(
  { x: 0, y: 0 },
  { x: 3, y: 4 }
); // 5

// 判断点是否在圆内
const inCircle = Util.isPointInCircle(
  { x: 1, y: 1 },
  { center: { x: 0, y: 0 }, radius: 2 }
); // true
```

### 加密解密

```typescript
import Util from '@baifendian/adhere-util';

// MD5 加密
const md5 = Util.hashEncryptToMD5('password');

// Base64 编码
const encoded = Util.base64Encode('Hello World');

// AES 加密
const encrypted = Util.symmetricEncryptToAES('data', 'secretKey');
```

### 树结构处理

```typescript
import Util from '@baifendian/adhere-util';

const treeData = [
  {
    key: '1',
    title: 'Node 1',
    children: [
      { key: '1-1', title: 'Node 1-1' }
    ]
  }
];

// 树转数组
const array = Util.treeToArray(treeData, {
  parentIdAttr: 'parentId',
  rootParentId: '0'
});

// 查找节点
const node = Util.findNodeByKey(treeData, '1-1', { keyAttr: 'key' });
```

## 🔧 按需引入

支持通过 babel-plugin-import 进行按需引入：

```javascript
// .babelrc
{
  "plugins": [
    ["import", { "libraryName": "@baifendian/adhere-util", "style": false }]
  ]
}
```

```typescript
// 按需引入
import { isEmpty, isNumber } from '@baifendian/adhere-util';
```

## 📄 许可证

ISC

## 🔗 相关链接

- [在线文档](https://playerljc.github.io/adhere/index.html#/adhere/adhere/util/util)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

