# @baifendian/adhere-util-emitter

一个功能强大的 TypeScript 事件发射器库，实现了观察者模式，支持多种高级事件模式。

## 特性

- ✅ **完整的 TypeScript 支持** - 完整的类型定义和类型安全
- ✅ **多种事件模式** - 支持基本事件、一次性事件、条件事件等
- ✅ **高级模式** - `all`、`race`、`count` 等高级事件模式
- ✅ **内存管理** - 自动清理和内存泄漏防护
- ✅ **错误处理** - 完善的错误处理和恢复机制
- ✅ **DOM 事件支持** - 支持自定义 DOM 事件分发
- ✅ **灵活的 API** - 支持字符串和 Symbol 事件类型

## 安装

```bash
npm install @baifendian/adhere-util-emitter
```

## 基本使用

### 导入

```typescript
// 使用默认的全局实例
import Emitter from '@baifendian/adhere-util-emitter';

// 或者导入类来创建新实例
import { Events } from '@baifendian/adhere-util-emitter';

// 导入类型
import type { EventHandler, EventType } from '@baifendian/adhere-util-emitter';
```

### 基本事件处理

```typescript
// 监听事件
const unsubscribe = Emitter.on('user:login', (user) => {
  console.log('User logged in:', user);
});

// 触发事件
Emitter.trigger('user:login', { id: 1, name: 'John' });

// 取消监听
unsubscribe();
```

### 一次性事件

```typescript
// 一次性事件监听
Emitter.once('app:ready', () => {
  console.log('App is ready - this will only fire once');
});

Emitter.trigger('app:ready'); // 触发并自动移除监听器
Emitter.trigger('app:ready'); // 不会触发任何处理函数
```

## 高级功能

### All 模式 - 等待所有事件

```typescript
const unsubscribe = Emitter.all(['load', 'ready', 'init'], () => {
  console.log('All events have fired!');
});

Emitter.trigger('load');
Emitter.trigger('ready');
Emitter.trigger('init'); // 处理函数在这里触发

// 重置后可以再次使用
Emitter.trigger('load');
Emitter.trigger('ready');
Emitter.trigger('init'); // 处理函数再次触发
```

### Race 模式 - 竞态条件

```typescript
const unsubscribe = Emitter.race(['timeout', 'success', 'error'], () => {
  console.log('One of the events fired!');
});

Emitter.trigger('success'); // 处理函数在这里触发
Emitter.trigger('timeout'); // 不会触发（已经触发过了）
```

### Count 模式 - 计数事件

```typescript
const unsubscribe = Emitter.count('click', 3, () => {
  console.log('Button clicked 3 times!');
});

Emitter.trigger('click'); // 计数: 1
Emitter.trigger('click'); // 计数: 2
Emitter.trigger('click'); // 计数: 3, 处理函数触发
Emitter.trigger('click'); // 计数: 1 (重置)
```

### 自定义 DOM 事件

```typescript
// 分发自定义 DOM 事件
Emitter.dispatchEvent(document, 'custom:event', {
  detail: { message: 'Hello world' },
  bubbles: true
});

// 监听自定义事件
document.addEventListener('custom:event', (event) => {
  console.log('Custom event received:', event.detail);
});
```

## API 参考

### Events 类

#### 构造函数

```typescript
const events = new Events();
```

#### 方法

##### `on(type, handler, maxStackSize?)`

注册事件监听器。

- `type: EventType` - 事件类型（字符串或 Symbol）
- `handler: EventHandler` - 处理函数
- `maxStackSize?: number` - 最大监听器数量（默认 200）
- 返回：取消订阅函数

##### `once(type, handler)`

注册一次性事件监听器。

- `type: EventType` - 事件类型
- `handler: EventHandler` - 处理函数
- 返回：取消订阅函数

##### `trigger(type, ...params)`

触发事件。

- `type: EventType` - 事件类型
- `...params: any[]` - 传递给处理函数的参数
- 返回：最后一个处理函数的返回值

##### `remove(type, handler)`

移除特定的处理函数。

- `type: EventType` - 事件类型
- `handler: EventHandler` - 要移除的处理函数
- 返回：是否成功移除

##### `clear(type)`

清除指定事件类型的所有处理函数。

- `type: EventType` - 事件类型
- 返回：是否成功清除

##### `clearAll()`

清除所有事件和处理函数。

##### `hasType(type)`

检查事件类型是否有注册的处理函数。

- `type: EventType` - 事件类型
- 返回：是否有处理函数

##### `getHandlerCount(type)`

获取指定事件类型的处理函数数量。

- `type: EventType` - 事件类型
- 返回：处理函数数量

##### `getEventTypes()`

获取所有注册的事件类型。

- 返回：事件类型数组

### 高级模式方法

#### `all(types, handler)`

等待所有指定事件触发。

- `types: EventType[]` - 事件类型数组
- `handler: EventHandler` - 处理函数
- 返回：取消订阅函数

#### `race(types, handler)`

等待任意一个指定事件触发。

- `types: EventType[]` - 事件类型数组
- `handler: EventHandler` - 处理函数
- 返回：取消订阅函数

#### `count(type, count, handler)`

等待事件触发指定次数。

- `type: EventType` - 事件类型
- `count: number` - 触发次数
- `handler: EventHandler` - 处理函数
- 返回：取消订阅函数

### 类型定义

```typescript
// 事件处理函数类型
type EventHandler<T = any> = (...args: T[]) => any;

// 事件类型
type EventType = string | symbol;

// 事件处理函数条目
interface EventHandlerEntry {
  handlers: EventHandler[];
}

// 变更日志条目
interface ChangeLogEntry {
  key: symbol;
  status: boolean;
  fn: EventHandler;
}
```

## 最佳实践

### 1. 内存管理

```typescript
// 总是保存并调用取消订阅函数
const unsubscribe = Emitter.on('event', handler);

// 在组件卸载时取消订阅
useEffect(() => {
  return unsubscribe;
}, []);
```

### 2. 错误处理

```typescript
// 处理函数中的错误会被自动捕获和记录
Emitter.on('event', (data) => {
  try {
    // 你的处理逻辑
  } catch (error) {
    // 错误处理
  }
});
```

### 3. 事件命名约定

```typescript
// 使用命名空间来组织事件
Emitter.on('user:login', handler);
Emitter.on('user:logout', handler);
Emitter.on('app:ready', handler);
```

### 4. 类型安全

```typescript
// 定义事件类型
type AppEvents = {
  'user:login': { user: User };
  'user:logout': { userId: string };
  'app:ready': void;
};

// 使用类型安全的事件处理
Emitter.on('user:login', (user: User) => {
  console.log(user.name);
});
```

## 迁移指南

### 从旧版本迁移

如果你正在使用旧版本的库，主要变化包括：

1. **返回值变化**：`on()` 和 `once()` 现在返回取消订阅函数
2. **类型改进**：更好的 TypeScript 支持
3. **错误处理**：自动错误捕获和恢复
4. **新方法**：添加了 `getHandlerCount()` 和 `getEventTypes()` 方法

```typescript
// 旧版本
Emitter.on('event', handler);
// 需要手动保存引用以便后续移除

// 新版本
const unsubscribe = Emitter.on('event', handler);
// 直接使用返回的取消订阅函数
```

## 许可证

ISC
