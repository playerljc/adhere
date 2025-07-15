# @baifendian/adhere-util-reactutil

React工具函数库，提供便捷的React元素操作功能，特别是自动生成key等常用功能。

## 📖 简介

`adhere-util-reactutil` 是一个专为React应用设计的工具库，主要解决以下问题：

- **自动生成key**: 为React元素数组自动生成唯一的key属性，避免React警告
- **类型安全**: 完整的TypeScript支持，提供良好的开发体验
- **性能优化**: 智能处理已有key的元素，避免不必要的重新渲染

## ✨ 特性

- 🚀 **自动key生成**: 为React元素自动生成唯一key，解决React列表渲染警告
- 🔒 **类型安全**: 完整的TypeScript支持，提供完整的类型定义
- 🛡️ **错误处理**: 完善的错误处理和验证机制
- 📦 **按需加载**: 支持动态引入(babel-plugin-import)
- 🎯 **零依赖**: 只依赖React和uuid，体积小巧
- 🔧 **易于使用**: 简洁的API设计，学习成本低

## 🖥 兼容环境

- **React**: 16.x, 17.x, 18.x
- **TypeScript**: 3.0+
- **浏览器**: 现代浏览器，IE11+

## 📦 安装

### npm
```bash
npm install @baifendian/adhere-util-reactutil --save
```

### yarn
```bash
yarn add @baifendian/adhere-util-reactutil
```

### pnpm
```bash
pnpm add @baifendian/adhere-util-reactutil
```

## 🚀 快速开始

### 基础使用

```tsx
import React from 'react';
import reactUtil from '@baifendian/adhere-util-reactutil';

const MyComponent = () => {
  const items = ['苹果', '香蕉', '橙子'];
  
  // 使用keyMap自动生成key
  const elements = reactUtil.keyMap(items, (item, index) => (
    <div>{item}</div>
  ));
  
  return <div>{elements}</div>;
};
```

### 处理复杂数据

```tsx
import React from 'react';
import reactUtil from '@baifendian/adhere-util-reactutil';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = ({ users }: { users: User[] }) => {
  const userElements = reactUtil.keyMap(users, (user) => (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  ));
  
  return <div className="user-list">{userElements}</div>;
};
```

## 📚 API 文档

### `keyMap<T>(arr: T[], handler: (item: T, index: number) => ReactElement): ReactElement[]`

为数组元素生成带有唯一key的React元素数组。

#### 参数

- `arr: T[]` - 要处理的数组
- `handler: (item: T, index: number) => ReactElement` - 处理函数，接收数组元素和索引，返回React元素

#### 返回值

- `ReactElement[]` - 带有唯一key的React元素数组

#### 示例

```tsx
import reactUtil from '@baifendian/adhere-util-reactutil';

// 基础用法
const fruits = ['苹果', '香蕉', '橙子'];
const fruitElements = reactUtil.keyMap(fruits, (fruit, index) => (
  <li key={`fruit-${index}`}>{fruit}</li>
));

// 处理对象数组
const users = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' },
  { id: 3, name: '王五' }
];

const userElements = reactUtil.keyMap(users, (user) => (
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>ID: {user.id}</p>
  </div>
));
```

### `fillKey(elements: ReactElement[]): ReactElement[]`

为React元素数组填充唯一的key属性。

#### 参数

- `elements: ReactElement[]` - React元素数组

#### 返回值

- `ReactElement[]` - 所有元素都带有唯一key的React元素数组

#### 示例

```tsx
import reactUtil from '@baifendian/adhere-util-reactutil';

// 处理已有的React元素数组
const elements = [
  <div>第一个元素</div>,
  <div key="existing-key">第二个元素</div>,
  <div>第三个元素</div>
];

const elementsWithKeys = reactUtil.fillKey(elements);
// 结果：所有元素都会有唯一的key
```

## 🎯 使用场景

### 1. 列表渲染

```tsx
const TodoList = ({ todos }) => {
  const todoElements = reactUtil.keyMap(todos, (todo) => (
    <TodoItem 
      key={todo.id} // 如果todo有id，会使用id作为key
      todo={todo}
    />
  ));
  
  return <ul>{todoElements}</ul>;
};
```

### 2. 动态表单

```tsx
const DynamicForm = ({ fields }) => {
  const fieldElements = reactUtil.keyMap(fields, (field, index) => (
    <FormField
      key={field.name} // 如果field有name，会使用name作为key
      field={field}
      index={index}
    />
  ));
  
  return <form>{fieldElements}</form>;
};
```

### 3. 条件渲染

```tsx
const ConditionalList = ({ items, showItems }) => {
  if (!showItems) return null;
  
  const itemElements = reactUtil.keyMap(items, (item) => (
    <ItemComponent item={item} />
  ));
  
  return <div>{itemElements}</div>;
};
```

## 🔧 最佳实践

### 1. 选择合适的key

```tsx
// ✅ 推荐：使用稳定的唯一标识符
const userElements = reactUtil.keyMap(users, (user) => (
  <UserCard key={user.id} user={user} />
));

// ✅ 推荐：使用有意义的字符串
const menuElements = reactUtil.keyMap(menuItems, (item) => (
  <MenuItem key={item.path} item={item} />
));

// ⚠️ 注意：避免使用索引作为key（除非列表是静态的）
const staticElements = reactUtil.keyMap(staticItems, (item, index) => (
  <StaticItem key={index} item={item} />
));
```

### 2. 错误处理

```tsx
const SafeList = ({ items }) => {
  // reactUtil会自动处理无效的数组
  const elements = reactUtil.keyMap(items, (item) => {
    if (!item) {
      return <div>无效项目</div>;
    }
    return <ItemComponent item={item} />;
  });
  
  return <div>{elements}</div>;
};
```

### 3. 性能优化

```tsx
const OptimizedList = ({ items }) => {
  // 使用React.memo优化子组件
  const MemoizedItem = React.memo(({ item }) => (
    <ItemComponent item={item} />
  ));
  
  const elements = reactUtil.keyMap(items, (item) => (
    <MemoizedItem key={item.id} item={item} />
  ));
  
  return <div>{elements}</div>;
};
```

## 🛠️ 开发

### 本地开发

```bash
# 克隆项目
git clone <repository-url>

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 运行测试
npm test
```

### 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

- 📧 邮箱: [your-email@example.com]
- 🐛 问题反馈: [GitHub Issues](https://github.com/your-org/adhere/issues)
- 📖 文档: [在线文档](https://playerljc.github.io/adhere/index.html#/adhere/adhere/util/reactutil)

## 🔗 相关链接

- [React 官方文档](https://react.dev/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [Adhere 组件库](https://github.com/your-org/adhere)
