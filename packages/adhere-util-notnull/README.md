# @baifendian/adhere-util-notnull

一个用于创建安全对象代理的工具，确保所有属性访问都不会返回 `null` 或 `undefined`。

## 功能特性

- 🛡️ **空值安全**: 自动将空值属性初始化为空对象
- 🔄 **深度代理**: 递归处理嵌套对象和数组
- 📝 **TypeScript支持**: 完整的类型定义和泛型支持
- ⚡ **高性能**: 使用ES6 Proxy实现，性能优异
- 🎯 **零配置**: 开箱即用，无需额外配置

## 安装

```bash
npm install @baifendian/adhere-util-notnull
```

## 使用方法

### 基本用法

```typescript
import NotNull from '@baifendian/adhere-util-notnull';

// 创建安全对象
const safeObj = NotNull({});

// 可以安全地访问任意深度的属性
safeObj.user.profile.name = 'John';
safeObj.user.profile.age = 25;

console.log(safeObj.user.profile.name); // 'John'
console.log(safeObj.user.profile.age);  // 25
```

### 数组用法

```typescript
import NotNull from '@baifendian/adhere-util-notnull';

// 创建安全数组
const safeArr = NotNull([]);

// 数组元素也会被代理
safeArr[0] = { data: {} };
safeArr[0].data.value = 123;

console.log(safeArr[0].data.value); // 123
```

### 处理现有对象

```typescript
import NotNull from '@baifendian/adhere-util-notnull';

// 处理已有数据的对象
const existingObj = NotNull({
  user: {
    name: 'John',
    profile: {
      email: 'john@example.com'
    }
  }
});

// 可以安全地添加新属性
existingObj.user.profile.phone = '123-456-7890';
existingObj.user.settings = {};
existingObj.user.settings.theme = 'dark';

console.log(existingObj.user.name);        // 'John'
console.log(existingObj.user.settings.theme); // 'dark'
```

### TypeScript 类型支持

```typescript
import NotNull, { ProxyTarget, NotNullFunction } from '@baifendian/adhere-util-notnull';

// 类型安全的用法
interface User {
  name: string;
  profile: {
    email: string;
    age?: number;
  };
}

const user: User = {
  name: 'John',
  profile: {
    email: 'john@example.com'
  }
};

const safeUser = NotNull(user);

// TypeScript 会提供完整的类型提示
safeUser.profile.age = 25; // ✅ 类型安全
```

## API 参考

### NotNull(target)

创建一个代理对象，确保所有属性访问都不会返回 `null` 或 `undefined`。

#### 参数

- `target` (ProxyTarget): 要处理的目标对象或数组

#### 返回值

- 返回代理后的对象或数组，保持原始类型

#### 类型定义

```typescript
function NotNull<T extends ProxyTarget>(target: T): T
```

### 类型定义

#### ProxyTarget

```typescript
type ProxyTarget = Record<string | number | symbol, any> | any[];
```

#### ProxyHandler

```typescript
type ProxyHandler = {
  get(target: ProxyTarget, property: string | number | symbol, receiver: any): any;
  set(target: ProxyTarget, property: string | number | symbol, value: any, receiver: any): boolean;
};
```

#### NotNullFunction

```typescript
type NotNullFunction = <T extends ProxyTarget>(target: T) => T;
```

## 工作原理

1. **代理创建**: 使用 ES6 Proxy 创建对象代理
2. **属性访问**: 当访问不存在的属性时，自动创建空对象
3. **递归处理**: 对所有嵌套对象和数组进行递归代理
4. **类型保持**: 保持原始对象的类型结构

## 注意事项

- 只对对象和数组进行代理，其他类型会直接返回
- 代理会修改原始对象，请谨慎使用
- 性能开销较小，但大量嵌套对象可能影响性能
- 不支持循环引用的对象

## 示例场景

### 表单数据处理

```typescript
import NotNull from '@baifendian/adhere-util-notnull';

const formData = NotNull({});

// 安全地设置表单数据
formData.personal.name = 'John';
formData.personal.contact.email = 'john@example.com';
formData.personal.contact.phone = '123-456-7890';

// 不会因为属性不存在而报错
console.log(formData.personal.contact.email); // 'john@example.com'
```

### API 响应处理

```typescript
import NotNull from '@baifendian/adhere-util-notnull';

// 处理可能不完整的API响应
const apiResponse = NotNull(response.data);

// 安全地访问嵌套属性
const userName = apiResponse.user?.profile?.name || 'Unknown';
const userEmail = apiResponse.user?.profile?.email || 'No email';

// 使用 NotNull 后可以更简洁地处理
const userName = apiResponse.user.profile.name || 'Unknown';
const userEmail = apiResponse.user.profile.email || 'No email';
```

## 许可证

MIT License
