# @baifendian/adhere-ui-polygonselection

## 简介
&ensp;&ensp;多边形选取组件，提供强大的图像选择和裁剪功能

### 主要功能
* **多种选取方式**
  - 多边形选取
  - 圆形选取
  - 矩形选取
  - 三角形选取
  - 菱形选取
  - 五角星选取
  - 自由选取
  - 选择模式
* **交互操作**
  - 选取完成后可点击进行修改、移动、删除操作
  - 支持点选和框选
* **模式管理**
  - 创建模式：提供 type 和事件回调 (onStart, onEnd)
  - 修改模式：基于组 ID 进行修改
  - 移动模式：基于组 ID 进行移动
  - 当前只能有一个模式，载入新模式前会替换旧模式
* **视觉反馈**
  - 绘制时鼠标光标样式变化
  - 只有选中的元素才能修改
* **应用场景**
  - 图片截取
  - 图像标注
  - 区域选择

## ✨ 特性
- 支持 React 18.x
- 支持国际化
- 支持修改主题
- 支持动态引入 (babel-plugin-import)
- 完整的 TypeScript 类型支持
- 丰富的几何图形绘制功能
- 灵活的样式自定义
- 事件驱动的架构设计

## 🖥 兼容环境
- 现代浏览器，IE11

## 📦 安装

```bash
npm install @baifendian/adhere-ui-polygonselection --save
```

```bash
yarn add @baifendian/adhere-ui-polygonselection
```

## 🔨 使用

### 基础用法

```jsx
import React, { useRef, useState } from 'react';
import { PolygonSelection } from '@baifendian/adhere-ui-polygonselection';

const App = () => {
  const containerRef = useRef(null);
  const [polygonSelection, setPolygonSelection] = useState(null);

  React.useEffect(() => {
    if (containerRef.current) {
      const selection = new PolygonSelection(containerRef.current);
      setPolygonSelection(selection);
      
      // 监听事件
      selection.on('DrawEnd', (data) => {
        console.log('绘制完成:', data);
      });
      
      selection.on('CanvasClickGeometry', (data) => {
        console.log('点击几何图形:', data);
      });
    }
  }, []);

  const startDraw = () => {
    if (polygonSelection) {
      polygonSelection.start({
        fillStyle: 'rgba(255, 0, 0, 0.3)',
        strokeStyle: '#ff0000',
        lineWidth: 2
      });
    }
  };

  return (
    <div>
      <button onClick={startDraw}>开始绘制</button>
      <div 
        ref={containerRef} 
        style={{ width: 600, height: 400, border: '1px solid #ccc' }}
      />
    </div>
  );
};
```

### 图像裁剪组件

```jsx
import React, { useRef, useState } from 'react';
import { PolygonSelection } from '@baifendian/adhere-ui-polygonselection';

const CroppingExample = () => {
  const [value, setValue] = useState('');
  const ref = useRef();

  return (
    <div>
      <h3>图像裁剪</h3>
      <div style={{ width: 400, height: 300, border: '1px solid #ccc' }}>
        <PolygonSelection.Cropping
          ref={ref}
          value={value}
          onChange={(v) => setValue(v)}
          coreProps={{
            toolBarConfig: {
              direction: 'bottom',
              open: {
                render: (handle) => <button onClick={handle}>打开图片</button>,
                sort: 1,
              },
              rectangle: {
                hide: false,
              },
              circle: {
                hide: false,
              },
              polygon: {
                hide: false,
              }
            },
          }}
        />
      </div>
      {value && (
        <div>
          <h4>裁剪结果:</h4>
          <img src={value} alt="裁剪结果" style={{ maxWidth: 200 }} />
        </div>
      )}
    </div>
  );
};
```

## 📚 API 文档

### PolygonSelection 类

#### 构造函数
```typescript
new PolygonSelection(el: HTMLElement, defaultData?: IActionData[], listeners?: IListeners)
```

#### 主要方法

##### 生命周期管理
- `start(style?: IStyle)`: 开始绘制操作
- `end()`: 结束当前操作
- `destroy()`: 销毁组件并清理资源

##### 数据管理
- `addHistoryData(data: IActionData)`: 添加历史数据
- `getHistoryData()`: 获取所有历史数据
- `setHistoryData(data: IActionData[])`: 设置历史数据
- `removeHistoryDataById(id: string)`: 根据ID移除数据
- `clearHistoryData()`: 清除所有历史数据

##### Canvas 操作
- `clearDraw()`: 清除主Canvas绘制
- `clearAssistDraw()`: 清除辅助Canvas绘制
- `clearCanvasAll()`: 清除所有Canvas内容
- `drawHistoryData()`: 重新绘制所有历史数据

##### 获取信息
- `getWidth()`: 获取组件宽度
- `getHeight()`: 获取组件高度
- `getCtx()`: 获取主Canvas上下文
- `getCanvasEl()`: 获取主Canvas元素
- `getCurAction()`: 获取当前Action

#### 事件系统

```typescript
// 监听事件
polygonSelection.on('DrawStart', (data) => {
  console.log('开始绘制:', data);
});

polygonSelection.on('DrawEnd', (data) => {
  console.log('绘制完成:', data);
});

polygonSelection.on('CanvasClickGeometry', (data) => {
  console.log('点击几何图形:', data);
});

polygonSelection.on('CanvasClickEmpty', () => {
  console.log('点击空白区域');
});
```

### 支持的事件类型

#### Action 事件
- `DrawBeforeStart`: 绘制开始前
- `DrawStart`: 绘制开始
- `Drawing`: 绘制中
- `DrawEnd`: 绘制结束
- `MoveBeforeStart`: 移动开始前
- `MoveStart`: 移动开始
- `Moving`: 移动中
- `MoveEnd`: 移动结束
- `ModifyBeforeStart`: 修改开始前
- `ModifyStart`: 修改开始
- `Modifying`: 修改中
- `ModifyEnd`: 修改结束
- `Destroy`: 销毁

#### 组件事件
- `CanvasMount`: Canvas挂载完成
- `CanvasClickEmpty`: 点击空白区域
- `CanvasClickGeometry`: 点击几何图形

### 数据类型

#### 基础类型
```typescript
interface IPoint {
  x: number;
  y: number;
}

interface IStyle {
  fillStyle: string;
  strokeStyle: string;
  lineWidth: number;
  lineCap: CanvasLineCap;
  lineJoin: CanvasLineJoin;
  lineDash: number[];
  lineDashOffset: number;
  globalAlpha: number;
}
```

#### 几何图形数据
```typescript
// 多边形数据
interface IPolygonData extends IActionData {
  type: SelectType.Polygon;
  data: IPoint[];
}

// 圆形数据
interface ICircleData extends IActionData {
  type: SelectType.Circle;
  data: {
    center: IPoint;
    radius: number;
  };
}

// 矩形数据
interface IRectangleData extends IActionData {
  type: SelectType.Rectangle;
  data: {
    leftTopPoint: IPoint;
    width: number;
    height: number;
  };
}
```

### 选择类型枚举

```typescript
enum SelectType {
  Polygon = 'Polygon',    // 多边形
  Circle = 'Circle',      // 圆形
  Rectangle = 'Rectangle', // 矩形
  Triangle = 'Triangle',   // 三角形
  Diamond = 'Diamond',    // 菱形
  Start = 'Start',        // 星形
  Free = 'Free',          // 自由绘制
}
```

## 🎨 样式自定义

### 默认样式
```typescript
import { DefaultStyle, DefaultAnchorStyle, DefaultMoveGemStyle } from '@baifendian/adhere-ui-polygonselection';

// 使用默认样式
const defaultStyle = DefaultStyle;
const anchorStyle = DefaultAnchorStyle;
const moveGemStyle = DefaultMoveGemStyle;
```

### 自定义样式
```typescript
const customStyle: IStyle = {
  fillStyle: 'rgba(0, 255, 0, 0.3)',
  strokeStyle: '#00ff00',
  lineWidth: 3,
  lineCap: 'round',
  lineJoin: 'round',
  lineDash: [5, 5],
  lineDashOffset: 0,
  globalAlpha: 1
};
```

## 🔧 高级用法

### 自定义绘制Action

```typescript
import { DrawAction, SelectType } from '@baifendian/adhere-ui-polygonselection';

class CustomDrawAction extends DrawAction {
  constructor() {
    super();
    this.type = SelectType.Custom;
  }

  draw() {
    // 自定义绘制逻辑
    const ctx = this.context?.getCtx();
    if (ctx && this.startPoint && this.targetPoint) {
      // 绘制自定义图形
    }
  }
}
```

### 事件监听器配置

```typescript
const listeners = {
  DrawStart: (data) => {
    console.log('开始绘制:', data);
  },
  DrawEnd: (data) => {
    console.log('绘制完成:', data);
    // 可以在这里处理绘制完成后的逻辑
  },
  CanvasClickGeometry: (data) => {
    console.log('选中图形:', data);
    // 可以在这里处理图形选中后的逻辑
  }
};

const polygonSelection = new PolygonSelection(container, [], listeners);
```

## 🌐 国际化

组件支持国际化，可以通过 ConfigProvider 进行配置：

```jsx
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';

<ConfigProvider locale={zhCN}>
  <PolygonSelection.Cropping />
</ConfigProvider>
```

## 🎯 最佳实践

### 1. 性能优化
- 避免频繁创建和销毁 PolygonSelection 实例
- 合理使用事件监听器，及时移除不需要的监听器
- 大量数据时考虑分批处理

### 2. 错误处理
```typescript
try {
  polygonSelection.start(style);
} catch (error) {
  console.error('启动绘制失败:', error);
}
```

### 3. 内存管理
```typescript
// 组件卸载时清理资源
React.useEffect(() => {
  return () => {
    if (polygonSelection) {
      polygonSelection.destroy();
    }
  };
}, []);
```

## 🔗 相关链接

- [在线演示](http://playerljc.github.io/adhere/index.html#/adhere/adhere/ui/polygonselection)
- [GitHub 仓库](https://github.com/playerljc/adhere)
- [问题反馈](https://github.com/playerljc/adhere/issues)

## 📄 许可证

ISC License

