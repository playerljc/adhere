# ConditionalRender 条件渲染组件

一个功能丰富的React条件渲染组件，支持多种渲染模式和样式控制。

## 特性

- 🎯 **多种渲染模式**：支持函数式渲染、组件渲染和静态方法
- 🎨 **样式控制**：提供Show和Visibility两种样式控制方式
- 🔧 **类型安全**：完整的TypeScript类型支持
- 📦 **轻量级**：无额外依赖，纯React实现
- 🚀 **高性能**：使用React.memo优化渲染性能

## 安装

```bash
npm install @baifendian/adhere-ui-conditionalrender
```

## 基本用法

### 1. 组件式渲染

```tsx
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ConditionalRender conditional={isVisible}>
      {() => <div>显示的内容</div>}
    </ConditionalRender>
  );
}
```

### 2. 带noMatch的渲染

```tsx
<ConditionalRender 
  conditional={isVisible}
  noMatch={() => <div>隐藏时的内容</div>}
>
  {() => <div>显示的内容</div>}
</ConditionalRender>
```

### 3. 使用Show子组件（display控制）

```tsx
<ConditionalRender.Show conditional={isVisible}>
  <div>显示的内容</div>
</ConditionalRender.Show>
```

### 4. 使用Visibility子组件（visibility控制）

```tsx
<ConditionalRender.Visibility conditional={isVisible}>
  <div>显示的内容</div>
</ConditionalRender.Visibility>
```

## 静态方法

### conditionalRender

根据条件返回对应的值：

```tsx
const result = ConditionalRender.conditionalRender({
  conditional: isVisible,
  match: '显示',
  noMatch: '隐藏'
});

// 返回JSX
const element = ConditionalRender.conditionalRender({
  conditional: isVisible,
  match: <div>显示的内容</div>,
  noMatch: <div>隐藏的内容</div>
});
```

### conditionalArr

过滤包含条件渲染属性的React元素数组：

```tsx
const elements = [
  <ConditionalRender conditional={true}>内容1</ConditionalRender>,
  <ConditionalRender conditional={false}>内容2</ConditionalRender>,
  <div>普通内容</div>
];

const filtered = ConditionalRender.conditionalArr(elements);
// 结果：只包含条件为true的元素和普通元素
```

### conditionalNotEmptyArr

过滤数组中的null和undefined值：

```tsx
const arr = [1, null, 2, undefined, 3];
const filtered = ConditionalRender.conditionalNotEmptyArr(arr);
// 结果：[1, 2, 3]
```

## Show vs Visibility

| 特性 | Show | Visibility |
|------|------|------------|
| CSS属性 | `display: none/block` | `visibility: hidden/visible` |
| 布局影响 | 元素完全从布局中移除 | 元素仍占据空间但不可见 |
| 适用场景 | 完全隐藏元素 | 保持布局结构 |

## 类型定义

```tsx
interface ConditionalRenderProps {
  conditional: boolean;
  noMatch?: ReactNode | (() => ReactNode);
  children?: ReactNode | (() => ReactNode);
}

interface ConditionalRenderShowProps {
  conditional: boolean;
  noMatch?: ReactNode;
  children?: ReactNode;
}
```

## 注意事项

1. **样式要求**：Show和Visibility组件要求子组件支持style属性
2. **函数渲染**：children和noMatch支持函数式渲染，可以延迟执行
3. **数组支持**：支持渲染React元素数组
4. **Fragment支持**：支持React Fragment作为子元素

## 示例

### 复杂场景示例

```tsx
import ConditionalRender from '@baifendian/adhere-ui-conditionalrender';

function ComplexExample() {
  const [userRole, setUserRole] = useState('admin');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {/* 条件渲染不同角色内容 */}
      <ConditionalRender conditional={userRole === 'admin'}>
        {() => <AdminPanel />}
      </ConditionalRender>
      
      <ConditionalRender conditional={userRole === 'user'}>
        {() => <UserPanel />}
      </ConditionalRender>
      
      {/* 加载状态控制 */}
      <ConditionalRender.Show conditional={!isLoading}>
        <div>内容已加载完成</div>
      </ConditionalRender.Show>
      
      <ConditionalRender.Show conditional={isLoading}>
        <LoadingSpinner />
      </ConditionalRender.Show>
      
      {/* 数组过滤 */}
      {ConditionalRender.conditionalArr([
        <ConditionalRender conditional={userRole === 'admin'}>
          <AdminButton key="admin" />
        </ConditionalRender>,
        <ConditionalRender conditional={userRole === 'user'}>
          <UserButton key="user" />
        </ConditionalRender>,
        <CommonButton key="common" />
      ])}
    </div>
  );
}
```

## 许可证

MIT

