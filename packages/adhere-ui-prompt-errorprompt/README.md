# @baifendian/adhere-ui-prompt-errorprompt

错误提示组件，提供统一的错误对话框和错误消息提示功能。

## 功能特性

- 🚀 **错误对话框**: 支持自动关闭的模态对话框
- 📱 **错误消息**: 轻量级的消息提示
- 🌍 **国际化支持**: 内置国际化文本
- ⚡ **TypeScript**: 完整的类型定义支持
- 🎯 **灵活配置**: 支持自定义标题、内容、持续时间等

## 安装

```bash
npm install @baifendian/adhere-ui-prompt-errorprompt
# 或
yarn add @baifendian/adhere-ui-prompt-errorprompt
```

## 使用方法

### 基本用法

```typescript
import ErrorPrompt from '@baifendian/adhere-ui-prompt-errorprompt';

// 显示错误对话框
ErrorPrompt.openErrorDialog();

// 显示错误消息
ErrorPrompt.openErrorMessage();
```

### 按需导入

```typescript
import { openErrorDialog, openErrorMessage } from '@baifendian/adhere-ui-prompt-errorprompt';

// 使用错误对话框
openErrorDialog();

// 使用错误消息
openErrorMessage('操作失败，请重试');
```

## API 文档

### openErrorDialog

显示错误对话框，支持自动关闭功能。

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| props | `ErrorDialogProps` | - | 对话框配置属性 |
| props.duration | `number \| VoidFunction` | `3000` | 自动关闭持续时间（毫秒），0表示不自动关闭 |
| props.title | `ReactNode` | `Intl.get('hint')` | 对话框标题 |
| props.content | `ReactNode` | `Intl.get('system_exception')` | 对话框内容 |
| props.mask | `boolean` | `false` | 是否显示遮罩 |
| props.maskClosable | `boolean` | `true` | 点击遮罩是否可关闭 |
| props.footer | `ReactNode` | `null` | 对话框底部，null表示不显示底部按钮 |

#### 返回值

返回 `ModalFunc` 的返回结果，包含 `destroy()` 等方法。

#### 示例

```typescript
// 基本用法
const result = openErrorDialog();

// 自定义配置
const result = openErrorDialog({
  duration: 5000,
  title: '错误提示',
  content: '网络连接失败，请检查网络设置'
});

// 手动关闭
result.destroy();
```

### openErrorMessage

显示错误消息提示。

#### 参数

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| content | `JointContent` | `Intl.get('system_exception')` | 错误消息内容 |
| duration | `number \| VoidFunction` | - | 消息显示持续时间（毫秒） |
| onClose | `VoidFunction` | - | 消息关闭时的回调函数 |

#### 示例

```typescript
// 基本用法
openErrorMessage();

// 自定义消息
openErrorMessage('操作失败，请重试');

// 自定义持续时间和回调
openErrorMessage(
  '网络连接失败',
  5000,
  () => console.log('消息已关闭')
);
```

## 类型定义

### ErrorDialogProps

```typescript
interface ErrorDialogProps extends ModalFuncProps {
  /** 对话框自动关闭的持续时间（毫秒），0表示不自动关闭 */
  duration?: Duration;
}
```

### Duration

```typescript
type Duration = number | VoidFunction;
```

### JointContent

```typescript
type JointContent = ConfigContent | ArgsProps;
```

## 国际化

组件内置了国际化支持，默认使用以下键值：

- `hint`: 提示标题
- `system_exception`: 系统异常提示

## 注意事项

1. 错误对话框支持自动关闭，可以通过 `duration` 参数控制关闭时间
2. 当设置新的错误对话框时，会自动清除之前的自动关闭定时器
3. 错误消息使用 antd 的 message 组件，支持所有 message 的配置选项
4. 组件依赖 `@baifendian/adhere-util-intl` 进行国际化处理

## 更新日志

### 2.11.0

- ✨ 新增完整的 TypeScript 类型定义
- 📝 添加详细的 JSDoc 文档
- 🔧 优化代码结构和错误处理
- 🌍 改进国际化支持

