# Adhere UI Hooks

一套实用的 React Hooks 集合，提供状态管理、异步处理、响应式设计等功能。

## 安装

```bash
npm install @baifendian/adhere-ui-hooks
```

## Hooks 列表

### use

用于处理异步 Promise 的 React Hook，提供加载状态、错误处理和重试功能。

```tsx
import { use } from '@baifendian/adhere-ui-hooks';

const { data, isPending, isValidate, reset, reload } = use(fetchUserData, [userId]);

if (isPending) return <Loading />;
if (isValidate) return <Error />;
return <UserInfo data={data} />;
```

### useFirst

用于跟踪组件是否为首次渲染的 React Hook。

```tsx
import { useFirst } from '@baifendian/adhere-ui-hooks';

const [isFirst, setIsFirst] = useFirst();

useEffect(() => {
  if (isFirst) {
    console.log('首次渲染');
    setIsFirst(false);
  }
}, [isFirst]);
```

### useForceUpdate

用于强制组件重新渲染的 React Hook。

```tsx
import { useForceUpdate } from '@baifendian/adhere-ui-hooks';

const forceUpdate = useForceUpdate();

const handleClick = () => {
  // 强制组件重新渲染
  forceUpdate();
};
```

### useItemsRef

用于存储和管理列表项引用的 React Hook。

```tsx
import { useItemsRef } from '@baifendian/adhere-ui-hooks';

const itemsRef = useItemsRef<HTMLDivElement>();

// 设置引用
itemsRef.set('item-1', divRef.current);

// 获取引用
const element = itemsRef.get('item-1');

// 获取所有 keys
const keys = Array.from(itemsRef.getKeys() || []);

// 获取所有引用
const refs = Array.from(itemsRef.getRefs() || []);
```

### useLatestState

返回最新的状态值，防止闭包问题，返回的值使用 useLatest 包装。

```tsx
import { useLatestState } from '@baifendian/adhere-ui-hooks';

const [valueRef, setValue] = useLatestState(0);

useEffect(() => {
  // 总是能获取到最新的值
  console.log('最新值:', valueRef.current);
}, []);

const handleClick = () => {
  setValue(prev => prev + 1);
};
```

### useMediaQuery

用于响应式设计的 React Hook，监听屏幕尺寸变化。

```tsx
import { useMediaQuery } from '@baifendian/adhere-ui-hooks';

const { isPhone, isPad, isPC } = useMediaQuery();

if (isPhone) return <MobileLayout />;
if (isPad) return <TabletLayout />;
return <DesktopLayout />;
```

### usePrevious

用于获取上一次渲染时的值的 React Hook。

```tsx
import { usePrevious } from '@baifendian/adhere-ui-hooks';

const [count, setCount] = useState(0);
const previousCount = usePrevious(count);

useEffect(() => {
  if (previousCount !== undefined && previousCount !== count) {
    console.log(`Count changed from ${previousCount} to ${count}`);
  }
}, [count, previousCount]);
```

### usePropToState

将 props 中的值转换为 state，用于在组件内部对 props 进行更新操作。

```tsx
import { usePropToState } from '@baifendian/adhere-ui-hooks';

interface Props {
  initialValue: string;
}

const MyComponent: React.FC<Props> = ({ initialValue }) => {
  const [value, setValue] = usePropToState(initialValue);
  
  // 当 props 中的 initialValue 变化时，state 会自动同步
  // 同时可以在组件内部修改 value
  
  return (
    <input 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
    />
  );
};
```

### useSafeRef

安全地获取 ref 的当前值，提供默认值支持。

```tsx
import { useSafeRef } from '@baifendian/adhere-ui-hooks';

const divRef = useRef<HTMLDivElement>(null);
const safeValue = useSafeRef(divRef, document.createElement('div'));

// 或者不提供默认值
const element = useSafeRef(divRef);
if (element) {
  // 使用 element
}
```

### useSetState

带有更新成功回调函数的状态管理 Hook，返回最新的值。

```tsx
import { useSetState } from '@baifendian/adhere-ui-hooks';

const [valueRef, setValue] = useSetState(0);

const handleClick = () => {
  setValue(
    prev => prev + 1,
    () => {
      console.log('状态更新完成，当前值:', valueRef.current);
    }
  );
};

// 使用最新值
useEffect(() => {
  console.log('最新值:', valueRef.current);
}, []);
```

### useTriggerQuery

用于管理查询参数和搜索状态的 React Hook。

```tsx
import { useTriggerQuery } from '@baifendian/adhere-ui-hooks';

interface SearchParams {
  keyword: string;
  status: string;
  page: number;
}

const {
  fieldsValue,
  searchParams,
  setFieldsValue,
  search,
  reset
} = useTriggerQuery<SearchParams>({
  keyword: '',
  status: 'all',
  page: 1
});

// 更新字段值
setFieldsValue(draft => {
  draft.keyword = 'search term';
});

// 执行搜索
search(() => {
  console.log('搜索完成');
});

// 重置搜索
reset(() => {
  console.log('重置完成');
}, { page: 1 });
```

## 类型定义

所有 hooks 都提供了完整的 TypeScript 类型支持，包括泛型类型参数和详细的返回类型定义。

## 依赖

- React 16.8+
- ahooks
- use-immer
- lodash.debounce

## 许可证

MIT
