# Adhere UI Suspense

一个功能强大的 React Suspense 组件，支持同步和异步数据加载，提供完整的加载状态管理和错误处理。

## 特性

- 🚀 **双重模式**: 支持同步和异步两种数据加载模式
- 🎨 **自定义样式**: 支持自定义首次加载和正常加载的 UI
- 🔄 **状态管理**: 完整的加载状态管理和重置功能
- 🛡️ **类型安全**: 完整的 TypeScript 类型支持
- 📱 **响应式**: 支持移动端和桌面端
- 🎯 **主题支持**: 集成 ConfigProvider 主题系统

## 安装

```bash
npm install @baifendian/adhere-ui-suspense
```

## 使用方法

### 基础用法

```tsx
import Suspense from '@baifendian/adhere-ui-suspense';

// 同步模式
<Suspense.Sync
  data={yourData}
  isEmpty={() => !yourData || yourData.length === 0}
  firstLoading={<div>首次加载中...</div>}
>
  <YourContent />
</Suspense.Sync>

// 异步模式
<Suspense.ASync
  fetchData={async () => {
    const response = await fetch('/api/data');
    return response.json();
  }}
  isEmpty={() => !data || data.length === 0}
  firstLoading={<div>首次加载中...</div>}
>
  <YourContent />
</Suspense.ASync>
```

### 高级用法

```tsx
import Suspense, { type SuspenseASyncProps } from '@baifendian/adhere-ui-suspense';

interface MyData {
  id: number;
  name: string;
}

const MyComponent: React.FC = () => {
  const [data, setData] = useState<MyData[]>([]);
  
  const fetchData = async (): Promise<MyData[]> => {
    const response = await fetch('/api/users');
    const result = await response.json();
    setData(result);
    return result;
  };

  const isEmpty = (): boolean => data.length === 0;

  const renderEmpty = (): React.ReactNode => (
    <div>暂无数据</div>
  );

  const renderNormalLoading = ({ children, loading }: { children: React.ReactNode; loading: boolean }) => (
    <div style={{ position: 'relative' }}>
      {loading && <div className="loading-overlay">加载中...</div>}
      {children}
    </div>
  );

  return (
    <Suspense.ASync
      fetchData={fetchData}
      isEmpty={isEmpty}
      renderEmpty={renderEmpty}
      renderNormalLoading={renderNormalLoading}
      firstLoading={<div>首次加载中...</div>}
      reset={false}
    >
      <div>
        {data.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </Suspense.ASync>
  );
};
```

## API 文档

### Suspense.Sync (同步模式)

用于处理已经存在的数据，根据数据变化控制加载状态。

#### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `data` | `any` | ✅ | - | 数据对象 |
| `isEmpty` | `() => boolean` | ✅ | - | 判断数据是否为空 |
| `renderEmpty` | `() => ReactNode` | ❌ | `<Empty />` | 自定义空状态渲染 |
| `firstLoading` | `ReactElement` | ✅ | - | 首次加载时的显示内容 |
| `renderNormalLoading` | `(params: { children: ReactNode; loading: boolean }) => ReactNode` | ❌ | - | 自定义正常加载状态渲染 |
| `reset` | `boolean` | ❌ | `false` | 是否重置状态 |
| `className` | `string` | ❌ | `''` | 自定义类名 |
| `style` | `CSSProperties` | ❌ | `{}` | 自定义样式 |

### Suspense.ASync (异步模式)

用于处理需要异步获取的数据。

#### Props

| 属性 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `fetchData` | `(params?: any) => Promise<any>` | ❌ | - | 数据获取函数 |
| `isEmpty` | `() => boolean` | ✅ | - | 判断数据是否为空 |
| `renderEmpty` | `() => ReactNode` | ❌ | `<Empty />` | 自定义空状态渲染 |
| `firstLoading` | `ReactElement` | ✅ | - | 首次加载时的显示内容 |
| `renderNormalLoading` | `(params: { children: ReactNode; loading: boolean }) => ReactNode` | ❌ | - | 自定义正常加载状态渲染 |
| `reset` | `boolean` | ❌ | `false` | 是否重置状态 |
| `className` | `string` | ❌ | `''` | 自定义类名 |
| `style` | `CSSProperties` | ❌ | `{}` | 自定义样式 |

## 类型定义

```tsx
// 基础接口
interface ISuspense {
  fetchData?: fetchData;
  showLoading: showLoading;
  renderInner: renderInner;
  isFirst: boolean;
  isFirstLoading: boolean;
  onFirstFetchDataBefore?: () => Promise<any>;
  onFirstFetchDataAfter?: (res?: any) => Promise<any>;
}

// 同步模式接口
interface ISuspenseSync {
  isLoading: boolean;
  reset: () => Promise<any>;
}

// 函数类型
interface fetchData {
  (params?: any): Promise<any>;
}

interface showLoading {
  (): boolean;
}

interface renderInner {
  (): ReactNode;
}
```

## 最佳实践

### 1. 错误处理

```tsx
const fetchData = async (): Promise<any> => {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    // 可以在这里处理错误，比如显示错误提示
    throw error;
  }
};
```

### 2. 性能优化

```tsx
// 使用 useMemo 优化 isEmpty 函数
const isEmpty = useMemo(() => () => data.length === 0, [data]);

// 使用 useCallback 优化 fetchData 函数
const fetchData = useCallback(async () => {
  // 数据获取逻辑
}, [dependencies]);
```

### 3. 自定义加载状态

```tsx
const renderNormalLoading = ({ children, loading }: { children: React.ReactNode; loading: boolean }) => (
  <div className="suspense-container">
    {loading && (
      <div className="loading-mask">
        <Spin size="large" />
        <div>数据加载中...</div>
      </div>
    )}
    <div className={loading ? 'content-loading' : 'content-ready'}>
      {children}
    </div>
  </div>
);
```

## 更新日志

### v2.0.0 (最新版本)

- ✨ 完整的 TypeScript 类型支持
- 📚 详细的 JSDoc 文档
- 🔧 代码结构优化
- 🐛 错误处理改进
- 🎨 更好的代码可读性
- 📦 模块化导出优化

### 主要改进

1. **类型安全**: 所有组件和方法都有完整的 TypeScript 类型注解
2. **文档完善**: 添加了详细的 JSDoc 注释和 README 文档
3. **代码优化**: 重构了代码结构，提高了可维护性
4. **错误处理**: 改进了异步操作的错误处理机制
5. **性能优化**: 优化了组件的渲染逻辑和状态管理

## 许可证

MIT License

