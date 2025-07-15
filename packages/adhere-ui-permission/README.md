# Adhere UI Permission 权限组件

一个功能完整的React权限控制组件，支持组件式渲染和函数式权限检查，提供完整的TypeScript类型支持。

## 特性

- 🎯 **多种使用方式**：支持组件式渲染和函数式权限检查
- 🔒 **灵活的权限控制**：支持单个权限和权限数组检查
- 📦 **完整的类型支持**：提供完整的TypeScript类型定义
- 🛠️ **丰富的工具函数**：提供多种权限管理工具函数
- 🚀 **高性能**：基于条件渲染，性能优异
- 📚 **详细文档**：提供完整的JSDoc文档和使用示例

## 安装

```bash
npm install @baifendian/adhere-ui-permission
```

## 基本用法

### 1. 初始化权限

```typescript
import { setPermission } from '@baifendian/adhere-ui-permission';

// 设置用户权限
setPermission(['read', 'write', 'delete', 'admin']);
```

### 2. 组件式权限控制

```tsx
import { Permission } from '@baifendian/adhere-ui-permission';

function App() {
  return (
    <div>
      {/* 检查单个权限 */}
      <Permission permissions="read" noMatch={() => <div>无权限访问</div>}>
        <div>有读取权限的内容</div>
      </Permission>

      {/* 检查多个权限（需要全部满足） */}
      <Permission permissions={['read', 'write']} noMatch={() => <div>权限不足</div>}>
        <div>需要读写权限的内容</div>
      </Permission>

      {/* 使用自定义权限列表 */}
      <Permission 
        allPermission={['admin', 'user']} 
        permissions="admin"
        noMatch={() => <div>需要管理员权限</div>}
      >
        <div>管理员专用内容</div>
      </Permission>
    </div>
  );
}
```

### 3. 函数式权限检查

```typescript
import { PermissionFun } from '@baifendian/adhere-ui-permission';

// 基本用法
const result = PermissionFun({
  permissions: 'read',
  match: '有权限',
  noMatch: '无权限'
});

// 检查多个权限
const result = PermissionFun({
  permissions: ['read', 'write'],
  match: '有读写权限',
  noMatch: '权限不足'
});

// 返回JSX
const element = PermissionFun({
  permissions: 'read',
  match: <div>有权限的内容</div>,
  noMatch: <div>无权限访问</div>
});
```

### 4. 权限检查函数

```typescript
import { checkPermission, getPermission } from '@baifendian/adhere-ui-permission';

// 检查单个权限
const hasReadPermission = checkPermission(undefined, 'read');

// 检查多个权限（需要全部满足）
const hasAllPermissions = checkPermission(undefined, ['read', 'write']);

// 使用自定义权限列表
const hasPermission = checkPermission(['admin', 'user'], 'admin');

// 获取当前权限列表
const currentPermissions = getPermission();
```

## 工具函数

### PermissionUtils

```typescript
import { PermissionUtils } from '@baifendian/adhere-ui-permission';

// 检查是否包含任意一个权限
const hasAnyPermission = PermissionUtils.hasAnyPermission(
  undefined, 
  ['read', 'write', 'delete']
);

// 检查是否包含所有权限
const hasAllPermissions = PermissionUtils.hasAllPermissions(
  undefined, 
  ['read', 'write']
);

// 获取权限交集
const intersection = PermissionUtils.getPermissionIntersection(
  ['read', 'write', 'delete'], 
  ['read', 'write', 'admin']
);
// 结果: ['read', 'write']

// 检查权限是否为空
const isEmpty = PermissionUtils.isEmpty([]);
const isNotEmpty = PermissionUtils.isEmpty(['read', 'write']);

// 验证权限格式
const isValid = PermissionUtils.isValidFormat('user:read');
const isInvalid = PermissionUtils.isValidFormat('');
```

## API 参考

### Permission 组件

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| `allPermission` | `string[]` | `getPermission()` | 所有可用权限列表 |
| `permissions` | `string \| string[]` | - | 当前组件需要的权限 |
| `children` | `React.ReactNode` | - | 有权限时渲染的内容 |
| `noMatch` | `() => React.ReactElement \| null` | `() => null` | 无权限时渲染的内容 |

### PermissionFun 函数

| 参数 | 类型 | 描述 |
|------|------|------|
| `allPermission` | `string[]` | 所有可用权限列表 |
| `permissions` | `string \| string[]` | 需要的权限 |
| `match` | `React.ReactNode` | 有权限时返回的值 |
| `noMatch` | `React.ReactNode` | 无权限时返回的值 |

### 核心函数

| 函数 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `setPermission` | `permissions: string[]` | `void` | 设置全局权限列表 |
| `getPermission` | - | `string[]` | 获取当前权限列表 |
| `checkPermission` | `allPermission?: string[], currentPermissions?: string \| string[]` | `boolean` | 检查是否有权限 |

### 工具函数

| 函数 | 参数 | 返回值 | 描述 |
|------|------|--------|------|
| `hasAnyPermission` | `allPermission?: string[], permissions: string[]` | `boolean` | 检查是否包含任意一个权限 |
| `hasAllPermissions` | `allPermission?: string[], permissions: string[]` | `boolean` | 检查是否包含所有权限 |
| `getPermissionIntersection` | `allPermission?: string[], permissions: string[]` | `string[]` | 获取权限交集 |
| `isEmpty` | `permissions: string[]` | `boolean` | 检查权限是否为空 |
| `isValidFormat` | `permission: string` | `boolean` | 验证权限格式 |

## 类型定义

```typescript
interface PermissionProps {
  allPermission?: string[];
  permissions: string[] | string;
  children: React.ReactNode;
  noMatch?: () => React.ReactElement | null;
}

interface PermissionFunction {
  allPermission?: string[];
  permissions: string[] | string;
  match: React.ReactNode;
  noMatch?: React.ReactNode;
}

type PermissionCheckResult = boolean;
type PermissionSetter = (permissions: string[]) => void;
type PermissionGetter = () => string[];
type PermissionChecker = (
  allPermission?: string[],
  currentPermissions?: string[] | string
) => PermissionCheckResult;
```

## 使用场景

### 1. 页面级权限控制

```tsx
function AdminPage() {
  return (
    <Permission permissions="admin" noMatch={() => <div>需要管理员权限</div>}>
      <div>管理员页面内容</div>
    </Permission>
  );
}
```

### 2. 组件级权限控制

```tsx
function UserList() {
  return (
    <div>
      <h1>用户列表</h1>
      <Permission permissions={['read', 'write']}>
        <button>添加用户</button>
      </Permission>
      <Permission permissions="delete">
        <button>删除用户</button>
      </Permission>
    </div>
  );
}
```

### 3. 条件渲染

```tsx
function Dashboard() {
  const userRole = 'admin';
  
  return (
    <div>
      {PermissionFun({
        permissions: 'admin',
        match: <AdminPanel />,
        noMatch: <UserPanel />
      })}
    </div>
  );
}
```

### 4. 动态权限检查

```tsx
function DynamicComponent({ requiredPermissions }) {
  const hasPermission = checkPermission(undefined, requiredPermissions);
  
  if (!hasPermission) {
    return <div>权限不足</div>;
  }
  
  return <div>有权限的内容</div>;
}
```

## 注意事项

1. **权限初始化**：使用前需要调用 `setPermission` 设置用户权限
2. **权限格式**：权限字符串应该是有意义的标识符，建议使用 `module:action` 格式
3. **性能考虑**：权限检查是同步操作，对于大量权限检查建议使用缓存
4. **类型安全**：建议使用TypeScript以获得更好的类型检查和IDE支持

## 更新日志

### v2.0.0
- ✨ 完整的TypeScript类型支持
- 📚 详细的JSDoc文档
- 🛠️ 新增PermissionUtils工具函数集合
- 🔧 优化代码结构和错误处理
- 📝 完善的使用示例和API文档

### v1.x.x
- 🎯 基本的权限控制功能
- 🔒 组件式和函数式权限检查
- 📦 简单的API设计
