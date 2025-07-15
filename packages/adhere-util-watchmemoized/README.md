# @baifendian/adhere-util-watchmemoized

一个功能强大的 TypeScript 响应式数据监听和记忆化工具库，提供类似 Vue 的响应式系统和 React 的记忆化功能。

## 特性

- ✅ **完整的 TypeScript 支持** - 完整的类型定义和类型安全
- ✅ **响应式数据监听** - 基于 Proxy 的深度响应式系统
- ✅ **记忆化功能** - 智能缓存和依赖追踪
- ✅ **多种监听模式** - `all`、`race` 等高级监听模式
- ✅ **细粒度比较** - 支持浅比较、深比较和自定义比较
- ✅ **内存管理** - 自动清理和内存泄漏防护
- ✅ **高性能** - 优化的代理和缓存机制

## 安装

```bash
npm install @baifendian/adhere-util-watchmemoized
```

## 基本使用

### 导入

```typescript
import WatchMemoized from '@baifendian/adhere-util-watchmemoized';

// 或者导入特定功能
import { createRef, watch, memoized } from '@baifendian/adhere-util-watchmemoized';
```

### 创建响应式引用

```typescript
// 创建一个响应式引用
const [getValue, setValue, property] = WatchMemoized.createRef(0);

// 获取值
console.log(getValue()); // 0

// 设置值
setValue(42);
console.log(getValue()); // 42
```

### 监听数据变化

```typescript
// 创建多个响应式引用
const [getCount, setCount, countProperty] = WatchMemoized.createRef(0);
const [getName, setName, nameProperty] = WatchMemoized.createRef('John');

// 监听所有依赖项变化
const unsubscribe = WatchMemoized.memoized.watch.all(
  () => {
    console.log('所有依赖项都发生了变化');
  },
  [countProperty, nameProperty]
);

// 监听任一依赖项变化
const unsubscribeRace = WatchMemoized.memoized.watch.race(
  () => {
    console.log('任一依赖项发生了变化');
  },
  [countProperty, nameProperty]
);

// 触发变化
setCount(1);
setName('Jane');

// 取消监听
unsubscribe();
unsubscribeRace();
```

### 细粒度比较控制

```typescript
// 浅比较配置
const shallowConfig = {
  property: countProperty,
  mode: 'light' as const
};

// 深比较配置
const deepConfig = {
  property: nameProperty,
  mode: 'deep' as const
};

// 自定义比较配置
const customConfig = {
  property: countProperty,
  mode: (oldValue: number, newValue: number) => {
    return Math.abs(newValue - oldValue) < 10; // 差值小于10认为相等
  }
};

// 使用配置进行监听
WatchMemoized.memoized.watch.all(
  () => console.log('数据变化'),
  [shallowConfig, deepConfig, customConfig]
);
```

### 记忆化函数

```typescript
// 创建一个记忆化函数
const expensiveCalculation = WatchMemoized.memoized.createMemoFun(
  (a: number, b: number) => {
    console.log('执行昂贵计算...');
    return a * b + Math.pow(a, 2) + Math.pow(b, 2);
  },
  10 // 最大缓存数量
);

// 第一次调用会执行计算
console.log(expensiveCalculation(2, 3)); // 执行昂贵计算... 19

// 相同参数再次调用会使用缓存
console.log(expensiveCalculation(2, 3)); // 19 (无日志输出)

// 不同参数会重新计算
console.log(expensiveCalculation(3, 4)); // 执行昂贵计算... 37
```

### 对象监听

```typescript
// 创建要监听的对象
const user = {
  name: 'John',
  age: 30,
  address: {
    city: 'Beijing',
    street: 'Main St'
  }
};

// 创建监听器
const watcher = WatchMemoized.watch.create(user, {
  // 监听特定属性
  'name': (oldValue, newValue) => {
    console.log('姓名变化:', oldValue, '->', newValue);
  },
  'address.city': (oldValue, newValue) => {
    console.log('城市变化:', oldValue, '->', newValue);
  }
});

// 获取代理对象
const proxyUser = watcher.value;

// 修改属性会触发监听
proxyUser.name = 'Jane'; // 触发 name 监听器
proxyUser.address.city = 'Shanghai'; // 触发 address.city 监听器

// 动态添加监听器
watcher.on('age', (oldValue, newValue) => {
  console.log('年龄变化:', oldValue, '->', newValue);
});

// 移除监听器
watcher.remove('name', handler);
```

## API 参考

### WatchMemoized

#### `createRef<T>(defaultValue?: T)`

创建一个响应式引用。

- `defaultValue?: T` - 默认值
- 返回：`[获取值函数, 设置值函数, 属性符号]`

#### `memoized.watch.all(handler, depends)`

监听所有依赖项变化。

- `handler: IWatchHandler` - 处理函数
- `depends: Array<symbol | ICompareConfig>` - 依赖项数组
- 返回：取消订阅函数

#### `memoized.watch.race(handler, depends)`

监听任一依赖项变化。

- `handler: IWatchHandler` - 处理函数
- `depends: Array<symbol | ICompareConfig>` - 依赖项数组
- 返回：取消订阅函数

#### `memoized.createMemoFun<T, R>(handler, stackMaxSize?)`

创建记忆化函数。

- `handler: (...args: T) => R` - 要记忆化的函数
- `stackMaxSize?: number` - 最大缓存数量（默认10）
- 返回：记忆化后的函数

#### `watch.create<T>(srcObj, listeners?)`

创建对象监听器。

- `srcObj: T` - 源对象
- `listeners?: Record<string, IWatchHandler>` - 监听器对象
- 返回：监听器结果对象

### 类型定义

```typescript
// 监听函数类型
interface IWatchHandler<T = any> {
  (oldValue?: T, newValue?: T): void;
}

// 比较配置类型
interface ICompareConfig<T = any> {
  property: symbol;
  mode: 'deep' | 'light' | ICompareModeFun<T>;
}

// 自定义比较函数类型
interface ICompareModeFun<T = any> {
  (oldValue: T, newValue: T): boolean;
}
```

## 最佳实践

### 1. 内存管理

```typescript
// 总是保存并调用取消订阅函数
const unsubscribe = WatchMemoized.memoized.watch.all(handler, depends);

// 在组件卸载时取消订阅
useEffect(() => {
  return unsubscribe;
}, []);
```

### 2. 性能优化

```typescript
// 使用适当的比较模式
const config = {
  property: refProperty,
  mode: 'deep' // 对于复杂对象使用深比较
};

// 合理设置记忆化缓存大小
const memoizedFn = WatchMemoized.memoized.createMemoFun(
  expensiveFunction,
  20 // 根据实际需求设置
);
```

### 3. 类型安全

```typescript
// 使用泛型确保类型安全
const [getUser, setUser, userProperty] = WatchMemoized.createRef<User>({
  id: 1,
  name: 'John'
});

// 类型安全的监听器
WatchMemoized.memoized.watch.all(
  (oldUser: User, newUser: User) => {
    console.log('用户信息变化:', oldUser.name, '->', newUser.name);
  },
  [userProperty]
);
```

### 4. 错误处理

```typescript
// 在监听器中处理错误
WatchMemoized.memoized.watch.all(
  () => {
    try {
      // 你的处理逻辑
    } catch (error) {
      console.error('监听器执行错误:', error);
    }
  },
  depends
);
```

## 迁移指南

### 从旧版本迁移

如果你正在使用旧版本的库，主要变化包括：

1. **类型改进**：更好的 TypeScript 支持和泛型
2. **API 优化**：更清晰的函数签名和返回值
3. **文档完善**：完整的 JSDoc 文档和示例
4. **性能提升**：优化的代理和缓存机制

```typescript
// 旧版本
const ref = WatchMemoized.createRef();
const value = ref[0]();
ref[1](newValue);

// 新版本（类型安全）
const [getValue, setValue, property] = WatchMemoized.createRef<string>('default');
const value = getValue();
setValue('new value');
```

## 许可证

ISC



