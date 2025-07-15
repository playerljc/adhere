# Adhere UI Comment

一个功能完整的评论组件库，支持评论列表展示、回复功能、分页加载、表情选择等。

## 特性

- 🚀 **完整的评论功能** - 支持评论列表、回复、分页加载
- 🎨 **高度可定制** - 提供丰富的渲染函数来自定义UI
- 📱 **响应式设计** - 适配各种屏幕尺寸
- 🌍 **国际化支持** - 内置多语言支持
- 😊 **表情选择器** - 集成emoji-mart表情选择器
- ⚡ **性能优化** - 使用React.memo和useCallback优化性能
- 📝 **TypeScript支持** - 完整的类型定义和JSDoc文档

## 安装

```bash
npm install @baifendian/adhere-ui-comment
```

## 基础用法

```tsx
import React from 'react';
import Comment from '@baifendian/adhere-ui-comment';

const App = () => {
  // 获取评论数据
  const fetchCommentData = async (params) => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    return response.json();
  };

  // 获取回复数据
  const fetchReplyData = async (params) => {
    const response = await fetch('/api/replies', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    return response.json();
  };

  // 提交回复
  const fetchReply = async (params) => {
    const response = await fetch('/api/reply', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    return response.json();
  };

  return (
    <Comment
      fetchCommentData={fetchCommentData}
      fetchReplyData={fetchReplyData}
      fetchReply={fetchReply}
      renderCommentAuthor={(data) => <span>{data.author}</span>}
      renderCommentAvatar={(data) => <img src={data.avatar} alt="avatar" />}
      renderCommentContent={(data) => <p>{data.content}</p>}
      renderCommentDateTime={(data) => <span>{data.datetime}</span>}
      renderReplyAuthor={(data) => <span>{data.author}</span>}
      renderReplyAvatar={(data) => <img src={data.avatar} alt="avatar" />}
      renderReplyContent={(data) => <p>{data.content}</p>}
      renderReplyDateTime={(data) => <span>{data.datetime}</span>}
    />
  );
};
```

## API

### CommentProps

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
| fetchCommentData | (params: FetchCommentParams) => Promise<CommentListData> | - | 获取评论数据的函数 |
| commentDataKeys | DataKeys | 默认键名配置 | 评论数据键名配置 |
| commentLimit | number | 10 | 评论每页数量限制 |
| commentKeyProp | string | 'id' | 评论唯一标识属性名 |
| fetchReplyData | (params: FetchReplyParams) => Promise<CommentListData> | - | 获取回复数据的函数 |
| replyDataKeys | DataKeys | 默认键名配置 | 回复数据键名配置 |
| replyLimit | number | 10 | 回复每页数量限制 |
| replyKeyProp | string | 'id' | 回复唯一标识属性名 |
| fetchReply | (params: SubmitReplyParams) => Promise<any> | - | 提交回复的函数 |
| isMoreProp | string | 'isMore' | 是否有更多回复的属性名 |
| local | Local | 'zh' | 语言设置 |
| emojiPickerProps | EmojiPickerProps | {} | 表情选择器属性 |

### 渲染函数

组件提供了多个渲染函数来自定义UI：

- `renderCommentAuthor` - 渲染评论作者
- `renderCommentAvatar` - 渲染评论头像
- `renderCommentContent` - 渲染评论内容
- `renderCommentDateTime` - 渲染评论时间
- `renderCommentActions` - 渲染评论操作按钮
- `renderCommentLoading` - 渲染评论加载状态
- `renderReplyAuthor` - 渲染回复作者
- `renderReplyAvatar` - 渲染回复头像
- `renderReplyContent` - 渲染回复内容
- `renderReplyDateTime` - 渲染回复时间
- `renderReplyActions` - 渲染回复操作按钮
- `renderReplyLoading` - 渲染回复加载状态
- `renderEmpty` - 渲染空状态
- `renderFirstLoading` - 渲染首次加载状态

### 数据格式

#### CommentDataItem

```typescript
interface CommentDataItem {
  id: string;           // 唯一标识
  author?: string;      // 作者信息
  avatar?: string;      // 头像
  content?: string;     // 内容
  datetime?: string;    // 时间
  isMore?: boolean;     // 是否有更多回复
  [key: string]: any;   // 其他属性
}
```

#### CommentListData

```typescript
interface CommentListData {
  current: number;      // 当前页码
  totalPage: number;    // 总页数
  list: CommentDataItem[]; // 评论列表
  totalCount: number;   // 总数量
}
```

## 高级用法

### 自定义操作按钮

```tsx
<Comment
  renderCommentActions={(data, updateData) => [
    <button key="like" onClick={() => handleLike(data.id)}>
      点赞 ({data.likes})
    </button>,
    <button key="share" onClick={() => handleShare(data.id)}>
      分享
    </button>,
  ]}
  // ... 其他属性
/>
```

### 自定义空状态

```tsx
<Comment
  renderEmpty={() => (
    <div className="custom-empty">
      <img src="/empty-icon.png" alt="empty" />
      <p>暂无评论，快来发表第一条评论吧！</p>
    </div>
  )}
  // ... 其他属性
/>
```

### 自定义加载状态

```tsx
<Comment
  renderFirstLoading={() => (
    <div className="custom-loading">
      <div className="loading-spinner" />
      <p>正在加载评论...</p>
    </div>
  )}
  // ... 其他属性
/>
```

### 国际化

```tsx
<Comment
  local="en"
  showReplyText="Show replies"
  hideReplyText="Hide replies"
  loadMoreReplyText="Load more replies"
  // ... 其他属性
/>
```

### 表情选择器配置

```tsx
<Comment
  emojiPickerProps={{
    theme: 'light',
    set: 'native',
    showPreview: false,
    showSkinTones: true,
  }}
  // ... 其他属性
/>
```

## 组件结构

```
Comment/
├── Comment/           # 主评论组件
│   ├── index.tsx     # 评论组件入口
│   ├── Info/         # 评论信息组件
│   ├── List/         # 评论列表组件
│   └── ListStandard/ # 列表标准组件
├── Reply/            # 回复相关组件
│   ├── Info/         # 回复信息组件
│   └── Submit/       # 回复提交组件
├── Components/       # 通用组件
│   └── Node/         # 节点组件（评论/回复）
└── types.ts          # 类型定义
```

## 开发

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 测试

```bash
npm run test
```

## 更新日志

### v2.0.0

- ✨ 完整的TypeScript类型支持
- 📝 详细的JSDoc文档
- 🚀 性能优化和代码重构
- 🎨 改进的组件结构和API设计
- 🌍 更好的国际化支持
- 😊 表情选择器集成

## 许可证

MIT License
