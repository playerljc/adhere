# Adhere UI Success Prompt

一个优化的成功提示组件，提供对话框和消息提示功能。

## 功能特性

- ✅ **类型安全**: 完整的 TypeScript 类型定义
- ✅ **国际化支持**: 内置国际化文本
- ✅ **自动关闭**: 支持定时自动关闭对话框
- ✅ **多种API**: 提供函数式和对象式两种调用方式
- ✅ **内存管理**: 自动清理定时器，防止内存泄漏
- ✅ **详细文档**: 完整的 JSDoc 文档和使用示例

## 安装

```bash
npm install @baifendian/adhere-ui-prompt-successprompt
```

## 使用方法

### 基本用法

```typescript
import SuccessPrompt from '@baifendian/adhere-ui-prompt-successprompt';

// 显示成功对话框
SuccessPrompt.openSuccessDialog();

// 显示成功消息
SuccessPrompt.openSuccessMessage('操作成功');
```

### 高级用法

```typescript
import { 
  openSuccessDialog, 
  openSuccessMessage,
  openSuccessMessageWithParams 
} from '@baifendian/adhere-ui-prompt-successprompt';

// 自定义对话框配置
const dialogResult = openSuccessDialog({
  duration: 5000,
  title: '操作成功',
  content: '数据已保存到服务器',
  mask: true,
  maskClosable: false,
});

// 手动关闭对话框
dialogResult.destroy();

// 自定义消息配置
openSuccessMessage('保存成功', 3000, () => {
  console.log('消息已关闭');
});

// 使用对象参数（推荐）
openSuccessMessageWithParams({
  content: '操作完成',
  duration: 2000,
  onClose: () => {
    console.log('消息关闭回调');
  },
});
```

### 在 React 组件中使用

```typescript
import React, { useEffect } from 'react';
import { openSuccessDialog, clearSuccessDialogTimer } from '@baifendian/adhere-ui-prompt-successprompt';

const MyComponent: React.FC = () => {
  const handleSuccess = () => {
    openSuccessDialog({
      duration: 3000,
      content: '数据提交成功！',
    });
  };

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      clearSuccessDialogTimer();
    };
  }, []);

  return (
    <button onClick={handleSuccess}>
      提交数据
    </button>
  );
};
```

## API 文档

### openSuccessDialog

显示成功对话框。

**参数:**
- `props` (SuccessDialogProps): 对话框配置
  - `duration?` (number): 自动关闭时间（毫秒），默认3000ms
  - `title?` (string): 对话框标题，默认国际化文本
  - `content?` (ReactNode): 对话框内容，默认国际化文本
  - `mask?` (boolean): 是否显示遮罩，默认false
  - `maskClosable?` (boolean): 点击遮罩是否可关闭，默认true
  - `footer?` (ReactNode): 底部按钮，默认null

**返回值:**
- ModalFunc 返回结果，包含 `destroy()` 等方法

### openSuccessMessage

显示成功消息提示。

**参数:**
- `content?` (JointContent): 消息内容，可选
- `duration?` (Duration): 显示持续时间，可选
- `onClose?` (VoidFunction): 关闭回调函数，可选

### openSuccessMessageWithParams

使用对象参数显示成功消息（推荐）。

**参数:**
- `params` (SuccessMessageParams): 消息参数对象
  - `content?` (JointContent): 消息内容
  - `duration?` (Duration): 显示持续时间
  - `onClose?` (VoidFunction): 关闭回调函数

### clearSuccessDialogTimer

手动清理全局定时器。

**使用场景:**
- 组件卸载时清理
- 需要立即关闭对话框时

## 类型定义

```typescript
// 持续时间类型
type Duration = number | VoidFunction;

// 联合内容类型
type JointContent = ReactNode | ArgsProps;

// 成功对话框属性
interface SuccessDialogProps extends ModalFuncProps {
  duration?: Duration;
}

// 成功消息参数
interface SuccessMessageParams {
  content?: JointContent;
  duration?: Duration;
  onClose?: VoidFunction;
}
```

## 优化内容

### 1. TypeScript 类型优化
- 添加了完整的类型定义和注释
- 改进了类型安全性
- 新增了 `SuccessMessageParams` 接口

### 2. JSDoc 文档完善
- 为所有函数添加了详细的 JSDoc 文档
- 包含了参数说明、返回值说明和使用示例
- 添加了中文注释，便于理解

### 3. 代码结构优化
- 提取了默认配置常量
- 改进了定时器管理逻辑
- 添加了内存泄漏防护
- 优化了参数处理逻辑

### 4. 功能增强
- 新增了 `openSuccessMessageWithParams` 函数
- 新增了 `clearSuccessDialogTimer` 工具函数
- 改进了错误处理和边界情况处理

### 5. 导出优化
- 支持默认导出和命名导出
- 导出所有相关类型定义
- 提供了更好的模块化支持

## 注意事项

1. **定时器管理**: 组件会自动管理定时器，但在组件卸载时建议手动调用 `clearSuccessDialogTimer()`
2. **国际化**: 默认使用 `@baifendian/adhere-util-intl` 进行国际化
3. **依赖**: 需要安装 `antd` 和 `react` 作为依赖

## 更新日志

### v2.0.0
- 完整的 TypeScript 类型支持
- 详细的 JSDoc 文档
- 新增对象参数 API
- 改进的定时器管理
- 内存泄漏防护


