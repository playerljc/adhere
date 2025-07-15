# SplitLayout 分割布局组件

一个功能强大的可拖拽分割布局组件，支持多种布局模式和灵活的配置选项。

## 特性

- 🎯 **多种布局模式**: 支持20+种预定义的TRBLC布局模式
- 🖱️ **可拖拽分割线**: 支持水平和垂直方向的分割线拖拽
- 📏 **尺寸限制**: 支持最小/最大尺寸限制，支持像素值和百分比
- 🎨 **主题支持**: 集成ConfigProvider主题系统
- 📱 **响应式**: 支持响应式布局和自适应调整
- 🔧 **高度可配置**: 丰富的配置选项和回调函数

## 安装

```bash
npm install @baifendian/adhere-ui-splitlayout
```

## 基础用法

### 简单分割线

```tsx
import SplitLayout from '@baifendian/adhere-ui-splitlayout';

function App() {
  return (
    <div style={{ display: 'flex', height: '400px' }}>
      <div style={{ width: '200px', background: '#f0f0f0' }}>
        左侧内容
      </div>
      <SplitLayout 
        minSize={100} 
        maxSize="80%"
        onChange={(params) => console.log('拖拽中:', params)}
      />
      <div style={{ flex: 1, background: '#e0e0e0' }}>
        右侧内容
      </div>
    </div>
  );
}
```

### 预定义布局

```tsx
import SplitLayout from '@baifendian/adhere-ui-splitlayout';

function App() {
  return (
    <SplitLayout.TRBLC.TLRCLayout
      tSplitProps={{ minSize: 50, maxSize: '30%' }}
      lSplitProps={{ minSize: 100, maxSize: '40%' }}
      rSplitProps={{ minSize: 80, maxSize: '30%' }}
    >
      <div>顶部内容</div>
      <div>左侧内容</div>
      <div>右侧内容</div>
      <div>中心内容</div>
    </SplitLayout.TRBLC.TLRCLayout>
  );
}
```

## API

### SplitLayout Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `className` | `string` | - | 自定义CSS类名 |
| `style` | `CSSProperties` | - | 自定义样式 |
| `maxSize` | `string \| number` | `'100%'` | 最大尺寸，支持像素值或百分比 |
| `minSize` | `string \| number` | `10` | 最小尺寸，支持像素值或百分比 |
| `onCanDrag` | `(params?: DragEventParams) => void` | - | 是否可以拖拽的回调 |
| `onDragStarted` | `(params?: DragEventParams) => void` | - | 拖拽开始时的回调 |
| `onDragFinished` | `(params?: DragEventParams) => void` | - | 拖拽结束时的回调 |
| `onChange` | `(params?: DragEventParams) => void` | - | 拖拽过程中的回调 |
| `onOut` | `(params?: DragEventParams) => void` | - | 鼠标离开分割线时的回调 |

### DragEventParams

```tsx
interface DragEventParams {
  event: MouseEvent;           // 事件对象
  currentPosition: number;     // 当前拖拽位置
  startPosition: number;       // 起始位置
  delta: number;              // 变化量
  targetSize: number;         // 目标尺寸
}
```

### TBLRCSplitLayoutProps

继承自 `TBLRCLayoutProps`，额外提供以下属性：

| 属性 | 类型 | 说明 |
|------|------|------|
| `tSplitProps` | `SplitLayoutProps` | 顶部分割线属性 |
| `bSplitProps` | `SplitLayoutProps` | 底部分割线属性 |
| `lSplitProps` | `SplitLayoutProps` | 左侧分割线属性 |
| `rSplitProps` | `SplitLayoutProps` | 右侧分割线属性 |

## 布局模式

### 两区域布局

- `TCLayout` - 顶部-中心布局
- `CBLayout` - 中心-底部布局
- `LCLayout` - 左侧-中心布局
- `CRLayout` - 中心-右侧布局

### 三区域布局

- `TCRLayout` - 顶部-中心-右侧布局
- `TLCLayout` - 顶部-左侧-中心布局
- `TCBLayout` - 顶部-中心-底部布局
- `LBCLayout` - 左侧-底部-中心布局
- `LCBLayout` - 左侧-中心-底部布局
- `LCRLayout` - 左侧-中心-右侧布局
- `CBRLayout` - 中心-底部-右侧布局
- `CRBLayout` - 中心-右侧-底部布局

### 四区域布局

- `TLRCLayout` - 顶部-左侧-右侧-中心布局
- `TCBRLayout` - 顶部-中心-底部-右侧布局
- `LTCBLayout` - 左侧-顶部-中心-底部布局
- `LCRBLayout` - 左侧-中心-右侧-底部布局

### 五区域布局

- `TBLCRLayout` - 顶部-底部-左侧-中心-右侧布局
- `LRTCBLayout` - 左侧-右侧-顶部-中心-底部布局

## 使用示例

### 响应式布局

```tsx
function ResponsiveLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <SplitLayout.TRBLC.TLRCLayout
      tSplitProps={{ 
        minSize: isMobile ? 40 : 60,
        maxSize: isMobile ? '25%' : '30%'
      }}
      lSplitProps={{ 
        minSize: isMobile ? 80 : 120,
        maxSize: isMobile ? '50%' : '40%'
      }}
      rSplitProps={{ 
        minSize: isMobile ? 60 : 100,
        maxSize: isMobile ? '40%' : '30%'
      }}
    >
      <div>顶部</div>
      <div>左侧</div>
      <div>右侧</div>
      <div>中心</div>
    </SplitLayout.TRBLC.TLRCLayout>
  );
}
```

### 带回调的拖拽

```tsx
function DragCallbackExample() {
  const handleDragStart = (params: DragEventParams) => {
    console.log('开始拖拽:', params);
  };

  const handleDragChange = (params: DragEventParams) => {
    console.log('拖拽中:', params.targetSize);
  };

  const handleDragFinish = (params: DragEventParams) => {
    console.log('拖拽结束:', params);
  };

  return (
    <SplitLayout.TRBLC.TCLayout
      tSplitProps={{
        minSize: 50,
        maxSize: '50%',
        onDragStarted: handleDragStart,
        onChange: handleDragChange,
        onDragFinished: handleDragFinish,
      }}
    >
      <div>顶部内容</div>
      <div>中心内容</div>
    </SplitLayout.TRBLC.TCLayout>
  );
}
```

## 注意事项

1. **容器要求**: 分割线组件需要在FlexLayout容器中使用
2. **方向支持**: 支持水平和垂直方向的分割
3. **尺寸限制**: 建议设置合理的最小/最大尺寸限制
4. **性能优化**: 大量分割线时建议使用防抖处理onChange回调

## 更新日志

### v2.0.0
- ✨ 新增完整的TypeScript类型支持
- 📝 添加详细的JSDoc文档
- 🔧 优化事件处理逻辑
- 🎨 改进代码结构和性能
- 🐛 修复拖拽过程中的边界问题

## 许可证

MIT License

