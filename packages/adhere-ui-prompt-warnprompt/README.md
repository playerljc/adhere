# @baifendian/adhere-ui-prompt-warnprompt

警告提示组件，提供警告对话框和警告消息功能。

## 功能特性

- 🚨 警告对话框：支持自动关闭和手动关闭
- 💬 警告消息：在页面顶部显示警告提示
- ⏰ 自动关闭：可配置显示持续时间
- 🎯 类型安全：完整的TypeScript类型支持
- 🌍 国际化：支持多语言提示文本
- 🧹 内存管理：提供定时器清理功能

## 安装

```bash
npm install @baifendian/adhere-ui-prompt-warnprompt
```

## 使用方法

### 基本导入

```tsx
import { openWarnDialog, openWarnMessage, clearWarnDialogTimer } from '@baifendian/adhere-ui-prompt-warnprompt';
```

### 警告对话框

#### 基本用法

```tsx
// 显示一个3秒后自动关闭的警告对话框
openWarnDialog({
  content: '这是一个警告信息',
  duration: 3000
});
```

#### 手动关闭

```tsx
// 获取对话框实例，可以手动控制
const modal = openWarnDialog({
  content: '需要用户确认的警告',
  duration: 0 // 不自动关闭
});

// 手动关闭
modal.destroy();
```

#### 自定义配置

```tsx
openWarnDialog({
  title: '自定义标题',
  content: '自定义内容',
  duration: 5000,
  mask: true,
  maskClosable: false,
  onOk: () => console.log('用户点击确认'),
  onCancel: () => console.log('用户点击取消')
});
```

### 警告消息

#### 基本用法

```tsx
// 显示警告消息
openWarnMessage('操作失败，请重试');
```

#### 自定义持续时间

```tsx
// 显示5秒的警告消息
openWarnMessage('数据保存成功', 5000);
```

#### 带关闭回调

```tsx
openWarnMessage('网络连接异常', 3000, () => {
  console.log('警告消息已关闭');
});
```

#### 使用配置对象

```tsx
import { WarningOutlined } from '@ant-design/icons';

openWarnMessage({
  content: '复杂的警告信息',
  duration: 4000,
  icon: <WarningOutlined />
});
```

### 定时器管理

在React组件中使用时，建议在组件卸载时清理定时器：

```tsx
import { useEffect } from 'react';
import { clearWarnDialogTimer } from '@baifendian/adhere-ui-prompt-warnprompt';

function MyComponent() {
  useEffect(() => {
    return () => {
      // 组件卸载时清理定时器
      clearWarnDialogTimer();
    };
  }, []);

  return <div>组件内容</div>;
}
```

## API 文档

### openWarnDialog

打开警告对话框。

**参数：**

- `props` (WarnDialogProps) - 对话框配置属性
  - `duration` (number | VoidFunction, 可选) - 自动关闭持续时间（毫秒），默认3000ms
  - `title` (string, 可选) - 对话框标题，默认使用国际化提示文本
  - `mask` (boolean, 可选) - 是否显示遮罩，默认false
  - `maskClosable` (boolean, 可选) - 点击遮罩是否可关闭，默认true
  - `footer` (ReactNode, 可选) - 对话框底部，默认null
  - `content` (ReactNode) - 对话框内容
  - `onOk` (VoidFunction, 可选) - 确认回调函数
  - `onCancel` (VoidFunction, 可选) - 取消回调函数

**返回值：**

返回ModalFunc的返回值，包含`destroy()`等方法。

### openWarnMessage

显示警告消息。

**参数：**

- `content` (JointContent, 可选) - 消息内容
- `duration` (Duration, 可选) - 显示持续时间
- `onClose` (VoidFunction, 可选) - 关闭回调函数

**返回值：**

void

### clearWarnDialogTimer

清理所有警告对话框的自动关闭定时器。

**参数：**

无

**返回值：**

void

## 类型定义

```tsx
// 配置内容类型
type ConfigContent = ReactNode;

// 持续时间类型
type Duration = number | VoidFunction;

// 联合内容类型
type JointContent = ConfigContent | ArgsProps;

// 警告对话框属性
interface WarnDialogProps extends ModalFuncProps {
  duration?: Duration;
}

// 警告对话框函数类型
interface WarnDialog {
  (props: WarnDialogProps): ReturnType<ModalFunc>;
}

// 警告消息函数类型
interface WarnMessage {
  (content?: JointContent, duration?: Duration, onClose?: VoidFunction): void;
}
```

## 注意事项

1. **定时器管理**：建议在组件卸载时调用`clearWarnDialogTimer()`清理定时器
2. **国际化**：对话框标题默认使用`Intl.get('hint')`，确保已正确配置国际化
3. **类型安全**：所有函数都有完整的TypeScript类型支持
4. **性能优化**：自动关闭功能使用全局定时器管理，避免内存泄漏

## 示例

完整的使用示例请参考项目中的测试文件或示例代码。



