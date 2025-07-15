# Adhere Preferences

一个功能强大的本地存储和会话存储管理工具库，提供类型安全的存储操作。

## 特性

- 🚀 **类型安全**: 完整的 TypeScript 支持
- 🛡️ **错误处理**: 完善的错误处理和容错机制
- 📚 **JSDoc 文档**: 详细的中文文档和使用示例
- 🔄 **向后兼容**: 保持与旧版本的兼容性
- 🎯 **易用性**: 简洁的 API 设计
- 🌐 **浏览器兼容**: 自动检测浏览器环境

## 安装

```bash
npm install @baifendian/adhere-util-preferences
```

## 基本用法

### 导入

```typescript
// 默认导入（向后兼容）
import Preferences from '@baifendian/adhere-util-preferences';

// 命名导入（推荐）
import { Preferences, STORAGE_KEYS } from '@baifendian/adhere-util-preferences';

// 类型导入
import type { UserData, SessionData } from '@baifendian/adhere-util-preferences';
```

### 字符串操作

```typescript
// 本地存储字符串
Preferences.putStringByLocal('userName', 'John Doe');

// 获取本地存储字符串
const userName = Preferences.getStringByLocal('userName');
console.log(userName); // 'John Doe'

// 会话存储字符串
Preferences.putStringBySession('tempToken', 'abc123');

// 获取会话存储字符串
const token = Preferences.getStringBySession('tempToken');
console.log(token); // 'abc123'
```

### 对象操作

```typescript
// 定义用户数据接口
interface UserData {
  id: number;
  name: string;
  email: string;
}

// 本地存储对象
const userData: UserData = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

Preferences.putObjectByLocal('userData', userData);

// 获取本地存储对象（类型安全）
const savedUserData = Preferences.getObjectByLocal<UserData>('userData');
console.log(savedUserData?.name); // 'John Doe'

// 会话存储对象
const sessionData = {
  theme: 'dark',
  language: 'zh-CN'
};

Preferences.putObjectBySession('sessionData', sessionData);

// 获取会话存储对象
const savedSessionData = Preferences.getObjectBySession<typeof sessionData>('sessionData');
console.log(savedSessionData?.theme); // 'dark'
```

### 删除操作

```typescript
// 删除本地存储项
Preferences.removeByLocal('userName');

// 删除会话存储项
Preferences.removeBySession('tempToken');

// 清空所有本地存储
Preferences.clearLocal();

// 清空所有会话存储
Preferences.clearSession();
```

### 查询操作

```typescript
// 检查键是否存在
const hasUser = Preferences.hasLocalKey('userData');
const hasToken = Preferences.hasSessionKey('tempToken');

// 获取存储长度
const localCount = Preferences.getLocalLength();
const sessionCount = Preferences.getSessionLength();
```

## 使用预定义类型

```typescript
import { Preferences, STORAGE_KEYS, type UserData, type SessionData } from '@baifendian/adhere-util-preferences';

// 使用预定义的存储键
const userData: UserData = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com'
};

Preferences.putObjectByLocal(STORAGE_KEYS.USER_DATA, userData);

// 使用预定义的会话数据类型
const sessionData: SessionData = {
  theme: 'dark',
  language: 'zh-CN',
  token: 'abc123'
};

Preferences.putObjectBySession(STORAGE_KEYS.SESSION_DATA, sessionData);
```

## 错误处理

所有方法都包含完善的错误处理：

```typescript
// 存储操作返回布尔值表示是否成功
const success = Preferences.putStringByLocal('key', 'value');
if (!success) {
  console.error('存储失败');
}

// 获取操作在出错时会返回 null
const data = Preferences.getObjectByLocal('key');
if (data === null) {
  console.log('数据不存在或获取失败');
}
```

## 浏览器兼容性

库会自动检测浏览器环境：

```typescript
// 在服务器端渲染环境中，所有操作都会安全地返回默认值
if (typeof window === 'undefined') {
  // 服务器端环境
  const data = Preferences.getStringByLocal('key'); // 返回 null
} else {
  // 浏览器环境
  const data = Preferences.getStringByLocal('key'); // 正常返回数据
}
```

## API 参考

### 本地存储方法

| 方法 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `putStringByLocal` | `key: string, value: string` | `boolean` | 存储字符串到本地存储 |
| `getStringByLocal` | `key: string` | `string \| null` | 从本地存储获取字符串 |
| `putObjectByLocal` | `key: string, object: T` | `boolean` | 存储对象到本地存储 |
| `getObjectByLocal` | `key: string` | `T \| null` | 从本地存储获取对象 |
| `removeByLocal` | `key: string` | `boolean` | 从本地存储删除键 |
| `clearLocal` | - | `boolean` | 清空本地存储 |
| `getLocalLength` | - | `number` | 获取本地存储长度 |
| `hasLocalKey` | `key: string` | `boolean` | 检查本地存储键是否存在 |

### 会话存储方法

| 方法 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `putStringBySession` | `key: string, value: string` | `boolean` | 存储字符串到会话存储 |
| `getStringBySession` | `key: string` | `string \| null` | 从会话存储获取字符串 |
| `putObjectBySession` | `key: string, object: T` | `boolean` | 存储对象到会话存储 |
| `getObjectBySession` | `key: string` | `T \| null` | 从会话存储获取对象 |
| `removeBySession` | `key: string` | `boolean` | 从会话存储删除键 |
| `clearSession` | - | `boolean` | 清空会话存储 |
| `getSessionLength` | - | `number` | 获取会话存储长度 |
| `hasSessionKey` | `key: string` | `boolean` | 检查会话存储键是否存在 |

## 类型定义

### 核心类型

```typescript
enum StorageType {
  LOCAL = 'localStorage',
  SESSION = 'sessionStorage'
}

interface StorageInterface {
  setItem(key: string, value: string): void;
  getItem(key: string): string | null;
  removeItem(key: string): void;
}
```

### 预定义数据类型

```typescript
interface UserData {
  id: number;
  name: string;
  email?: string;
  avatar?: string;
}

interface SessionData {
  theme?: 'light' | 'dark';
  language?: string;
  token?: string;
}

interface AppConfig {
  version: string;
  environment: 'development' | 'production' | 'test';
  apiBaseUrl?: string;
}
```

## 迁移指南

### 从旧版本迁移

如果你正在使用旧版本的 API，新版本完全向后兼容：

```typescript
// 旧版本用法仍然有效
import Preferences from '@baifendian/adhere-util-preferences';

Preferences.putStringByLocal('key', 'value');
const value = Preferences.getStringByLocal('key');
```

### 推荐的新用法

```typescript
// 推荐使用新的类方法和类型
import { Preferences, STORAGE_KEYS, type UserData } from '@baifendian/adhere-util-preferences';

// 使用类型安全的对象存储
const userData: UserData = { id: 1, name: 'John' };
Preferences.putObjectByLocal(STORAGE_KEYS.USER_DATA, userData);

// 使用预定义的存储键
const savedUser = Preferences.getObjectByLocal<UserData>(STORAGE_KEYS.USER_DATA);
```

## 许可证

MIT License
